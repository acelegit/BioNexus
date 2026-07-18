


function originAllowed(origin, env) {
  if (!origin) return true;
  try {
    var host = new URL(origin).hostname;
  } catch (e) {
    return false;
  }
  if (host === "localhost" || host === "127.0.0.1") return true;
  if (host === "bionexus.pages.dev" || host.endsWith(".pages.dev")) return true;
  var extra = (env.ALLOWED_ORIGINS || "")
    .split(",")
    .map(function (s) {
      return s.trim().toLowerCase();
    })
    .filter(Boolean);
  if (extra.indexOf(origin.toLowerCase()) >= 0 || extra.indexOf(host) >= 0) return true;
  return false;
}

function corsHeaders(origin, env) {
  var h = {
    Vary: "Origin",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Max-Age": "86400",
  };

  if (origin && originAllowed(origin, env)) h["Access-Control-Allow-Origin"] = origin;
  return h;
}


export async function onRequestOptions(context) {
  const origin = context.request.headers.get("Origin");
  return new Response(null, { status: 204, headers: corsHeaders(origin, context.env) });
}

export async function onRequestPost(context) {
  const { request, env } = context;
  const origin = request.headers.get("Origin");
  const cors = corsHeaders(origin, env);


  if (origin && !originAllowed(origin, env)) {
    return json({ error: { message: "Origine neautorizată." } }, 403, cors);
  }

  const key = env.VOIDAI_API_KEY;
  const baseUrl = (env.VOIDAI_BASE_URL || "https://api.voidai.app/v1").replace(/\/+$/, "");
  const model = env.VOIDAI_MODEL || "gpt-5.4-mini";

  if (!key) {
    return json({ error: { message: "VOIDAI_API_KEY nu este configurată pe server." } }, 500, cors);
  }

  let payload;
  try {
    payload = await request.json();
  } catch (e) {
    return json({ error: { message: "Corp de cerere invalid (JSON)." } }, 400, cors);
  }


  if (env.TURNSTILE_SECRET) {
    const token = payload.turnstileToken || request.headers.get("cf-turnstile-response");
    const ok = await verifyTurnstile(token, request, env.TURNSTILE_SECRET);
    if (!ok) return json({ error: { message: "Verificare anti-bot eșuată." } }, 403, cors);
  }


  if (env.REQUIRE_AUTH === "1") {
    const auth = request.headers.get("Authorization") || "";
    if (!/^Bearer\s+.+/.test(auth)) {
      return json({ error: { message: "Autentificare necesară." } }, 401, cors);
    }
  }

  const messages = Array.isArray(payload.messages) ? payload.messages.slice(-24) : [];
  if (!messages.length) {
    return json({ error: { message: "Lipsesc mesajele." } }, 400, cors);
  }

  const body = {
    model: model,
    stream: payload.stream !== false,
    temperature: typeof payload.temperature === "number" ? payload.temperature : 0.6,
    max_tokens: Math.min(Number(payload.max_tokens) || 900, 1200),
    messages: messages,
  };

  let upstream;
  try {
    upstream = await fetch(baseUrl + "/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: "Bearer " + key },
      body: JSON.stringify(body),
    });
  } catch (e) {
    return json({ error: { message: "Serverul AI nu răspunde." } }, 502, cors);
  }


  const headers = {
    "Content-Type": upstream.headers.get("Content-Type") || "text/event-stream",
    "Cache-Control": "no-cache",
  };
  for (const k in cors) headers[k] = cors[k];
  return new Response(upstream.body, { status: upstream.status, headers: headers });
}

async function verifyTurnstile(token, request, secret) {
  if (!token) return false;
  try {
    const form = new FormData();
    form.append("secret", secret);
    form.append("response", token);
    const ip = request.headers.get("CF-Connecting-IP");
    if (ip) form.append("remoteip", ip);
    const r = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: form,
    });
    const data = await r.json();
    return !!data.success;
  } catch (e) {
    return false;
  }
}

function json(obj, status, extra) {
  const headers = { "Content-Type": "application/json" };
  if (extra) for (const k in extra) headers[k] = extra[k];
  return new Response(JSON.stringify(obj), { status: status || 200, headers: headers });
}
