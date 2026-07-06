
export async function onRequestPost(context) {
  const { request, env } = context;
  const key = env.VOIDAI_API_KEY;
  const baseUrl = (env.VOIDAI_BASE_URL || "https://api.voidai.app/v1").replace(/\/+$/, "");
  const model = env.VOIDAI_MODEL || "gpt-5.4-mini";

  if (!key) {
    return json({ error: { message: "VOIDAI_API_KEY nu este configurată pe server." } }, 500);
  }

  let payload;
  try {
    payload = await request.json();
  } catch (e) {
    return json({ error: { message: "Corp de cerere invalid (JSON)." } }, 400);
  }

  const messages = Array.isArray(payload.messages) ? payload.messages.slice(-24) : [];
  if (!messages.length) {
    return json({ error: { message: "Lipsesc mesajele." } }, 400);
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
    return json({ error: { message: "Serverul AI nu răspunde." } }, 502);
  }


  return new Response(upstream.body, {
    status: upstream.status,
    headers: {
      "Content-Type": upstream.headers.get("Content-Type") || "text/event-stream",
      "Cache-Control": "no-cache",
    },
  });
}

function json(obj, status) {
  return new Response(JSON.stringify(obj), {
    status: status || 200,
    headers: { "Content-Type": "application/json" },
  });
}
