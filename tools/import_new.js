// Nạp câu hỏi MỚI (do các agent soạn) vào bank/questions_moi.js
// Chạy: node tools/import_new.js [--check]
//   --check : chỉ kiểm tra, không ghi
//
// Đầu vào : <dwwork>/out/new-*.json   (schema: { chapter?, questions:[...] })
// Đầu ra  : bank/questions_moi.js      (TỰ SINH — không sửa tay)
const fs = require("fs");
const path = require("path");
const os = require("os");

const ROOT = path.join(__dirname, "..");
const SRC_DIR = process.env.NEWQ_DIR || path.join(os.tmpdir(), "dwwork", "out");
const OUT = path.join(ROOT, "bank", "questions_moi.js");
const CHECK_ONLY = process.argv.includes("--check");

// ---------------------------------------------------------------- gom đầu vào
const files = fs.existsSync(SRC_DIR)
  ? fs.readdirSync(SRC_DIR).filter((f) => /^new-.*\.json$/.test(f)).sort()
  : [];
if (!files.length) { console.error("Không thấy file new-*.json trong " + SRC_DIR); process.exit(1); }

let incoming = [];
for (const f of files) {
  let data;
  try { data = JSON.parse(fs.readFileSync(path.join(SRC_DIR, f), "utf-8")); }
  catch (e) { console.error(f + ": JSON lỗi - " + e.message); process.exit(1); }
  const arr = Array.isArray(data) ? data : data.questions;
  if (!Array.isArray(arr)) { console.error(f + ": thiếu mảng questions"); process.exit(1); }
  console.log(f + ": " + arr.length + " câu");
  incoming = incoming.concat(arr);
}

// ---------------------------------------------------------------- kiểm tra
const errors = [];
const warnings = [];
const ids = new Set();
// id đã có trong ngân hàng hiện tại
// Lưu ý: bank/questions_moi.js do chính script này sinh ra ở lần chạy trước, nên
// id đến từ đó KHÔNG bị coi là trùng — nếu không sẽ không chạy lại được.
let existingIds = new Set();
const ownIds = new Set();
const ownFile = path.join(ROOT, "bank", "questions_moi.js");
if (fs.existsSync(ownFile)) {
  try { require(ownFile).forEach((q) => ownIds.add(q.id)); } catch (e) { /* bỏ qua */ }
}
const curFile = path.join(ROOT, "data", "questions.js");
if (fs.existsSync(curFile)) {
  try {
    require(curFile).forEach((q) => { if (!ownIds.has(q.id)) existingIds.add(q.id); });
  } catch (e) { /* bỏ qua */ }
}

// chuẩn hoá câu hỏi để so trùng nội dung
function normText(s) {
  return String(s).toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d")
    .replace(/[^a-z0-9 ]/g, " ").replace(/\s+/g, " ").trim();
}
let existingStems = new Set();
if (fs.existsSync(curFile)) {
  try {
    require(curFile).forEach((q) => { if (!ownIds.has(q.id)) existingStems.add(normText(q.question)); });
  } catch (e) { /* bỏ qua */ }
}
const incomingStems = new Set();

