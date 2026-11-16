// ============================================================================
// Web ôn thi - Nhà Kho Dữ Liệu Và Tích Hợp
// Dữ liệu: biến QUESTIONS (data/questions.js). Tiến độ lưu localStorage.
// ============================================================================
(function () {
  "use strict";

  const CHAPTER_NAMES = {
    1: "Chiến lược & Kiến trúc dữ liệu hiện đại",
    2: "Mô hình hóa dữ liệu cho Cloud Warehousing",
    3: "Tích hợp dữ liệu và Pipeline tự động",
    4: "Tiền xử lý dữ liệu học thuật",
    5: "Thuật toán khai thác dữ liệu cốt lõi",
    6: "In-Database ML và MLOps",
    7: "Quản trị, Bảo mật và Đạo đức dữ liệu",
    8: "Generative BI & AI-Driven Insights",
    9: "Tích hợp dữ liệu đa mô hình & CSDL hiện đại",
    10: "Thực hành: BigQuery, dbt & Medallion"
  };
  const DIFF = { 1: "Dễ", 2: "Trung bình", 3: "Khó" };
  const SOURCE = { bo1: "Bộ đề 1", bo2: "Bộ đề 2", bosung: "Bổ sung" };
  const LETTERS = "ABCD";
  const PAGE_SIZE = 20;
  const STORE_KEY = "nkdl_onthi_v2";
  const THEME_KEY = "nkdl_theme";

  const $ = (s, c) => (c || document).querySelector(s);
  const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));
  const byId = new Map(QUESTIONS.map((q) => [q.id, q]));

  // ---------------------------------------------------------------- theme
  const themeBtn = $("#theme-btn");
  function currentTheme() {
    const set = document.documentElement.getAttribute("data-theme");
    if (set) return set;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function applyTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    if (themeBtn) {
      themeBtn.textContent = t === "dark" ? "Sáng" : "Tối";
      themeBtn.title = t === "dark" ? "Chuyển sang giao diện sáng" : "Chuyển sang giao diện tối";
    }
  }
  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === "dark" || saved === "light") applyTheme(saved);
    else applyTheme(currentTheme());
  } catch (e) { applyTheme(currentTheme()); }
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const next = currentTheme() === "dark" ? "light" : "dark";
      applyTheme(next);
      try { localStorage.setItem(THEME_KEY, next); } catch (e) { /* bỏ qua */ }
    });
  }

  // ---------------------------------------------------------------- toast
  let toastEl = null;
  let toastTimer = null;
  function toast(msg) {
    if (!toastEl) {
      toastEl = el("div", "toast");
      document.body.append(toastEl);
    }
    toastEl.textContent = msg;
    // ép reflow để transition chạy lại khi bấm liên tiếp
    void toastEl.offsetWidth;
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove("show"), 2200);
  }

  // ---------------------------------------------------------------- storage
  let store = { answered: {}, wrong: [] };
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) store = Object.assign(store, JSON.parse(raw));
  } catch (e) { /* trình duyệt chặn storage: vẫn chạy bình thường */ }
  function save() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(store)); } catch (e) { /* bỏ qua */ }
  }
  function record(id, ok) {
    store.answered[id] = ok;
    const i = store.wrong.indexOf(id);
    if (ok && i >= 0) store.wrong.splice(i, 1);
    if (!ok && i < 0) store.wrong.unshift(id);
    save();
    updateWrongCount();
  }

  // ---------------------------------------------------------------- helpers
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  const sameSet = (a, b) => a.length === b.length && a.every((x) => b.includes(x));
  function el(tag, cls, text) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== undefined) e.textContent = text;
    return e;
  }
  function normalize(s) {
    return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/g, "d");
  }
  const searchIndex = new Map(QUESTIONS.map((q) => [q.id, normalize(q.question + " " + q.options.join(" "))]));

  // ---------------------------------------------------------------- card
  // mode: "practice" (chấm ngay) | "exam" (chấm khi nộp)
  // order: thứ tự hiển thị các phương án (mảng chỉ số gốc)
  function buildCard(q, num, mode, order) {
    order = order || [0, 1, 2, 3];
    const card = el("article", "q-card");
    card.dataset.id = q.id;

    const meta = el("div", "q-meta");
    meta.append(el("span", "tag", "Chương " + q.chapter));
    meta.append(el("span", "tag d" + q.difficulty, DIFF[q.difficulty]));
    if (q.type === "multiple") meta.append(el("span", "tag multi", "Nhiều đáp án"));
    meta.append(el("span", "tag", SOURCE[q.source] || ""));
    card.append(meta);

    const text = el("p", "q-text");
    text.append(el("span", "q-num", "Câu " + num + "."), document.createTextNode(q.question));
    card.append(text);

    const opts = el("div", "options");
    const name = mode + "-" + q.id;
    order.forEach((orig, pos) => {
      const lab = el("label", "option");
      lab.dataset.orig = orig;
      const input = document.createElement("input");
      input.type = q.type === "multiple" ? "checkbox" : "radio";
      input.name = name;
      input.value = orig;
      lab.append(input, el("span", "letter", LETTERS[pos]), el("span", "", q.options[orig]));
      input.addEventListener("change", () => {
        if (card.classList.contains("locked")) return;
        $$(".option", opts).forEach((o) => o.classList.toggle("selected", $("input", o).checked));
        if (mode === "practice" && q.type === "single") check();
        if (mode === "exam") updateExamProgress();
        if (mode === "exam" && typeof window.__examSyncNav === "function") window.__examSyncNav();
        if (mode === "practice" && q.type === "multiple") btn.disabled = selected().length === 0;
      });
      opts.append(lab);
    });
    card.append(opts);

    const foot = el("div", "q-foot");
    const btn = el("button", "btn primary", "Kiểm tra");
    const redo = el("button", "btn ghost hidden", "Làm lại");
    const verdict = el("span", "verdict");
    if (mode === "practice") {
      if (q.type === "multiple") { btn.disabled = true; foot.append(btn); }
      foot.append(redo);
    }
    let flagBtn = null;
    if (mode === "exam") {
      flagBtn = el("button", "flag-btn", "Đánh dấu");
      flagBtn.type = "button";
      flagBtn.setAttribute("aria-pressed", "false");
      flagBtn.addEventListener("click", () => {
        const on = !flagBtn.classList.contains("on");
        flagBtn.classList.toggle("on", on);
        flagBtn.textContent = on ? "Đã đánh dấu" : "Đánh dấu";
        flagBtn.setAttribute("aria-pressed", String(on));
        card.dataset.flagged = on ? "1" : "";
        if (typeof window.__examSyncNav === "function") window.__examSyncNav();
      });
      foot.append(flagBtn);
    }
    foot.append(verdict);
    card.append(foot);

    function selected() {
      return $$("input", opts).filter((i) => i.checked).map((i) => +i.value).sort((a, b) => a - b);
    }
    function reveal(sel) {
      const ok = sameSet(sel, q.correct);
      card.classList.add("locked", ok ? "is-right" : "is-wrong");
      $$("input", opts).forEach((i) => (i.disabled = true));
      $$(".option", opts).forEach((o) => {
        const orig = +o.dataset.orig;
        if (q.correct.includes(orig)) o.classList.add("correct");
        else if (sel.includes(orig)) o.classList.add("wrong");
      });
      const letters = order.map((orig, pos) => (q.correct.includes(orig) ? LETTERS[pos] : null)).filter(Boolean);
      verdict.className = "verdict " + (ok ? "right" : "wrong");
      verdict.textContent = ok ? "Chính xác" : sel.length ? "Chưa đúng. Đáp án: " + letters.join(", ") : "Chưa trả lời. Đáp án: " + letters.join(", ");
      if (q.explanation) {
        const ex = el("div", "explain");
        ex.append(el("b", "", "Giải thích: "), document.createTextNode(q.explanation));
        card.append(ex);
      }
      btn.classList.add("hidden");
      if (mode === "practice") redo.classList.remove("hidden");
      return ok;
    }
    function check() {
      const sel = selected();
      if (!sel.length) return;
      record(q.id, reveal(sel));
      updatePracticeStats();
    }
    btn.addEventListener("click", check);
    redo.addEventListener("click", () => {
      const fresh = buildCard(q, num, mode, order);
      card.replaceWith(fresh);
    });

    card._grade = () => { const sel = selected(); return { ok: reveal(sel), answered: sel.length > 0 }; };
    card._answered = () => selected().length > 0;
    return card;
  }

  // ---------------------------------------------------------------- tabs
  $$(".tab-btn").forEach((b) => b.addEventListener("click", () => {
    $$(".tab-btn").forEach((x) => x.classList.toggle("active", x === b));
    $$(".tab-content").forEach((t) => t.classList.toggle("active", t.id === b.dataset.tab + "-tab"));
    if (b.dataset.tab === "review") renderReview();
    window.scrollTo({ top: 0 });
  }));

  function updateWrongCount() { $("#wrong-count").textContent = store.wrong.length; }

  // ---------------------------------------------------------------- practice
  const chSel = $("#f-chapter");
  chSel.append(new Option("Tất cả chương (" + QUESTIONS.length + " câu)", "all"));
  Object.keys(CHAPTER_NAMES).forEach((ch) => {
    const n = QUESTIONS.filter((q) => String(q.chapter) === ch).length;
    if (n) chSel.append(new Option("Chương " + ch + ": " + CHAPTER_NAMES[ch] + " (" + n + ")", ch));
  });
  $("#brand-sub").textContent = QUESTIONS.length + " câu hỏi · 10 phần";

  let practiceList = [];
  let practicePage = 0;
  let shuffledOrder = null;

  function filtered() {
    const ch = chSel.value, d = $("#f-diff").value, src = $("#f-source").value, st = $("#f-status").value;
    const kw = normalize($("#f-search").value.trim());
    return QUESTIONS.filter((q) =>
      (ch === "all" || String(q.chapter) === ch) &&
      (d === "all" || String(q.difficulty) === d) &&
      (src === "all" || q.source === src) &&
      (st === "all" || (st === "todo" && !(q.id in store.answered)) ||
        (st === "wrong" && store.answered[q.id] === false) || (st === "right" && store.answered[q.id] === true)) &&
      (!kw || searchIndex.get(q.id).includes(kw))
    );
  }
  function applyFilters() {
    let list = filtered();
    if ($("#f-shuffle").checked) {
      if (!shuffledOrder) shuffledOrder = new Map(shuffle(QUESTIONS).map((q, i) => [q.id, i]));
      list.sort((a, b) => shuffledOrder.get(a.id) - shuffledOrder.get(b.id));
    } else {
      list.sort((a, b) => a.chapter - b.chapter || a.difficulty - b.difficulty);
    }
    practiceList = list;
    practicePage = 0;
    renderPractice();
  }
  function renderPractice() {
    const box = $("#practice-list");
    box.innerHTML = "";
    if (!practiceList.length) { box.append(el("div", "empty", "Không có câu hỏi nào phù hợp bộ lọc.")); }
    const start = practicePage * PAGE_SIZE;
    practiceList.slice(start, start + PAGE_SIZE).forEach((q, i) => box.append(buildCard(q, start + i + 1, "practice")));
    renderPager($("#practice-pager"), practiceList.length, practicePage, (p) => { practicePage = p; renderPractice(); $("#practice-list").scrollIntoView({ behavior: "smooth" }); });
    updatePracticeStats();
  }
  function renderPager(box, total, page, go) {
    box.innerHTML = "";
    const pages = Math.ceil(total / PAGE_SIZE);
    if (pages <= 1) return;
    const prev = el("button", "btn ghost", "Trang trước");
    const next = el("button", "btn ghost", "Trang sau");
    prev.disabled = page === 0;
    next.disabled = page >= pages - 1;
    prev.onclick = () => go(page - 1);
    next.onclick = () => go(page + 1);
    const sel = document.createElement("select");
    for (let i = 0; i < pages; i++) sel.append(new Option("Trang " + (i + 1) + " / " + pages, i));
    sel.value = page;
    sel.onchange = () => go(+sel.value);
    box.append(prev, sel, next);
  }
  function updatePracticeStats() {
    const ids = practiceList.map((q) => q.id);
    const done = ids.filter((id) => id in store.answered).length;
    const right = ids.filter((id) => store.answered[id] === true).length;
    $("#practice-stats").textContent = "Đang lọc: " + ids.length + " câu  |  Đã làm: " + done + "  |  Đúng: " + right +
      (done ? " (" + Math.round((right / done) * 100) + "%)" : "");
    $("#practice-bar").style.width = ids.length ? (done / ids.length) * 100 + "%" : "0";
  }
  ["#f-chapter", "#f-diff", "#f-source", "#f-status", "#f-shuffle"].forEach((s) => $(s).addEventListener("change", applyFilters));
  let searchTimer;
  $("#f-search").addEventListener("input", () => { clearTimeout(searchTimer); searchTimer = setTimeout(applyFilters, 250); });
  $("#reset-practice-btn").addEventListener("click", () => {
    if (!confirm("Xóa toàn bộ tiến độ đã làm và danh sách câu sai?")) return;
    store = { answered: {}, wrong: [] };
    save();
    updateWrongCount();
    applyFilters();
  });

  // ---------------------------------------------------------------- exam
  const examChBox = $("#exam-chapters");
  Object.keys(CHAPTER_NAMES).forEach((ch) => {
    const n = QUESTIONS.filter((q) => String(q.chapter) === ch).length;
    const lab = el("label");
    const cb = document.createElement("input");
    cb.type = "checkbox"; cb.value = ch; cb.checked = true;
    lab.append(cb, el("span", "", ch + ". " + CHAPTER_NAMES[ch]), el("span", "cnt", n + " câu"));
    examChBox.append(lab);
  });
  $("#exam-all-ch").onclick = () => $$("input", examChBox).forEach((c) => (c.checked = true));
  $("#exam-none-ch").onclick = () => $$("input", examChBox).forEach((c) => (c.checked = false));

  let examCards = [];
  let timer = null;
  let secondsLeft = 0;
  let examQs = [];

  $("#start-exam-btn").addEventListener("click", () => {
    const chs = $$("input:checked", examChBox).map((c) => +c.value);
    const d = $("#exam-diff").value;
    const pool = QUESTIONS.filter((q) => chs.includes(q.chapter) && (d === "all" || String(q.difficulty) === d));
    if (!pool.length) { alert("Hãy chọn ít nhất một chương có câu hỏi."); return; }
    let n = parseInt($("#exam-count").value, 10);
    if (!(n > 0)) n = 40;
    n = Math.min(n, pool.length);
    let minutes = parseInt($("#exam-minutes").value, 10);
    if (!(minutes > 0)) minutes = 45;

    examQs = shuffle(pool).slice(0, n);
    const box = $("#exam-list");
    box.innerHTML = "";
    examCards = examQs.map((q, i) => {
      const c = buildCard(q, i + 1, "exam", shuffle([0, 1, 2, 3]));
      box.append(c);
      return c;
    });
    buildExamNav();
    $("#exam-setup").classList.add("hidden");
    $("#exam-running").classList.remove("hidden");
    $("#exam-summary").classList.add("hidden");
    $("#retry-exam-btn").classList.add("hidden");
    $("#submit-exam-btn").classList.remove("hidden");
    $("#exam-nav").classList.remove("hidden");
    secondsLeft = minutes * 60;
    tick();
    clearInterval(timer);
    timer = setInterval(tick, 1000);
    updateExamProgress();
    window.scrollTo({ top: 0 });
  });

  // Bảng số câu: nhảy nhanh + hiện câu đã làm / đã đánh dấu
  function buildExamNav() {
    const grid = $("#exam-nav-grid");
    grid.innerHTML = "";
    examCards.forEach((card, i) => {
      const b = el("button", "nav-cell", String(i + 1));
      b.type = "button";
      b.addEventListener("click", () => {
        card.scrollIntoView({ behavior: "smooth", block: "center" });
        const first = $("input", card);
        if (first) setTimeout(() => first.focus({ preventScroll: true }), 260);
      });
      grid.append(b);
    });
    syncExamNav();
  }
  function syncExamNav() {
    const grid = $("#exam-nav-grid");
    if (!grid) return;
    Array.from(grid.children).forEach((b, i) => {
      const card = examCards[i];
      if (!card) return;
      b.classList.toggle("done", card._answered());
      b.classList.toggle("flag", card.dataset.flagged === "1");
    });
  }
  window.__examSyncNav = syncExamNav;

  function tick() {
    const m = Math.floor(secondsLeft / 60), s = secondsLeft % 60;
    const t = $("#exam-timer");
    t.textContent = String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
    t.classList.toggle("urgent", secondsLeft <= 60);
    if (secondsLeft <= 0) { submitExam(true); return; }
    secondsLeft--;
  }
  function updateExamProgress() {
    const done = examCards.filter((c) => c._answered()).length;
    $("#exam-progress").textContent = "Đã trả lời " + done + " / " + examCards.length;
  }
  function submitExam(auto) {
    if (!auto) {
      const left = examCards.filter((c) => !c._answered()).length;
      const flagged = examCards.filter((c) => c.dataset.flagged === "1").length;
      let msg = "Còn " + left + " câu chưa trả lời.";
      if (flagged) msg += "\nCó " + flagged + " câu đang đánh dấu.";
      if ((left || flagged) && !confirm(msg + "\nVẫn nộp bài?")) return;
    }
    clearInterval(timer);
    const byCh = {};
    let right = 0;
    examCards.forEach((c, i) => {
      const q = examQs[i];
      const r = c._grade();
      if (r.ok) right++;
      record(q.id, r.ok);
      byCh[q.chapter] = byCh[q.chapter] || [0, 0];
      byCh[q.chapter][1]++;
      if (r.ok) byCh[q.chapter][0]++;
    });
    const total = examCards.length;
    const sum = $("#exam-summary");
    sum.innerHTML = "";
    sum.className = "card score";
    sum.append(el("div", "muted", auto ? "Hết giờ, bài đã được nộp tự động." : "Kết quả bài thi"));
    sum.append(el("div", "big", right + " / " + total));
    sum.append(el("div", "", "Điểm thang 10: " + ((right / total) * 10).toFixed(2)));
    const tb = el("table");
    const head = el("tr");
    head.append(el("th", "", "Chương"), el("th", "", "Đúng"));
    tb.append(head);
    Object.keys(byCh).sort((a, b) => a - b).forEach((ch) => {
      const tr = el("tr");
      tr.append(el("td", "", ch + ". " + CHAPTER_NAMES[ch]), el("td", "", byCh[ch][0] + " / " + byCh[ch][1]));
      tb.append(tr);
    });
    sum.append(tb);
    $("#submit-exam-btn").classList.add("hidden");
    $("#retry-exam-btn").classList.remove("hidden");
    $("#exam-nav").classList.add("hidden");
    $("#exam-progress").textContent = "Đã nộp bài";
    window.scrollTo({ top: 0, behavior: "smooth" });
    updatePracticeStats();
  }
  $("#submit-exam-btn").addEventListener("click", () => submitExam(false));
  $("#retry-exam-btn").addEventListener("click", () => {
    $("#exam-running").classList.add("hidden");
    $("#exam-setup").classList.remove("hidden");
    window.scrollTo({ top: 0 });
  });

  // ---------------------------------------------------------------- review
  let reviewPage = 0;
  function renderReview() {
    const box = $("#review-list");
    box.innerHTML = "";
    const list = store.wrong.map((id) => byId.get(id)).filter(Boolean);
    if (!list.length) { box.append(el("div", "empty", "Chưa có câu nào làm sai.")); return; }
    const pages = Math.ceil(list.length / PAGE_SIZE);
    if (reviewPage >= pages) reviewPage = pages - 1;
    const start = reviewPage * PAGE_SIZE;
    list.slice(start, start + PAGE_SIZE).forEach((q, i) => box.append(buildCard(q, start + i + 1, "practice")));
    const pager = el("div", "pager");
    box.append(pager);
    renderPager(pager, list.length, reviewPage, (p) => { reviewPage = p; renderReview(); window.scrollTo({ top: 0 }); });
  }
  $("#clear-wrong-btn").addEventListener("click", () => {
    if (!confirm("Xóa danh sách câu làm sai?")) return;
    store.wrong = [];
    save();
    updateWrongCount();
    renderReview();
  });

  // ---------------------------------------------------------------- tài liệu
  const DOC_FILE = "giai-cau-hoi-chan-doan.html";
  const docStatus = $("#doc-status");
  function setDocStatus(msg, kind) {
    if (!docStatus) return;
    docStatus.textContent = msg;
    docStatus.className = "doc-status " + (kind || "muted");
  }
  // Kiểm tra file tài liệu có sẵn cạnh trang không (chỉ hoạt động khi chạy qua http(s))
  if (location.protocol === "file:") {
    setDocStatus("Đang mở bằng file:// — nút tải vẫn dùng được, chỉ không kiểm tra trước được dung lượng.");
  } else {
    fetch(DOC_FILE, { method: "HEAD" })
      .then((r) => {
        if (!r.ok) throw new Error("HTTP " + r.status);
        const len = r.headers.get("content-length");
        const kb = len ? Math.round(parseInt(len, 10) / 1024) : null;
        setDocStatus(kb ? "Sẵn sàng (" + kb + " KB)" : "Sẵn sàng tải về", "ok");
      })
      .catch(() => setDocStatus("Không tìm thấy file tài liệu trên máy chủ.", "err"));
  }
  const dl = $("#doc-download");
  if (dl) dl.addEventListener("click", () => toast("Đang tải " + DOC_FILE + " …"));

  // ---------------------------------------------------------------- sao lưu tiến độ
  $("#export-progress-btn").addEventListener("click", () => {
    const payload = {
      app: "nkdl-on-thi",
      version: 2,
      exportedAt: new Date().toISOString(),
      total: QUESTIONS.length,
      answered: store.answered,
      wrong: store.wrong
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    const stamp = new Date().toISOString().slice(0, 10);
    a.href = url;
    a.download = "tien-do-on-thi-" + stamp + ".json";
    document.body.append(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    toast("Đã xuất tiến độ: " + Object.keys(store.answered).length + " câu đã làm");
  });

  const importFile = $("#import-progress-file");
  $("#import-progress-btn").addEventListener("click", () => importFile.click());
  importFile.addEventListener("change", () => {
    const f = importFile.files && importFile.files[0];
    if (!f) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(String(reader.result));
        if (!data || typeof data !== "object" || typeof data.answered !== "object" || data.answered === null) {
          throw new Error("Sai cấu trúc file");
        }
        const known = Object.keys(data.answered).filter((id) => byId.has(id));
        if (!known.length) throw new Error("Không có câu nào khớp ngân hàng hiện tại");
        if (!confirm("Nhập " + known.length + " câu đã làm từ file?\nTiến độ hiện tại sẽ được gộp thêm (không mất).")) return;
        const merged = Object.assign({}, store.answered);
        known.forEach((id) => { merged[id] = !!data.answered[id]; });
        const wrong = Array.isArray(data.wrong) ? data.wrong.filter((id) => byId.has(id)) : [];
        const set = new Set(store.wrong.concat(wrong));
        const answered = merged;
        store.answered = answered;
        store.wrong = Array.from(set).filter((id) => answered[id] === false);
        save();
        updateWrongCount();
        applyFilters();
        toast("Đã nhập " + known.length + " câu từ file sao lưu");
      } catch (err) {
        alert("File không hợp lệ: " + err.message);
      } finally {
        importFile.value = "";
      }
    };
    reader.readAsText(f, "utf-8");
  });

  // ---------------------------------------------------------------- bàn phím
  // Chỉ áp dụng cho tab Luyện tập và khi không gõ trong ô nhập liệu.
  document.addEventListener("keydown", (e) => {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    const t = e.target;
    if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.tagName === "SELECT" || t.isContentEditable)) return;
    if (!$("#practice-tab").classList.contains("active")) return;
    if (!$("#exam-running").classList.contains("hidden")) return;

    const cards = $$(".q-card", $("#practice-list"));
    if (!cards.length) return;
    const viewMid = window.innerHeight / 2;
    let idx = cards.findIndex((c) => {
      const r = c.getBoundingClientRect();
      return r.top <= viewMid && r.bottom >= viewMid;
    });
    if (idx < 0) idx = 0;
    const card = cards[idx];

    if (/^[1-4]$/.test(e.key)) {
      const opts = $$(".option", card);
      const target = opts[+e.key - 1];
      if (!target || card.classList.contains("locked")) return;
      e.preventDefault();
      const input = $("input", target);
      if (input && !input.disabled) { input.click(); }
      return;
    }
    if (e.key === "Enter") {
      const locked = card.classList.contains("locked");
      if (locked) return;
      const chk = $$(".q-foot .btn.primary", card)[0];
      if (chk && !chk.classList.contains("hidden") && !chk.disabled) {
        e.preventDefault();
        chk.click();
      }
      return;
    }
    if (e.key === "j" || e.key === "J" || e.key === "k" || e.key === "K") {
      const go = e.key.toLowerCase() === "j" ? cards[idx + 1] : cards[idx - 1];
      if (go) { e.preventDefault(); go.scrollIntoView({ behavior: "smooth", block: "center" }); }
    }
  });

  // ---------------------------------------------------------------- init
  updateWrongCount();
  applyFilters();
})();
