# Ôn thi Nhà Kho Dữ Liệu & Tích Hợp

Web ôn thi trắc nghiệm cho môn Nhà kho dữ liệu và tích hợp (UEL, TS. Nguyễn Thôn Dã). Đây là trang tĩnh thuần HTML/CSS/JS nên deploy thẳng lên GitHub Pages, không cần cài gì.

## Có gì trong web

- **1433 câu hỏi** chia theo 9 chương lý thuyết và 1 phần thực hành (BigQuery, dbt, Medallion).
- **Luyện tập**: lọc theo chương, độ khó, nguồn đề, trạng thái (chưa làm / làm sai / làm đúng) và tìm theo từ khóa (gõ không dấu cũng được). Câu một đáp án được chấm ngay khi chọn; câu nhiều đáp án thì bấm "Kiểm tra".
- **Thi thử**: chọn số câu, thời gian, độ khó và các chương. Câu hỏi và thứ tự đáp án được xáo ngẫu nhiên; có điểm theo từng chương.
- **Câu làm sai**: tự gom các câu bạn từng làm sai để ôn lại.
- Tiến độ được lưu trên trình duyệt (localStorage) và có giao diện tối theo cài đặt máy.

## Nguồn câu hỏi

| Nguồn | Số câu | Ghi chú |
|---|---|---|
| Bộ đề 1 (`bank/questions_c1..c9.js`) | 1080 | Bộ đề web của anh chị khóa trước |
| Bộ đề 2 (`bank/questions_bo2.js`) | 230 | Lấy từ file HTML độc lập của anh chị khóa trước, có giải thích |
| Bổ sung (`bank/questions_bosung.js`) | 123 | Bổ sung những phần slide chưa được hỏi + câu hỏi chẩn đoán + phần thực hành, có giải thích |

## Cấu trúc thư mục

```
web-on-thi/
├── index.html              # Trang chính
├── assets/
│   ├── style.css
│   └── app.js              # Toàn bộ logic: luyện tập, thi thử, câu sai
├── data/
│   └── questions.js        # TỰ SINH từ bank/ — không sửa tay
├── bank/                   # Nơi soạn và sửa câu hỏi
│   ├── questions_c1.js … questions_c9.js
│   ├── questions_bo2.js
│   └── questions_bosung.js
├── tools/
│   ├── merge_questions.js  # Gộp bank/ -> data/questions.js và kiểm tra lỗi
│   └── server.js           # Server xem thử ở máy
├── .github/workflows/pages.yml  # Tự deploy lên GitHub Pages
├── .nojekyll
└── package.json
```

## Chạy ở máy

Cần Node.js:

```bash
node tools/merge_questions.js   # chỉ cần khi có sửa bank/
node tools/server.js            # mở http://localhost:48173
```

Hoặc mở thẳng `index.html` bằng trình duyệt.

## Deploy lên GitHub Pages

1. Tạo repo mới trên GitHub (ví dụ `on-thi-nha-kho-du-lieu`) rồi push thư mục này lên nhánh `main`:
   ```bash
   cd web-on-thi
   git init
   git add .
   git commit -m "Web on thi Nha kho du lieu"
   git branch -M main
   git remote add origin https://github.com/<tên-github>/on-thi-nha-kho-du-lieu.git
   git push -u origin main
   ```
2. Trên GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Workflow `Deploy GitHub Pages` sẽ tự chạy; vài phút sau web có ở `https://<tên-github>.github.io/on-thi-nha-kho-du-lieu/`.

Muốn cách đơn giản hơn (không dùng Actions): chọn **Source: Deploy from a branch → main / (root)**. Khi đó nhớ chạy `node tools/merge_questions.js` và commit luôn `data/questions.js` mỗi lần sửa câu hỏi.

## Thêm hoặc sửa câu hỏi

Mỗi câu hỏi có dạng:

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

Trong `questions_bosung.js`, cứ đặt đáp án đúng ở đầu mảng; script build sẽ tự xáo vị trí. Sau khi sửa, chạy `node tools/merge_questions.js` — script sẽ báo lỗi nếu thiếu trường, trùng id, sai số phương án hoặc có emoji.
