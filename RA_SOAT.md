# Rà soát ngân hàng câu hỏi

Ghi chú về những gì đã kiểm tra và sửa trong đợt nâng cấp giao diện + nội dung.

## Quy mô

| Giai đoạn | Số câu |
|---|---|
| Ban đầu | 1433 |
| Sau khi gộp câu trùng | 1416 |
| Thêm câu bổ sung cho phần thiếu | +68 |
| **Hiện tại** | **1484** |

Phân bố hiện tại: chương 1 (195), 2 (158), 3 (175), 4 (178), 5 (207), 6 (145), 7 (142), 8 (109), 9 (140), 10 (35).

## Câu trùng đã loại

17 câu trùng nội dung (cùng câu hỏi, khác mã) đã bỏ, giữ lại một bản. Danh sách cặp trong `tools/merge_questions.js` (mục `DUPLICATES`). Ví dụ:

- `c1-q81` trùng `c1-q32` (Loại bỏ CAPEX)
- `b-c2-q9` trùng `c2-q38` (Transaction Fact Table)
- `b-c4-q20` trùng `c4-q77` (Discretization)
- `c7-q109` trùng `b-c7-q28` (Data Audit Trail)

Giải thích của bản bị bỏ được chuyển sang bản giữ lại nếu bản giữ lại chưa có.

Các cặp **gần giống nhưng khác nội dung** được giữ nguyên vì hỏi hai mặt của cùng khái niệm (ví dụ `c5-q2` hỏi thành phần X, `c5-q3` hỏi thành phần Y; chuỗi câu BFS/DFS là các đồ thị khác nhau).

## Giải thích

**Toàn bộ 1416 câu đã có giải thích** (trước đợt này chỉ 353 câu có).

Quy ước:
- 1–3 câu, 80–260 ký tự.
- Câu nhiều ý (đặc biệt câu chọn nhiều đáp án, câu so sánh) dùng gạch đầu dòng `• `, mỗi ý một dòng.
- Câu tính toán trình bày phép tính rồi ra kết quả.
- Bám sát slide gốc của môn.

## Đáp án nhiễu đã cân lại

Trước đợt này có **441 câu** mà đáp án đúng dài vượt trội so với mọi đáp án nhiễu — nhìn là chọn được. Đã sửa **hơn 580 bộ đáp án** theo hướng:

1. Rút gọn đuôi giải thích thừa của đáp án đúng (mỗi khi đáp án đúng có mệnh đề ngoặc đơn, vế "giúp…/nhờ…" không cần thiết), chuyển phần đó vào `explanation`.
2. Kéo dài hoặc làm cụ thể hoá đáp án nhiễu cho tương đương.
3. Thay đáp án nhiễu **lạc chủ đề** bằng nhiễu cùng chủ đề, chỉ sai ở chỗ then chốt (nhầm tầng, nhầm loại, nhầm chiều, đảo nhân quả).

Kết quả kiểm tra hiện tại: **0 câu** còn đáp án đúng dài hơn 1,4 lần đáp án nhiễu dài nhất.

### Kiểm chứng không đảo nghĩa đáp án

Vì bản vá chỉ thay nội dung chữ của phương án (giữ nguyên chỉ số `correct`), có rủi ro tráo nghĩa giữa các vị trí. Đã viết `tools/verify-answers.js` để so **đáp án đúng trước và sau khi vá** trong cùng không gian chỉ số:

```
node tools/verify-answers.js
```

Kết quả: 578 bộ đáp án đã vá, trong đó 142 bộ giữ nguyên 100% từ khoá, 105 bộ giữ 80–100%, 208 bộ 60–80%, 110 bộ 34–60%, 13 bộ dưới 34%. Cả 13 bộ dưới 34% đã xem tay: **đều là rút gọn hợp lệ** (bỏ đuôi giải thích khỏi đáp án, ví dụ `"j = 7 (vì 10⁷ = 10.000.000 ≥ 3.500.000…)"` → `"j = 7"`), không có trường hợp nào đổi sang phương án nhiễu.

