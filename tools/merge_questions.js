// ============================================================================
// Gộp bank/ + patches/ -> data/questions.js (tệp duy nhất web cần)
// Chạy từ thư mục gốc:  node tools/merge_questions.js
//
//   bank/     câu hỏi gốc (soạn tay)
//   patches/  bản vá: giải thích + chỉnh lại đáp án nhiễu, áp theo id
//   data/questions.js  TỰ SINH - không sửa tay
// ============================================================================
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const BANK_DIR = path.join(ROOT, "bank");
const PATCH_DIR = path.join(ROOT, "patches");
const OUT_FILE = path.join(ROOT, "data", "questions.js");
const CHAPTERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Câu trùng lặp đã rà soát: giữ lại một bản, bỏ bản còn lại.
const DUPLICATES = [
  ["c1-q81", "c1-q32"], ["c1-q83", "c1-q33"], ["c1-q89", "c1-q40"], ["c1-q92", "c1-q44"],
  ["b-c2-q9", "c2-q38"], ["b-c2-q12", "c2-q54"], ["b-c3-q22", "c3-q102"],
  ["b-c4-q20", "c4-q77"], ["b-c4-q21", "c4-q78"], ["b-c7-q16", "c7-q70"],
  ["b-c1-q10", "c1-q86"], ["b-c2-q14", "c2-q59"], ["b-c8-q3", "c8-q11"],
  ["b-c4-q6", "c4-q18"], ["c7-q109", "b-c7-q28"], ["c9-q109", "b-c9-q19"],
  ["c7-q40", "b-c7-q9"]
];
const DROP = new Set(DUPLICATES.map((p) => p[0]));
const MERGE_INTO = new Map(DUPLICATES.map((p) => [p[1], p[0]]));

// Thứ tự gộp: bộ 1 (c1..c9) -> bộ 2 -> bổ sung
const files = fs.readdirSync(BANK_DIR).filter((f) => f.endsWith(".js")).sort((a, b) => {
  const rank = (f) => {
    const m = f.match(/^questions_c(\d+)\.js$/);
    if (m) return parseInt(m[1], 10);
    if (f === "questions_bo2.js") return 100;
    if (f === "questions_moi.js") return 250;
    return 200;
  };
  return rank(a) - rank(b) || a.localeCompare(b);
});

// Xáo đáp án cố định theo id (mỗi lần build ra cùng kết quả)
function seededShuffleIndex(id, n) {
  let h = 2166136261;
  for (const ch of id) { h ^= ch.charCodeAt(0); h = Math.imul(h, 16777619); }
  const rand = () => { h ^= h << 13; h ^= h >>> 17; h ^= h << 5; return ((h >>> 0) % 100000) / 100000; };
  const idx = [...Array(n).keys()];
  for (let i = n - 1; i > 0; i--) { const j = Math.floor(rand() * (i + 1)); [idx[i], idx[j]] = [idx[j], idx[i]]; }
  return idx;
}
function shuffleOptions(q) {
  const order = seededShuffleIndex(q.id, q.options.length); // order[newPos] = oldPos
  const options = order.map((old) => q.options[old]);
  const correct = q.correct.map((c) => order.indexOf(c)).sort((a, b) => a - b);
  return { ...q, options, correct };
}

// ---------- GỘP ----------
let all = [];
const errors = [];
for (const f of files) {
  const arr = require(path.join(BANK_DIR, f));
  if (!Array.isArray(arr)) { errors.push(`${f}: không export ra mảng`); continue; }
  const needShuffle = f === "questions_bo2.js" || f === "questions_bosung.js";
  const source = /^questions_c\d+\.js$/.test(f) ? "bo1"
    : f === "questions_bo2.js" ? "bo2"
    : f === "questions_moi.js" ? "moi"
    : "bosung";
  console.log(`${f}: ${arr.length} câu`);
  all = all.concat(arr.map((q) => ({ ...(needShuffle ? shuffleOptions(q) : q), source })));
}
console.log("Tổng ban đầu:", all.length);

// ---------- BỎ CÂU TRÙNG ----------
// Giải thích của bản bị bỏ được chuyển sang bản giữ lại nếu bản giữ lại chưa có.
const byIdRaw = new Map(all.map((q) => [q.id, q]));
MERGE_INTO.forEach((fromId, toId) => {
  const from = byIdRaw.get(fromId), to = byIdRaw.get(toId);
  if (from && to && !to.explanation && from.explanation) to.explanation = from.explanation;
});
const dropped = all.filter((q) => DROP.has(q.id));
all = all.filter((q) => !DROP.has(q.id));
console.log("Bỏ câu trùng:", dropped.length, dropped.map((q) => q.id).join(", "));

