// ============================================================================
// CÂU HỎI BỔ SUNG (soạn theo báo cáo lỗ hổng kiến thức)
// TỰ ĐỘNG SINH bởi tools/import_new.js từ out/new-*.json - KHÔNG SỬA TAY
// Số câu: 82
// ============================================================================
const QUESTIONS_MOI = [
 {
  "id": "new-c1-01",
  "chapter": 1,
  "difficulty": 1,
  "type": "single",
  "question": "Trong Modern Data Warehouse, khái niệm 'Tích hợp Cloud Ecosystem' cho phép điều gì?",
  "options": [
   "Co giãn tài nguyên tính toán nhanh chóng theo nhu cầu truy vấn",
   "Mã hóa dữ liệu tự động ở cả trạng thái tĩnh lẫn trạng thái di chuyển",
   "Kết nối mượt mà với dịch vụ bảo mật và định danh của đám mây",
   "Chỉ tính phí cho những tài nguyên người dùng thực sự sử dụng"
  ],
  "correct": [
   2
  ],
  "explanation": "Tích hợp Cloud Ecosystem là kết nối mượt mà với dịch vụ bảo mật, định danh của đám mây.\n• Mã hóa hai trạng thái là Bảo mật đa lớp; co giãn tài nguyên là Elasticity; chỉ trả phần đã dùng là Pay-as-you-go."
 },
 {
  "id": "new-c1-02",
  "chapter": 1,
  "difficulty": 2,
  "type": "single",
  "question": "Lợi thế 'Khả năng cộng tác toàn cầu' của Modern Data Warehouse so với On-Premise được hiểu là gì?",
  "options": [
   "Cho phép chia sẻ dữ liệu an toàn giữa các khu vực địa lý khác nhau",
   "Sao lưu dữ liệu đa vùng tự động để phục hồi sau thảm họa",
   "Tự động học và điều chỉnh index để tăng tốc độ của truy vấn",
   "Tập trung nhân sự vào phân tích nghiệp vụ thay vì việc vận hành"
  ],
  "correct": [
   0
  ],
  "explanation": "Cộng tác toàn cầu cho phép chia sẻ dữ liệu an toàn giữa các khu vực địa lý khác nhau.\n• Sao lưu đa vùng là phục hồi thảm họa; tự học index là tối ưu truy vấn tự động; dồn nhân sự sang phân tích là đơn giản hóa quản trị."
 },
 {
  "id": "new-c1-03",
  "chapter": 1,
  "difficulty": 2,
  "type": "single",
  "question": "Tính chất 'Self-contained' của một sản phẩm dữ liệu trong Data Mesh nghĩa là gì?",
  "options": [
   "Có cấu trúc rõ ràng và tài liệu hướng dẫn đầy đủ cho người dùng",
   "Phân quyền truy cập nghiêm ngặt dựa trên vai trò của người dùng",
   "Dùng định dạng chuẩn để dễ dàng tích hợp với các miền dữ liệu khác",
   "Chứa đủ thông tin cần thiết, không phải tra cứu thêm nguồn khác"
  ],
  "correct": [
   3
  ],
  "explanation": "Self-contained là chứa đủ thông tin cần thiết, không phải tra cứu thêm nguồn khác.\n• Cấu trúc rõ ràng kèm tài liệu là Addressable; định dạng chuẩn là Interoperable; phân quyền theo vai trò là Secure."
 },
 {
  "id": "new-c1-04",
  "chapter": 1,
  "difficulty": 2,
  "type": "multiple",
  "question": "Theo slide, những thành phần nào sau đây thuộc danh sách thành phần kỹ thuật chính của Data Fabric? (chọn nhiều đáp án)",
  "options": [
   "Massive Metadata Lake",
   "Security & Compliance",
   "Knowledge Graph",
   "Auto-discovery"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Massive Metadata Lake lưu trữ và phân tích toàn bộ metadata; Security & Compliance là lớp quản trị bảo mật tập trung của Data Fabric.\n• Knowledge Graph và Auto-discovery là tính năng Active Metadata, không phải thành phần kiến trúc."
 },
 {
  "id": "new-c1-05",
  "chapter": 1,
  "difficulty": 3,
  "type": "single",
  "question": "Trong Data Fabric, 'Augmented Data Integration' và 'AI Engine' khác nhau ở chỗ nào?",
  "options": [
   "Augmented hỗ trợ ánh xạ, tích hợp dữ liệu bằng AI; AI Engine điều khiển tự động hóa và đề xuất tối ưu",
   "Augmented điều khiển tự động hóa và đề xuất tối ưu; AI Engine hỗ trợ ánh xạ, tích hợp dữ liệu",
   "Augmented lưu trữ toàn bộ metadata của hệ thống; AI Engine chạy truy vấn liên kết giữa các nguồn",
   "Augmented chạy truy vấn liên kết giữa các nguồn; AI Engine lưu trữ toàn bộ metadata của hệ thống"
  ],
  "correct": [
   0
  ],
  "explanation": "Augmented Data Integration dùng AI để hỗ trợ ánh xạ, tích hợp dữ liệu; AI Engine là bộ não điều khiển tự động hóa và kiến nghị tối ưu.\n• Lưu metadata là của Massive Metadata Lake, chạy Federated Query là của Data Virtualization Engine."
 },
 {
  "id": "new-c1-06",
  "chapter": 1,
  "difficulty": 2,
  "type": "multiple",
  "question": "Theo slide, đâu là những đặc tính của lưu trữ đối tượng (Object Storage)? (chọn nhiều đáp án)",
  "options": [
   "Metadata phong phú với các cặp Key-Value tùy chỉnh cho mỗi tệp",
   "Độ bền cực cao, thiết kế để không bao giờ mất dữ liệu",
   "Chi phí cực thấp so với SSD hay Block Storage truyền thống",
   "Phân cấp thư mục sâu giúp tổ chức tệp tin gọn gàng hơn"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Object Storage có metadata phong phú dạng Key-Value, độ bền cực cao và chi phí cực thấp so với SSD hay Block Storage.\n• Nó dùng không gian phẳng (Flat namespace), không phân cấp thư mục sâu."
 },
 {
  "id": "new-c1-07",
  "chapter": 1,
  "difficulty": 1,
  "type": "single",
  "question": "Một doanh nghiệp muốn cắt phí cho nhóm dữ liệu hầu như không ai truy vấn nhưng vẫn phải giữ lại để tra cứu khi cần. Theo chiến lược Storage Tiers, nên đặt nhóm dữ liệu này ở tầng nào?",
  "options": [
   "Hot Storage, tầng dành cho dữ liệu được truy cập hàng ngày",
   "Cool Storage, tầng dành cho dữ liệu ít dùng với phí thấp",
   "Archive/Glacier, tầng cho dữ liệu lưu lâu dài vì pháp lý",
   "Intelligent Tiering, tầng tự chuyển theo thói quen truy cập"
  ],
  "correct": [
   1
  ],
  "explanation": "Cool Storage dành cho dữ liệu ít dùng, phí lưu trữ thấp, đúng với nhóm dữ liệu hầu như không ai truy vấn.\n• Hot là dữ liệu truy cập hàng ngày; Archive/Glacier cho lưu trữ lâu dài vì pháp lý; Intelligent Tiering là cơ chế tự chuyển tầng, không phải một tầng."
 },
 {
  "id": "new-c1-08",
  "chapter": 1,
  "difficulty": 3,
  "type": "single",
  "question": "Trong Open Table Formats, tính năng 'Data Partitioning thông minh' nhằm mục đích gì?",
  "options": [
   "Tự động điều chỉnh cấu trúc bảng mà không cần nạp lại dữ liệu",
   "Cho phép nhiều ứng dụng cùng ghi dữ liệu đồng thời mà không lỗi",
   "Tối ưu hóa cách tổ chức file và phân vùng để tăng tốc truy vấn",
   "Cho phép truy vấn lại dữ liệu tại bất kỳ thời điểm nào trong quá khứ"
  ],
  "correct": [
   2
  ],
  "explanation": "Data Partitioning thông minh tối ưu cách tổ chức file để tăng tốc độ truy vấn.\n• Điều chỉnh cấu trúc bảng là Schema Evolution; ghi đồng thời là Concurrent Writes; truy vấn quá khứ là Time Travel."
 },
 {
  "id": "new-c2-01",
  "chapter": 2,
  "difficulty": 2,
  "type": "single",
  "question": "Hai Micro-partition có khoảng giá trị ngày chồng lấn nên truy vấn theo thời gian phải quét cả hai. Chiến lược Clustering xử lý tình huống này bằng cách nào?",
  "options": [
   "Sắp xếp lại dữ liệu ngầm định kỳ khi phát hiện hiệu năng bị suy giảm",
   "Sắp xếp dữ liệu theo cột khóa để mỗi phân vùng có phạm vi hẹp, không chồng lấn",
   "Nén từng phân vùng xuống còn 50 MB để giảm khối lượng dữ liệu phải quét",
   "Đánh chỉ mục vật lý trên cột khóa để bỏ qua các phân vùng không cần đọc"
  ],
  "correct": [
   1
  ],
  "explanation": "Clustering sắp xếp dữ liệu theo cột khóa để các Micro-partition có phạm vi hẹp, không chồng lấn, nhờ đó giảm Data Skew.\n• Sắp xếp lại ngầm là Re-clustering; nén 50MB–500MB là Micro-partitioning; chỉ mục vật lý thuộc DB truyền thống."
 },
 {
  "id": "new-c2-02",
  "chapter": 2,
  "difficulty": 3,
  "type": "multiple",
  "question": "Vì sao Micro-partitioning được coi là nền tảng cho khả năng quét dữ liệu cực nhanh trên Cloud? (chọn nhiều đáp án)",
  "options": [
   "Vì bảng được tự động chia thành các tập tin nhỏ, không cần phân vùng thủ công",
   "Vì mỗi phân vùng lưu Min/Max từng cột nên bỏ qua được vùng không liên quan",
   "Vì dữ liệu trong mỗi phân vùng lưu theo cột, chỉ đọc cột thật sự cần dùng",
   "Vì mỗi phân vùng phải được nạp lại toàn bộ mỗi khi có dữ liệu mới ghi vào"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Ba ý này lý giải vì sao Micro-partitioning là nền tảng cho khả năng quét cực nhanh: chia nhỏ tự động, không cần phân vùng thủ công và lưu theo cột.\n• Phân vùng không bị nạp lại toàn bộ khi có dữ liệu mới."
 },
 {
  "id": "new-c2-03",
  "chapter": 2,
  "difficulty": 1,
  "type": "single",
  "question": "Theo slide, cách nào để kiểm soát chi phí của tính năng Re-clustering tự động?",
  "options": [
   "Đặt ngưỡng Clustering Depth tối thiểu để dừng việc sắp xếp lại",
   "Chỉ chạy Re-clustering vào khung giờ không có truy vấn nào",
   "Giới hạn số phân vùng được sắp xếp lại trong mỗi lần chạy",
   "Bật hoặc tắt tính năng Re-clustering tùy theo nhu cầu sử dụng"
  ],
  "correct": [
   3
  ],
  "explanation": "Re-clustering tự động có thể kiểm soát chi phí bằng việc bật/tắt tính năng.\n• Nó chạy trên tài nguyên tính toán riêng, tự kích hoạt khi hiệu năng suy giảm và giữ hiệu suất ổn định cho Real-time Dashboard."
 },
 {
  "id": "new-c2-04",
  "chapter": 2,
  "difficulty": 1,
  "type": "single",
  "question": "Theo slide, SCD Type 5 quản lý thuộc tính thay đổi nhanh bằng cơ chế nào?",
  "options": [
   "Cột Start_Date, End_Date và Is_Current, cho báo cáo Point-in-time",
   "Current Table và History Table, cho bảng chính luôn gọn nhẹ",
   "Mini-dimension kết hợp logic Type 1, cho thuộc tính thay đổi nhanh",
   "Hai cột lưu giá trị cũ và mới, cho truy vấn so sánh trực tiếp"
  ],
  "correct": [
   2
  ],
  "explanation": "SCD Type 5 kết hợp Mini-dimension và logic Type 1 để quản lý thuộc tính thay đổi nhanh.\n• Start_Date/End_Date/Is_Current là Type 2; Current/History Table là Type 4; hai cột cũ-mới là Type 3."
 },
 {
  "id": "new-c2-05",
  "chapter": 2,
  "difficulty": 2,
  "type": "multiple",
  "question": "Những phát biểu nào sau đây đúng với các kỹ thuật Dimension nâng cao? (chọn nhiều đáp án)",
  "options": [
   "Role-playing: một bảng chiều đảm nhận nhiều vai trò trong cùng một Fact",
   "Mini-dimension: tách Current Table và History Table cho bảng chính gọn nhẹ",
   "Degenerate: khóa nghiệp vụ lưu ngay trong Fact, không cần bảng chiều riêng",
   "Junk: gom cờ trạng thái rời rạc vào một bảng để giảm số lần Join"
  ],
  "correct": [
   0,
   2,
   3
  ],
  "explanation": "Role-playing: một chiều đảm nhận nhiều vai trò trong cùng một Fact; Degenerate: khóa nghiệp vụ nằm ngay trong Fact; Junk: gom cờ rời rạc để giảm Join.\n• Tách Current/History là SCD Type 4; Conformed là chiều dùng chung nhất quán giữa nhiều Fact."
 },
 {
  "id": "new-c2-06",
  "chapter": 2,
  "difficulty": 2,
  "type": "single",
  "question": "Một trường muốn phân tích các sinh viên KHÔNG đăng ký môn học nào trong học kỳ. Loại bảng Fact nào phù hợp nhất?",
  "options": [
   "Periodic Snapshot Fact Table, vì chụp trạng thái cuối mỗi học kỳ",
   "Bridge Table, vì xử lý quan hệ nhiều-nhiều giữa hai bảng chiều",
   "Accumulating Snapshot Fact Table, vì theo dõi nhiều giai đoạn",
   "Factless Fact Table, vì lưu sự kiện không kèm số liệu đo lường"
  ],
  "correct": [
   3
  ],
  "explanation": "Factless Fact Table lưu sự kiện không kèm số liệu, hữu ích để phân tích những gì KHÔNG diễn ra như trường hợp không đăng ký môn.\n• Periodic/Accumulating Snapshot lưu tình trạng hoặc tiến độ; Bridge Table xử lý quan hệ M-M."
 },
 {
  "id": "new-c10-01",
  "chapter": 10,
  "difficulty": 1,
  "type": "single",
  "question": "Theo tài liệu thực hành, việc truy cập BigQuery ngay từ đầu chủ yếu để làm gì?",
  "options": [
   "Làm quen giao diện nạp tệp CSV thô từ Drive lên các bảng của kho dữ liệu",
   "Làm quen giao diện quản lý dữ liệu, nơi mọi truy vấn sau này được thực thi",
   "Làm quen giao diện dbt, nơi các model SQL tầng Silver được biên dịch",
   "Làm quen giao diện BigQuery ML, nơi mô hình churn được huấn luyện"
  ],
  "correct": [
   1
  ],
  "explanation": "Tài liệu nêu rõ: truy cập BigQuery trước tiên giúp sinh viên làm quen giao diện quản lý dữ liệu của Google, nơi mọi truy vấn sau này được thực thi.\n• dbt là công cụ riêng, không phải giao diện BigQuery; BigQuery ML chỉ dùng ở bước dự đoán."
 },
 {
  "id": "new-c10-02",
  "chapter": 10,
  "difficulty": 1,
  "type": "single",
  "question": "Trên giao diện BigQuery, thứ tự thao tác chuẩn bị cho bài thực hành Medallion là gì?",
  "options": [
   "Tạo ba dataset tầng, tạo project-nkdl, rồi chạy notebook BRONZE",
   "Chạy notebook BRONZE, tạo project-nkdl, rồi tạo ba dataset tầng",
   "Tạo project-nkdl, tạo ba dataset tầng, rồi chạy notebook BRONZE",
   "Tạo project-nkdl, chạy notebook BRONZE, rồi tạo ba dataset tầng"
  ],
  "correct": [
   2
  ],
  "explanation": "Trình tự trong tài liệu: tạo project-nkdl trước, sau đó tạo 3 Dataset tầng Bronze/Silver/Gold, rồi mới chạy notebook BRONZE để nạp dữ liệu thô.\n• Đảo thứ tự project với dataset, hoặc chạy notebook trước khi có nơi chứa, đều trái hướng dẫn."
 },
 {
  "id": "new-c10-03",
  "chapter": 10,
  "difficulty": 2,
  "type": "single",
  "question": "Ba dataset Dataset1_Bronze, Dataset2_Silver, Dataset3_Gold khác hai dataset dbt_workspace_silver_layer và dbt_workspace_gold_layer ở điểm nào?",
  "options": [
   "Ba dataset đầu do người học tạo tay; hai dataset sau do dbt tự sinh khi chạy",
   "Ba dataset đầu do dbt tự sinh; hai dataset sau do người học tạo tay trước",
   "Ba dataset đầu do notebook BRONZE tạo; hai dataset sau do notebook GOLD tạo",
   "Ba dataset đầu do người học tạo tay; hai dataset sau cũng phải tạo tay trước"
  ],
  "correct": [
   0
  ],
  "explanation": "Dataset1_Bronze/Silver/Gold được tạo tay trên giao diện BigQuery; còn dbt_workspace_silver_layer và dbt_workspace_gold_layer do dbt tự sinh ra khi chạy notebook SILVER_GOLD.\n• Tạo tay cả hai nhóm là sai: phần workspace là do dbt sinh."
 },
 {
  "id": "new-c10-04",
  "chapter": 10,
  "difficulty": 3,
  "type": "single",
  "question": "Trong Stored Procedure, mô hình churn được tham chiếu qua đường dẫn nào?",
  "options": [
   "dbt_workspace.model_logistic_churn",
   "dbt_workspace_silver_layer.model_logistic_churn",
   "Dataset3_Gold.model_logistic_churn",
   "dbt_workspace_gold_layer.model_logistic_churn"
  ],
  "correct": [
   3
  ],
  "explanation": "ML.PREDICT nhận MODEL dbt_workspace_gold_layer.model_logistic_churn, tức mô hình đã huấn luyện xong nằm ở dataset tầng Gold do dbt sinh ra.\n• Ba đường dẫn còn lại đều sai dataset, dù dbt_workspace đúng là nơi đặt bản thân procedure."
 },
 {
  "id": "new-c10-05",
  "chapter": 10,
  "difficulty": 2,
  "type": "single",
  "question": "Trong khối SELECT lồng bên trong ML.PREDICT, ba cột tenure, MonthlyCharges, TotalCharges lần lượt được đặt tên mới là gì?",
  "options": [
   "monthly_fee, active_months, total_fee",
   "active_months, monthly_fee, total_fee",
   "active_months, total_fee, monthly_fee",
   "total_fee, monthly_fee, active_months"
  ],
  "correct": [
   1
  ],
  "explanation": "Khối SELECT lồng đặt CAST(tenure AS INT64) AS active_months, CAST(MonthlyCharges AS FLOAT64) AS monthly_fee, CAST(TotalCharges AS FLOAT64) AS total_fee.\n• Đảo vị trí là sai: monthly_fee gắn với MonthlyCharges, còn total_fee gắn với TotalCharges."
 },
 {
  "id": "new-c10-06",
  "chapter": 10,
  "difficulty": 3,
  "type": "single",
  "question": "Cú pháp nào trích đúng xác suất của lớp 'khách hàng rời bỏ' từ kết quả ML.PREDICT?",
  "options": [
   "predicted_label_probs[OFFSET(0)].prob",
   "predicted_label_probs[OFFSET(1)].label",
   "predicted_label_probs.prob[OFFSET(1)]",
   "predicted_label_probs[OFFSET(1)].prob"
  ],
  "correct": [
   3
  ],
  "explanation": "OFFSET(1) chọn phần tử thứ hai trong mảng xác suất, rồi .prob lấy trường xác suất của lớp rời bỏ; tài liệu nhân 100 và làm tròn 2 chữ số.\n• OFFSET(0) là lớp còn lại; .label trả về nhãn chứ không phải xác suất, còn đặt OFFSET sau .prob là sai thứ tự."
 },
 {
  "id": "new-c10-07",
  "chapter": 10,
  "difficulty": 2,
  "type": "single",
  "question": "Nếu bỏ hẳn phép nhân 100 trong biểu thức risk_percentage thì cột kết quả thay đổi thế nào?",
  "options": [
   "Vẫn là xác suất của lớp rời bỏ, nhưng nay nằm trong khoảng 0 đến 1",
   "Vẫn là xác suất của lớp rời bỏ, nhưng nay nằm trong khoảng 0 đến 100",
   "Vẫn là xác suất của lớp rời bỏ, nhưng nay bị chia nhỏ còn khoảng 0 đến 0,01",
   "Sẽ không còn là xác suất mà thành nhãn lớp, chỉ nhận giá trị 0 hoặc 1"
  ],
  "correct": [
   0
  ],
  "explanation": "prob là xác suất trong khoảng 0 đến 1; nhân 100 đổi sang phần trăm và ROUND(..., 2) làm tròn 2 chữ số thập phân. Bỏ nhân 100 thì giá trị vẫn là xác suất nhưng chỉ còn 0 đến 1.\n• Nó không bị chia nhỏ thêm và cũng không biến thành nhãn lớp."
 },
 {
  "id": "new-c10-08",
  "chapter": 10,
  "difficulty": 2,
  "type": "single",
  "question": "Đặc trưng is_risky_contract do biểu thức CASE WHEN INITCAP(Contract) = 'Month-To-Month' THEN 1 ELSE 0 END tạo ra nhận giá trị nào?",
  "options": [
   "1 khi hợp đồng từ 12 tháng trở lên, 0 với hợp đồng ngắn hạn",
   "1 khi hợp đồng là tháng–tháng, 0 với mọi loại hợp đồng còn lại",
   "1 khi khách hàng đã rời bỏ, 0 khi khách hàng còn ở lại",
   "1 khi giá trị Contract viết hoa toàn bộ, 0 khi viết thường hết"
  ],
  "correct": [
   1
  ],
  "explanation": "CASE WHEN INITCAP(Contract) = 'Month-To-Month' THEN 1 ELSE 0 END gán 1 cho hợp đồng tháng–tháng và 0 cho mọi loại hợp đồng khác.\n• INITCAP chỉ chuẩn hoá chữ hoa/thường để so sánh, không phải điều kiện; đây cũng không phải nhãn churn."
 },
 {
  "id": "new-c10-09",
  "chapter": 10,
  "difficulty": 2,
  "type": "single",
  "question": "Vì sao tên bảng đầu vào phải đi qua EXECUTE IMMEDIATE FORMAT(..., input_table_id) thay vì viết thẳng trong FROM?",
  "options": [
   "Vì ML.PREDICT không đọc được bảng nằm trong dataset thô của project",
   "Vì FORMAT là hàm duy nhất được BigQuery ML chấp nhận truyền vào",
   "Vì tên bảng chỉ biết lúc gọi, phải ghép chuỗi SQL rồi thực thi động",
   "Vì EXECUTE IMMEDIATE buộc huấn luyện lại mô hình trước khi dự đoán"
  ],
  "correct": [
   2
  ],
  "explanation": "Tên bảng khách hàng mới chỉ biết khi gọi procedure, nên EXECUTE IMMEDIATE FORMAT(...) thay tham số input_table_id vào chỗ %s rồi thực thi chuỗi SQL động.\n• ML.PREDICT vẫn đọc được bảng ở mọi dataset; EXECUTE IMMEDIATE không huấn luyện lại mô hình."
 },
 {
  "id": "new-c10-10",
  "chapter": 10,
  "difficulty": 1,
  "type": "single",
  "question": "Với recall ≈ 0,77 trên kết quả ML.EVALUATE, mô hình bỏ sót khoảng bao nhiêu khách hàng thực sự rời bỏ?",
  "options": [
   "Khoảng 44% khách hàng thực sự rời bỏ bị bỏ sót",
   "Khoảng 77% khách hàng thực sự rời bỏ bị bỏ sót",
   "Khoảng 23% khách hàng thực sự rời bỏ bị bỏ sót",
   "Khoảng 56% khách hàng thực sự rời bỏ bị bỏ sót"
  ],
  "correct": [
   2
  ],
  "explanation": "Recall là tỉ lệ khách rời bỏ thật được phát hiện; recall ≈ 0,77 nghĩa là bắt được khoảng 77%, nên bỏ sót khoảng 23%.\n• 0,44 là precision nên 44% và 56% là con số của cảnh báo, không phải tỉ lệ bỏ sót."
 },
 {
  "id": "new-c10-11",
  "chapter": 10,
  "difficulty": 2,
  "type": "single",
  "question": "Với precision ≈ 0,44 trên kết quả ML.EVALUATE, trong số khách hàng bị mô hình cảnh báo rời bỏ thì khoảng bao nhiêu là cảnh báo sai?",
  "options": [
   "Khoảng 44% số cảnh báo là dương tính giả",
   "Khoảng 23% số cảnh báo là dương tính giả",
   "Khoảng 77% số cảnh báo là dương tính giả",
   "Khoảng 56% số cảnh báo là dương tính giả"
  ],
  "correct": [
   3
  ],
  "explanation": "Precision ≈ 0,44 nghĩa là chỉ khoảng 44% cảnh báo là đúng, nên phần còn lại khoảng 56% số cảnh báo là dương tính giả.\n• 23% và 77% suy ra từ recall 0,77, không phải từ precision."
 },
 {
  "id": "new-c10-12",
  "chapter": 10,
  "difficulty": 1,
  "type": "single",
  "question": "Hai notebook SILVER_GOLD và GOLD_Prediction đảm nhận hai việc khác nhau nào?",
  "options": [
   "SILVER_GOLD dùng dbt làm sạch dữ liệu; GOLD_Prediction gọi procedure để dự đoán",
   "SILVER_GOLD gọi procedure để dự đoán; GOLD_Prediction dùng dbt làm sạch dữ liệu",
   "SILVER_GOLD nạp dữ liệu thô lên Bronze; GOLD_Prediction dùng dbt làm sạch dữ liệu",
   "SILVER_GOLD huấn luyện mô hình churn; GOLD_Prediction dùng dbt làm sạch dữ liệu"
  ],
  "correct": [
   0
  ],
  "explanation": "Notebook SILVER_GOLD viết model dbt để làm sạch dữ liệu và sinh tầng Silver/Gold; notebook GOLD_Prediction gọi Stored Procedure để dự đoán khách hàng mới.\n• Nạp dữ liệu thô là việc của notebook BRONZE, không phải SILVER_GOLD."
 },
 {
  "id": "new-c10-13",
  "chapter": 10,
  "difficulty": 3,
  "type": "single",
  "question": "Vì sao truy vấn con đưa vào ML.PREDICT vẫn giữ cột customerID bên cạnh bốn đặc trưng?",
  "options": [
   "Vì SELECT ngoài cùng cần customerID để định danh từng khách hàng kết quả",
   "Vì mô hình logistic churn được huấn luyện trên cả cột customerID",
   "Vì ML.PREDICT bắt buộc truy vấn con phải có khoá là customerID",
   "Vì customerID được dùng để tính risk_percentage thay cho nhãn lớp"
  ],
  "correct": [
   0
  ],
  "explanation": "customerID vẫn nằm trong truy vấn con để SELECT ngoài cùng xuất được cột này, nhờ đó biết mỗi dòng risk_percentage thuộc khách hàng nào.\n• customerID không phải đặc trưng huấn luyện và không dùng để tính risk_percentage."
 },
 {
  "id": "new-c10-14",
  "chapter": 10,
  "difficulty": 2,
  "type": "single",
  "question": "Kết quả Stored Procedure sp_predict_churn trả về cho mỗi khách hàng mới gồm những cột nào?",
  "options": [
   "customerID, active_months và monthly_fee",
   "is_will_churn, active_months và total_fee",
   "customerID, is_will_churn và risk_percentage",
   "risk_percentage, monthly_fee và total_fee"
  ],
  "correct": [
   2
  ],
  "explanation": "Câu SELECT ngoài cùng trả về customerID, predicted_label đổi tên thành is_will_churn và cột risk_percentage.\n• active_months, monthly_fee, total_fee chỉ là cột đầu vào trong khối SELECT lồng, không xuất hiện trong kết quả."
 },
 {
  "id": "new-c3-01",
  "chapter": 3,
  "difficulty": 1,
  "type": "single",
  "question": "Khả năng \"kiểm tra minh bạch\" mà công cụ Orchestration mang lại cho doanh nghiệp là gì?",
  "options": [
   "Lịch sử thực thi ghi rõ ai đã kích hoạt và vào thời điểm cụ thể nào",
   "Cơ chế tự động Retry và gửi cảnh báo khi tác vụ gặp lỗi thất bại",
   "Cái nhìn tổng thể trực quan về toàn bộ data flow của doanh nghiệp",
   "Trình tự và điều kiện thực thi đúng như đã thiết lập cho từng bước"
  ],
  "correct": [
   2
  ],
  "explanation": "Kiểm tra minh bạch là cái nhìn tổng thể, trực quan về toàn bộ data flow của doanh nghiệp.\n• Lịch sử ai kích hoạt, khi nào là ý kiểm toán\n• Retry và cảnh báo là ý xử lý sự cố\n• Chạy đúng trình tự, điều kiện là ý kiểm tra logic"
 },
 {
  "id": "new-c3-02",
  "chapter": 3,
  "difficulty": 2,
  "type": "single",
  "question": "Trong ứng dụng Audit Trails, CDC được khai thác nhằm mục đích gì?",
  "options": [
   "Nhận diện và ngăn chặn giao dịch gian lận trên chuỗi hành vi thời gian thực",
   "Lưu chi tiết lịch sử mọi thao tác thay đổi để phục vụ kiểm toán nội bộ",
   "Đồng bộ trạng thái nhanh chóng và nhất quán giữa các dịch vụ phân tán",
   "Chuyển dữ liệu lên Cloud mà không gây gián đoạn hoạt động của hệ thống"
  ],
  "correct": [
   1
  ],
  "explanation": "Audit Trails dùng CDC để lưu chi tiết lịch sử mọi thao tác thay đổi, phục vụ kiểm toán nội bộ.\n• Chuỗi hành vi thời gian thực là Fraud Detection\n• Đồng bộ trạng thái dịch vụ là Microservices\n• Không gián đoạn khi lên Cloud là Cloud Migration"
 },
 {
  "id": "new-c3-03",
  "chapter": 3,
  "difficulty": 1,
  "type": "single",
  "question": "Trong ứng dụng Fraud Detection, CDC nhận diện gian lận dựa trên cơ sở nào?",
  "options": [
   "Chuỗi hành vi giao dịch diễn ra theo thời gian thực",
   "Lịch sử thay đổi được lưu lại để phục vụ kiểm toán",
   "Chu kỳ quét bảng định kỳ trên cơ sở dữ liệu nguồn",
   "Trạng thái nhất quán của các dịch vụ phân tán"
  ],
  "correct": [
   0
  ],
  "explanation": "Fraud Detection dựa trên chuỗi hành vi giao dịch thời gian thực để nhận diện và ngăn chặn gian lận.\n• Lịch sử thay đổi để kiểm toán là Audit Trails\n• Quét bảng định kỳ là Query-based CDC, không phải cơ sở của ứng dụng này"
 },
 {
  "id": "new-c3-04",
  "chapter": 3,
  "difficulty": 2,
  "type": "single",
  "question": "Nhờ Visual Lineage của dbt, khi cập nhật một bảng gốc ta xác định được điều gì?",
  "options": [
   "Câu lệnh SQL nào đang làm chậm quá trình biến đổi dữ liệu",
   "Chỉ số chất lượng dữ liệu nào đang bị vi phạm ở tầng nguồn",
   "Tài khoản nào đã kích hoạt lần chạy pipeline gần nhất",
   "Những bảng báo cáo nào sẽ chịu ảnh hưởng từ thay đổi đó"
  ],
  "correct": [
   3
  ],
  "explanation": "Visual Lineage vẽ bản đồ quan hệ đầu vào – đầu ra của từng bảng nên thấy ngay báo cáo nào chịu ảnh hưởng khi sửa bảng gốc.\n• Đó chính là phân tích tác động trong Auto-Docs\n• Ba phương án còn lại nói về hiệu năng, chất lượng dữ liệu và kiểm toán"
 },
 {
  "id": "new-c3-05",
  "chapter": 3,
  "difficulty": 2,
  "type": "single",
  "question": "Ngoài việc tài liệu hoá dữ liệu, Auto-Docs của dbt còn đóng vai trò gì trong làm việc nhóm?",
  "options": [
   "Kênh cảnh báo tự động khi pipeline gặp lỗi trong lúc vận hành",
   "Hợp đồng ràng buộc dữ liệu giữa đội cung cấp và đội phân tích",
   "Bộ kiểm thử tự động xác thực cột rỗng và giá trị trùng lặp",
   "Công cụ giao tiếp chuẩn giữa Data Engineer và Data Analyst"
  ],
  "correct": [
   3
  ],
  "explanation": "Auto-Docs tạo ngôn ngữ chung, trở thành công cụ giao tiếp chuẩn giữa Data Engineer và Data Analyst.\n• Cảnh báo lỗi thuộc vận hành pipeline\n• Data Contracts là ràng buộc giữa hai đội\n• Xác thực cột rỗng, trùng lặp là Schema Tests"
 },
 {
  "id": "new-c3-06",
  "chapter": 3,
  "difficulty": 3,
  "type": "single",
  "question": "Cơ chế \"chủ động ngăn chặn\" của Data Observability thể hiện ở hành động nào?",
  "options": [
   "Ghi nhận lỗi rồi chờ người dùng báo lại khi thấy số liệu bất thường",
   "Phát hiện và cô lập dữ liệu sai lệch trước khi tới dashboard",
   "Tự động sửa các giá trị sai về đúng trước khi hiển thị lên báo cáo",
   "Tạm dừng toàn bộ hệ thống cho tới khi có người phê duyệt thủ công"
  ],
  "correct": [
   1
  ],
  "explanation": "\"Chủ động ngăn chặn\" là phát hiện và cô lập dữ liệu sai lệch trước khi chúng tiếp cận dashboard.\n• Chờ người dùng báo lỗi là bị động, ngược chiều với chủ động\n• Tự sửa giá trị sai hay tạm dừng hệ thống đều không phải cơ chế được nêu"
 },
 {
  "id": "new-c3-07",
  "chapter": 3,
  "difficulty": 2,
  "type": "single",
  "question": "\"Giảm thiểu Data Downtime\" mà Data Observability mang lại được hiểu là gì?",
  "options": [
   "Rút ngắn thời gian rà soát thủ công các luồng mã nguồn",
   "Rút ngắn thời gian từ lúc phát sinh dữ liệu đến khi phân tích",
   "Rút ngắn thời gian bộ dữ liệu ở trạng thái không khả dụng hoặc bị sai",
   "Rút ngắn chu kỳ quét bảng của cơ chế Query-based CDC"
  ],
  "correct": [
   2
  ],
  "explanation": "Data Downtime là trạng thái bộ dữ liệu không khả dụng hoặc bị sai, nên giảm thiểu chính là rút ngắn khoảng thời gian đó.\n• Rà soát mã nguồn là ý tiết kiệm 80% thời gian thủ công\n• Thời gian phát sinh đến phân tích là Time-to-Insight"
 },
 {
  "id": "new-c4-01",
  "chapter": 4,
  "difficulty": 1,
  "type": "single",
  "question": "Hai nguồn dữ liệu dùng tên cột cust_id và customer_code cho cùng một định danh khách hàng. Kỹ thuật nào xử lý tình huống này?",
  "options": [
   "Entity Resolution – xác định bản ghi cùng mô tả một thực thể",
   "Metadata Resolution – đối chiếu thuộc tính khác tên nhưng cùng nghĩa",
   "Deduplication – loại bỏ bản ghi trùng để tạo Golden Record",
   "Conflict Handling – xử lý hai giá trị khác nhau cho cùng một trường"
  ],
  "correct": [
   1
  ],
  "explanation": "cust_id và customer_code khác tên nhưng cùng ý nghĩa nên phải đối chiếu ở mức metadata.\n• Entity Resolution xác định các bản ghi cùng một thực thể\n• Deduplication khử trùng để tạo Golden Record\n• Conflict Handling xử lý giá trị xung đột"
 },
 {
  "id": "new-c4-02",
  "chapter": 4,
  "difficulty": 2,
  "type": "single",
  "question": "Khi hai nguồn cung cấp giá trị khác nhau cho cùng trường ngày sinh, quy tắc Source Authority giải quyết bằng cách nào?",
  "options": [
   "Lấy giá trị có mốc thời gian cập nhật mới nhất trong hai nguồn",
   "Đối chiếu tên thuộc tính khác nhau nhưng cùng ý nghĩa",
   "Chọn giá trị của nguồn có trọng số tin cậy cao hơn",
   "Tính độ tương đồng Jaccard giữa hai tập thuộc tính"
  ],
  "correct": [
   2
  ],
  "explanation": "Source Authority là quy tắc ưu tiên theo trọng số tin cậy của nguồn dữ liệu.\n• Lấy giá trị mới nhất là quy tắc Latest timestamp\n• Đối chiếu tên thuộc tính là Metadata Resolution\n• Jaccard đo mức trùng lặp giữa hai tập thuộc tính"
 },
 {
  "id": "new-c4-03",
  "chapter": 4,
  "difficulty": 3,
  "type": "single",
  "question": "Vì sao hợp nhất dữ liệu M&A cần Fuzzy Matching thay vì so khớp chính xác?",
  "options": [
   "Vì thông tin định danh của cùng khách hàng không đồng nhất giữa hai bên",
   "Vì hệ quản trị cơ sở dữ liệu của hai bên đang dùng khác nhau hoàn toàn",
   "Vì một bên thiếu hụt khá nhiều bản ghi so với bên còn lại",
   "Vì hai bên đang lưu trữ theo những đơn vị tiền tệ khác nhau"
  ],
  "correct": [
   0
  ],
  "explanation": "Cùng một khách hàng nhưng CMND và địa chỉ ở hai bên không đồng nhất nên so khớp chính xác sẽ trượt; Fuzzy Matching cho ra tỷ lệ trùng khớp thực thể.\n• Hệ quản trị khác nhau, thiếu bản ghi hay khác tiền tệ chỉ là rào cản kỹ thuật, không buộc phải khớp mờ"
 },
 {
  "id": "new-c4-04",
  "chapter": 4,
  "difficulty": 2,
  "type": "single",
  "question": "Sau khi áp dụng Decimal Scaling, vì sao mọi giá trị đều có trị tuyệt đối nhỏ hơn 1?",
  "options": [
   "Vì đã trừ đi giá trị trung bình nên kết quả đối xứng quanh 0",
   "Vì j được chọn sao cho giá trị tuyệt đối lớn nhất nhỏ hơn 1",
   "Vì dữ liệu được ánh xạ tuyến tính về khoảng [0, 1] theo min, max",
   "Vì đã chia cho độ lệch chuẩn nên mọi giá trị co lại quanh 0"
  ],
  "correct": [
   1
  ],
  "explanation": "Decimal Scaling chọn j sao cho giá trị tuyệt đối lớn nhất sau khi chia 10^j nhỏ hơn 1, nên mọi giá trị đều nằm trong (−1, 1).\n• Trừ trung bình rồi chia độ lệch chuẩn là Z-Score\n• Ánh xạ về [0, 1] theo min, max là Min-Max"
 },
 {
  "id": "new-c4-05",
  "chapter": 4,
  "difficulty": 2,
  "type": "single",
  "question": "Multi-level Mining trên cây phân cấp khái niệm khác khai phá một mức ở điểm nào?",
  "options": [
   "Khai phá luật kết hợp ở nhiều mức trừu tượng khác nhau",
   "Khai phá đồng thời trên nhiều nguồn dữ liệu khác nhau",
   "Khai phá lặp lại nhiều lần trên cùng một mức trừu tượng",
   "Khai phá song song bằng nhiều thuật toán khác nhau"
  ],
  "correct": [
   0
  ],
  "explanation": "Multi-level Mining khai phá luật kết hợp ở nhiều mức độ trừu tượng khác nhau nhờ cây phân cấp khái niệm.\n• Nhiều nguồn dữ liệu là bài toán tích hợp\n• Lặp lại trên một mức hay chạy song song nhiều thuật toán không tạo thêm mức trừu tượng"
 },
 {
  "id": "new-c4-06",
  "chapter": 4,
  "difficulty": 3,
  "type": "single",
  "question": "Kỹ thuật Binning dùng để làm mượt Noise khác Equal-width Binning ở điểm nào?",
  "options": [
   "Binning thay giá trị bằng trung bình bin, còn equal-width chia dải thành N khoảng đều",
   "Binning chia mỗi bin có số bản ghi bằng nhau, còn equal-width gán nhãn định danh",
   "Binning dùng hàm toán học khớp dữ liệu, còn equal-width thay bằng giá trị Centroid",
   "Binning xếp hạng theo tần suất xuất hiện, còn equal-width cắt theo tứ phân vị"
  ],
  "correct": [
   0
  ],
  "explanation": "Binning xử lý noise bằng cách chia khoảng rồi thay giá trị bằng trung bình bin; equal-width chia dải thành N khoảng đều.\n• Chia bin đều số bản ghi là equal-frequency\n• Khớp hàm toán học là Regression, Centroid là Clustering"
 },
 {
  "id": "new-c4-07",
  "chapter": 4,
  "difficulty": 1,
  "type": "single",
  "question": "Discretization khác Normalization ở điểm cốt lõi nào?",
  "options": [
   "Discretization đổi thang đo còn Normalization tạo khoảng rời rạc",
   "Discretization tạo khoảng hoặc nhãn rời rạc còn Normalization đổi thang đo",
   "Discretization khử trùng lặp còn Normalization xử lý giá trị thiếu",
   "Discretization giảm số chiều còn Normalization giảm số bản ghi"
  ],
  "correct": [
   1
  ],
  "explanation": "Discretization biến thuộc tính liên tục thành các khoảng hoặc nhãn rời rạc; Normalization chỉ đổi thang đo, dữ liệu vẫn liên tục.\n• Phương án đảo chiều là bẫy nhầm chiều\n• Khử trùng lặp và giảm số chiều, số bản ghi là các kỹ thuật khác"
 },
 {
  "id": "new-c5-01",
  "chapter": 5,
  "difficulty": 1,
  "type": "single",
  "question": "Trong ví dụ công ty chứng khoán trên slide (6 giao dịch T1–T6) với Minsup = 3, support count của itemset {Stock Account, Mutual Fund} bằng bao nhiêu?",
  "options": [
   "5 giao dịch",
   "4 giao dịch",
   "3 giao dịch",
   "2 giao dịch"
  ],
  "correct": [
   1
  ],
  "explanation": "Mutual Fund có mặt ở T1, T3, T4, T6 và cả bốn giao dịch đó đều chứa Stock Account, nên count = 4 ≥ Minsup = 3.\n• Con số 5 là support count của riêng item Stock Account, không phải của cặp."
 },
 {
  "id": "new-c5-02",
  "chapter": 5,
  "difficulty": 2,
  "type": "single",
  "question": "Vẫn với ví dụ công ty chứng khoán (6 giao dịch, Minsup = 3), độ tin cậy của luật {Stock Account} ⇒ {Mutual Fund} bằng bao nhiêu?",
  "options": [
   "0.667 (= 4/6)",
   "0.75 (= 3/4)",
   "0.5 (= 2/4)",
   "0.8 (= 4/5)"
  ],
  "correct": [
   3
  ],
  "explanation": "Conf = count({Stock Account, Mutual Fund}) / count({Stock Account}) = 4/5 = 0.8, tức 80% khách có Stock Account cũng dùng Mutual Fund.\n• Tỉ số 4/6 = 0.667 là P(Mutual Fund), dùng để tính Lift chứ không phải Confidence."
 },
 {
  "id": "new-c5-03",
  "chapter": 5,
  "difficulty": 3,
  "type": "single",
  "question": "Khai phá tập phổ biến bằng Apriori trên ví dụ công ty chứng khoán với Minsup = 3, ta thu được bao nhiêu itemset phổ biến kích thước 2?",
  "options": [
   "4 tập phổ biến",
   "3 tập phổ biến",
   "2 tập phổ biến",
   "5 tập phổ biến"
  ],
  "correct": [
   1
  ],
  "explanation": "Chỉ ba cặp đạt ngưỡng: {Stock Account, Mutual Fund} = 4, {Stock Account, Personal Loan} = 3, {Savings Account, Credit Card} = 3.\n• Các cặp còn lại như {Stock Account, Savings Account} hay {Mutual Fund, Personal Loan} chỉ đạt 2 nên bị loại."
 },
 {
  "id": "new-c5-04",
  "chapter": 5,
  "difficulty": 2,
  "type": "single",
  "question": "Trong ví dụ công ty chứng khoán với Minsup = 3, item đơn lẻ nào dưới đây KHÔNG phải là tập phổ biến?",
  "options": [
   "Bonds — 2 giao dịch, xuất hiện ở T2 và T6",
   "Savings Account — 3 giao dịch, ở T1, T3, T5",
   "Credit Card — 3 giao dịch, xuất hiện ở T1, T3, T5",
   "Personal Loan — 4 giao dịch, ở T2, T4, T5, T6"
  ],
  "correct": [
   0
  ],
  "explanation": "Bonds chỉ xuất hiện ở T2 và T6 nên support count = 2 < Minsup = 3, do đó nó và mọi tập chứa Bonds đều bị loại.\n• Savings Account, Credit Card (3) và Personal Loan (4) đều đạt ngưỡng nên là tập phổ biến."
 },
 {
  "id": "new-c5-05",
  "chapter": 5,
  "difficulty": 1,
  "type": "single",
  "question": "Theo slide, ứng dụng \"Quản lý hàng tồn kho/tài sản\" của thuật toán Apriori nhằm mục đích gì?",
  "options": [
   "Gửi ưu đãi cá nhân hóa đến đúng khách hàng",
   "Gia tăng sự trung thành và gắn kết dài hạn",
   "Dự đoán nhu cầu để tránh dư thừa hoặc thiếu hụt",
   "Khám phá quan hệ ẩn giữa các mặt hàng bán lẻ"
  ],
  "correct": [
   2
  ],
  "explanation": "Quản lý hàng tồn kho/tài sản dùng luật kết hợp để dự đoán nhu cầu, tránh dư thừa hoặc thiếu hụt.\n• Phương án về ưu đãi cá nhân hóa thuộc Tối ưu hoá Marketing, còn gắn kết dài hạn thuộc Quản trị quan hệ khách hàng."
 },
 {
  "id": "new-c5-06",
  "chapter": 5,
  "difficulty": 2,
  "type": "single",
  "question": "Trong ba ứng dụng phổ biến của Apriori được nêu trên slide, \"Tối ưu hoá Marketing\" được thực hiện bằng cách nào?",
  "options": [
   "Gửi ưu đãi cá nhân hóa đến đúng khách hàng",
   "Dự đoán nhu cầu để tránh dư thừa hàng hóa",
   "Gia tăng sự trung thành của khách hàng cũ",
   "Nâng cao gắn kết dài hạn với khách hàng"
  ],
  "correct": [
   0
  ],
  "explanation": "Slide ghi Tối ưu hoá Marketing = gửi ưu đãi cá nhân hóa đến đúng khách hàng nhờ các mẫu kết hợp khai phá được.\n• Dự đoán nhu cầu là ứng dụng quản lý hàng tồn kho/tài sản; hai phương án còn lại thuộc quản trị quan hệ khách hàng."
 },
 {
  "id": "new-c5-07",
  "chapter": 5,
  "difficulty": 2,
  "type": "single",
  "question": "Theo slide, \"Quản trị quan hệ khách hàng\" là một trong ba ứng dụng phổ biến của Apriori, hướng tới kết quả nào?",
  "options": [
   "Gửi ưu đãi cá nhân hóa đến đúng đối tượng",
   "Dự đoán nhu cầu, tránh dư thừa hoặc thiếu hụt",
   "Khai phá tập phổ biến từ CSDL giao dịch lớn",
   "Gia tăng trung thành và gắn kết dài hạn"
  ],
  "correct": [
   3
  ],
  "explanation": "Quản trị quan hệ khách hàng nhằm gia tăng sự trung thành, nâng cao gắn kết dài hạn với khách hàng.\n• Ưu đãi cá nhân hóa là Tối ưu hoá Marketing; dự đoán nhu cầu là quản lý hàng tồn kho/tài sản."
 },
 {
  "id": "new-c5-08",
  "chapter": 5,
  "difficulty": 1,
  "type": "single",
  "question": "Một luật kết hợp có Conf = 0.75. Theo bảng xếp loại độ tin cậy trong slide, luật này thuộc mức nào?",
  "options": [
   "0.9–1: luật rất mạnh, đáng tin cậy",
   "0.5–0.9: luật trung bình, có thể tin cậy vừa phải",
   "<0.5: luật yếu, ít tin cậy",
   "1: luật tuyệt đối đúng, mọi trường hợp có X đều có Y"
  ],
  "correct": [
   1
  ],
  "explanation": "0.75 nằm trong khoảng 0.5–0.9 nên luật ở mức trung bình, chỉ tin cậy vừa phải.\n• Mức 0.9–1 chỉ dành cho luật rất mạnh; mức 1 là luật tuyệt đối đúng, không còn trường hợp ngoại lệ."
 },
 {
  "id": "new-c5-09",
  "chapter": 5,
  "difficulty": 1,
  "type": "single",
  "question": "Theo bảng đánh giá độ tin cậy trên slide, một luật có Conf đúng bằng 1 (100%) mang ý nghĩa gì?",
  "options": [
   "Luật rất mạnh nhưng vẫn còn trường hợp ngoại lệ",
   "Luật trung bình, chỉ tin cậy ở mức vừa phải",
   "Mọi trường hợp có X đều có Y, luật tuyệt đối đúng",
   "Luật yếu, hầu như không dùng để dự đoán"
  ],
  "correct": [
   2
  ],
  "explanation": "Mức 1 (100%) là luật tuyệt đối đúng: mọi trường hợp có tiền đề X đều có hậu đề Y, không có ngoại lệ.\n• Mức 0.9–1 là luật rất mạnh nhưng vẫn có thể sai sót, khác với mức 1."
 },
 {
  "id": "new-c5-10",
  "chapter": 5,
  "difficulty": 2,
  "type": "single",
  "question": "Trong quy trình 4 bước của thuật toán FP-Growth, bước nào tính số lần xuất hiện của các item trong Condition Pattern Base?",
  "options": [
   "Bước 1",
   "Bước 2",
   "Bước 3",
   "Bước 4"
  ],
  "correct": [
   2
  ],
  "explanation": "Slide xếp bước 1 xây FP-tree, bước 2 tạo Condition Pattern Base, bước 3 tính số lần xuất hiện của các item, bước 4 lọc theo minimum support.\n• Bước 2 mới chỉ tạo CSDL phụ các prefix path, chưa đếm gì."
 },
 {
  "id": "new-c5-11",
  "chapter": 5,
  "difficulty": 3,
  "type": "single",
  "question": "Ở bước 4 của FP-Growth, một item trong Condition Pattern Base được giữ lại khi thỏa điều kiện nào?",
  "options": [
   "Khi support count của nó ≥ minsupportcount đã đặt",
   "Khi support tương đối ≥ minsup 0.01 như Apriori",
   "Khi Confidence của luật chứa nó ≥ minconf 0.8",
   "Khi số nút trên FP-tree của nó nhỏ hơn k"
  ],
  "correct": [
   0
  ],
  "explanation": "Tập phổ biến trong FP-Growth là itemset có support count ≥ minsupportcount, một giá trị nguyên do người dùng đặt.\n• minsup 0.01 và minconf 0.8 là hai ngưỡng lọc luật kết hợp của Apriori, không phải ngưỡng ở bước này."
 },
 {
  "id": "new-c5-12",
  "chapter": 5,
  "difficulty": 2,
  "type": "multiple",
  "question": "Về ba bước 2 → 3 → 4 trong quy trình FP-Growth, những phát biểu nào sau đây ĐÚNG? (chọn nhiều đáp án)",
  "options": [
   "Bước 2 tạo Condition Pattern Base từ các prefix path của FP-tree",
   "Bước 3 tính số lần xuất hiện của từng item trong CSDL phụ đó",
   "Bước 4 giữ lại các item thỏa ngưỡng hỗ trợ tối thiểu",
   "Bước 2 sinh tập ứng viên giống Apriori để đếm về sau"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Bước 2 tạo CSDL phụ gồm các prefix path, bước 3 đếm số lần xuất hiện của từng item, bước 4 lọc item đạt minimum support.\n• FP-Growth không sinh tập ứng viên như Apriori, nhờ vậy mới tiết kiệm bộ nhớ."
 },
 {
  "id": "new-c6-01",
  "chapter": 6,
  "difficulty": 2,
  "type": "single",
  "question": "Để đảm bảo khả năng tái lập kiểm thử, Model Versioning ràng buộc phiên bản mô hình đi kèm với những gì?",
  "options": [
   "Phiên bản siêu tham số và phiên bản cấu hình cụm máy chủ ảo",
   "Phiên bản bảng dashboard và phiên bản hồ sơ kiểm định chất lượng",
   "Phiên bản dữ liệu huấn luyện và phiên bản mã nguồn tạo mô hình",
   "Phiên bản Feature Store và phiên bản thư viện Anaconda đã cài"
  ],
  "correct": [
   2
  ],
  "explanation": "Model Versioning ràng buộc chặt phiên bản mô hình với đúng phiên bản dữ liệu (Data Version) và mã nguồn tạo ra nó, nhằm tái lập kiểm thử.\n• Siêu tham số, cụm máy chủ ảo hay thư viện Anaconda chỉ là chi tiết môi trường, không thuộc bộ ba này."
 },
 {
  "id": "new-c6-02",
  "chapter": 6,
  "difficulty": 1,
  "type": "single",
  "question": "Model Registry quản lý các mô hình đã huấn luyện thành công theo ba trạng thái nào?",
  "options": [
   "Đang phát triển, đã phê duyệt và đã hạ tải",
   "Đang huấn luyện, đang suy luận và đã lưu trữ",
   "Đang thử nghiệm, đang giám sát và đã tái huấn luyện",
   "Đang phát triển, đang suy luận và đã hạ tải"
  ],
  "correct": [
   0
  ],
  "explanation": "Model Registry là danh mục tập trung quản lý trạng thái mô hình: Đang phát triển, Đã phê duyệt và Đã hạ tải.\n• Đang huấn luyện hay đang suy luận là pha vận hành, còn tái huấn luyện thuộc cơ chế Auto-retraining, không phải trạng thái Registry."
 },
 {
  "id": "new-c6-03",
  "chapter": 6,
  "difficulty": 3,
  "type": "single",
  "question": "Một mô hình đã được phê duyệt và đang chạy thực tế; khi phiên bản mới được đưa vào thay thế, Model Registry chuyển mô hình cũ sang trạng thái nào?",
  "options": [
   "Đang phát triển, để tiếp tục tinh chỉnh siêu tham số",
   "Đã hạ tải, để ngừng phục vụ và lưu lại lịch sử",
   "Đã phê duyệt, để giữ quyền dự báo song song",
   "Đang huấn luyện, để chờ huấn luyện lại dữ liệu mới"
  ],
  "correct": [
   1
  ],
  "explanation": "Vòng đời Registry đi theo Đang phát triển → Đã phê duyệt → Đã hạ tải, nên mô hình bị thay thế chuyển sang Đã hạ tải.\n• Đã phê duyệt nghĩa là còn được phép phục vụ; Đang phát triển và Đang huấn luyện là các pha trước khi phê duyệt."
 },
 {
  "id": "new-c6-04",
  "chapter": 6,
  "difficulty": 1,
  "type": "single",
  "question": "Trong quy trình 4 bước của use case cải thiện độ chính xác rating prediction, bước thứ tư là bước nào?",
  "options": [
   "Huấn luyện mô hình trên tập dữ liệu đánh giá đã chia sẵn",
   "Tiền xử lý và chuẩn hóa tập dữ liệu đánh giá trước khi học",
   "Trích xuất và hợp nhất dữ liệu đánh giá từ nhiều nguồn khác",
   "Đánh giá lại độ chính xác dự đoán của mô hình sau huấn luyện"
  ],
  "correct": [
   3
  ],
  "explanation": "Quy trình 4 bước của use case kết thúc bằng việc đánh giá lại độ chính xác dự đoán của mô hình vừa huấn luyện.\n• Ba phương án còn lại mô tả bước chuẩn bị dữ liệu và bước huấn luyện, tức những bước đứng trước bước đánh giá."
 },
 {
  "id": "new-c6-05",
  "chapter": 6,
  "difficulty": 2,
  "type": "single",
  "question": "Use case rating prediction được xếp vào nhóm Supervised Learning dựa trên căn cứ nào?",
  "options": [
   "Mô hình tự nhóm người dùng theo độ tương tự, không cần nhãn",
   "Mô hình tìm bản ghi dị biệt trong tập dữ liệu chưa gán nhãn",
   "Mô hình học từ dữ liệu đã có điểm đánh giá làm nhãn mục tiêu",
   "Mô hình khám phá cấu trúc ẩn từ dữ liệu chưa có nhãn sẵn"
  ],
  "correct": [
   2
  ],
  "explanation": "Supervised Learning huấn luyện trên Labeled Data, và rating prediction dùng chính điểm đánh giá có sẵn làm nhãn để dự đoán giá trị số.\n• Ba phương án còn lại mô tả Clustering và Anomaly Detection, là các bài toán Unsupervised Learning."
 },
 {
  "id": "new-c6-06",
  "chapter": 6,
  "difficulty": 2,
  "type": "single",
  "question": "Sau khi tạo mô hình bằng CREATE MODEL, muốn lấy ngay ROC-AUC và F1-Score để so sánh chất lượng, cần thực hiện thao tác nào?",
  "options": [
   "Chạy CREATE MODEL với thuật toán LOGISTIC_REG trên tập kiểm thử",
   "Chạy ML.EVALUATE bằng một câu SELECT trên mô hình đã tạo",
   "Chạy ML.PREDICT trên bảng dữ liệu mới chưa được gán nhãn",
   "Chạy AutoML để tự động chọn lại thuật toán tối ưu nhất"
  ],
  "correct": [
   1
  ],
  "explanation": "ML.EVALUATE trích xuất nhanh các chỉ số đánh giá như ROC-AUC, F1-Score trực tiếp bằng một câu lệnh SELECT.\n• CREATE MODEL lo việc huấn luyện, ML.PREDICT sinh dự báo trên bảng mới, AutoML tự tìm thuật toán chứ không đo chỉ số."
 },
 {
  "id": "new-c6-07",
  "chapter": 6,
  "difficulty": 3,
  "type": "multiple",
  "question": "Những nội dung nào thuộc nhóm MLOps trong hạ tầng kho dữ liệu theo bài giảng? (chọn nhiều đáp án)",
  "options": [
   "Danh mục tập trung quản lý trạng thái các mô hình đã huấn luyện",
   "Ràng buộc phiên bản mô hình với phiên bản dữ liệu và mã nguồn",
   "Giám sát Data Drift, Concept Drift và kích hoạt tái huấn luyện",
   "Tự động lựa chọn đặc trưng, thuật toán và tinh chỉnh siêu tham số"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Nhóm MLOps gồm Model Registry, Model Versioning và giám sát Model Drift (Data Drift, Concept Drift) kèm luồng Auto-retraining.\n• Tự động chọn đặc trưng, chọn thuật toán và tinh chỉnh siêu tham số là ba bước của AutoML, một chủ đề riêng."
 },
 {
  "id": "new-c7-01",
  "chapter": 7,
  "difficulty": 2,
  "type": "single",
  "question": "Sắp xếp bốn mức rủi ro của AI Act theo chiều mức độ can thiệp tăng dần, từ tự do nhất đến bị cấm:",
  "options": [
   "Minimal Risk → High Risk → Transparent/Limited Risk → Unacceptable Risk",
   "Transparent/Limited Risk → Minimal Risk → High Risk → Unacceptable Risk",
   "Minimal Risk → Transparent/Limited Risk → High Risk → Unacceptable Risk",
   "Minimal Risk → Transparent/Limited Risk → Unacceptable Risk → High Risk"
  ],
  "correct": [
   2
  ],
  "explanation": "Thang bốn mức là Minimal Risk (tự do vận hành) → Transparent/Limited (dán nhãn) → High Risk (kiểm soát nghiêm ngặt) → Unacceptable Risk (cấm hoàn toàn).\n• Đặt High Risk sau Unacceptable, hoặc đưa High lên trước Transparent, đều làm sai chiều can thiệp."
 },
 {
  "id": "new-c7-02",
  "chapter": 7,
  "difficulty": 2,
  "type": "single",
  "question": "Trong AI Data Catalog, một bảng dữ liệu có Trust Score cao cho biết điều gì về bảng đó?",
  "options": [
   "Bảng chứa ít cột PII nên được gắn nhãn phân quyền bảo mật thấp",
   "Bảng nằm sâu trong sơ đồ lineage nên ít bị ảnh hưởng khi nguồn đổi",
   "Bảng được tìm thấy nhiều nhất qua các truy vấn ngôn ngữ tự nhiên",
   "Bảng được dùng nhiều và vừa vượt qua kiểm định chất lượng tự động"
  ],
  "correct": [
   3
  ],
  "explanation": "Trust Score đánh giá chất lượng bảng dữ liệu dựa trên tần suất sử dụng và lịch sử kiểm định chất lượng tự động.\n• Gắn nhãn PII là nhận diện dữ liệu nhạy cảm, vị trí trong sơ đồ lineage thuộc Data Lineage Integration, tần suất tìm thấy thuộc Semantic Search."
 },
 {
  "id": "new-c7-03",
  "chapter": 7,
  "difficulty": 1,
  "type": "single",
  "question": "Chuyên viên nhập câu “Tìm bảng chứa doanh thu 2 năm trước” và AI trả về đúng bảng cần dùng. Năng lực này thuộc thành phần nào của AI Data Catalog?",
  "options": [
   "Data Lineage Integration, nối sơ đồ truy vết vào trang tài sản",
   "Semantic Search, cho phép tìm bảng bằng ngôn ngữ tự nhiên",
   "Business Glossary, thống nhất khái niệm kinh doanh giữa các phòng",
   "Trust Score, đánh giá chất lượng bảng theo lịch sử kiểm định"
  ],
  "correct": [
   1
  ],
  "explanation": "Semantic Search cho phép chuyên viên phân tích dùng ngôn ngữ tự nhiên để tìm bảng dữ liệu, AI tự tìm ra bảng đúng.\n• Data Lineage Integration chỉ hiển thị sơ đồ truy vết, Business Glossary thống nhất thuật ngữ, Trust Score chấm chất lượng bảng."
 },
 {
  "id": "new-c7-04",
  "chapter": 7,
  "difficulty": 1,
  "type": "single",
  "question": "Muốn ngay trên trang mô tả một tài sản dữ liệu, người dùng thấy được sơ đồ truy vết luồng dữ liệu, AI Data Catalog dùng thành phần nào?",
  "options": [
   "Data Lineage Integration, gắn sơ đồ truy vết vào trang tài sản",
   "Semantic Search, tìm bảng dữ liệu theo ngôn ngữ tự nhiên",
   "Trust Score, đánh giá chất lượng theo lịch sử kiểm định",
   "Technical Metadata, lưu kiểu dữ liệu và tần suất cập nhật"
  ],
  "correct": [
   0
  ],
  "explanation": "Data Lineage Integration tích hợp trực tiếp sơ đồ truy vết luồng dữ liệu vào ngay trang mô tả tài sản dữ liệu.\n• Semantic Search lo tìm kiếm, Trust Score lo chấm chất lượng, còn Technical Metadata lưu kiểu dữ liệu, schema, freshness và owner."
 },
 {
  "id": "new-c7-05",
  "chapter": 7,
  "difficulty": 2,
  "type": "single",
  "question": "Bias Reporting Dashboard trong bộ báo cáo tuân thủ dữ liệu đo lường chỉ số gì, cho đối tượng nào?",
  "options": [
   "Fairness Metrics cho các mô hình AI đang thực thi thực tế",
   "Epsilon privacy budget loss cho các bảng đã ẩn danh hóa",
   "Lịch sử thao tác tạo, sửa, xóa cho từng bảng nhạy cảm",
   "Kiểu dữ liệu và tần suất cập nhật cho từng cột của bảng"
  ],
  "correct": [
   0
  ],
  "explanation": "Bias Reporting Dashboard là báo cáo định kỳ tự động đo lường Fairness Metrics của các mô hình AI đang thực thi thực tế.\n• Hao hụt Epsilon thuộc Privacy Audit Trail, lịch sử thao tác thuộc Data Audit Trail, kiểu dữ liệu và freshness thuộc Technical Metadata."
 },
 {
  "id": "new-c7-06",
  "chapter": 7,
  "difficulty": 2,
  "type": "multiple",
  "question": "Những cặp “mức rủi ro – cách xử lý” nào đúng theo AI Act? (chọn nhiều đáp án)",
  "options": [
   "Unacceptable Risk – cấm hoàn toàn hệ thống AI",
   "High Risk – kiểm soát nghiêm ngặt hệ thống AI",
   "Minimal Risk – kiểm soát nghiêm ngặt hệ thống AI",
   "Transparent/Limited Risk – yêu cầu dán nhãn rõ ràng"
  ],
  "correct": [
   0,
   1,
   3
  ],
  "explanation": "Ba mức đúng là Unacceptable Risk (cấm hoàn toàn), High Risk (kiểm soát nghiêm ngặt) và Transparent/Limited Risk (dán nhãn rõ ràng).\n• Minimal Risk là mức tự do vận hành, không bị kiểm soát nghiêm ngặt như High Risk."
 },
 {
  "id": "new-c7-07",
  "chapter": 7,
  "difficulty": 3,
  "type": "single",
  "question": "Điểm khác nhau giữa Bias Reporting Dashboard và Data Audit Trail trong báo cáo tuân thủ dữ liệu là gì?",
  "options": [
   "Bias Reporting Dashboard đo hao hụt Epsilon theo thời gian; Data Audit Trail ghi log bất biến hành vi",
   "Bias Reporting Dashboard ghi log bất biến hành vi dữ liệu; Data Audit Trail đo Fairness Metrics định kỳ",
   "Bias Reporting Dashboard đo Fairness Metrics định kỳ; Data Audit Trail ghi log bất biến hành vi",
   "Bias Reporting Dashboard ghi log bất biến hành vi dữ liệu; Data Audit Trail đo hao hụt Epsilon"
  ],
  "correct": [
   2
  ],
  "explanation": "Bias Reporting Dashboard báo cáo định kỳ Fairness Metrics của mô hình đang thực thi; Data Audit Trail là sổ cái bất biến ghi ai tạo, sửa, xóa hoặc xem dữ liệu.\n• Đảo vai hai thành phần là sai; hao hụt Epsilon privacy budget thuộc Privacy Audit Trail."
 },
 {
  "id": "new-c8-01",
  "chapter": 8,
  "difficulty": 1,
  "type": "single",
  "question": "Một dashboard đặt chỉ số doanh thu mục tiêu ở góc trên bên trái, tô màu tương phản mạnh nhất, còn các chỉ số phụ dùng màu nhạt và nằm rải phía dưới. Theo Data Storytelling, cách trình bày này thể hiện thành phần nào?",
  "options": [
   "Tự động tóm tắt: dùng Gen AI viết đoạn giải thích cho dashboard",
   "Alerting & Actions: nút lệnh Write-back kích hoạt quy trình nghiệp vụ",
   "Trực quan hóa thông minh: dùng màu sắc và vị trí dẫn sự chú ý",
   "Cấu trúc bốn phần: Bối cảnh, Vấn đề, Giải pháp rồi Hành động"
  ],
  "correct": [
   2
  ],
  "explanation": "Đặt chỉ số then chốt ở vị trí đắc địa và tô màu tương phản là trực quan hóa thông minh: màu sắc và vị trí dẫn sự chú ý vào Key Metrics.\n• Tóm tắt bằng Gen AI là diễn giải văn bản, Write-back to CRM thuộc Alerting & Actions, cấu trúc bốn phần là khung kể chuyện."
 },
 {
  "id": "new-c8-02",
  "chapter": 8,
  "difficulty": 2,
  "type": "single",
  "question": "Một báo cáo mở đầu bằng danh sách việc cần làm ngay, sau đó mới trình bày số liệu bối cảnh và nguyên nhân sụt giảm. So với cấu trúc bốn phần của Data Storytelling, báo cáo này đã làm gì?",
  "options": [
   "Gộp phần Giải pháp vào Bối cảnh rồi bỏ hẳn phần Hành động",
   "Đảo thứ tự: đưa Hành động lên đầu, Bối cảnh và Vấn đề xuống sau",
   "Đảo thứ tự: đưa Bối cảnh xuống cuối, thay chỗ cho Hành động",
   "Bỏ phần Vấn đề và đặt Giải pháp trước cả phần Bối cảnh"
  ],
  "correct": [
   1
  ],
  "explanation": "Trật tự chuẩn là Bối cảnh → Vấn đề → Giải pháp → Hành động, nên mở đầu bằng việc cần làm tức là đã đảo Hành động lên trước.\n• Bối cảnh phải đứng đầu để người xem hiểu phạm vi, còn Hành động luôn là phần khép lại câu chuyện nên không thể bị gộp hay bỏ."
 },
 {
  "id": "new-c8-03",
  "chapter": 8,
  "difficulty": 3,
  "type": "single",
  "question": "Điều gì khiến Data Storytelling được xem là kỹ năng cầu nối quan trọng nhất giữa bộ phận kỹ thuật và bộ phận chiến lược?",
  "options": [
   "Vì nó thay bộ phận kỹ thuật xây dựng kho dữ liệu bằng ngôn ngữ tự nhiên của người dùng",
   "Vì nó buộc bộ phận chiến lược tự viết câu lệnh SQL trước khi được xem dashboard",
   "Vì nó để AI Agents tự ra quyết định thay cả hai bộ phận mà không cần bàn giao",
   "Vì nó biến kết quả phân tích kỹ thuật thành câu chuyện để bên chiến lược hiểu và hành động"
  ],
  "correct": [
   3
  ],
  "explanation": "Giá trị cầu nối nằm ở chỗ biến kết quả phân tích của bên kỹ thuật thành câu chuyện bốn phần có trực quan hóa dẫn dắt, giúp bên chiến lược hiểu và hành động.\n• Nó không thay việc xây kho dữ liệu, không buộc lãnh đạo viết SQL, cũng không trao quyền quyết định cho AI."
 },
 {
  "id": "new-c8-04",
  "chapter": 8,
  "difficulty": 3,
  "type": "single",
  "question": "LLM ở bước Auto-SQL sinh ra câu lệnh trả đúng con số người dùng hỏi, nhưng câu lệnh quét toàn bảng qua nhiều lần join và chạy hơn 40 phút. So với ba tiêu chí của Auto-SQL, câu lệnh này vi phạm tiêu chí nào?",
  "options": [
   "Tiêu chí tối ưu: câu lệnh cho kết quả đúng nhưng thực thi kém hiệu quả",
   "Tiêu chí chuẩn xác: câu lệnh trả về con số không khớp với câu hỏi",
   "Tiêu chí an toàn: câu lệnh truy cập dữ liệu ngoài phạm vi được phép",
   "Tiêu chí ngắn gọn: câu lệnh dài dòng nên khó kiểm tra lại khi cần"
  ],
  "correct": [
   0
  ],
  "explanation": "Ba tiêu chí của Auto-SQL là chuẩn xác, tối ưu và an toàn; kết quả vẫn đúng nhưng chạy 40 phút là vi phạm tính tối ưu.\n• Chuẩn xác nói về độ đúng của kết quả, an toàn nói về phạm vi truy cập, còn ngắn gọn không phải tiêu chí mà slide nêu."
 },
 {
  "id": "new-c8-05",
  "chapter": 8,
  "difficulty": 1,
  "type": "single",
  "question": "Trong workflow Conversational BI, bước Auto-SQL nhận đầu vào và tạo ra đầu ra tương ứng là gì?",
  "options": [
   "Tài liệu thô → các vector embedding lưu trong chỉ mục tìm kiếm",
   "Câu lệnh SQL → biểu đồ Bar chart hoặc Line chart phù hợp nhất",
   "Câu hỏi ngôn ngữ tự nhiên → câu lệnh SQL chuẩn xác, tối ưu, an toàn",
   "Ngữ cảnh tìm được → đoạn văn trả lời do LLM tổng hợp lại"
  ],
  "correct": [
   2
  ],
  "explanation": "Auto-SQL biên dịch câu hỏi ngữ nghĩa do Natural Query đưa vào thành câu lệnh SQL chuẩn xác, tối ưu và an toàn.\n• Tài liệu → vector là bước Embedding của RAG, SQL → biểu đồ là Instant Insight, ngữ cảnh → câu trả lời là bước Generation."
 },
 {
  "id": "new-c8-06",
  "chapter": 8,
  "difficulty": 2,
  "type": "single",
  "question": "Điều gì khởi phát một phiên phân tích trong Agentic BI, khác với cách Generative BI hoạt động?",
  "options": [
   "Người dùng kinh doanh gõ câu hỏi bằng ngôn ngữ tự nhiên vào ô chat của BI",
   "AI Agents tự theo dõi mục tiêu kinh doanh và chủ động lập kế hoạch phân tích",
   "Quản trị viên nạp lại toàn bộ dữ liệu thô vào kho theo lịch định kỳ hằng đêm",
   "Mô hình ngôn ngữ lớn được huấn luyện lại trên tài liệu nội bộ mới cập nhật"
  ],
  "correct": [
   1
  ],
  "explanation": "Agentic BI khởi phát từ mục tiêu kinh doanh do AI Agents tự theo dõi, rồi tự lập kế hoạch và truy vấn mà không cần con người ra lệnh liên tục.\n• Gõ câu hỏi ngôn ngữ tự nhiên là cơ chế của Generative BI; nạp dữ liệu hay huấn luyện lại mô hình chỉ là thao tác vận hành."
 },
 {
  "id": "new-c8-07",
  "chapter": 8,
  "difficulty": 2,
  "type": "single",
  "question": "Doanh nghiệp muốn hệ thống tự phát hiện xu hướng ẩn trong dữ liệu và chủ động gửi báo cáo đề xuất chiến lược mà không ai phải đặt câu hỏi. Năng lực nào trong chương đáp ứng yêu cầu này?",
  "options": [
   "Chat-with-your-data của Generative BI",
   "Alerting & Actions của Data Storytelling",
   "Semantic Match của Vector Search",
   "AI Agents tự hành của Agentic BI"
  ],
  "correct": [
   3
  ],
  "explanation": "Tự theo dõi mục tiêu, tự lập kế hoạch, phát hiện xu hướng ẩn và chủ động gửi báo cáo đề xuất chiến lược là năng lực cốt lõi của AI Agents trong Agentic BI.\n• Chat-with-your-data vẫn phải có người hỏi, Alerting & Actions chỉ kích hoạt quy trình đã định, Semantic Match chỉ tìm tương đồng."
 },
 {
  "id": "new-c9-01",
  "chapter": 9,
  "difficulty": 3,
  "type": "single",
  "question": "Một câu SQL duy nhất cần join bảng khách hàng trong kho, cạnh đồ thị trong Neo4j và log giao dịch trên blockchain. Thành phần nào cho biết mỗi cột thực sự nằm ở nguồn nào để câu lệnh định tuyến đúng?",
  "options": [
   "Connector/Wrapper Engine: bộ máy dịch SQL tổng sang ngôn ngữ nguồn",
   "Global Catalog: bảng từ điển dữ liệu chung của hệ federated",
   "Predicate Pushdown: cơ chế đẩy điều kiện WHERE xuống từng nguồn",
   "Cost-Based Optimizer: bộ ước chi phí CPU/I-O và chi phí mạng"
  ],
  "correct": [
   1
  ],
  "explanation": "Global Catalog giữ một bảng từ điển dữ liệu chung để biết rõ cột nào nằm ở cơ sở dữ liệu nào, nhờ đó câu SQL tổng định tuyến đúng nguồn.\n• Wrapper Engine chỉ dịch cú pháp, Pushdown chỉ đẩy điều kiện lọc, Optimizer chỉ ước chi phí — không cái nào định vị được cột."
 },
 {
  "id": "new-c9-02",
  "chapter": 9,
  "difficulty": 2,
  "type": "single",
  "question": "Predicate Pushdown xuất hiện ở cả chương 1 (kiến trúc Decoupled) và chương 9 (Federated Querying). Điểm chung của hai lần sử dụng đó là gì?",
  "options": [
   "Kéo toàn bộ dữ liệu thô về máy chủ trung tâm rồi mới lọc điều kiện",
   "Lọc dữ liệu sau khi đã hợp nhất kết quả của mọi nguồn về kho trung tâm",
   "Lọc dữ liệu theo thứ tự ưu tiên do Query Hints điều hướng sẵn từ trước",
   "Lọc bớt dữ liệu ngay tại nơi lưu trữ để phần truyền đi là nhỏ nhất"
  ],
  "correct": [
   3
  ],
  "explanation": "Cả hai lần đều đẩy điều kiện lọc xuống sát nơi có dữ liệu: chương 1 đưa cột và dòng cần thiết từ ổ cứng về CPU, chương 9 đẩy WHERE xuống CSDL nguồn để giảm tải mạng.\n• Kéo hết dữ liệu về rồi mới lọc, hoặc lọc sau khi đã hợp nhất, chính là tình huống pushdown sinh ra để tránh."
 },
 {
  "id": "new-c9-03",
  "chapter": 9,
  "difficulty": 3,
  "type": "single",
  "question": "Hai lần nhắc Predicate Pushdown khác nhau ở ranh giới mà dữ liệu bị lọc vượt qua. Cách phân biệt nào đúng với slide của hai chương?",
  "options": [
   "Chương 1: từ tầng lưu trữ sang tầng tính toán; chương 9: từ kho trung tâm xuống CSDL nguồn ngoài",
   "Chương 1: từ tầng tính toán sang tầng lưu trữ; chương 9: từ CSDL nguồn về kho trung tâm",
   "Chương 1: từ tầng lưu trữ sang chỉ mục vector; chương 9: từ kho trung tâm sang blockchain",
   "Chương 1: từ kho trung tâm xuống CSDL nguồn; chương 9: từ tầng lưu trữ sang tầng tính toán"
  ],
  "correct": [
   0
  ],
  "explanation": "Chương 1 đẩy cột và dòng cần thiết từ ổ cứng sang CPU trong cùng một hệ thống; chương 9 đẩy mệnh đề WHERE xuống thẳng các cơ sở dữ liệu nguồn bên ngoài.\n• Hai phương án đảo ngược chiều là bẫy; chỉ mục vector và blockchain là đối tượng khác, không phải ranh giới pushdown tác động."
 },
 {
  "id": "new-c9-04",
  "chapter": 9,
  "difficulty": 2,
  "type": "single",
  "question": "Hồ sơ sản phẩm trong Document Store có số trường khác nhau tùy ngành hàng và sinh thêm trường mới liên tục. Để công cụ BI/OLAP truy vấn được, Hybrid Schema Mapping yêu cầu pipeline làm gì?",
  "options": [
   "Giữ nguyên cấu trúc lồng nhau để công cụ BI tự duyệt khi truy vấn",
   "Chuyển ngược các bảng OLAP thành document rồi lưu lại vào NoSQL",
   "Trích xuất và làm phẳng các trường động thành cột của bảng quan hệ",
   "Chấp nhận Eventual Consistency để đổi lấy tốc độ ghi dữ liệu"
  ],
  "correct": [
   2
  ],
  "explanation": "Hybrid Schema Mapping dùng Data Pipelines để trích xuất và làm phẳng các trường động từ NoSQL thành dạng bảng phục vụ OLAP.\n• Giữ nguyên cấu trúc lồng nhau thì BI khó truy vấn, chiều chuyển đổi ngược lại là sai, còn Eventual Consistency thuộc CAP Theorem."
 },
 {
  "id": "new-c9-05",
  "chapter": 9,
  "difficulty": 1,
  "type": "single",
  "question": "Trong kiến trúc đa mô hình, nhóm lưu trữ nào đảm nhận việc so khớp theo ý nghĩa thay vì so khớp từ khóa thô?",
  "options": [
   "Vector store, nơi lưu embeddings và chỉ mục ANN",
   "Document Store, nơi lưu hồ sơ có cấu trúc thay đổi",
   "Key-Value Store, nơi lưu đệm và phiên làm việc",
   "Graph store, nơi lưu quan hệ giữa các thực thể"
  ],
  "correct": [
   0
  ],
  "explanation": "Vector store giữ các embeddings và chỉ mục ANN nên thay được Keyword Matching bằng tìm kiếm ngữ nghĩa.\n• Document Store lo hồ sơ cấu trúc thay đổi, Key-Value lo caching và session, Graph store lo quan hệ giữa thực thể — không nhóm nào so khớp theo nghĩa."
 },
 {
  "id": "new-c9-06",
  "chapter": 9,
  "difficulty": 1,
  "type": "single",
  "question": "Theo slide, một câu SQL duy nhất trong Federated Querying có thể lấy và liên kết dữ liệu từ bộ ba nền tảng lưu trữ nào?",
  "options": [
   "Kho dữ liệu SQL, Document Store và Key-Value Store",
   "Kho dữ liệu SQL, cơ sở dữ liệu đồ thị và mạng blockchain",
   "Cơ sở dữ liệu đồ thị, mạng blockchain và chỉ mục vector",
   "Kho dữ liệu SQL, Object Tables và chỉ mục vector"
  ],
  "correct": [
   1
  ],
  "explanation": "Federated Querying cho phép một câu SQL duy nhất vừa lấy vừa liên kết dữ liệu từ SQL, Graph và Blockchain mà không di chuyển dữ liệu thô.\n• Document, Key-Value, chỉ mục vector và Object Tables là đối tượng khác, không thuộc bộ ba nền tảng của Federated."
 },
 {
  "id": "new-c9-07",
  "chapter": 9,
  "difficulty": 2,
  "type": "multiple",
  "question": "Những phát biểu nào ĐÚNG về vai trò của từng nhóm lưu trữ trong kiến trúc đa mô hình? (chọn nhiều đáp án)",
  "options": [
   "Vector store lưu embeddings để so khớp theo ý nghĩa thay cho từ khóa",
   "Graph store lưu quan hệ như thực thể hạng nhất để duyệt N-cấp",
   "Key-Value Store phục vụ caching và session với truy xuất tốc độ cao",
   "Blockchain lưu toàn bộ dữ liệu thô và cho phép DBA sửa log khi cần"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Ba phát biểu đầu đúng với slide: vector cho tìm kiếm ngữ nghĩa, graph cho quan hệ hạng nhất, key-value cho caching và session.\n• Blockchain không lưu dữ liệu thô mà chỉ nhận mã băm, và sổ cái bất biến nên DBA không thể sửa hay xóa audit log để xóa dấu vết."
 }
];
if (typeof module !== "undefined" && module.exports) { module.exports = QUESTIONS_MOI; }
