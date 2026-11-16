// Mở trang bằng Chrome DevTools Protocol để đọc console + lỗi mạng.
// Dùng: node tools/cdp.js <url> [thời gian chờ ms]
// Không cần cài package: dùng WebSocket có sẵn trong Node 22+.
const { spawn } = require("child_process");
const fs = require("fs");
const os = require("os");
const path = require("path");

const URL_ARG = process.argv[2] || "http://localhost:48173/";
const WAIT = parseInt(process.argv[3] || "6000", 10);

const EDGE_CANDIDATES = [
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"
];
const exe = EDGE_CANDIDATES.find((p) => fs.existsSync(p));
if (!exe) { console.error("Không tìm thấy trình duyệt Chromium."); process.exit(1); }

const profile = path.join(os.tmpdir(), "cdp-profile-" + Date.now());
const port = 9223 + Math.floor(Math.random() * 300);

const child = spawn(exe, [
  "--headless=new", "--disable-gpu", "--no-first-run", "--no-default-browser-check",
  "--remote-debugging-port=" + port,
  "--user-data-dir=" + profile,
  "--window-size=1280,900",
  "about:blank"
], { stdio: "ignore" });

function sleep(ms) { return new Promise((r) => setTimeout(r, ms)); }

async function getJson(p) {
  const res = await fetch("http://127.0.0.1:" + port + p);
  return res.json();
}

(async () => {
  let target = null;
  for (let i = 0; i < 60; i++) {
    try {
      const list = await getJson("/json/list");
      target = list.find((t) => t.type === "page");
      if (target) break;
    } catch (e) { /* chờ trình duyệt khởi động */ }
    await sleep(200);
  }
  if (!target) { console.error("Không kết nối được CDP."); child.kill(); process.exit(1); }

  const ws = new WebSocket(target.webSocketDebuggerUrl);
  let id = 0;
  const pending = new Map();
  const logs = [];
  const netFail = [];

  function send(method, params) {
    return new Promise((resolve) => {
      const mid = ++id;
      pending.set(mid, resolve);
      ws.send(JSON.stringify({ id: mid, method, params: params || {} }));
    });
  }

  ws.onmessage = (ev) => {
    const msg = JSON.parse(ev.data);
    if (msg.id && pending.has(msg.id)) { pending.get(msg.id)(msg.result); pending.delete(msg.id); return; }
    if (msg.method === "Runtime.consoleAPICalled") {
      const text = (msg.params.args || []).map((a) => a.value !== undefined ? a.value : (a.description || a.type)).join(" ");
      logs.push("[" + msg.params.type + "] " + text);
    }
    if (msg.method === "Runtime.exceptionThrown") {
      const d = msg.params.exceptionDetails;
      logs.push("[EXCEPTION] " + (d.exception && d.exception.description ? d.exception.description : d.text));
    }
    if (msg.method === "Log.entryAdded") {
      logs.push("[log:" + msg.params.entry.level + "] " + msg.params.entry.text);
    }
    if (msg.method === "Network.loadingFailed") {
      netFail.push(msg.params.errorText + " (" + (msg.params.type || "") + ")");
    }
    if (msg.method === "Network.responseReceived") {
      const r = msg.params.response;
      if (r.status >= 400) netFail.push("HTTP " + r.status + " " + r.url);
    }
  };

  await new Promise((r) => { ws.onopen = r; });
  await send("Runtime.enable");
  await send("Log.enable");
  await send("Network.enable");
  await send("Page.enable");

  // Tùy chọn giả lập màn hình điện thoại: node tools/cdp.js <url> <wait> <probe> <shot> <w>x<h>
  const vp = process.argv[6];
  if (vp && /^\d+x\d+$/.test(vp)) {
    const [w, h] = vp.split("x").map(Number);
    await send("Emulation.setDeviceMetricsOverride", {
      width: w, height: h, deviceScaleFactor: 2, mobile: true
    });
    await send("Emulation.setTouchEmulationEnabled", { enabled: true, maxTouchPoints: 5 });
  }

  await send("Page.navigate", { url: URL_ARG });
  await sleep(WAIT);

  // Đọc trạng thái phần tử quan trọng nếu có
  const probe = process.argv[4];
  if (probe) {
    const r = await send("Runtime.evaluate", { expression: probe, returnByValue: true, awaitPromise: true });
    console.log("\n=== EVALUATE ===");
    console.log(JSON.stringify(r.result ? r.result.value : r, null, 1));
  }

  // Chụp ảnh nếu có tham số thứ 5
  const shot = process.argv[5];
  if (shot) {
    const cap = await send("Page.captureScreenshot", { format: "png", captureBeyondViewport: false });
    if (cap && cap.data) {
      fs.writeFileSync(shot, Buffer.from(cap.data, "base64"));
      console.log("\nẢnh đã lưu: " + shot);
    }
  }

  console.log("\n=== CONSOLE (" + logs.length + ") ===");
  logs.forEach((l) => console.log(l));
  console.log("\n=== LỖI MẠNG (" + netFail.length + ") ===");
  netFail.forEach((l) => console.log(l));

  ws.close();
  child.kill();
  try { fs.rmSync(profile, { recursive: true, force: true }); } catch (e) { /* bỏ qua */ }
  process.exit(0);
})();
