// Kiểm tra tổng thể web: cấu trúc, tài nguyên, ngân hàng câu hỏi, chất lượng đáp án
// Chạy: node tools/check.js
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const read = (p) => fs.readFileSync(path.join(ROOT, p), "utf8");
const html = read("index.html");
const js = read("assets/app.js");
const css = read("assets/style.css");

let errors = 0;
const fail = (m) => { console.error("  LỖI:", m); errors++; };
const warn = (m) => console.warn("  cảnh báo:", m);
const ok = (m) => console.log("  ok :", m);

console.log("[1] Cân bằng ngoặc tệp JS");
(function () {
  let bal = 0, inStr = null, esc = false, inLine = false, inBlock = false, inTpl = false;
  for (let i = 0; i < js.length; i++) {
    const c = js[i], n = js[i + 1];
    if (inLine) { if (c === "\n") inLine = false; continue; }
    if (inBlock) { if (c === "*" && n === "/") { inBlock = false; i++; } continue; }
    if (inTpl) { if (esc) { esc = false; continue; } if (c === "\\") { esc = true; continue; } if (c === "`") inTpl = false; continue; }
    if (inStr) { if (esc) { esc = false; continue; } if (c === "\\") { esc = true; continue; } if (c === inStr) inStr = null; continue; }
    if (c === "/" && n === "/") { inLine = true; i++; continue; }
    if (c === "/" && n === "*") { inBlock = true; i++; continue; }
    if (c === '"' || c === "'") { inStr = c; continue; }
    if (c === "`") { inTpl = true; continue; }
    if (c === "{") bal++;
    if (c === "}") bal--;
  }
  if (bal === 0) ok("ngoặc nhọn cân bằng"); else fail("ngoặc nhọn lệch " + bal);
})();

console.log("[2] Cân bằng ngoặc CSS");
(function () {
  let a = 0, b = 0;
  for (const c of css) { if (c === "{") a++; if (c === "}") b++; }
  if (a === b) ok(a + " khối CSS đóng mở đều"); else fail("CSS { = " + a + " nhưng } = " + b);
})();

console.log("[3] Mọi id được app.js dùng đều có trong index.html");
(function () {
  const re = /\$\("#([A-Za-z0-9_-]+)"/g;
  const ids = new Set();
  let m;
  while ((m = re.exec(js))) ids.add(m[1]);
  const missing = [...ids].filter((id) => !html.includes('id="' + id + '"'));
  if (!missing.length) ok(ids.size + " id đều tồn tại");
  else fail("thiếu id trong index.html: " + missing.join(", "));
})();

console.log("[4] data-view / view khớp nhau");
(function () {
  const views = [...html.matchAll(/data-view="([a-z]+)"/g)].map((m) => m[1]);
  const sections = [...html.matchAll(/id="([a-z]+)-view"/g)].map((m) => m[1]);
  const missing = views.filter((v) => !sections.includes(v));
  if (!missing.length) ok("view: " + views.join(", "));
  else fail("thiếu section cho view: " + missing.join(", "));
})();

console.log("[5] Tài nguyên bắt buộc");
(function () {
  const need = [
    "assets/style.css", "assets/app.js", "data/questions.js",
    "assets/pdfjs/pdf.min.js", "assets/pdfjs/pdf.worker.min.js",
    "giai-cau-hoi-chan-doan.html"
  ];
  const m = js.match(/const SLIDES = \[([\s\S]*?)\n  \];/);
  let slides = [];
  if (m) {
    try { slides = JSON.parse("[" + m[1].replace(/(\w+):/g, '"$1":').replace(/,\s*$/, "") + "]"); }
    catch (e) { fail("không đọc được danh sách SLIDES: " + e.message); }
  }
  if (!slides.length) fail("danh sách SLIDES rỗng");
  slides.forEach((s) => need.push(s.file));
  const missing = need.filter((p) => !fs.existsSync(path.join(ROOT, p)));
  if (!missing.length) ok(need.length + " tệp đều có (kể cả " + slides.length + " PDF)");
  else fail("thiếu tệp: " + missing.join(", "));
})();

console.log("[6] Ngân hàng câu hỏi");
(function () {
  const file = path.join(ROOT, "data/questions.js");
  delete require.cache[require.resolve(file)];
  const qs = require(file);
  const ids = new Set();
  const problems = [];
  qs.forEach((q, i) => {
    if (!q.id) problems.push("câu #" + i + " thiếu id");
    else if (ids.has(q.id)) problems.push(q.id + " trùng id");
    ids.add(q.id);
    if (!q.explanation || !String(q.explanation).trim()) problems.push(q.id + " thiếu explanation");
    if (!Array.isArray(q.options) || q.options.length !== 4) problems.push(q.id + " không đủ 4 phương án");
    else if (new Set(q.options).size !== 4) problems.push(q.id + " có phương án trùng chữ");
    if (q.type === "single" && q.correct.length !== 1) problems.push(q.id + " single sai số đáp án");
    if (q.type === "multiple" && q.correct.length < 2) problems.push(q.id + " multiple sai số đáp án");
  });

  // đáp án đúng quá dài so với nhiễu
  const long = qs.filter((q) => {
    if (q.type !== "single") return false;
    const ci = q.correct[0];
    const c = q.options[ci].length;
    const others = q.options.filter((_, i) => i !== ci).map((x) => x.length);
    return c > Math.max(...others) * 1.4 && c - Math.max(...others) > 25;
  });
  // trùng câu hỏi
  const norm = (s) => s.toLowerCase().replace(/\s+/g, " ").trim();
  const seen = new Map();
  qs.forEach((q) => { const k = norm(q.question); seen.set(k, (seen.get(k) || 0) + 1); });
  const dup = [...seen.entries()].filter(([, n]) => n > 1);

  const missingExp = qs.filter((q) => !q.explanation || !String(q.explanation).trim()).length;
  console.log("     tổng " + qs.length + " câu · thiếu giải thích " + missingExp +
    " · đáp án đúng dài bất thường " + long.length + " · câu trùng " + dup.length);
  if (long.length) console.log("     ví dụ dài bất thường:", long.slice(0, 10).map((q) => q.id).join(", "));
  if (dup.length) console.log("     ví dụ trùng:", dup.slice(0, 6).map(([k]) => k.slice(0, 50)).join(" | "));
  if (missingExp) warn(missingExp + " câu chưa có giải thích");
  if (problems.length) problems.slice(0, 10).forEach(fail);
  else ok("cấu trúc câu hỏi hợp lệ");
})();

console.log("");
if (errors) { console.error("Có " + errors + " lỗi."); process.exit(1); }
console.log("Không phát hiện lỗi.");
