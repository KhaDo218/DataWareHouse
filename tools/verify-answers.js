// Kiểm chứng chéo: đáp án đúng sau khi vá có còn đúng Ý NGHĨA như trước khi vá?
//
// LƯU Ý QUAN TRỌNG: phải so trong CÙNG không gian chỉ số.
// bank/questions_bo2.js và questions_bosung.js đặt đáp án ở vị trí 0, rồi
// tools/merge_questions.js xáo thứ tự phương án -> chỉ số `correct` thay đổi.
// Vì vậy baseline đúng là chunks/*.json (sinh từ data/questions.js trước khi vá),
// KHÔNG phải bank/.
//
// Chạy: node tools/verify-answers.js
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const PATCH = path.join(ROOT, "patches");
const CHUNKS = process.env.CHUNKS_DIR || path.join(require("os").tmpdir(), "dwwork", "chunks");

// ---- baseline: câu hỏi TRƯỚC khi vá (cùng không gian chỉ số với bản vá)
const baseline = new Map();
if (fs.existsSync(CHUNKS)) {
  for (const f of fs.readdirSync(CHUNKS).filter((x) => x.endsWith(".json"))) {
    for (const q of JSON.parse(fs.readFileSync(path.join(CHUNKS, f), "utf-8"))) {
      baseline.set(q.id, q);
    }
  }
}
if (!baseline.size) {
  console.error("Không tìm thấy thư mục chunks (baseline). Đặt biến CHUNKS_DIR hoặc kiểm tra " + CHUNKS);
  process.exit(1);
}

// ---- bản vá
const patched = new Map();
for (const f of fs.readdirSync(PATCH).filter((x) => x.endsWith(".json"))) {
  const data = JSON.parse(fs.readFileSync(path.join(PATCH, f), "utf-8"));
  for (const it of data.items || []) {
    if (!it.options) continue;
    patched.set(it.id, it.options);
  }
}

// ---- so khớp nghĩa
const STOP = new Set(("và là của các cho trong một khi để với thì những được có không thể sẽ" +
  " nhưng mà nên phải vào ra lên xuống này đó kia nào gì ai sao rất hơn nhất cùng theo" +
  " từ đến tại trên dưới trước sau mỗi mọi cả nó họ ta bạn bằng về tới hay hoặc nếu vì do bị" +
  " một hai ba bốn năm sáu bảy tám chín mười cũng chỉ còn lại đã đang sẽ vẫn")
  .split(" "));
function keywords(s) {
  return new Set(
    String(s).toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d")
      .replace(/[^a-z0-9]+/g, " ")
      .split(" ")
      .filter((w) => w.length > 2 && !STOP.has(w))
  );
}
function overlap(a, b) {
  const A = keywords(a), B = keywords(b);
  if (!A.size && !B.size) return 1;
  if (!A.size || !B.size) return 0;
  let n = 0;
  for (const w of A) if (B.has(w)) n++;
  return n / A.size;   // tỉ lệ từ khoá của bản GỐC còn xuất hiện trong bản MỚI
}

const rows = [];
let missing = [];
for (const [id, options] of patched) {
  const base = baseline.get(id);
  if (!base) { missing.push(id); continue; }
  const before = base.correct.map((i) => base.options[i]).join(" | ");
  const after = base.correct.map((i) => options[i]).join(" | ");
  rows.push({ id, score: overlap(before, after), before, after, question: base.question, type: base.type });
}
rows.sort((a, b) => a.score - b.score);

console.log("Baseline: " + baseline.size + " câu · có vá options: " + rows.length);
const buckets = { "giữ nguyên 1.0": 0, "0.8-1": 0, "0.6-0.8": 0, "0.34-0.6": 0, "thấp <0.34": 0 };
rows.forEach((r) => {
  if (r.score >= 0.999) buckets["giữ nguyên 1.0"]++;
  else if (r.score >= 0.8) buckets["0.8-1"]++;
  else if (r.score >= 0.6) buckets["0.6-0.8"]++;
  else if (r.score >= 0.34) buckets["0.34-0.6"]++;
  else buckets["thấp <0.34"]++;
});
console.log("Mức giữ nghĩa đáp án đúng:", buckets);

const low = rows.filter((r) => r.score < 0.34);
console.log("\n=== CẦN RÀ TAY: " + low.length + " câu ===");
low.forEach((r) => {
  console.log("\n" + r.id + "  (giữ nghĩa " + r.score.toFixed(2) + ", " + r.type + ")");
  console.log("  HỎI     : " + r.question.slice(0, 160));
  console.log("  ĐÚNG CŨ : " + r.before);
  console.log("  ĐÚNG MỚI: " + r.after);
});

const mid = rows.filter((r) => r.score >= 0.34 && r.score < 0.8);
if (mid.length) {
  console.log("\n=== TRUNG BÌNH, nên xem lại: " + mid.length + " câu ===");
  mid.slice(0, 50).forEach((r) => console.log("  " + r.id + " (" + r.score.toFixed(2) + ") " + r.before.slice(0, 70) + "  ->  " + r.after.slice(0, 70)));
}

if (missing.length) console.log("\nKhông có baseline cho: " + missing.join(", "));

fs.writeFileSync(
  path.join(ROOT, "tools", "answer-check.txt"),
  rows.map((r) => [r.id, r.score.toFixed(3), r.before, "=>", r.after].join("\t")).join("\n"),
  "utf-8"
);
console.log("\nChi tiết đầy đủ: tools/answer-check.txt");
if (low.length) process.exitCode = 2;