incoming.forEach((q, i) => {
  const tag = "[" + (q.id || "#" + i) + "]";
  if (!q.id) { errors.push(tag + " thiếu id"); return; }
  if (ids.has(q.id)) errors.push(tag + " id trùng trong đợt nạp");
  if (existingIds.has(q.id)) errors.push(tag + " id đã có trong ngân hàng");
  ids.add(q.id);
  if (!/^new-c(10|[1-9])-\d{2}$/.test(q.id)) warnings.push(tag + " id không đúng mẫu new-c<chương>-NN");

  const chFromId = (q.id.match(/^new-c(\d+)-/) || [])[1];
  if (chFromId && Number(chFromId) !== q.chapter) {
    errors.push(tag + " chapter=" + q.chapter + " nhưng id ghi chương " + chFromId);
  }
  if (!Number.isInteger(q.chapter) || q.chapter < 1 || q.chapter > 10) errors.push(tag + " chapter không hợp lệ");
  if (![1, 2, 3].includes(q.difficulty)) errors.push(tag + " difficulty phải 1/2/3");
  if (!["single", "multiple"].includes(q.type)) errors.push(tag + " type phải single/multiple");
  if (typeof q.question !== "string" || q.question.trim().length < 15) errors.push(tag + " câu hỏi quá ngắn");
  if (q.question && q.question.length > 400) warnings.push(tag + " câu hỏi dài " + q.question.length + " ký tự");

  // phương án
  if (!Array.isArray(q.options) || q.options.length !== 4) errors.push(tag + " phải đúng 4 phương án");
  else {
    if (q.options.some((o) => typeof o !== "string" || !o.trim())) errors.push(tag + " có phương án rỗng");
    if (new Set(q.options.map((o) => o.trim().toLowerCase())).size !== 4) errors.push(tag + " có phương án trùng nhau");
    if (q.options.some((o) => o.length > 220)) warnings.push(tag + " có phương án dài bất thường");
  }

  // đáp án
  if (!Array.isArray(q.correct) || !q.correct.length) errors.push(tag + " correct rỗng");
  else {
    if (q.correct.some((c) => !Number.isInteger(c) || c < 0 || c > 3)) errors.push(tag + " correct ngoài 0-3");
    if (q.type === "single" && q.correct.length !== 1) errors.push(tag + " single phải đúng 1 đáp án");
    if (q.type === "multiple" && (q.correct.length < 2 || q.correct.length > 3)) errors.push(tag + " multiple phải 2-3 đáp án");
  }

  // giải thích
  if (typeof q.explanation !== "string" || !q.explanation.trim()) errors.push(tag + " thiếu explanation");
  else {
    const len = q.explanation.trim().length;
    if (len < 70) warnings.push(tag + " explanation ngắn (" + len + ")");
    if (len > 300) warnings.push(tag + " explanation dài (" + len + ")");
    if (/^(Đáp án đúng|Giải thích)/i.test(q.explanation.trim())) errors.push(tag + " explanation mở đầu sai quy ước");
  }

  // emoji
  const all = [q.question, ...(q.options || []), q.explanation || ""].join(" ");
  if (/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B50}\u{FE0F}]/u.test(all)) errors.push(tag + " chứa emoji");

  // đáp án đúng không được dài vượt trội
  if (q.type === "single" && Array.isArray(q.options) && q.options.length === 4 && Array.isArray(q.correct) && q.correct.length === 1) {
    const ci = q.correct[0];
    const cl = q.options[ci].length;
    const mx = Math.max(...q.options.filter((_, k) => k !== ci).map((o) => o.length));
    if (cl > mx + 15) warnings.push(tag + " đáp án đúng dài hơn nhiễu dài nhất " + (cl - mx) + " ký tự");
    if (cl > mx * 1.25) warnings.push(tag + " đáp án đúng dài gấp " + (cl / mx).toFixed(2) + " lần nhiễu");
  }

  // trùng nội dung
  const stem = normText(q.question);
  if (existingStems.has(stem)) errors.push(tag + " trùng câu hỏi đã có");
  if (incomingStems.has(stem)) errors.push(tag + " trùng câu hỏi trong đợt nạp");
  incomingStems.add(stem);
});

// phân bố vị trí đáp án đúng của câu single
const posCount = [0, 0, 0, 0];
incoming.filter((q) => q.type === "single" && Array.isArray(q.correct)).forEach((q) => { posCount[q.correct[0]]++; });

console.log("\nTổng câu mới: " + incoming.length);
const byCh = {};
incoming.forEach((q) => { byCh[q.chapter] = (byCh[q.chapter] || 0) + 1; });
console.log("Theo chương:", byCh);
const byDiff = {};
incoming.forEach((q) => { byDiff[q.difficulty] = (byDiff[q.difficulty] || 0) + 1; });
console.log("Theo độ khó:", byDiff);
const byType = {};
incoming.forEach((q) => { byType[q.type] = (byType[q.type] || 0) + 1; });
console.log("Theo loại:", byType);
console.log("Vị trí đáp án đúng A/B/C/D (câu single):", posCount);
if (posCount.some((n) => n > posCount.reduce((a, b) => a + b, 0) * 0.4)) {
  warnings.push("Phân bố vị trí đáp án đúng lệch: " + posCount.join("/") + " — nên xoay vòng vị trí");
}

if (warnings.length) {
  console.log("\nCẢNH BÁO (" + warnings.length + "):");
  warnings.slice(0, 40).forEach((w) => console.log("  -", w));
  if (warnings.length > 40) console.log("  ... và " + (warnings.length - 40) + " cảnh báo nữa");
}
if (errors.length) {
  console.error("\nLỖI (" + errors.length + "):");
  errors.slice(0, 40).forEach((e) => console.error("  -", e));
  if (errors.length > 40) console.error("  ... và " + (errors.length - 40) + " lỗi nữa");
  process.exit(1);
}

if (CHECK_ONLY) { console.log("\nChỉ kiểm tra, không ghi file."); process.exit(0); }

// ---------------------------------------------------------------- ghi bank
const header = `// ============================================================================
// CÂU HỎI BỔ SUNG (soạn theo báo cáo lỗ hổng kiến thức)
// TỰ ĐỘNG SINH bởi tools/import_new.js từ out/new-*.json - KHÔNG SỬA TAY
// Số câu: ${incoming.length}
// ============================================================================
const QUESTIONS_MOI = `;
const footer = `;\nif (typeof module !== "undefined" && module.exports) { module.exports = QUESTIONS_MOI; }\n`;
fs.writeFileSync(OUT, header + JSON.stringify(incoming, null, 1) + footer, "utf-8");
console.log("\nĐã ghi " + path.relative(ROOT, OUT) + " (" + incoming.length + " câu)");
