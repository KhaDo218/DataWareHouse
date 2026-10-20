# Kết quả rà soát độ phủ kiến thức

Đã đối chiếu 9 slide chương, 2 tài liệu thực hành (BigQuery, Medallion) và file "Một số câu hỏi chẩn đoán kiến thức" với 2 bộ đề có sẵn.

## Nhận xét chung

- Bộ đề 1 (1080 câu) phủ rất kỹ chương 2–9, nhưng **chương 1 hụt khoảng 1/3 cuối slide** (Storage Tiers, Snowflake/Decoupled, lợi ích hội tụ Lakehouse, chọn kiến trúc nào khi nào, ưu/nhược Data Fabric).
- Bộ đề 2 (230 câu, có giải thích) bù được một phần chương 1 nhưng mỏng ở các phần còn lại.
- **Không có câu nào cho 2 tài liệu thực hành** (BigQuery Sandbox, dbt, Stored Procedure dự đoán churn).
- Nhiều câu tính toán trong file chẩn đoán chưa có: Leverage, Sup/Conf/Lift của {c}→{d,e}, chuỗi FP-Growth minsup = 4, Condition Pattern Base, PageRank trên đồ thị 5 trang, dự đoán CPT chuỗi <D,C>, Entropy 6/4, Min-Max 5–10, Equal-width 100–700, SMA giá dầu.

## Đã bổ sung (123 câu, đều có giải thích)

| Phần | Số câu | Nội dung chính |
|---|---|---|
| Chương 1 | 36 | Storage Tiers, Lifecycle, Bucket/IAM Policies, ADLS, Ephemeral compute, Snowflake (Virtual Warehouse, Global Services, Data Sharing), SSOT, Iceberg/Concurrent Writes, chọn Lakehouse/Fabric/Mesh, Data Fabric ưu/nhược, Data Mesh |
| Chương 2 | 8 | Verbose attributes, RLS/CLS ở Semantic Layer, Metric lifecycle, Bronze metadata & Immutability, Feature Engineering tại DB |
| Chương 3 | 17 | Snowflake Evolution, Glue Crawler, Schema Registry, Type Coercion, Data Contracts, Unified Control Plane, Snowflake Streams, Qlik, Mage.ai, Step Functions, MTTR |
| Chương 4 | 13 | Entropy 6/4, Min-Max, Equal-width/Equal-frequency, SMA, Decimal Scaling, Z-score, ý nghĩa công thức Info/Info_A, Multi-level mining |
| Chương 5 | 18 | Leverage, Sup/Conf/Lift trên CSDL 8 giao dịch, chuỗi FP-Growth, Condition Pattern Base, n²/2, minsup, ví dụ ngân hàng, Grid-based, Distance-based |
| Chương 6 | 10 | CPT dự đoán <D,C>, FSC/SBC, Inverted Index, PageRank đồ thị 5 trang, damping factor, ngưỡng ε |
| Phần 10 – Thực hành | 21 | BigQuery Sandbox, project-nkdl, 3 dataset, dbt chỉ viết SELECT, dataset dbt tự tạo, Stored Procedure EXECUTE IMMEDIATE/FORMAT, ML.PREDICT, risk_percentage, đánh giá mô hình |

## Lưu ý về đáp án tự tính

- PageRank (bs-c6-6..8): tính theo cách cập nhật đồng thời, dùng PR = 1 của vòng 0 cho mọi trang nguồn. Nếu thầy cập nhật tuần tự (dùng PR mới của trang 1 khi tính trang 2) thì PR(2) sẽ khác.
- Chuỗi FP-Growth (bs-c5-7): b, d, e cùng support 4 nên xếp theo thứ tự chữ cái.