// ---------- ÁP BẢN VÁ ----------
if (fs.existsSync(PATCH_DIR)) {
  const patchFiles = fs.readdirSync(PATCH_DIR).filter((f) => f.endsWith(".json"));
  let appliedExp = 0, appliedOpt = 0, patched = 0;
  for (const pf of patchFiles) {
    let data;
    try { data = JSON.parse(fs.readFileSync(path.join(PATCH_DIR, pf), "utf-8")); }
    catch (e) { errors.push(`${pf}: JSON lỗi - ${e.message}`); continue; }
    const items = Array.isArray(data) ? data : data.items;
    if (!Array.isArray(items)) { errors.push(`${pf}: thiếu mảng items`); continue; }
    for (const it of items) {
      if (!it || !it.id) { errors.push(`${pf}: có item thiếu id`); continue; }
      const q = byIdRaw.get(it.id);
      if (!q) { errors.push(`${pf}: id không tồn tại - ${it.id}`); continue; }
      if (DROP.has(it.id)) { errors.push(`${pf}: vá vào câu đã bỏ - ${it.id}`); continue; }
      let touched = false;
      if (typeof it.explanation === "string" && it.explanation.trim()) {
        q.explanation = it.explanation.trim();
        appliedExp++;
        touched = true;
      }
      if (Array.isArray(it.options)) {
        if (it.options.length !== 4) { errors.push(`${it.id}: options phải 4 phương án`); continue; }
        if (it.options.some((o) => typeof o !== "string" || !o.trim())) { errors.push(`${it.id}: options có phương án rỗng`); continue; }
        if (new Set(it.options).size !== 4) { errors.push(`${it.id}: options có phương án trùng chữ`); continue; }
        q.options = it.options.slice();
        appliedOpt++;
        touched = true;
      }
      if (touched) patched++;
    }
  }
  console.log(`Bản vá: ${patchFiles.length} tệp · ${patched} câu · ${appliedExp} giải thích · ${appliedOpt} bộ đáp án`);
}

// ---------- VALIDATE ----------
const ids = new Set();
const longAnswer = [];
all.forEach((q, i) => {
  const tag = `[${q.id || "câu #" + i}]`;
  if (!q.id) errors.push(`${tag} thiếu id`);
  else if (ids.has(q.id)) errors.push(`${tag} id trùng lặp`);
  ids.add(q.id);
  if (!CHAPTERS.includes(q.chapter)) errors.push(`${tag} chapter sai: ${q.chapter}`);
  if (![1, 2, 3].includes(q.difficulty)) errors.push(`${tag} difficulty sai: ${q.difficulty}`);
  if (!["single", "multiple"].includes(q.type)) errors.push(`${tag} type sai: ${q.type}`);
  if (typeof q.question !== "string" || q.question.trim().length < 10) errors.push(`${tag} question không hợp lệ`);
  if (!Array.isArray(q.options) || q.options.length !== 4) errors.push(`${tag} options phải đúng 4 phương án`);
  else if (q.options.some((o) => typeof o !== "string" || !o.trim())) errors.push(`${tag} có option rỗng`);
  if (!Array.isArray(q.correct) || q.correct.length === 0) errors.push(`${tag} correct rỗng`);
  else {
    if (q.correct.some((c) => !Number.isInteger(c) || c < 0 || c > 3)) errors.push(`${tag} correct ngoài khoảng 0-3`);
    if (q.type === "single" && q.correct.length !== 1) errors.push(`${tag} single nhưng có ${q.correct.length} đáp án`);
    if (q.type === "multiple" && q.correct.length < 2) errors.push(`${tag} multiple nhưng chỉ có ${q.correct.length} đáp án`);
  }
  if (q.explanation !== undefined && typeof q.explanation !== "string") errors.push(`${tag} explanation phải là chuỗi`);
  // Không cho phép emoji/icon trong nội dung
  const text = [q.question, ...(q.options || []), q.explanation || ""].join(" ");
  if (/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B50}\u{FE0F}]/u.test(text)) errors.push(`${tag} chứa emoji/icon`);
  // Đáp án đúng không được dài vượt trội so với đáp án nhiễu
  if (q.type === "single" && q.options && q.options.length === 4) {
    const ci = q.correct[0];
    const cl = q.options[ci].length;
    const mx = Math.max(...q.options.filter((_, k) => k !== ci).map((o) => o.length));
    if (cl > mx * 1.4 && cl - mx > 25) longAnswer.push(q.id);
  }
});

if (errors.length) {
  console.error(`\n===== LỖI (${errors.length}) =====`);
  errors.slice(0, 60).forEach((e) => console.error(" -", e));
  process.exit(1);
}
if (longAnswer.length) console.warn(`\nCẢNH BÁO: ${longAnswer.length} câu còn đáp án đúng dài bất thường: ${longAnswer.slice(0, 20).join(", ")}`);

// ---------- THỐNG KÊ ----------
const count = (key) => all.reduce((m, q) => ((m[q[key]] = (m[q[key]] || 0) + 1), m), {});
console.log("\nTổng số câu:", all.length);
console.log("Theo chương:", count("chapter"));
console.log("Theo độ khó (1=Dễ 2=TB 3=Khó):", count("difficulty"));
console.log("Theo loại:", count("type"));
console.log("Có giải thích:", all.filter((q) => q.explanation && q.explanation.trim()).length, "/", all.length);
const pos = [0, 0, 0, 0];
all.forEach((q) => q.correct.forEach((c) => pos[c]++));
console.log("Phân bố vị trí đáp án đúng A/B/C/D:", pos);

// ---------- GHI FILE ----------
fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
const header = `// ============================================================================
// Ngân hàng câu hỏi ôn thi - Nhà Kho Dữ Liệu Và Tích Hợp
// TỰ ĐỘNG SINH bởi tools/merge_questions.js từ bank/ + patches/ - KHÔNG SỬA TAY
// Tổng: ${all.length} câu
// ============================================================================
const QUESTIONS = `;
const footer = `;\nif (typeof module !== "undefined" && module.exports) { module.exports = QUESTIONS; }\n`;
fs.writeFileSync(OUT_FILE, header + JSON.stringify(all) + footer, "utf-8");
console.log("\nĐã ghi " + path.relative(ROOT, OUT_FILE));