## Câu bổ sung cho phần kiến thức còn thiếu

Đã đối chiếu 9 slide chương + 2 tài liệu thực hành với toàn bộ câu hỏi hiện có, tìm ra 71 mảng kiến thức chưa được hỏi hoặc hỏi quá ít. Đã bổ sung **68 câu** (file `bank/questions_moi.js`, sinh từ `tools/import_new.js`):

| Chương | Câu bổ sung | Nội dung chính |
|---|---|---|
| 1 | 8 | Data Fabric (Massive Metadata Lake, AI Engine, Security & Compliance); Addressable/Self-contained/Secure; Object Storage; Cool Storage; Data Partitioning |
| 2 | 6 | Data Skew trong Clustering, Re-clustering; Mini-dimension, Role-playing, Degenerate, Junk; Factless Fact cho "những gì KHÔNG diễn ra" |
| 3 | 7 | Kiểm tra minh bạch của Orchestration; CDC cho Audit Trail & Fraud Detection; dbt Visual Lineage; Data Observability |
| 4 | 7 | Metadata Resolution, Source Authority, Fuzzy Matching trong M&A |
| 5 | 12 | Ví dụ công ty chứng khoán (4 câu tính toán); 3 ứng dụng Apriori; bảng xếp loại Confidence; quy trình FP-Growth bước 2–4 |
| 6 | 7 | Model Versioning (model–data–code); Model Registry 3 trạng thái; use case rating prediction |
| 7 | 7 | AI Act 4 mức; Trust Score, Semantic Search, Data Lineage; Bias Reporting Dashboard |
| 8 | 7 | Data Storytelling; Auto-SQL 3 tiêu chí; Agentic BI |
| 9 | 7 | Global Catalog; Predicate Pushdown trong Federated Querying; Hybrid Schema Mapping |
| 10 | 14 | Project/dataset; `ML.PREDICT`, `OFFSET(1)`, `FORMAT %s`; ánh xạ tên cột; recall/precision; Stored Procedure |

Câu mới được soạn theo quy chuẩn riêng: bốn phương án **cùng chủ đề, cùng cấu trúc ngữ pháp, cùng độ dài** (lệch tối đa 8 ký tự), nhiễu gây nhầm bằng cách nhầm tầng / nhầm loại / nhầm chiều / đảo nhân quả. Vị trí đáp án đúng xoay vòng A/B/C/D.

## Số liệu đã kiểm chứng độc lập

Các con số trong câu hỏi tính toán được đối chiếu lại với bảng dữ liệu gốc trong slide:

- **Ví dụ công ty chứng khoán (Minsup = 3):** Stock Account = 5, Savings Account = 3, Mutual Fund = 4, Credit Card = 3, Bonds = 2, Personal Loan = 4. `count{Stock, Mutual} = 4` → `Conf = 4/5 = 0,8`. Tập phổ biến kích thước 2: `{Stock, Mutual} = 4`, `{Stock, Personal Loan} = 3`, `{Savings, Credit} = 3` → đúng 3 tập.
- **Medallion:** `precision = 0,442434`, `recall = 0,772989`, `accuracy = 0,708508`, `f1 = 0,562762`, `roc_auc = 0,809656` (trích từ ảnh kết quả `ML.EVALUATE` trong tài liệu thực hành).
- **BigQuery:** project `project-nkdl`; 3 dataset tạo tay `Dataset1_Bronze`, `Dataset2_Silver`, `Dataset3_Gold`; 2 dataset dbt tự sinh `dbt_workspace_silver_layer`, `dbt_workspace_gold_layer`; procedure `sp_predict_churn` nằm trong `dbt_workspace`.

## Lệnh kiểm tra

```
node tools/check.js            # cấu trúc, tài nguyên, ngân hàng câu hỏi
node tools/verify-answers.js   # đáp án sau khi vá có giữ nguyên ý nghĩa
node tools/import_new.js --check  # câu mới trước khi ghi vào bank/
node tools/e2e.js              # chạy thử toàn bộ luồng trong trình duyệt
```
