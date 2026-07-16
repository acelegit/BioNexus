const http = require("http");
const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

const ROOT = path.resolve(__dirname, "..");
const MIME = { ".html": "text/html", ".js": "text/javascript", ".glb": "model/gltf-binary", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".png": "image/png", ".css": "text/css" };

const server = http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split("?")[0]);
  if (p === "/") p = "/index.html";
  const fp = path.join(ROOT, p);
  fs.readFile(fp, (err, data) => {
    if (err) { res.writeHead(404); res.end("nf"); return; }
    res.writeHead(200, { "Content-Type": MIME[path.extname(fp).toLowerCase()] || "application/octet-stream", "Access-Control-Allow-Origin": "*" });
    res.end(data);
  });
});

(async () => {
  await new Promise((r) => server.listen(0, r));
  const port = server.address().port;
  const args = process.argv.slice(2);
  const model = args[0] || "nervous.glb";
  const out = args[1] || "shot.png";
  const yaw = args[2] || "0";
  const zoom = args[3] || "1.35";
  const ty = args[4] || "0";

  const browser = await chromium.launch({
    headless: true,
    args: ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist", "--disable-web-security"],
  });
  const page = await browser.newPage({ viewport: { width: 780, height: 920 } });
  const errs = [];
  page.on("console", (m) => { if (m.type() === "error") errs.push(m.text()); });
  await page.goto(`http://localhost:${port}/_render/scene.html?model=${encodeURIComponent(model)}&yaw=${yaw}&zoom=${zoom}&ty=${ty}`);
  await page.waitForFunction(() => window.__done === true, { timeout: 30000 }).catch(() => {});
  const err = await page.evaluate(() => window.__error || null);
  if (err) console.log("LOAD ERROR:", err);
  if (errs.length) console.log("console errors:", errs.slice(0, 3).join(" | "));
  await page.locator("#c").screenshot({ path: path.resolve(__dirname, out) });
  console.log("wrote _render/" + out);
  await browser.close();
  server.close();
})();
