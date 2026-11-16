// Server tĩnh để xem web ở máy cá nhân (không cần cài thêm package)
// Chạy từ thư mục gốc repo:  node tools/server.js   rồi mở http://localhost:48173
const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 48173;
const ROOT = path.join(__dirname, "..");
const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".pdf": "application/pdf",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".ico": "image/x-icon",
  ".map": "application/json; charset=utf-8"
};

http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split("?")[0]);

  // Nhận báo cáo tự kiểm tra từ trang kiểm thử (chỉ dùng khi phát triển)
  if (p === "/__report" && req.method === "POST") {
    let body = "";
    req.on("data", (c) => (body += c));
    req.on("end", () => {
      fs.appendFileSync(path.join(ROOT, "tools", "report.log"), body + "\n", "utf-8");
      res.writeHead(204);
      res.end();
    });
    return;
  }

  if (p === "/") p = "/index.html";
  const file = path.normalize(path.join(ROOT, p));
  if (!file.startsWith(ROOT)) { res.writeHead(403); return res.end("Forbidden"); }
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" }); return res.end("404: " + p); }
    res.writeHead(200, { "Content-Type": MIME[path.extname(file).toLowerCase()] || "application/octet-stream" });
    res.end(data);
  });
}).listen(PORT, () => console.log("Web ôn thi đang chạy tại http://localhost:" + PORT));
