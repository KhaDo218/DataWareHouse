// Kịch bản kiểm tra trong trình duyệt: thi thử, luyện tập, slide, tiến độ
// Chạy: node tools/e2e.js
const { spawn } = require("child_process");
const fs = require("fs");
const os = require("os");
const path = require("path");

const BASE = process.env.BASE || "http://localhost:48173/";
const EDGE = [
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe"
].find((p) => fs.existsSync(p));

const profile = path.join(os.tmpdir(), "e2e-" + Date.now());
const port = 9700 + Math.floor(Math.random() * 250);
const child = spawn(EDGE, [
  "--headless=new", "--disable-gpu", "--no-first-run",
  "--remote-debugging-port=" + port, "--user-data-dir=" + profile,
  "--window-size=1280,900", "about:blank"
], { stdio: "ignore" });

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

(async () => {
  let target = null;
  for (let i = 0; i < 60 && !target; i++) {
    try {
      target = (await (await fetch("http://127.0.0.1:" + port + "/json/list")).json()).find((t) => t.type === "page");
    } catch (e) { /* chờ */ }
    if (!target) await sleep(200);
  }
  if (!target) { console.error("không mở được trình duyệt"); child.kill(); process.exit(1); }

  const ws = new WebSocket(target.webSocketDebuggerUrl);
  let id = 0;
  const pending = new Map();
  const errors = [];
  const send = (m, p) => new Promise((res) => { const mid = ++id; pending.set(mid, res); ws.send(JSON.stringify({ id: mid, method: m, params: p || {} })); });
  ws.onmessage = (ev) => {
    const m = JSON.parse(ev.data);
    if (m.id && pending.has(m.id)) { pending.get(m.id)(m.result); pending.delete(m.id); return; }
    if (m.method === "Runtime.exceptionThrown") errors.push((m.params.exceptionDetails.exception || {}).description || m.params.exceptionDetails.text);
    if (m.method === "Network.responseReceived" && m.params.response.status >= 400 && !/favicon/.test(m.params.response.url)) {
      errors.push("HTTP " + m.params.response.status + " " + m.params.response.url);
    }
  };
  await new Promise((r) => { ws.onopen = r; });
  await send("Runtime.enable");
  await send("Network.enable");
  await send("Page.enable");
  await send("Page.navigate", { url: BASE });
  await sleep(2500);

  const steps = [];
  async function step(label, expression, waitMs) {
    const r = await send("Runtime.evaluate", { expression, returnByValue: true, awaitPromise: true });
    if (waitMs) await sleep(waitMs);
    steps.push({
      label,
      error: r.exceptionDetails ? (r.exceptionDetails.text + " " + ((r.exceptionDetails.exception || {}).description || "")) : null,
      value: r.result ? r.result.value : null
    });
  }

  // ---- LUYỆN TẬP: chọn đáp án đúng để kiểm tra nhánh "Chính xác"
  await step("luyện tập: chọn đáp án đúng", `(function(){
    document.querySelector('[data-view="practice"]').click();
    var c = document.querySelector('#practice-list .q-card');
    var id = c.dataset.id;
    var q = QUESTIONS.filter(function(x){return x.id===id})[0];
    var order = [].slice.call(c.querySelectorAll('.option')).map(function(o){return +o.dataset.orig});
    q.correct.forEach(function(orig){
      var pos = order.indexOf(orig);
      c.querySelectorAll('.option input')[pos].click();
    });
    var b = c.querySelector('.btn.primary');
    if (b && !b.classList.contains('hidden')) b.click();
    var e = c.querySelector('.explain');
    return JSON.stringify({id:id, locked:c.classList.contains('locked'), verdict:c.querySelector('.verdict').textContent, hasExplain:!!e});
  })()`);

  // ---- THI THỬ: chạy một bài 5 câu rồi nộp
  await step("thi thử: bắt đầu", `(function(){
    document.querySelector('[data-view="exam"]').click();
    document.getElementById('exam-count').value = '5';
    document.getElementById('start-exam-btn').click();
    return JSON.stringify({
      running: !document.getElementById('exam-running').classList.contains('hidden'),
      cards: document.querySelectorAll('#exam-list .q-card').length,
      navCells: document.querySelectorAll('#exam-nav-grid .nav-cell').length,
      timer: document.getElementById('exam-timer').textContent
    });
  })()`);

  await step("thi thử: trả lời + đánh dấu", `(function(){
    var c = document.querySelector('#exam-list .q-card');
    c.querySelectorAll('.option input')[0].click();
    c.querySelector('.flag-btn').click();
    return JSON.stringify({
      navDone: document.querySelectorAll('#exam-nav-grid .nav-cell.done').length,
      navFlag: document.querySelectorAll('#exam-nav-grid .nav-cell.flag').length,
      progress: document.getElementById('exam-progress').textContent
    });
  })()`);

  await step("thi thử: nộp bài", `(function(){
    window.confirm = function(){ return true; };
    document.getElementById('submit-exam-btn').click();
    var s = document.getElementById('exam-summary');
    return JSON.stringify({
      summaryShown: !s.classList.contains('hidden'),
      score: s.querySelector('.big') ? s.querySelector('.big').textContent : null,
      tableRows: s.querySelectorAll('table tr').length,
      explanations: document.querySelectorAll('#exam-list .explain').length
    });
  })()`);

  await step("thi thử: lịch sử lưu vào tổng quan", `(function(){
    document.querySelector('[data-view="dashboard"]').click();
    return JSON.stringify({
      examRows: document.querySelectorAll('#dash-exams table tr').length,
      done: document.getElementById('dash-done').innerText,
      today: document.getElementById('dash-today').innerText,
      pct: document.getElementById('dash-ring-pct').textContent
    });
  })()`);

  // ---- TIẾN ĐỘ: tải lại trang xem còn không
  await step("tải lại trang", `location.reload(); 'reloading'`);
  await sleep(2500);
  await step("sau khi tải lại: tiến độ còn", `JSON.stringify({
    done: document.getElementById('dash-done').innerText,
    wrong: document.getElementById('dash-wrong').innerText,
    stored: Object.keys(JSON.parse(localStorage.getItem('nkdl_onthi_v3') || '{}').questions || {}).length
  })`);

  // ---- CÂU SAI
  await step("câu sai: có danh sách", `(function(){
    document.querySelector('[data-view="review"]').click();
    return JSON.stringify({
      cards: document.querySelectorAll('#review-list .q-card').length,
      empty: !!document.querySelector('#review-list .empty')
    });
  })()`);

  // ---- SLIDE
  await step("slide: mở", `(function(){
    document.querySelector('[data-view="slides"]').click();
    return 'ok';
  })()`, 5000);
  await step("slide: canvas + chuyển trang", `(function(){
    var s = document.getElementById('slide-stage');
    document.getElementById('slide-next').click();
    return JSON.stringify({
      canvas: !!s.querySelector('canvas'),
      page: document.getElementById('slide-page').textContent,
      selectCount: document.getElementById('slide-select').options.length
    });
  })()`, 1500);

  // ---- ĐỔI THEME
  await step("đổi giao diện", `(function(){
    document.getElementById('theme-btn').click();
    return JSON.stringify({
      theme: document.documentElement.getAttribute('data-theme'),
      saved: localStorage.getItem('nkdl_theme')
    });
  })()`);

  // ---- XUẤT TIẾN ĐỘ (không tải file thật, chỉ kiểm tra hàm chạy)
  await step("xuất tiến độ không lỗi", `(function(){
    document.querySelector('[data-view="dashboard"]').click();
    try { document.getElementById('export-progress-btn').click(); return 'ok'; } catch(e){ return 'lỗi: '+e.message; }
  })()`);

  console.log(JSON.stringify({ steps, errors }, null, 1));
  ws.close(); child.kill();
  try { fs.rmSync(profile, { recursive: true, force: true }); } catch (e) { /* bỏ qua */ }
  process.exit(0);
})();
