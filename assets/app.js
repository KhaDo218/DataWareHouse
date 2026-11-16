// ============================================================================
// Web ôn thi — Nhà Kho Dữ Liệu & Tích Hợp
// Một tệp logic duy nhất: điều hướng, luyện tập, thi thử, tổng quan, tài liệu,
// trình xem slide PDF và lưu tiến độ bằng localStorage.
// Dữ liệu câu hỏi: biến QUESTIONS trong data/questions.js
// ============================================================================
(function () {
  "use strict";

  // ------------------------------------------------------------------ config
  const CHAPTER_NAMES = {
    1: "Chiến lược & kiến trúc dữ liệu hiện đại",
    2: "Mô hình hoá dữ liệu cho Cloud Warehousing",
    3: "Tích hợp dữ liệu & pipeline tự động",
    4: "Tiền xử lý dữ liệu",
    5: "Khai thác dữ liệu: luật kết hợp, phân lớp, gom cụm",
    6: "In-Database ML & MLOps",
    7: "Quản trị, bảo mật & đạo đức dữ liệu",
    8: "Generative BI & AI-driven insights",
    9: "Tích hợp đa mô hình & CSDL hiện đại",
    10: "Thực hành: BigQuery, dbt & Medallion"
  };
  const DIFF = { 1: "Dễ", 2: "Trung bình", 3: "Khó" };
  const LETTERS = "ABCD";
  const PAGE_SIZE = 20;
  const STORE_KEY = "nkdl_onthi_v3";
  const LEGACY_KEY = "nkdl_onthi_v2";
  const THEME_KEY = "nkdl_theme";

  const SLIDES = [
    { file: "slides/chuong1.pdf", name: "Chương 1 — Chiến lược & kiến trúc dữ liệu hiện đại" },
    { file: "slides/chuong2.pdf", name: "Chương 2 — Mô hình hoá dữ liệu Cloud Warehousing" },
    { file: "slides/chuong3.pdf", name: "Chương 3 — Tích hợp dữ liệu & pipeline tự động" },
    { file: "slides/chuong4.pdf", name: "Chương 4 — Tiền xử lý dữ liệu" },
    { file: "slides/chuong5.pdf", name: "Chương 5 — Khai thác dữ liệu" },
    { file: "slides/chuong6.pdf", name: "Chương 6 — In-Database ML & MLOps" },
    { file: "slides/chuong7.pdf", name: "Chương 7 — Quản trị, bảo mật & đạo đức" },
    { file: "slides/chuong8.pdf", name: "Chương 8 — Generative BI & AI-driven insights" },
    { file: "slides/chuong9.pdf", name: "Chương 9 — Tích hợp đa mô hình & CSDL hiện đại" },
    { file: "slides/thuchanh-bigquery.pdf", name: "Thực hành — Xây dựng DWH với BigQuery" },
    { file: "slides/thuchanh-medallion.pdf", name: "Thực hành — Demo Medallion" },
    { file: "slides/de-chan-doan.pdf", name: "Đề — Một số câu hỏi chẩn đoán kiến thức" }
  ];

  const $ = (s, c) => (c || document).querySelector(s);
  const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));
  const byId = new Map(QUESTIONS.map((q) => [q.id, q]));
  const root = document.documentElement;

  // ------------------------------------------------------------------- theme
  const themeBtn = $("#theme-btn");
  const themeBtnInline = $("#theme-btn-inline");
  function currentTheme() {
    const set = root.getAttribute("data-theme");
    if (set) return set;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function applyTheme(t) {
    root.setAttribute("data-theme", t);
    const dark = t === "dark";
    const label = dark ? "Giao diện sáng" : "Giao diện tối";
    if (themeBtn) {
      $("#theme-icon").textContent = dark ? "☀" : "◐";
      $("#theme-label").textContent = label;
      themeBtn.setAttribute("aria-label", label);
    }
    if (themeBtnInline) themeBtnInline.setAttribute("aria-label", label);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", dark ? "#0d121b" : "#1f4e9d");
  }
  try {
    const saved = localStorage.getItem(THEME_KEY);
    applyTheme(saved === "dark" || saved === "light" ? saved : currentTheme());
  } catch (e) { applyTheme(currentTheme()); }
  [themeBtn, themeBtnInline].forEach((b) => {
    if (!b) return;
    b.addEventListener("click", () => {
      const next = currentTheme() === "dark" ? "light" : "dark";
      applyTheme(next);
      try { localStorage.setItem(THEME_KEY, next); } catch (e) { /* bỏ qua */ }
    });
  });

  // ------------------------------------------------------------------- toast
  let toastEl = null, toastTimer = null;
  function toast(msg) {
    if (!toastEl) { toastEl = el("div", "toast"); document.body.append(toastEl); }
    toastEl.textContent = msg;
    void toastEl.offsetWidth;
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove("show"), 2300);
  }

  // ----------------------------------------------------------------- storage
  // Cấu trúc: { version, questions: { id: {ok, at, tries} }, wrong: [id],
  //            exams: [ {at, total, right, minutes} ], daily: { "YYYY-MM-DD": n } }
  let store = { version: 3, questions: {}, wrong: [], exams: [], daily: {} };
  function blankStore() { return { version: 3, questions: {}, wrong: [], exams: [], daily: {} }; }

  function normalise(raw) {
    const s = blankStore();
    if (!raw || typeof raw !== "object") return s;
    const src = raw.questions && typeof raw.questions === "object" ? raw.questions : raw.answered;
    if (src && typeof src === "object") {
      Object.keys(src).forEach((id) => {
        if (!byId.has(id)) return;
        const v = src[id];
        if (v && typeof v === "object") {
          s.questions[id] = { ok: !!v.ok, at: +v.at || 0, tries: +v.tries || 1 };
        } else {
          s.questions[id] = { ok: !!v, at: 0, tries: 1 };
        }
      });
    }
    if (Array.isArray(raw.wrong)) s.wrong = raw.wrong.filter((id) => byId.has(id));
    s.wrong = s.wrong.filter((id) => s.questions[id] && !s.questions[id].ok);
    if (Array.isArray(raw.exams)) {
      s.exams = raw.exams.filter((e) => e && typeof e === "object" && e.at).slice(0, 20);
    }
    if (raw.daily && typeof raw.daily === "object") {
      Object.keys(raw.daily).forEach((d) => { if (typeof raw.daily[d] === "number") s.daily[d] = raw.daily[d]; });
    }
    return s;
  }

  try {
    let raw = localStorage.getItem(STORE_KEY);
    if (!raw) raw = localStorage.getItem(LEGACY_KEY);
    if (raw) store = normalise(JSON.parse(raw));
  } catch (e) { store = blankStore(); }

  // Ghi ngay lập tức: dữ liệu chỉ vài chục KB nên không cần gộp, đổi lại không bao giờ
  // mất tiến độ khi người dùng đóng tab đột ngột.
  function save() { writeStore(); }
  function writeStore() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(store)); } catch (e) { /* bỏ qua */ }
  }
  // Ghi thêm một lần khi rời trang cho chắc chắn
  window.addEventListener("pagehide", writeStore);
  window.addEventListener("beforeunload", writeStore);
  function todayKey() {
    const d = new Date();
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }
  function record(id, ok) {
    const prev = store.questions[id];
    store.questions[id] = { ok: ok, at: Date.now(), tries: (prev ? prev.tries : 0) + 1 };
    const i = store.wrong.indexOf(id);
    if (ok && i >= 0) store.wrong.splice(i, 1);
    if (!ok && i < 0) store.wrong.unshift(id);
    const k = todayKey();
    store.daily[k] = (store.daily[k] || 0) + 1;
    save();
    updateWrongBadge();
    refreshDashboard();
  }
  const isDone = (id) => !!store.questions[id];
  const isRight = (id) => !!(store.questions[id] && store.questions[id].ok);

  // ----------------------------------------------------------------- helpers
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
    return String(s).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d");
  }
  const searchIndex = new Map(QUESTIONS.map((q) => [q.id, normalize(q.question + " " + q.options.join(" "))]));

  function renderExplanation(text) {
    const box = el("div", "explain");
    box.append(el("b", "", "Giải thích: "));
    const lines = el("div", "lines");
    String(text).split("\n").map((s) => s.trim()).filter(Boolean).forEach((line) => {
      lines.append(el("span", "", line));
    });
    box.append(lines);
    return box;
  }

  // -------------------------------------------------------------------- card
  // mode: "practice" (chấm ngay) | "exam" (chấm khi nộp)
  function buildCard(q, num, mode, order) {
    order = order || [0, 1, 2, 3];
    const card = el("article", "q-card");
    card.dataset.id = q.id;

    const meta = el("div", "q-meta");
    meta.append(el("span", "tag", "Chương " + q.chapter));
    meta.append(el("span", "tag d" + q.difficulty, DIFF[q.difficulty]));
    if (q.type === "multiple") meta.append(el("span", "tag multi", "Nhiều đáp án"));
    card.append(meta);

    const text = el("p", "q-text");
    text.append(el("span", "q-num", "Câu " + num + "."), document.createTextNode(" " + q.question));
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
        if (mode === "exam") {
          updateExamProgress();
          if (typeof window.__examSyncNav === "function") window.__examSyncNav();
        }
        if (mode === "practice" && q.type === "multiple") btn.disabled = selected().length === 0;
      });
      opts.append(lab);
    });
    card.append(opts);

    const foot = el("div", "q-foot");
    const btn = el("button", "btn primary small", "Kiểm tra");
    btn.type = "button";
    const redo = el("button", "btn ghost small hidden", "Làm lại");
    redo.type = "button";
    const verdict = el("span", "verdict");
    if (mode === "practice") {
      if (q.type === "multiple") { btn.disabled = true; foot.append(btn); }
      foot.append(redo);
    }
    if (mode === "exam") {
      const flagBtn = el("button", "flag-btn", "Đánh dấu");
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
        o.classList.remove("selected");
        if (q.correct.includes(orig)) o.classList.add("correct");
        else if (sel.includes(orig)) o.classList.add("wrong");
      });
      const letters = order.map((orig, pos) => (q.correct.includes(orig) ? LETTERS[pos] : null)).filter(Boolean);
      verdict.className = "verdict " + (ok ? "right" : "wrong");
      verdict.textContent = ok ? "Chính xác" : (sel.length ? "Chưa đúng. Đáp án: " : "Chưa trả lời. Đáp án: ") + letters.join(", ");
      if (q.explanation && !$(".explain", card)) card.append(renderExplanation(q.explanation));
      btn.classList.add("hidden");
      if (mode === "practice") redo.classList.remove("hidden");
      return ok;
    }
    function check() {
      const sel = selected();
      if (!sel.length) return;
      record(q.id, reveal(sel));
      if (viewState.current === "practice") updatePracticeStats();
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

  // -------------------------------------------------------------- navigation
  const viewState = { current: "dashboard" };
  const VIEW_META = {
    dashboard: ["Tổng quan", "Tiến độ học của bạn"],
    practice: ["Luyện tập", "Chấm ngay và xem giải thích từng câu"],
    exam: ["Thi thử", "Làm bài tính giờ như thi thật"],
    review: ["Câu làm sai", "Ôn lại những câu bạn từng sai"],
    docs: ["Tài liệu", "Bản giải chi tiết & phím tắt"],
    slides: ["Slide bài giảng", "Xem PDF ngay trong web"]
  };
  function goView(name) {
    if (!VIEW_META[name]) return;
    viewState.current = name;
    $$(".nav-item").forEach((b) => {
      const on = b.dataset.view === name;
      b.classList.toggle("active", on);
      b.setAttribute("aria-selected", String(on));
    });
    $$(".view").forEach((v) => v.classList.toggle("active", v.id === name + "-view"));
    $("#view-title").textContent = VIEW_META[name][0];
    $("#view-sub").textContent = VIEW_META[name][1];
    if (viewState.current !== "exam") $("#view-sub").textContent = VIEW_META[name][1];
    try { sessionStorage.setItem("nkdl_view", name); } catch (e) { /* bỏ qua */ }
    if (name === "review") renderReview();
    if (name === "dashboard") refreshDashboard();
    if (name === "slides") initViewer();
    const y = window.scrollY;
    window.scrollTo({ top: 0, behavior: y > 200 ? "smooth" : "auto" });
  }
  $$(".nav-item").forEach((b) => b.addEventListener("click", () => goView(b.dataset.view)));
  document.addEventListener("click", (e) => {
    const t = e.target.closest("[data-goto]");
    if (!t) return;
    const name = t.dataset.goto;
    goView(name);
    if (name === "practice" && t.dataset.chapter) {
      $("#f-chapter").value = t.dataset.chapter;
      applyFilters();
    }
  });

  function updateWrongBadge() {
    const b = $("#wrong-count");
    if (!b) return;
    const n = store.wrong.length;
    b.textContent = n > 99 ? "99+" : String(n);
    b.classList.toggle("hidden", n === 0);
  }

  // ----------------------------------------------------------------- branding
  $("#brand-sub").textContent = QUESTIONS.length + " câu hỏi";

  // ---------------------------------------------------------------- luyện tập
  const chSel = $("#f-chapter");
  chSel.append(new Option("Tất cả chương (" + QUESTIONS.length + " câu)", "all"));
  Object.keys(CHAPTER_NAMES).forEach((ch) => {
    const n = QUESTIONS.filter((q) => String(q.chapter) === ch).length;
    if (n) chSel.append(new Option("Chương " + ch + ": " + CHAPTER_NAMES[ch] + " (" + n + ")", ch));
  });

  let practiceList = [];
  let practicePage = 0;
  let shuffledOrder = null;

  function filtered() {
    const ch = chSel.value, d = $("#f-diff").value, st = $("#f-status").value;
    const kw = normalize($("#f-search").value.trim());
    return QUESTIONS.filter((q) =>
      (ch === "all" || String(q.chapter) === ch) &&
      (d === "all" || String(q.difficulty) === d) &&
      (st === "all" || (st === "todo" && !isDone(q.id)) ||
        (st === "wrong" && isDone(q.id) && !isRight(q.id)) || (st === "right" && isRight(q.id))) &&
      (!kw || searchIndex.get(q.id).includes(kw))
    );
  }
  function applyFilters() {
    const list = filtered();
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
    if (!practiceList.length) {
      const e = el("div", "empty");
      e.append(el("b", "", "Không có câu hỏi nào phù hợp bộ lọc"));
      e.append(document.createTextNode("Thử đổi chương hoặc xoá từ khoá tìm kiếm."));
      box.append(e);
    }
    const start = practicePage * PAGE_SIZE;
    practiceList.slice(start, start + PAGE_SIZE).forEach((q, i) => box.append(buildCard(q, start + i + 1, "practice")));
    renderPager($("#practice-pager"), practiceList.length, practicePage, (p) => {
      practicePage = p;
      renderPractice();
      $("#practice-list").scrollIntoView({ behavior: "smooth", block: "start" });
    });
    updatePracticeStats();
  }
  function renderPager(box, total, page, go) {
    box.innerHTML = "";
    const pages = Math.ceil(total / PAGE_SIZE);
    if (pages <= 1) return;
    const prev = el("button", "btn ghost small", "← Trước");
    const next = el("button", "btn ghost small", "Sau →");
    prev.type = "button"; next.type = "button";
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
    const done = ids.filter(isDone).length;
    const right = ids.filter(isRight).length;
    $("#practice-stats").textContent = ids.length + " câu  ·  đã làm " + done + "  ·  đúng " + right +
      (done ? "  (" + Math.round((right / done) * 100) + "%)" : "");
    $("#practice-bar").style.width = ids.length ? (done / ids.length) * 100 + "%" : "0";
  }
  ["#f-chapter", "#f-diff", "#f-status", "#f-shuffle"].forEach((s) => $(s).addEventListener("change", applyFilters));
  let searchTimer;
  $("#f-search").addEventListener("input", () => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(applyFilters, 250);
  });

  // ------------------------------------------------------------------ thi thử
  const examChBox = $("#exam-chapters");
  Object.keys(CHAPTER_NAMES).forEach((ch) => {
    const n = QUESTIONS.filter((q) => String(q.chapter) === ch).length;
    if (!n) return;
    const lab = el("label");
    const cb = document.createElement("input");
    cb.type = "checkbox"; cb.value = ch; cb.checked = true;
    lab.append(cb, el("span", "", "Chương " + ch + ". " + CHAPTER_NAMES[ch]), el("span", "cnt", n + " câu"));
    examChBox.append(lab);
  });
  $("#exam-all-ch").onclick = () => $$("input", examChBox).forEach((c) => (c.checked = true));
  $("#exam-none-ch").onclick = () => $$("input", examChBox).forEach((c) => (c.checked = false));

  let examCards = [], examQs = [], timer = null, secondsLeft = 0, examMinutes = 0;

  $("#start-exam-btn").addEventListener("click", () => {
    const chs = $$("input:checked", examChBox).map((c) => +c.value);
    const d = $("#exam-diff").value;
    const pool = QUESTIONS.filter((q) => chs.includes(q.chapter) && (d === "all" || String(q.difficulty) === d));
    if (!pool.length) { alert("Hãy chọn ít nhất một chương có câu hỏi."); return; }
    let n = parseInt($("#exam-count").value, 10);
    if (!(n > 0)) n = 40;
    n = Math.min(n, pool.length);
    examMinutes = parseInt($("#exam-minutes").value, 10);
    if (!(examMinutes > 0)) examMinutes = 45;

    const picked = shuffle(pool).slice(0, n);
    examQs = $("#exam-order").value === "chapter"
      ? picked.slice().sort((a, b) => a.chapter - b.chapter)
      : picked;

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
    secondsLeft = examMinutes * 60;
    tick();
    clearInterval(timer);
    timer = setInterval(tick, 1000);
    updateExamProgress();
    window.scrollTo({ top: 0 });
  });

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
    $("#view-sub").textContent = "Đang làm bài · " + examQs.length + " câu · " + examMinutes + " phút";
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
    store.exams.unshift({ at: Date.now(), total, right, minutes: examMinutes });
    store.exams = store.exams.slice(0, 12);
    writeStore();

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
      tr.append(el("td", "", "Chương " + ch + ". " + CHAPTER_NAMES[ch]), el("td", "", byCh[ch][0] + " / " + byCh[ch][1]));
      tb.append(tr);
    });
    sum.append(tb);
    $("#submit-exam-btn").classList.add("hidden");
    $("#retry-exam-btn").classList.remove("hidden");
    $("#exam-nav").classList.add("hidden");
    $("#exam-progress").textContent = "Đã nộp bài";
    $("#view-sub").textContent = "Kết quả: " + right + "/" + total + " câu đúng";
    window.scrollTo({ top: 0, behavior: "smooth" });
    refreshDashboard();
  }
  $("#submit-exam-btn").addEventListener("click", () => submitExam(false));
  $("#retry-exam-btn").addEventListener("click", () => {
    $("#exam-running").classList.add("hidden");
    $("#exam-setup").classList.remove("hidden");
    $("#view-sub").textContent = VIEW_META.exam[1];
    window.scrollTo({ top: 0 });
  });

  // ---------------------------------------------------------------- câu sai
  let reviewPage = 0;
  function renderReview() {
    const box = $("#review-list");
    box.innerHTML = "";
    const list = store.wrong.map((id) => byId.get(id)).filter(Boolean);
    if (!list.length) {
      const e = el("div", "empty");
      e.append(el("b", "", "Chưa có câu nào làm sai"));
      e.append(document.createTextNode("Làm bài ở phần Luyện tập hoặc Thi thử, câu sai sẽ tự gom về đây."));
      box.append(e);
      return;
    }
    const pages = Math.ceil(list.length / PAGE_SIZE);
    if (reviewPage >= pages) reviewPage = pages - 1;
    const start = reviewPage * PAGE_SIZE;
    list.slice(start, start + PAGE_SIZE).forEach((q, i) => box.append(buildCard(q, start + i + 1, "practice")));
    const pager = el("div", "pager");
    box.append(pager);
    renderPager(pager, list.length, reviewPage, (p) => {
      reviewPage = p;
      renderReview();
      window.scrollTo({ top: 0 });
    });
  }
  $("#clear-wrong-btn").addEventListener("click", () => {
    if (!confirm("Xoá danh sách câu làm sai?")) return;
    store.wrong = [];
    save();
    updateWrongBadge();
    renderReview();
    refreshDashboard();
  });

  // --------------------------------------------------------------- tổng quan
  function refreshDashboard() {
    if (!$("#dash-chapters")) return;
    const total = QUESTIONS.length;
    const doneIds = Object.keys(store.questions).filter((id) => byId.has(id));
    const done = doneIds.length;
    const right = doneIds.filter(isRight).length;
    const pct = total ? Math.round((done / total) * 100) : 0;

    $("#dash-total").textContent = " / " + total;
    $("#dash-done").firstChild.textContent = String(done);
    $("#dash-right").textContent = String(right);
    $("#dash-wrong").textContent = String(store.wrong.length);
    $("#dash-today").firstChild.textContent = String(store.daily[todayKey()] || 0);
    $("#dash-ring-pct").textContent = pct + "%";
    const circ = 2 * Math.PI * 45;
    const bar = $("#dash-ring-bar");
    bar.style.strokeDasharray = circ;
    bar.style.strokeDashoffset = circ * (1 - pct / 100);
    $("#dash-updated").textContent = done ? "Đã làm " + done + " câu" : "Bắt đầu làm câu đầu tiên đi nào";

    // theo chương
    const box = $("#dash-chapters");
    box.innerHTML = "";
    Object.keys(CHAPTER_NAMES).forEach((ch) => {
      const qs = QUESTIONS.filter((q) => String(q.chapter) === ch);
      if (!qs.length) return;
      const d = qs.filter((q) => isDone(q.id)).length;
      const r = qs.filter((q) => isRight(q.id)).length;
      const p = Math.round((d / qs.length) * 100);
      const row = el("div", "ch-row");
      const nm = el("button", "nm", "");
      nm.type = "button";
      nm.className = "nm btn-reset";
      nm.style.cssText = "background:none;border:0;padding:0;text-align:left;cursor:pointer;color:inherit;font:inherit";
      nm.innerHTML = "";
      nm.append(el("b", "", "Chương " + ch + "."), document.createTextNode(" " + CHAPTER_NAMES[ch]));
      nm.title = "Luyện riêng chương " + ch;
      nm.addEventListener("click", () => {
        $("#f-chapter").value = ch;
        $("#f-search").value = "";
        $("#f-diff").value = "all";
        $("#f-status").value = "all";
        applyFilters();
        goView("practice");
      });
      const mini = el("div", "mini");
      const fill = document.createElement("i");
      fill.style.width = p + "%";
      mini.append(fill);
      const ct = el("div", "ct", d + "/" + qs.length + " · " + r + " đúng");
      row.append(nm, mini, ct);
      box.append(row);
    });

    // lịch sử thi
    const exBox = $("#dash-exams");
    exBox.innerHTML = "";
    $("#dash-exam-count").textContent = store.exams.length ? store.exams.length + " bài gần nhất" : "";
    if (!store.exams.length) {
      exBox.append(el("div", "muted", "Chưa có bài thi thử nào. Vào mục Thi thử để làm một bài tính giờ."));
    } else {
      const tb = el("table");
      tb.style.cssText = "width:100%;border-collapse:collapse;font-size:.88rem";
      const head = el("tr");
      ["Thời điểm", "Số câu", "Đúng", "Điểm"].forEach((t) => {
        const th = el("th", "", t);
        th.style.cssText = "text-align:left;padding:6px 8px;color:var(--muted);font-size:.75rem;text-transform:uppercase;letter-spacing:.4px;border-bottom:1px solid var(--line)";
        head.append(th);
      });
      tb.append(head);
      store.exams.forEach((e2) => {
        const tr = el("tr");
        const d2 = new Date(e2.at);
        const cells = [
          d2.toLocaleDateString("vi-VN") + " " + d2.toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" }),
          String(e2.total),
          String(e2.right),
          ((e2.right / e2.total) * 10).toFixed(1)
        ];
        cells.forEach((c) => {
          const td = el("td", "", c);
          td.style.cssText = "padding:6px 8px;border-bottom:1px solid var(--line)";
          tr.append(td);
        });
        tb.append(tr);
      });
      exBox.append(tb);
    }
  }

  // -------------------------------------------------- sao lưu / khôi phục
  $("#export-progress-btn").addEventListener("click", () => {
    const payload = {
      app: "nkdl-on-thi",
      version: 3,
      exportedAt: new Date().toISOString(),
      total: QUESTIONS.length,
      questions: store.questions,
      wrong: store.wrong,
      exams: store.exams,
      daily: store.daily
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "tien-do-on-thi-" + todayKey() + ".json";
    document.body.append(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    toast("Đã xuất tiến độ: " + Object.keys(store.questions).length + " câu");
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
        const incoming = normalise(data);
        const known = Object.keys(incoming.questions);
        if (!known.length) throw new Error("Không có câu nào khớp ngân hàng hiện tại");
        if (!confirm("Nhập " + known.length + " câu từ file?\nTiến độ hiện tại được giữ nguyên và gộp thêm.")) return;
        known.forEach((id) => {
          const a = store.questions[id], b = incoming.questions[id];
          if (!a) { store.questions[id] = b; return; }
          store.questions[id] = { ok: a.ok || b.ok, at: Math.max(a.at, b.at), tries: Math.max(a.tries, b.tries) };
        });
        const set = new Set(store.wrong.concat(incoming.wrong));
        store.wrong = Array.from(set).filter((id) => store.questions[id] && !store.questions[id].ok);
        incoming.exams.forEach((e) => store.exams.push(e));
        store.exams = store.exams.sort((a, b) => b.at - a.at).slice(0, 20);
        Object.keys(incoming.daily).forEach((d) => {
          store.daily[d] = Math.max(store.daily[d] || 0, incoming.daily[d]);
        });
        writeStore();
        updateWrongBadge();
        applyFilters();
        refreshDashboard();
        toast("Đã nhập " + known.length + " câu từ file");
      } catch (err) {
        alert("File không hợp lệ: " + err.message);
      } finally {
        importFile.value = "";
      }
    };
    reader.readAsText(f, "utf-8");
  });

  $("#reset-progress-btn").addEventListener("click", () => {
    if (!confirm("Xoá toàn bộ tiến độ: câu đã làm, danh sách câu sai và lịch sử thi?")) return;
    store = blankStore();
    writeStore();
    updateWrongBadge();
    applyFilters();
    renderReview();
    refreshDashboard();
    toast("Đã xoá toàn bộ tiến độ");
  });

  // ----------------------------------------------------------- tài liệu HTML
  const DOC_FILE = "giai-cau-hoi-chan-doan.html";
  const docStatus = $("#doc-status");
  function setDocStatus(msg, kind) {
    if (!docStatus) return;
    docStatus.textContent = msg;
    docStatus.className = "muted doc-status " + (kind || "");
  }
  if (location.protocol === "file:") {
    setDocStatus("Mở bằng file:// — nút tải vẫn dùng được.");
  } else {
    fetch(DOC_FILE, { method: "HEAD" })
      .then((r) => {
        if (!r.ok) throw new Error("HTTP " + r.status);
        const len = r.headers.get("content-length");
        const kb = len ? Math.round(parseInt(len, 10) / 1024) : null;
        setDocStatus(kb ? "Sẵn sàng (" + kb + " KB)" : "Sẵn sàng", "ok");
      })
      .catch(() => setDocStatus("Không tìm thấy file trên máy chủ.", "err"));
  }
  const dl = $("#doc-download");
  if (dl) dl.addEventListener("click", () => toast("Đang tải " + DOC_FILE + " …"));

  // ------------------------------------------------------- trình xem PDF
  const SLIDE_KEY = "nkdl_last_slide";
  const viewer = {
    ready: false,
    loading: null,
    pdf: null,
    page: 1,
    total: 0,
    file: null
  };
  const slideSelect = $("#slide-select");
  const stage = $("#slide-stage");

  SLIDES.forEach((s, i) => slideSelect.append(new Option(s.name, String(i))));

  function loadPdfJs() {
    if (viewer.loading) return viewer.loading;
    viewer.loading = new Promise((resolve, reject) => {
      if (window.pdfjsLib) { resolve(window.pdfjsLib); return; }
      const sc = document.createElement("script");
      sc.src = "assets/pdfjs/pdf.min.js";
      sc.onload = () => {
        if (!window.pdfjsLib) { reject(new Error("Không nạp được pdf.js")); return; }
        window.pdfjsLib.GlobalWorkerOptions.workerSrc = "assets/pdfjs/pdf.worker.min.js";
        resolve(window.pdfjsLib);
      };
      sc.onerror = () => reject(new Error("Không nạp được pdf.js (kiểm tra kết nối mạng)"));
      document.head.append(sc);
    });
    return viewer.loading;
  }

  function stageMessage(title, detail) {
    stage.innerHTML = "";
    const m = el("div", "viewer-msg");
    m.append(el("b", "", title));
    if (detail) m.append(document.createTextNode(detail));
    stage.append(m);
  }

  function updateSlidePageLabel() {
    $("#slide-page").textContent = viewer.total ? viewer.page + " / " + viewer.total : "—";
    $("#slide-prev").disabled = !viewer.total || viewer.page <= 1;
    $("#slide-next").disabled = !viewer.total || viewer.page >= viewer.total;
  }

  async function renderPage() {
    if (!viewer.pdf) return;
    const page = await viewer.pdf.getPage(viewer.page);
    const base = page.getViewport({ scale: 1 });
    const avail = Math.max(260, stage.clientWidth - 26);
    const scale = Math.min(avail / base.width, 2.2);
    const vp = page.getViewport({ scale: scale });
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const canvas = document.createElement("canvas");
    canvas.width = Math.floor(vp.width * dpr);
    canvas.height = Math.floor(vp.height * dpr);
    canvas.style.width = Math.floor(vp.width) + "px";
    canvas.style.height = Math.floor(vp.height) + "px";
    const ctx = canvas.getContext("2d");
    ctx.scale(dpr, dpr);
    await page.render({ canvasContext: ctx, viewport: vp }).promise;
    stage.innerHTML = "";
    stage.append(canvas);
    updateSlidePageLabel();
  }

  async function openSlide(index) {
    const item = SLIDES[index];
    if (!item) return;
    viewer.file = item;
    $("#slide-open").href = item.file;
    try { localStorage.setItem(SLIDE_KEY, String(index)); } catch (e) { /* bỏ qua */ }
    stageMessage("Đang mở " + item.name + " …", "");
    updateSlidePageLabel();
    try {
      const lib = await loadPdfJs();
      const task = lib.getDocument(item.file);
      viewer.pdf = await task.promise;
      viewer.total = viewer.pdf.numPages;
      const mem = Number($("#slide-page").dataset.lastPage || 0);
      viewer.page = index === Number($("#slide-select").value) && mem ? Math.min(mem, viewer.total) : 1;
      await renderPage();
      viewer.ready = true;
    } catch (err) {
      stage.innerHTML = "";
      const m = el("div", "viewer-msg");
      m.append(el("b", "", "Không mở được slide"));
      m.append(document.createTextNode(err && err.message ? err.message : "Lỗi không xác định"));
      const a = el("a", "btn ghost small", "Mở PDF ở tab mới");
      a.href = item.file;
      a.target = "_blank";
      a.rel = "noopener";
      a.style.marginTop = "14px";
      m.append(el("br"), el("br"), a);
      stage.append(m);
      updateSlidePageLabel();
    }
  }

  let viewerInited = false;
  function initViewer() {
    if (viewerInited) return;
    viewerInited = true;
    let last = 0;
    try { last = parseInt(localStorage.getItem(SLIDE_KEY), 10) || 0; } catch (e) { last = 0; }
    if (last < 0 || last >= SLIDES.length) last = 0;
    slideSelect.value = String(last);
    updateSlidePageLabel();
    if (!SLIDES.length) return;
    openSlide(last);
  }
  slideSelect.addEventListener("change", () => openSlide(+slideSelect.value));
  $("#slide-prev").addEventListener("click", () => {
    if (viewer.page > 1) { viewer.page--; renderPage(); }
  });
  $("#slide-next").addEventListener("click", () => {
    if (viewer.page < viewer.total) { viewer.page++; renderPage(); }
  });
  $("#slide-fit").addEventListener("click", () => { if (viewer.pdf) renderPage(); });

  let resizeTimer;
  window.addEventListener("resize", () => {
    if (viewState.current !== "slides" || !viewer.pdf) return;
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(renderPage, 220);
  });

  // ------------------------------------------------------------- bàn phím
  document.addEventListener("keydown", (e) => {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    const t = e.target;
    const typing = t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.tagName === "SELECT" || t.isContentEditable);
    if (typing) return;

    if (viewState.current === "slides") {
      if (e.key === "ArrowRight" || e.key === "PageDown") { $("#slide-next").click(); e.preventDefault(); }
      if (e.key === "ArrowLeft" || e.key === "PageUp") { $("#slide-prev").click(); e.preventDefault(); }
      return;
    }
    if (viewState.current !== "practice" && viewState.current !== "review") return;

    const container = viewState.current === "practice" ? $("#practice-list") : $("#review-list");
    const cards = $$(".q-card", container);
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
      if (input && !input.disabled) input.click();
      return;
    }
    if (e.key === "Enter") {
      if (card.classList.contains("locked")) return;
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

  // ----------------------------------------------------------------- init
  updateWrongBadge();
  applyFilters();
  refreshDashboard();
  const hash = (location.hash || "").replace("#", "");
  if (VIEW_META[hash]) goView(hash);
  else goView("dashboard");
})();
