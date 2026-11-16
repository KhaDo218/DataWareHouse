# Ôn thi Nhà Kho Dữ Liệu & Tích Hợp

Web ôn thi trắc nghiệm cho môn Nhà kho dữ liệu và tích hợp. Trang tĩnh thuần HTML/CSS/JS — không cần cài đặt, deploy thẳng lên GitHub Pages.

## Có gì trong web

Một giao diện duy nhất, sáu khu vực, chuyển bằng thanh điều hướng bên trái (trên điện thoại là thanh dưới đáy).

| Khu vực | Nội dung |
|---|---|
| **Tổng quan** | Vòng tiến độ tổng, số câu đã làm / đúng / cần ôn lại / hôm nay, tiến độ từng chương (bấm vào chương để luyện riêng), lịch sử thi thử, xuất–nhập tiến độ |
| **Luyện tập** | Lọc theo chương, độ khó, trạng thái; tìm kiếm không dấu. Chọn đáp án là chấm ngay và hiện **giải thích** |
| **Thi thử** | Chọn số câu, thời gian, độ khó, chương, cách sắp xếp. Có **bảng số câu** để nhảy nhanh và **đánh dấu** câu cần xem lại |
| **Câu sai** | Tự gom câu từng làm sai; làm đúng lại thì tự gỡ khỏi danh sách |
| **Tài liệu** | Bản giải chi tiết bộ câu hỏi chẩn đoán (tải về hoặc mở xem), phím tắt, sao lưu tiến độ |
| **Slide** | Trình xem **PDF** 12 file bài giảng ngay trong web, có nút lật trang và phím ← → |

### Câu hỏi và giải thích

- **1498 câu** chia 9 chương lý thuyết và 1 phần thực hành (BigQuery, dbt, Medallion).
- **Toàn bộ câu đều có giải thích ngắn** đi kèm. Câu có nhiều ý thì giải thích được chia **gạch đầu dòng** cho dễ theo dõi.
- Đáp án nhiễu được rà soát để **cùng chủ đề, cùng cấu trúc, cùng độ dài** với đáp án đúng — không thể "nhìn độ dài là đoán ra đáp án".
- Câu hỏi trùng lặp đã được gộp, chỉ giữ một bản.
- Chi tiết quá trình rà soát: xem [RA_SOAT.md](RA_SOAT.md).

### Tiến độ học

Lưu bằng `localStorage`, khoá `nkdl_onthi_v3`:

```json
{
  "version": 3,
  "questions": { "c1-q1": { "ok": true, "at": 1763400000000, "tries": 1 } },
  "wrong": ["c1-q7"],
  "exams": [{ "at": 1763400000000, "total": 40, "right": 33, "minutes": 45 }],
  "daily": { "2026-11-16": 23 }
}
```

- `questions`: mỗi câu đã làm, đúng hay sai, thời điểm, số lần thử.
- `wrong`: danh sách câu đang sai (tự gỡ khi làm đúng lại).
- `exams`: 12 bài thi thử gần nhất.
- `daily`: số câu làm trong ngày, dùng cho ô "Hôm nay".

Tiến độ ghi sau mỗi câu (gộp 150 ms). Dữ liệu cũ `nkdl_onthi_v2` được tự động chuyển sang khi nâng cấp.

## Chạy ở máy

Cần Node.js:

```bash
node tools/server.js            # mở http://localhost:48173
node tools/check.js             # kiểm tra tĩnh: ngoặc, id, tài nguyên, câu hỏi
node tools/merge_questions.js   # chỉ cần khi sửa bank/ hoặc patches/
```

## Cấu trúc thư mục

```
web-on-thi/
├── index.html                      # Trang chính (6 khu vực)
├── giai-cau-hoi-chan-doan.html     # Tài liệu giải chi tiết
├── assets/
│   ├── style.css                   # Toàn bộ CSS, có biến màu sáng/tối
│   ├── app.js                      # Toàn bộ logic
│   └── pdfjs/                      # pdf.js để xem slide trong web
├── data/
│   └── questions.js                # TỰ SINH từ bank/ + patches/
├── slides/                         # 12 file PDF bài giảng
├── bank/                           # Câu hỏi gốc (soạn tay)
│   ├── questions_c1.js … questions_c9.js
│   ├── questions_bo2.js
│   ├── questions_bosung.js
│   └── questions_moi.js            # TỰ SINH từ tools/import_new.js
├── patches/                        # Bản vá theo id: giải thích + đáp án đã cân
├── tools/
│   ├── merge_questions.js          # bank/ + patches/ -> data/questions.js
│   ├── import_new.js               # nạp câu hỏi mới, kiểm tra rồi ghi bank/
│   ├── check.js                    # Kiểm tra tĩnh
│   ├── verify-answers.js           # Đáp án sau khi vá có giữ nguyên ý nghĩa
│   ├── e2e.js                      # Kịch bản kiểm thử toàn bộ luồng
│   ├── cdp.js                      # Chụp ảnh / đọc console qua DevTools
│   └── server.js                   # Server xem thử ở máy
├── RA_SOAT.md                      # Ghi chú rà soát nội dung
└── package.json
```

## Lệnh kiểm tra

```bash
node tools/check.js               # cấu trúc, tài nguyên, ngân hàng câu hỏi
node tools/verify-answers.js      # đáp án sau khi vá có giữ nguyên ý nghĩa
node tools/import_new.js --check  # câu mới trước khi ghi vào bank/
node tools/e2e.js                 # chạy thử toàn bộ luồng trong trình duyệt
```

## Thêm hoặc sửa câu hỏi

Câu hỏi gốc nằm trong `bank/`, mỗi câu có dạng:

```js
{
  id: "bs-c4-99",          // duy nhất
  chapter: 4,              // 1..10
  difficulty: 2,           // 1 Dễ, 2 Trung bình, 3 Khó
  type: "single",          // "single" hoặc "multiple"
  question: "Nội dung câu hỏi?",
  options: ["A", "B", "C", "D"],   // đúng 4 phương án
  correct: [0],            // chỉ số đáp án đúng (0 = A)
  explanation: "Giải thích (không bắt buộc)"
}
```

Muốn **sửa giải thích hoặc đáp án nhiễu** mà không đụng vào `bank/`, thêm một file vào `patches/`:

```json
{
  "chunk": "fix-c5",
  "items": [
    { "id": "c5-q12", "explanation": "Nội dung giải thích mới" },
    { "id": "c5-q15", "options": ["A mới", "B mới", "C mới", "D mới"] }
  ]
}
```

`correct` không đổi khi chỉ vá `options` — bản vá chỉ thay **nội dung chữ**, giữ nguyên thứ tự. Sau khi sửa, chạy `node tools/merge_questions.js`; script sẽ báo lỗi nếu thiếu trường, trùng id, sai số phương án, có emoji, hoặc đáp án đúng còn dài vượt trội so với đáp án nhiễu.

## Deploy lên GitHub Pages

Trang chạy thật ở <https://khado218.github.io/DataWareHouse/> (nhánh `main`, thư mục gốc).

Nếu repo chuyển sang dùng GitHub Actions, tệp mẫu `tools/github-pages-workflow.yml` đã copy sẵn cả `*.html`, thư mục `slides/` và `assets/pdfjs/`.
