// Bộ đề thứ 2 (230 câu, có giải thích) — trích từ file HTML độc lập của anh chị khóa trước
// Bộ gốc đặt đáp án đúng ở vị trí A; merge_questions.js sẽ xáo thứ tự đáp án.
const QUESTIONS_BO2 = [
 {
  "id": "b-c1-q1",
  "chapter": 1,
  "difficulty": 2,
  "type": "single",
  "question": "RDBMS (Relational Database Management System) được thiết kế chủ yếu để xử lý loại tác vụ nào?",
  "options": [
   "Xử lý giao dịch đơn lẻ có cấu trúc chặt chẽ (OLTP – Online Transaction Processing)",
   "Phân tích đa chiều trên dữ liệu lịch sử (OLAP – Online Analytical Processing)",
   "Lưu trữ dữ liệu thô phi cấu trúc quy mô lớn (Data Lake)",
   "Huấn luyện mô hình học máy trực tiếp trên vector embeddings"
  ],
  "correct": [
   0
  ],
  "explanation": "RDBMS là hệ quản trị CSDL quan hệ, thiết kế để xử lý giao dịch đơn lẻ có cấu trúc chặt chẽ (OLTP). OLAP, Data Lake và huấn luyện ML là đặc trưng của các thế hệ kiến trúc sau."
 },
 {
  "id": "b-c1-q2",
  "chapter": 1,
  "difficulty": 2,
  "type": "single",
  "question": "Theo dòng tiến hóa của hệ sinh thái dữ liệu, thập niên 1990 gắn với sự trỗi dậy của kiến trúc nào?",
  "options": [
   "Data Warehouse phục vụ báo cáo quản trị và phân tích (OLAP)",
   "Data Lake trên nền tảng Hadoop/S3",
   "Lakehouse hợp nhất độ tin cậy và tính linh hoạt",
   "Kiến trúc AI-Native với Open Table Formats"
  ],
  "correct": [
   0
  ],
  "explanation": "Mốc thời gian: 1980s – RDBMS (OLTP); 1990s – Data Warehouse (OLAP); 2010s – Data Lake; 2020s – Lakehouse; hiện nay – AI-Native."
 },
 {
  "id": "b-c1-q3",
  "chapter": 1,
  "difficulty": 2,
  "type": "single",
  "question": "Định dạng bảng mở (Open Table Formats) nào được nêu là tiêu chuẩn kết nối trong kiến trúc AI-Native?",
  "options": [
   "Iceberg và Delta Lake",
   "Parquet và ORC",
   "JSON và VARIANT",
   "Cypher và RPC"
  ],
  "correct": [
   0
  ],
  "explanation": "Iceberg và Delta Lake là các Open Table Formats trở thành tiêu chuẩn kết nối trong kiến trúc AI-Native. Parquet/ORC là định dạng nén; JSON/VARIANT là kiểu dữ liệu; Cypher/RPC là ngôn ngữ/giao thức truy vấn."
 },
 {
  "id": "b-c1-q4",
  "chapter": 1,
  "difficulty": 2,
  "type": "single",
  "question": "Đâu là điểm khác biệt giữa Scale-out và Scale-up khi mở rộng hệ thống?",
  "options": [
   "Scale-out là mở rộng theo chiều ngang (thêm nhiều máy chủ); Scale-up là nâng cấp một máy chủ duy nhất",
   "Scale-out là nâng cấp một máy chủ duy nhất; Scale-up là thêm nhiều máy chủ",
   "Cả hai đều là thêm nhiều máy chủ, chỉ khác về chi phí",
   "Cả hai đều là nâng cấp một máy chủ, chỉ khác về tốc độ"
  ],
  "correct": [
   0
  ],
  "explanation": "Scale-out = mở rộng theo chiều ngang (thêm máy chủ); Scale-up = nâng cấp một máy chủ. RDBMS truyền thống khó và tốn kém khi Scale-out."
 },
 {
  "id": "b-c1-q5",
  "chapter": 1,
  "difficulty": 2,
  "type": "single",
  "question": "'Schema-on-write cứng nhắc' của RDBMS truyền thống nghĩa là gì?",
  "options": [
   "Yêu cầu định nghĩa cấu trúc dữ liệu (schema) nghiêm ngặt trước khi nạp dữ liệu vào",
   "Chỉ định nghĩa cấu trúc dữ liệu tại thời điểm truy vấn",
   "Cho phép thay đổi cấu trúc bảng bất kỳ lúc nào mà không gián đoạn",
   "Tự động mở rộng thêm cột khi nguồn phát sinh thuộc tính mới"
  ],
  "correct": [
   0
  ],
  "explanation": "Schema-on-write yêu cầu định nghĩa schema nghiêm ngặt TRƯỚC khi nạp dữ liệu, khiến việc thay đổi chậm. Ngược lại Schema-on-read (định nghĩa lúc truy vấn) là đặc trưng của kiến trúc hiện đại."
 },
 {
  "id": "b-c1-q6",
  "chapter": 1,
  "difficulty": 2,
  "type": "single",
  "question": "Rủi ro 'ràng buộc Compute–Storage' trong RDBMS truyền thống là gì?",
  "options": [
   "Không thể nâng cấp CPU mà không phải tăng luôn dung lượng đĩa vì hai tài nguyên gắn chặt với nhau",
   "CPU và đĩa được đặt độc lập, có thể mở rộng riêng biệt",
   "Dữ liệu bị phân mảnh thành nhiều kho rời rạc khó tích hợp",
   "Chi phí bản quyền phần mềm quá cao"
  ],
  "correct": [
   0
  ],
  "explanation": "Ràng buộc Compute–Storage nghĩa là CPU và đĩa gắn chặt → không thể nâng CPU mà không tăng đĩa. Việc tách rời chúng độc lập là mô hình mới (Decoupled). Data Silo và chi phí bản quyền là hạn chế khác."
 },
 {
  "id": "b-c1-q7",
  "chapter": 1,
  "difficulty": 2,
  "type": "single",
  "question": "Đặc điểm 'Native Vector' của AI-Native Lakehouse hỗ trợ điều gì?",
  "options": [
   "Lưu trữ và truy vấn trực tiếp Vector Embeddings phục vụ các mô hình ngôn ngữ lớn (LLMs)",
   "Tự động gán nhãn, phân loại và bảo mật metadata khi nạp dữ liệu",
   "Quản lý và tái sử dụng các đặc trưng (features) cho mô hình ML",
   "Tự động co giãn hạ tầng theo nhu cầu mà không cần quản lý máy chủ"
  ],
  "correct": [
   0
  ],
  "explanation": "Native Vector = lưu trữ/truy vấn trực tiếp Vector Embeddings cho LLMs. Các đặc điểm khác lần lượt là Quản trị Metadata tự động, Feature Store, và Kiến trúc Serverless."
 },
 {
  "id": "b-c1-q8",
  "chapter": 1,
  "difficulty": 2,
  "type": "single",
  "question": "Trong Modern Data Warehouse, 'Elasticity' (co giãn) được hiểu là gì?",
  "options": [
   "Khả năng tăng/giảm tài nguyên tính toán nhanh chóng theo nhu cầu thực tế",
   "Giảm thiểu tối đa việc cấu hình, cài đặt và bảo trì hạ tầng",
   "Chỉ trả tiền cho phần tài nguyên thực sự sử dụng",
   "Hỗ trợ hàng ngàn người dùng truy vấn đồng thời"
  ],
  "correct": [
   0
  ],
  "explanation": "Elasticity = tăng/giảm tài nguyên tính toán nhanh theo nhu cầu. Các khái niệm dễ lẫn: Zero Management (giảm cấu hình/bảo trì), Pay-as-you-go (trả theo mức dùng), High Concurrency (nhiều người dùng đồng thời)."
 },
 {
  "id": "b-c1-q9",
  "chapter": 1,
  "difficulty": 2,
  "type": "single",
  "question": "Lợi thế nào của Modern Data Warehouse giúp 'loại bỏ CAPEX'?",
  "options": [
   "Không cần đầu tư lớn ban đầu vào phần cứng, phòng máy",
   "Luôn dùng phiên bản mới nhất mà không cần downtime",
   "Hệ thống tự học và điều chỉnh chỉ mục truy vấn",
   "Dữ liệu được sao lưu tự động đa vùng (multi-region)"
  ],
  "correct": [
   0
  ],
  "explanation": "Loại bỏ CAPEX = không cần đầu tư lớn ban đầu vào phần cứng. Cập nhật liên tục, tối ưu truy vấn tự động và phục hồi thảm họa (DR) là các lợi thế khác."
 },
 {
  "id": "b-c1-q10",
  "chapter": 1,
  "difficulty": 2,
  "type": "single",
  "question": "Nền tảng Modern Data Warehouse nào được mô tả là 'tiên phong trong tách rời Compute/Storage và chia sẻ dữ liệu an toàn (Data Sharing)'?",
  "options": [
   "Snowflake",
   "Google BigQuery",
   "Amazon Redshift Serverless",
   "Firebolt"
  ],
  "correct": [
   0
  ],
  "explanation": "Snowflake tiên phong tách rời Compute/Storage và Data Sharing. BigQuery mạnh về Serverless/AI của Google; Redshift mạnh trong hệ sinh thái AWS; Firebolt tập trung tốc độ truy vấn cực nhanh."
 },
 {
  "id": "b-c1-q11",
  "chapter": 1,
  "difficulty": 2,
  "type": "single",
  "question": "Nền tảng nào được mô tả là 'kiến trúc Serverless, tích hợp sẵn các mô hình AI/ML của Google'?",
  "options": [
   "Google BigQuery",
   "Snowflake",
   "Azure Synapse Analytics",
   "MotherDuck"
  ],
  "correct": [
   0
  ],
  "explanation": "Google BigQuery = Serverless + AI/ML của Google. Azure Synapse hợp nhất SQL/Spark; MotherDuck là Lakehouse 'nhẹ' dựa trên DuckDB."
 },
 {
  "id": "b-c1-q12",
  "chapter": 1,
  "difficulty": 2,
  "type": "single",
  "question": "Kỹ thuật quản lý chi phí 'Auto-suspend' trong Modern DW nghĩa là gì?",
  "options": [
   "Tự động tắt cụm tính toán khi không có truy vấn",
   "Đưa dữ liệu cũ vào vùng lưu trữ giá rẻ (Archive tier)",
   "Tránh tính toán lại kết quả cũ bằng caching",
   "Thiết lập cảnh báo tự động khi chi phí vượt ngưỡng"
  ],
  "correct": [
   0
  ],
  "explanation": "Auto-suspend = tắt cụm tính toán khi không có truy vấn. Phân tầng lưu trữ (Archive), Caching, và Budget Alerts là các kỹ thuật kiểm soát chi phí khác."
 },
 {
  "id": "b-c1-q13",
  "chapter": 1,
  "difficulty": 2,
  "type": "single",
  "question": "Data Fabric giải quyết bài toán kết nối dữ liệu đa nguồn bằng triết lý cốt lõi nào?",
  "options": [
   "Truy cập dữ liệu ngay tại nguồn theo cơ chế Zero-copy (không tạo bản sao vật lý)",
   "Gom toàn bộ dữ liệu vào một nền tảng lưu trữ hợp nhất",
   "Phân quyền sở hữu dữ liệu về từng domain nghiệp vụ",
   "Chia dữ liệu thành ba tầng Bronze–Silver–Gold"
  ],
  "correct": [
   0
  ],
  "explanation": "Data Fabric dùng Virtualization + Zero-copy: truy cập tại nguồn, không sao chép. Gom vào một nền tảng là Lakehouse; phân quyền theo domain là Data Mesh; Bronze/Silver/Gold là Medallion."
 },
 {
  "id": "b-c1-q14",
  "chapter": 1,
  "difficulty": 2,
  "type": "single",
  "question": "Trong luồng vận hành Data Fabric, hai kênh nạp dữ liệu (Ingest) là gì?",
  "options": [
   "Ingest (real time) cho dữ liệu thời gian thực và Ingest (batch) cho dữ liệu theo lô",
   "Ingest (bronze) cho dữ liệu thô và Ingest (gold) cho dữ liệu đã tổng hợp",
   "Ingest (compute) và Ingest (storage) tách biệt",
   "Ingest (SQL) và Ingest (NoSQL)"
  ],
  "correct": [
   0
  ],
  "explanation": "Data Fabric nạp dữ liệu qua hai kênh: Ingest real time (thời gian thực) và Ingest batch (theo lô), trước khi Store → Transform → Model → Visualize."
 },
 {
  "id": "b-c1-q15",
  "chapter": 1,
  "difficulty": 2,
  "type": "single",
  "question": "Dấu hiệu nhận biết kiến trúc Data Mesh là gì?",
  "options": [
   "Có 'Data as a Product', SLA từng domain, Federated Governance",
   "Có Bronze–Silver–Gold, Delta/Iceberg, một kho trung tâm",
   "Có Data Catalog, Virtualization Engine, Zero-copy access",
   "Có Object Storage phẳng và định danh bằng Key"
  ],
  "correct": [
   0
  ],
  "explanation": "Data Mesh: 'Data as a Product', SLA từng domain, Federated Governance. Bronze/Silver/Gold là Lakehouse; Data Catalog + Virtualization là Data Fabric."
 },
 {
  "id": "b-c1-q16",
  "chapter": 1,
  "difficulty": 2,
  "type": "single",
  "question": "Nên chọn kiến trúc Data Fabric khi nào?",
  "options": [
   "Khi dữ liệu bị phân tán quá rộng, không thể di chuyển do ràng buộc pháp lý, cần tích hợp nhanh hệ thống cũ (Legacy) và Cloud",
   "Khi doanh nghiệp quy mô trung bình muốn đơn giản hóa và ưu tiên AI/ML trên một Cloud",
   "Khi tổ chức quá lớn, muốn thúc đẩy văn hóa tự chủ dữ liệu tại các đơn vị kinh doanh",
   "Khi cần hiệu năng SQL cao cho dự án hoàn toàn mới (Greenfield)"
  ],
  "correct": [
   0
  ],
  "explanation": "Data Fabric phù hợp khi dữ liệu phân tán rộng, khó di chuyển vì pháp lý, cần tích hợp Legacy + Cloud qua lớp Metadata ảo. Đơn giản hóa/Greenfield → Lakehouse; tự chủ theo phòng ban → Data Mesh."
 },
 {
  "id": "b-c1-q17",
  "chapter": 1,
  "difficulty": 2,
  "type": "single",
  "question": "Về chi phí quản lý, kiến trúc nào thường có chi phí thấp nhất trong ba kiến trúc?",
  "options": [
   "Lakehouse",
   "Data Fabric",
   "Data Mesh",
   "Cả ba bằng nhau"
  ],
  "correct": [
   0
  ],
  "explanation": "Theo bảng quyết định cho lãnh đạo IS: Lakehouse thường có chi phí quản lý thấp nhất; Mesh dẫn đầu về tốc độ đổi mới; Fabric mạnh về kết nối đa nguồn."
 },
 {
  "id": "b-c1-q18",
  "chapter": 1,
  "difficulty": 2,
  "type": "single",
  "question": "Bản chất của Object Storage (như S3, ADLS) là gì?",
  "options": [
   "Dữ liệu được quản lý dưới dạng đối tượng (object) trong một không gian phẳng (flat namespace)",
   "Dữ liệu được tổ chức theo cấu trúc thư mục phân cấp như ổ đĩa truyền thống",
   "Dữ liệu được lưu theo dòng (row-based) với chỉ mục B-Tree",
   "Dữ liệu chỉ tồn tại trong bộ nhớ RAM để truy xuất tức thì"
  ],
  "correct": [
   0
  ],
  "explanation": "Object Storage quản lý dữ liệu dưới dạng object trong flat namespace, mỗi object có Key duy nhất, thay vì cấu trúc thư mục phân cấp truyền thống."
 },
 {
  "id": "b-c1-q19",
  "chapter": 1,
  "difficulty": 2,
  "type": "single",
  "question": "Tính năng đặc trưng nào giúp phân biệt Amazon S3 với Azure Data Lake Storage (ADLS) Gen2?",
  "options": [
   "S3 có 'S3 Select' để lọc dữ liệu ngay tại tầng lưu trữ; ADLS Gen2 tích hợp sâu với Azure Active Directory",
   "S3 dùng cấu trúc thư mục phân cấp; ADLS Gen2 dùng không gian phẳng",
   "S3 chỉ hỗ trợ Spark; ADLS Gen2 chỉ hỗ trợ dbt",
   "S3 không có Global Reach; ADLS Gen2 có sao chép đa vùng"
  ],
  "correct": [
   0
  ],
  "explanation": "S3: tính năng S3 Select (lọc tại tầng lưu trữ). ADLS Gen2: tích hợp sâu Azure Active Directory + cấu trúc thư mục phân cấp thông minh. Cả hai đều hỗ trợ Spark, dbt và Global Reach."
 },
 {
  "id": "b-c1-q20",
  "chapter": 1,
  "difficulty": 2,
  "type": "single",
  "question": "Tầng lưu trữ nào có 'phí lưu trữ cực rẻ nhưng lấy ra chậm', phù hợp dữ liệu lưu lâu dài vì lý do pháp lý?",
  "options": [
   "Archive / Glacier",
   "Hot Storage",
   "Cool Storage",
   "Intelligent Tiering"
  ],
  "correct": [
   0
  ],
  "explanation": "Archive/Glacier: phí cực rẻ, lấy ra chậm, cho dữ liệu lưu lâu dài. Hot = truy cập hàng ngày (phí cao); Cool = ít dùng (phí thấp hơn). Intelligent Tiering là cơ chế tự động di chuyển giữa các tầng."
 },
 {
  "id": "b-c1-q21",
  "chapter": 1,
  "difficulty": 2,
  "type": "single",
  "question": "Cơ chế 'Intelligent Tiering' trong Object Storage hoạt động thế nào?",
  "options": [
   "AI tự động theo dõi thói quen truy cập để di chuyển dữ liệu giữa các tầng một cách tối ưu",
   "Tự động chuyển dữ liệu sang tầng rẻ hơn sau một khoảng thời gian cố định định trước",
   "Xóa tự động phiên bản cũ và dữ liệu tạm sau khi xử lý xong",
   "Mã hóa dữ liệu tự động khi ghi xuống đĩa"
  ],
  "correct": [
   0
  ],
  "explanation": "Intelligent Tiering dùng AI theo dõi thói quen truy cập để di chuyển tối ưu. Lifecycle Policies mới là chuyển tầng sau thời gian cố định."
 },
 {
  "id": "b-c1-q22",
  "chapter": 1,
  "difficulty": 2,
  "type": "single",
  "question": "Kỹ thuật bảo mật 'Object Lock' trên Object Storage có tác dụng gì?",
  "options": [
   "Ngăn chặn xóa/sửa dữ liệu trong một khoảng thời gian quy định",
   "Ghi lại mọi yêu cầu truy cập phục vụ giám sát và kiểm toán",
   "Kiểm soát quyền truy cập chi tiết theo danh tính người dùng (IAM)",
   "Mã hóa dữ liệu khi di chuyển qua mạng bằng giao thức TLS"
  ],
  "correct": [
   0
  ],
  "explanation": "Object Lock ngăn xóa/sửa trong thời gian quy định (đi kèm Versioning). Logging&Monitoring ghi truy cập; IAM Policies kiểm soát quyền; TLS bảo vệ In-Transit."
 },
 {
  "id": "b-c1-q23",
  "chapter": 1,
  "difficulty": 2,
  "type": "single",
  "question": "Nguyên lý Decoupling (tách rời Compute–Storage) khác mô hình cũ (Coupled) ở điểm nào?",
  "options": [
   "Compute và Storage đặt độc lập, kết nối qua mạng tốc độ cao, có thể mở rộng riêng biệt",
   "Compute và Storage gắn chặt với nhau trên cùng một máy chủ vật lý",
   "Chỉ có Storage được đặt trên Cloud, còn Compute vẫn on-premise",
   "Compute và Storage phải luôn được nâng cấp đồng thời"
  ],
  "correct": [
   0
  ],
  "explanation": "Decoupled: Compute và Storage đặt độc lập, nối qua mạng tốc độ cao, mở rộng riêng biệt. Gắn chặt trên cùng máy chủ là mô hình cũ (Coupled)."
 },
 {
  "id": "b-c1-q24",
  "chapter": 1,
  "difficulty": 2,
  "type": "single",
  "question": "'Predicate Pushdown' trong cơ chế tách rời Compute–Storage nghĩa là gì?",
  "options": [
   "Chỉ đưa những cột và dòng thực sự cần thiết từ ổ cứng về CPU, giúp giảm tải mạng",
   "Đưa toàn bộ bảng dữ liệu về CPU rồi mới lọc",
   "Đẩy toàn bộ tính toán xuống tầng lưu trữ",
   "Sao chép dữ liệu ra nhiều vùng địa lý trước khi truy vấn"
  ],
  "correct": [
   0
  ],
  "explanation": "Predicate Pushdown chỉ kéo cột/dòng cần thiết từ ổ cứng về CPU → giảm tải mạng. Đây là kỹ thuật tối ưu quan trọng trong kiến trúc tách rời."
 },
 {
  "id": "b-c1-q25",
  "chapter": 1,
  "difficulty": 2,
  "type": "single",
  "question": "Tính năng nào của Snowflake minh họa rõ nhất cho nguyên lý tách rời Compute–Storage?",
  "options": [
   "Dùng Cloud Storage làm kho chứa duy nhất nhưng cho phép tạo vô số 'Virtual Warehouses' độc lập cho từng phòng ban",
   "Gộp CPU và ổ cứng vào một cụm duy nhất để tối ưu độ trễ",
   "Chỉ cho phép một cụm tính toán truy cập dữ liệu tại một thời điểm",
   "Sao chép toàn bộ dữ liệu sang mỗi phòng ban để tránh tranh chấp"
  ],
  "correct": [
   0
  ],
  "explanation": "Snowflake: Centralized Storage + Multi-cluster Compute (nhiều Virtual Warehouses độc lập) → truy vấn phòng này không làm chậm phòng khác, không tranh chấp tài nguyên."
 },
 {
  "id": "b-c1-q26",
  "chapter": 1,
  "difficulty": 2,
  "type": "single",
  "question": "'Zero-copy Cloning' của Snowflake mang lại lợi ích gì?",
  "options": [
   "Tạo bản sao dữ liệu cho thử nghiệm mà không tốn thêm dung lượng đĩa",
   "Sao chép toàn bộ dữ liệu vật lý sang một cụm mới để cách ly hoàn toàn",
   "Nén dữ liệu xuống còn một nửa dung lượng",
   "Tự động xóa dữ liệu cũ sau mỗi lần clone"
  ],
  "correct": [
   0
  ],
  "explanation": "Zero-copy Cloning tạo bản sao logic cho thử nghiệm KHÔNG tốn thêm dung lượng đĩa; Data Sharing chia sẻ bằng cấp quyền truy cập Storage, không sao chép."
 },
 {
  "id": "b-c2-q1",
  "chapter": 2,
  "difficulty": 2,
  "type": "single",
  "question": "Phương pháp luận Kimball có triết lý cốt lõi là gì?",
  "options": [
   "Lấy người dùng nghiệp vụ làm trung tâm (User-centric) khi thiết kế kho dữ liệu",
   "Lấy tính toàn vẹn giao dịch (ACID) làm trung tâm",
   "Ưu tiên chuẩn hóa tối đa để tiết kiệm dung lượng lưu trữ",
   "Tổ chức dữ liệu quanh các domain nghiệp vụ tự chủ"
  ],
  "correct": [
   0
  ],
  "explanation": "Kimball lấy người dùng nghiệp vụ làm trung tâm (User-centric). Trong kỷ nguyên Cloud, triết lý giữ nguyên nhưng thích nghi với lưu trữ gần như vô hạn."
 },
 {
  "id": "b-c2-q2",
  "chapter": 2,
  "difficulty": 2,
  "type": "single",
  "question": "Trong kỷ nguyên Cloud, trọng tâm tối ưu của Kimball dịch chuyển như thế nào?",
  "options": [
   "Từ tối ưu không gian lưu trữ sang tối ưu hiệu suất truy vấn",
   "Từ tối ưu hiệu suất truy vấn sang tối ưu không gian lưu trữ",
   "Từ Schema-on-read sang Schema-on-write",
   "Từ mô hình chiều sang mô hình chuẩn hóa 3NF"
  ],
  "correct": [
   0
  ],
  "explanation": "Vì Cloud có lưu trữ gần như vô hạn, trọng tâm chuyển từ tối ưu KHÔNG GIAN lưu trữ (giới hạn phần cứng cũ) sang tối ưu HIỆU SUẤT truy vấn."
 },
 {
  "id": "b-c2-q3",
  "chapter": 2,
  "difficulty": 2,
  "type": "single",
  "question": "Bốn bước của quy trình Dimensional Design (Kimball) theo đúng thứ tự là gì?",
  "options": [
   "Chọn Business Process → Xác định Grain → Xác định Dimensions → Xác định Facts",
   "Xác định Grain → Chọn Business Process → Xác định Facts → Xác định Dimensions",
   "Xác định Dimensions → Xác định Facts → Chọn Business Process → Xác định Grain",
   "Chọn Business Process → Xác định Facts → Xác định Grain → Xác định Dimensions"
  ],
  "correct": [
   0
  ],
  "explanation": "Thứ tự 4 bước: (1) Chọn Business Process, (2) Xác định Grain, (3) Xác định Dimensions, (4) Xác định Facts."
 },
 {
  "id": "b-c2-q4",
  "chapter": 2,
  "difficulty": 2,
  "type": "single",
  "question": "'Single Version of Truth' trong Kimball được đảm bảo nhờ điều gì?",
  "options": [
   "Tính nhất quán của Conformed Dimensions (các chiều dùng chung, thống nhất giữa nhiều bảng Fact)",
   "Việc chuẩn hóa toàn bộ dữ liệu về dạng 3NF",
   "Sử dụng Natural Keys thay cho Surrogate Keys",
   "Lưu trữ mỗi bảng Fact ở một domain riêng biệt"
  ],
  "correct": [
   0
  ],
  "explanation": "Conformed Dimensions (chiều dùng chung, thống nhất giữa nhiều bảng Fact) đảm bảo Single Version of Truth — một nguồn số liệu duy nhất, thống nhất."
 },
 {
  "id": "b-c2-q5",
  "chapter": 2,
  "difficulty": 2,
  "type": "single",
  "question": "Vì sao Denormalization (phi chuẩn hóa) trở thành chiến lược ưu tiên trong Cloud DWH?",
  "options": [
   "Tận dụng Columnar scanning, giảm số phép Join và tăng tốc độ hiển thị cho BI",
   "Để tiết kiệm tối đa dung lượng lưu trữ đắt đỏ",
   "Vì Cloud không hỗ trợ phép Join giữa các bảng",
   "Vì Denormalization giúp đảm bảo tính toàn vẹn ACID tốt hơn"
  ],
  "correct": [
   0
  ],
  "explanation": "Denormalization tận dụng Columnar scanning, giảm Join → tăng tốc BI/Data Mining. Đánh đổi là phải quản lý chặt tính nhất quán khi có trùng lặp thông tin."
 },
 {
  "id": "b-c2-q6",
  "chapter": 2,
  "difficulty": 2,
  "type": "single",
  "question": "Micro-partitioning trong Cloud Data Warehouse là gì?",
  "options": [
   "Cơ chế tự động chia nhỏ bảng thành nhiều tập tin (thường 50MB–500MB nén), không cần phân vùng thủ công",
   "Kỹ thuật phân vùng thủ công do người dùng định nghĩa trước khi nạp dữ liệu",
   "Cơ chế nén dữ liệu về một tập tin duy nhất để giảm chi phí",
   "Kỹ thuật sắp xếp dữ liệu theo dòng thay vì theo cột"
  ],
  "correct": [
   0
  ],
  "explanation": "Micro-partitioning tự động chia bảng thành các phân vùng nhỏ (50MB–500MB đã nén), tổ chức Columnar, không cần người dùng phân vùng thủ công."
 },
 {
  "id": "b-c2-q7",
  "chapter": 2,
  "difficulty": 2,
  "type": "single",
  "question": "Metadata Min/Max trong mỗi Micro-partition là nền tảng cho kỹ thuật tối ưu nào?",
  "options": [
   "Data Pruning – bỏ qua hoàn toàn các phân vùng không chứa dữ liệu cần thiết",
   "Denormalization – gộp bảng để giảm Join",
   "SCD Type 2 – lưu vết lịch sử thay đổi",
   "Predicate Pushdown – đẩy toàn bộ tính toán xuống Storage"
  ],
  "correct": [
   0
  ],
  "explanation": "Metadata Min/Max cho phép Data Pruning: dựa trên điều kiện lọc SQL, bỏ qua các phân vùng chắc chắn không chứa dữ liệu cần → giảm khối lượng đọc."
 },
 {
  "id": "b-c2-q8",
  "chapter": 2,
  "difficulty": 2,
  "type": "single",
  "question": "Chỉ số Clustering Depth phản ánh điều gì, và giá trị nào là tốt?",
  "options": [
   "Đo mức độ chồng lấn giữa các Micro-partition; càng thấp thì hiệu suất truy vấn càng cao",
   "Đo số lượng cột khóa clustering; càng cao càng tốt",
   "Đo dung lượng mỗi phân vùng; càng lớn càng tốt",
   "Đo số lần Re-clustering đã thực hiện; càng nhiều càng tốt"
  ],
  "correct": [
   0
  ],
  "explanation": "Clustering Depth đo mức chồng lấn giữa các Micro-partition. Càng THẤP → hiệu suất truy vấn (khả năng Pruning) càng CAO."
 },
 {
  "id": "b-c2-q9",
  "chapter": 2,
  "difficulty": 2,
  "type": "single",
  "question": "Transaction Fact Table lưu trữ dữ liệu ở mức độ nào?",
  "options": [
   "Mức chi tiết nhất (Atomic level), ghi lại từng sự kiện riêng lẻ ngay khi xảy ra",
   "Mức tổng hợp theo thời điểm cố định (cuối ngày/tháng)",
   "Mức theo dõi tiến độ một quy trình nhiều giai đoạn",
   "Mức chỉ số kinh doanh (KPIs) đã tính toán tổng hợp"
  ],
  "correct": [
   0
  ],
  "explanation": "Transaction Fact Table ở mức Atomic, ghi từng sự kiện riêng lẻ, thường có số dòng lớn nhất. Đây là nguồn gốc để xây các Fact Table khác."
 },
 {
  "id": "b-c2-q10",
  "chapter": 2,
  "difficulty": 2,
  "type": "single",
  "question": "Điểm khác biệt cốt lõi giữa Periodic Snapshot và Accumulating Snapshot Fact Table là gì?",
  "options": [
   "Periodic lưu tình trạng tại các thời điểm cố định (không đổi dữ liệu quá khứ); Accumulating theo dõi tiến độ một quy trình nhiều giai đoạn (mỗi dòng được cập nhật các mốc)",
   "Periodic theo dõi tiến độ quy trình; Accumulating lưu ảnh chụp cố định",
   "Cả hai đều ghi từng giao dịch riêng lẻ ở mức Atomic",
   "Periodic dùng cho dữ liệu số; Accumulating dùng cho dữ liệu văn bản"
  ],
  "correct": [
   0
  ],
  "explanation": "Periodic Snapshot: ảnh chụp tại thời điểm cố định (số dư cuối ngày), không đổi quá khứ. Accumulating Snapshot: theo dõi quy trình nhiều bước (đơn hàng từ đặt→giao), mỗi dòng cập nhật các mốc thời gian, tính Lead time."
 },
 {
  "id": "b-c2-q11",
  "chapter": 2,
  "difficulty": 2,
  "type": "single",
  "question": "Nguyên tắc quan trọng nhất khi xác định Grain của một bảng Fact là gì?",
  "options": [
   "Tất cả các Fact trong bảng phải cùng một mức chi tiết, tránh trộn lẫn nhiều mức",
   "Grain phải luôn ở mức tổng hợp cao nhất để tối ưu hiệu năng",
   "Mỗi bảng Fact nên trộn nhiều mức chi tiết để linh hoạt",
   "Grain phải thấp hơn mức Atomic của mọi Dimension"
  ],
  "correct": [
   0
  ],
  "explanation": "Nguyên tắc: mọi Fact trong bảng phải cùng một mức chi tiết (Grain). Grain càng thấp thì phân tích càng rộng nhưng bảng càng lớn."
 },
 {
  "id": "b-c2-q12",
  "chapter": 2,
  "difficulty": 2,
  "type": "single",
  "question": "Factless Fact Table được dùng để làm gì?",
  "options": [
   "Lưu sự kiện không có số liệu đi kèm, hữu ích để phân tích 'những gì không diễn ra'",
   "Giải quyết mối quan hệ nhiều-nhiều (M-M) giữa các nhóm thực thể",
   "Lưu khóa nghiệp vụ trực tiếp trong bảng Fact",
   "Gom các thuộc tính flag rời rạc vào một bảng duy nhất"
  ],
  "correct": [
   0
  ],
  "explanation": "Factless Fact Table lưu sự kiện KHÔNG có số liệu (phân tích 'điều không diễn ra'). Quan hệ M-M là Bridge Table; khóa nghiệp vụ trong Fact là Degenerate Dimension; gom flag là Junk Dimension."
 },
 {
  "id": "b-c2-q13",
  "chapter": 2,
  "difficulty": 2,
  "type": "single",
  "question": "Bridge Table dùng để giải quyết vấn đề gì, và cần thận trọng điều gì?",
  "options": [
   "Giải quyết quan hệ nhiều-nhiều (M-M) giữa các nhóm thực thể; cần thận trọng vì có thể gây bùng nổ dữ liệu",
   "Lưu sự kiện không có số liệu; cần thận trọng vì thiếu chỉ số phân tích",
   "Ghi đè trực tiếp dữ liệu cũ; cần thận trọng vì mất lịch sử",
   "Che dấu dữ liệu nhạy cảm; cần thận trọng vì làm chậm truy vấn"
  ],
  "correct": [
   0
  ],
  "explanation": "Bridge Table ánh xạ quan hệ nhiều-nhiều (M-M) giữa các nhóm thực thể không liên kết trực tiếp; rủi ro là bùng nổ dữ liệu (data explosion)."
 },
 {
  "id": "b-c2-q14",
  "chapter": 2,
  "difficulty": 2,
  "type": "single",
  "question": "Vì sao Dimension Table nên dùng Surrogate Keys thay cho Natural Keys?",
  "options": [
   "Để đảm bảo tính độc lập giữa kho dữ liệu và hệ thống nguồn",
   "Để tiết kiệm dung lượng vì Natural Keys luôn dài hơn",
   "Vì Natural Keys không thể dùng làm khóa chính",
   "Để bắt buộc phải chuẩn hóa dữ liệu về 3NF"
  ],
  "correct": [
   0
  ],
  "explanation": "Surrogate Keys (khóa thay thế) đảm bảo tính độc lập giữa kho dữ liệu và hệ thống nguồn — nếu nguồn đổi Natural Key, kho vẫn ổn định."
 },
 {
  "id": "b-c2-q15",
  "chapter": 2,
  "difficulty": 2,
  "type": "single",
  "question": "SCD Type 2 quản lý thay đổi trong Dimension bằng cơ chế nào?",
  "options": [
   "Dùng các cột Start_Date, End_Date, Is_Current để lưu vết lịch sử, phù hợp báo cáo 'Point-in-time'",
   "Cập nhật trực tiếp, ghi đè dữ liệu cũ",
   "Lưu giá trị cũ và mới ở hai cột riêng",
   "Tách riêng Current Table và History Table"
  ],
  "correct": [
   0
  ],
  "explanation": "SCD Type 2 dùng Start_Date/End_Date/Is_Current để lưu vết lịch sử (Point-in-time). Ghi đè là Type 1; hai cột cũ/mới là Type 3; tách Current/History là Type 4."
 },
 {
  "id": "b-c2-q16",
  "chapter": 2,
  "difficulty": 2,
  "type": "single",
  "question": "SCD Type nào phù hợp khi thuộc tính KHÔNG có nhu cầu lưu vết lịch sử?",
  "options": [
   "Type 1 – cập nhật trực tiếp, ghi đè dữ liệu cũ",
   "Type 2 – dùng Start_Date, End_Date, Is_Current",
   "Type 4 – tách Current Table và History Table",
   "Type 6 – kết hợp 1+2+3"
  ],
  "correct": [
   0
  ],
  "explanation": "Type 1 ghi đè trực tiếp dữ liệu cũ, phù hợp khi không cần lưu lịch sử. Type 2/6 dùng khi cần lưu vết; Type 4 khi muốn bảng chính gọn nhẹ."
 },
 {
  "id": "b-c2-q17",
  "chapter": 2,
  "difficulty": 2,
  "type": "single",
  "question": "Junk Dimension là kỹ thuật thiết kế nào?",
  "options": [
   "Gom nhóm các thuộc tính flag, mã trạng thái rời rạc vào một bảng duy nhất để giảm số Join",
   "Lưu khóa nghiệp vụ trực tiếp trong bảng Fact, không cần bảng chiều riêng",
   "Tách các thuộc tính thay đổi nhanh sang bảng phụ để tránh phình to",
   "Dùng một Dimension Table cho nhiều vai trò khác nhau trong cùng một Fact"
  ],
  "correct": [
   0
  ],
  "explanation": "Junk Dimension gom các flag/mã trạng thái rời rạc vào một bảng → giảm Join. Degenerate = khóa nghiệp vụ trong Fact; Mini-dimension = tách thuộc tính đổi nhanh; Role-playing = một chiều nhiều vai trò."
 },
 {
  "id": "b-c2-q18",
  "chapter": 2,
  "difficulty": 2,
  "type": "single",
  "question": "Trong Medallion Architecture, tầng Bronze có đặc điểm gì?",
  "options": [
   "Tiếp nhận dữ liệu gốc từ nguồn (Hugging Face, API, ERP) mà không qua biến đổi, giữ nguyên định dạng thô để hỗ trợ Schema-on-read",
   "Dữ liệu đã được chuẩn hóa, làm sạch, loại bỏ bản ghi rác",
   "Dữ liệu đã tổng hợp, tổ chức theo Star Schema, sẵn sàng cho BI",
   "Chỉ chứa các chỉ số KPI đã qua phê duyệt nghiệp vụ"
  ],
  "correct": [
   0
  ],
  "explanation": "Bronze = Raw Layer: nhận dữ liệu gốc không biến đổi, giữ định dạng thô (JSON/Parquet), Immutability để có thể Reprocess. Chuẩn hóa/làm sạch là Silver; tổng hợp KPI là Gold."
 },
 {
  "id": "b-c2-q19",
  "chapter": 2,
  "difficulty": 2,
  "type": "single",
  "question": "Tầng Silver trong Medallion Architecture đảm bảo tính toàn vẹn dữ liệu (ACID) bằng công nghệ nào?",
  "options": [
   "Delta Lake hoặc Iceberg",
   "VARIANT hoặc JSON thuần",
   "B-Tree Index truyền thống",
   "Redo logs của cơ sở dữ liệu nguồn"
  ],
  "correct": [
   0
  ],
  "explanation": "Tầng Silver dùng Delta Lake hoặc Iceberg để đảm bảo ACID trong quá trình biến đổi; đây là nguồn chính cho Feature Extraction phục vụ AI."
 },
 {
  "id": "b-c2-q20",
  "chapter": 2,
  "difficulty": 2,
  "type": "single",
  "question": "Tầng Gold trong Medallion Architecture được tổ chức theo mô hình nào để tối ưu truy vấn?",
  "options": [
   "Star Schema hoặc Wide Tables, chứa các Metrics/KPIs đã tính toán tổng hợp",
   "JSON thô để hỗ trợ Schema-on-read",
   "Chuẩn hóa 3NF để tránh trùng lặp",
   "Log-based CDC để đồng bộ thời gian thực"
  ],
  "correct": [
   0
  ],
  "explanation": "Tầng Gold tổ chức theo Star Schema/Wide Tables, chứa Metrics/KPIs đã tổng hợp và đã qua phê duyệt nghiệp vụ; là tầng tiếp xúc trực tiếp với BI."
 },
 {
  "id": "b-c2-q21",
  "chapter": 2,
  "difficulty": 2,
  "type": "single",
  "question": "Vai trò của Semantic Layer (Tầng ngữ nghĩa) trong Data Lakehouse là gì?",
  "options": [
   "Trừu tượng hóa sự phức tạp của cấu trúc dữ liệu vật lý, chuyển tên bảng/cột kỹ thuật thành thuật ngữ nghiệp vụ dễ hiểu",
   "Chia dữ liệu thành ba tầng Bronze–Silver–Gold",
   "Tự động phát hiện Schema Drift ở dữ liệu nguồn",
   "Nén dữ liệu thành các Micro-partition"
  ],
  "correct": [
   0
  ],
  "explanation": "Semantic Layer là lớp trung gian trừu tượng hóa cấu trúc vật lý, chuyển tên kỹ thuật thành thuật ngữ nghiệp vụ, hỗ trợ GenAI và kiểm soát bảo mật Row/Column-level thống nhất."
 },
 {
  "id": "b-c2-q22",
  "chapter": 2,
  "difficulty": 2,
  "type": "single",
  "question": "Metric Catalog theo mô hình Headless BI giải quyết vấn đề gì?",
  "options": [
   "Định nghĩa công thức tính toán mọi chỉ số kinh doanh tại một nơi duy nhất, đảm bảo số liệu nhất quán dù dùng PowerBI, Tableau hay Streamlit",
   "Lưu trữ toàn bộ dữ liệu thô chưa qua xử lý",
   "Chia dữ liệu thành các tập Train/Validation/Test",
   "Tự động sắp xếp lại dữ liệu khi Clustering Depth tăng"
  ],
  "correct": [
   0
  ],
  "explanation": "Metric Catalog (Headless BI) định nghĩa công thức chỉ số tại một nơi → nhất quán đa nền tảng (PowerBI/Tableau/Streamlit), hỗ trợ Lineage và tái sử dụng."
 },
 {
  "id": "b-c2-q23",
  "chapter": 2,
  "difficulty": 2,
  "type": "single",
  "question": "Kiểu dữ liệu VARIANT được dùng cho loại dữ liệu nào?",
  "options": [
   "Dữ liệu bán cấu trúc (semi-structured) như JSON/Parquet có cấu trúc không cố định (Web logs, IoT)",
   "Dữ liệu quan hệ chuẩn hóa 3NF",
   "Dữ liệu số nguyên để tối ưu nén khóa",
   "Dữ liệu ảnh và video nhị phân"
  ],
  "correct": [
   0
  ],
  "explanation": "VARIANT lưu toàn bộ tài liệu bán cấu trúc (JSON/Parquet, Web logs, IoT) trong một cột duy nhất với hiệu năng cao, tránh Schema-on-write cứng nhắc."
 },
 {
  "id": "b-c2-q24",
  "chapter": 2,
  "difficulty": 2,
  "type": "single",
  "question": "Kỹ thuật Flattening áp dụng cho dữ liệu VARIANT nghĩa là gì?",
  "options": [
   "Chuyển đổi các mảng (arrays) lồng nhau thành các dòng dữ liệu riêng biệt để phân tích",
   "Nén toàn bộ tài liệu VARIANT thành một chuỗi byte",
   "Ép buộc cấu trúc dữ liệu ngay khi nạp (Schema-on-write)",
   "Xóa bỏ các trường lồng nhau để đơn giản hóa"
  ],
  "correct": [
   0
  ],
  "explanation": "Flattening chuyển các mảng lồng nhau thành các dòng riêng biệt để phân tích; kèm toán tử truy cập trường lồng và Join hỗn hợp giữa dữ liệu bán cấu trúc và quan hệ."
 },
 {
  "id": "b-c2-q25",
  "chapter": 2,
  "difficulty": 2,
  "type": "single",
  "question": "Chiến lược Materialization cho một trường VARIANT được truy vấn thường xuyên là gì?",
  "options": [
   "Trích xuất trường đó thành cột vật lý để tận dụng chỉ mục, tăng tốc độ phản hồi",
   "Xóa trường đó khỏi cột VARIANT để giảm dung lượng",
   "Ép mọi truy vấn phải quét toàn bộ VARIANT",
   "Chuyển toàn bộ bảng sang tầng Bronze"
  ],
  "correct": [
   0
  ],
  "explanation": "Materialization trích xuất trường hay truy vấn thành cột vật lý (tận dụng chỉ mục), có thể kèm Virtual Views; cân bằng giữa linh hoạt của VARIANT và hiệu năng cột cố định."
 },
 {
  "id": "b-c2-q26",
  "chapter": 2,
  "difficulty": 2,
  "type": "single",
  "question": "Khi dịch chuyển từ BI Schema sang AI Schema, thiết kế thường thay đổi thế nào?",
  "options": [
   "Chuyển từ Star Schema sang Wide Tables để giảm chi phí Join khi huấn luyện, ưu tiên dữ liệu chi tiết nhất (Granularity)",
   "Tăng cường chuẩn hóa 3NF để giảm trùng lặp",
   "Chỉ giữ lại dữ liệu tổng hợp cấp cao, bỏ dữ liệu chi tiết",
   "Loại bỏ hoàn toàn dữ liệu Time-series"
  ],
  "correct": [
   0
  ],
  "explanation": "AI cần Granularity (dữ liệu chi tiết nhất) để học đặc trưng → dùng Wide Tables giảm Join, ưu tiên Time-series, lưu đủ mẫu tích cực/tiêu cực, hỗ trợ chia Train/Validation/Test."
 },
 {
  "id": "b-c2-q27",
  "chapter": 2,
  "difficulty": 2,
  "type": "single",
  "question": "Yêu cầu 'Point-in-time Correctness' khi chuẩn bị dữ liệu huấn luyện nghĩa là gì?",
  "options": [
   "AI chỉ được dùng dữ liệu đã 'biết' tại đúng thời điểm dự báo trong quá khứ, tránh Data Leakage (rò rỉ dữ liệu tương lai)",
   "AI phải dùng toàn bộ dữ liệu mới nhất tại thời điểm huấn luyện",
   "Dữ liệu phải được cập nhật đúng hạn theo SLA",
   "Mọi đặc trưng phải được tính bằng SQL chuẩn"
  ],
  "correct": [
   0
  ],
  "explanation": "Point-in-time Correctness: chỉ dùng dữ liệu đã biết tại thời điểm dự báo lịch sử, tránh Data Leakage. Thực hiện bằng Time Travel hoặc SCD Type 2, quản lý qua Feature Store."
 },
 {
  "id": "b-c3-q1",
  "chapter": 3,
  "difficulty": 2,
  "type": "single",
  "question": "Điểm khác biệt cốt lõi giữa ETL và ELT là gì?",
  "options": [
   "ETL biến đổi dữ liệu trên máy chủ trung gian TRƯỚC khi nạp; ELT nạp dữ liệu thô vào kho TRƯỚC rồi biến đổi sau ngay trên Cloud",
   "ETL nạp dữ liệu thô trước rồi biến đổi; ELT biến đổi trước khi nạp",
   "ETL chỉ dùng cho streaming; ELT chỉ dùng cho batch",
   "ETL và ELT giống hệt nhau, chỉ khác tên gọi"
  ],
  "correct": [
   0
  ],
  "explanation": "ETL: Extract → Transform (máy chủ trung gian) → Load. ELT: Extract → Load (nạp thô vào kho) → Transform (biến đổi sau, ngay trên Cloud, tận dụng tính toán song song)."
 },
 {
  "id": "b-c3-q2",
  "chapter": 3,
  "difficulty": 2,
  "type": "single",
  "question": "Đặc điểm 'Schema-on-read' của Cloud-Native ELT nghĩa là gì?",
  "options": [
   "Cấu trúc dữ liệu chỉ được định nghĩa tại thời điểm truy vấn, thay vì cố định trước khi nạp",
   "Cấu trúc dữ liệu phải được cố định nghiêm ngặt trước khi nạp",
   "Dữ liệu chỉ có thể đọc mà không thể ghi",
   "Schema tự động được tạo lại sau mỗi lần truy vấn"
  ],
  "correct": [
   0
  ],
  "explanation": "Schema-on-read: cấu trúc chỉ định nghĩa lúc truy vấn (khác Schema-on-write của ETL/RDBMS cũ vốn cố định trước khi nạp)."
 },
 {
  "id": "b-c3-q3",
  "chapter": 3,
  "difficulty": 2,
  "type": "single",
  "question": "Trong kiến trúc Medallion của ELT, lớp nào lưu 'toàn bộ dữ liệu thô, nguyên bản, chưa qua xử lý'?",
  "options": [
   "Lớp Bronze",
   "Lớp Silver",
   "Lớp Gold",
   "Lớp Platinum"
  ],
  "correct": [
   0
  ],
  "explanation": "Bronze = dữ liệu thô nguyên bản; Silver = đã chuẩn hóa/làm sạch; Gold = đã tổng hợp cho BI. Cấu trúc này cho phép re-run pipeline từ Bronze khi lỗi."
 },
 {
  "id": "b-c3-q4",
  "chapter": 3,
  "difficulty": 2,
  "type": "single",
  "question": "Change Data Capture (CDC) là nhóm kỹ thuật để làm gì?",
  "options": [
   "Nhận diện và nắm bắt các thay đổi (INSERT, UPDATE, DELETE) ở CSDL nguồn, rồi truyền tới hệ đích gần như ngay lập tức",
   "Nén dữ liệu để giảm chi phí lưu trữ",
   "Chia bảng thành nhiều Micro-partition",
   "Chuẩn hóa dữ liệu về dạng 3NF"
  ],
  "correct": [
   0
  ],
  "explanation": "CDC nhận diện và nắm bắt thay đổi (INSERT/UPDATE/DELETE) ở nguồn và truyền tới đích gần như tức thì. Cơ chế phổ biến nhất là Log-based CDC (đọc Redo logs)."
 },
 {
  "id": "b-c3-q5",
  "chapter": 3,
  "difficulty": 2,
  "type": "single",
  "question": "So sánh Log-based CDC và Query-based CDC về xử lý bản ghi bị xóa cứng (Hard Delete):",
  "options": [
   "Log-based ghi nhận việc xóa tức thì và chính xác; Query-based rất khó phát hiện bản ghi đã bị xóa cứng",
   "Query-based ghi nhận xóa tức thì; Log-based không phát hiện được",
   "Cả hai đều không phát hiện được Hard Delete",
   "Cả hai đều phát hiện Hard Delete như nhau"
  ],
  "correct": [
   0
  ],
  "explanation": "Log-based (đọc Redo logs) ghi nhận Hard Delete tức thì và chính xác; Query-based (quét bảng định kỳ) rất khó phát hiện bản ghi đã bị xóa cứng giữa các chu kỳ."
 },
 {
  "id": "b-c3-q6",
  "chapter": 3,
  "difficulty": 2,
  "type": "single",
  "question": "Về độ trễ (Latency), Log-based CDC đạt mức nào?",
  "options": [
   "Chuẩn Real-time, tính bằng mili giây",
   "Bị trễ theo chu kỳ lên lịch (5 phút, 1 giờ)",
   "Luôn trễ tối thiểu 24 giờ",
   "Không có độ trễ, đồng bộ tức thời tuyệt đối 0ms"
  ],
  "correct": [
   0
  ],
  "explanation": "Log-based CDC đạt Real-time (mili giây) và tải hệ thống cực nhẹ; Query-based bị trễ theo chu kỳ lên lịch và tải nặng hơn do phải quét bảng liên tục."
 },
 {
  "id": "b-c3-q7",
  "chapter": 3,
  "difficulty": 2,
  "type": "single",
  "question": "Nền tảng CDC mã nguồn mở nào dựa trên Apache Kafka Connect?",
  "options": [
   "Debezium",
   "Fivetran",
   "AWS DMS",
   "Snowflake Streams"
  ],
  "correct": [
   0
  ],
  "explanation": "Debezium là nền tảng CDC mã nguồn mở dựa trên Apache Kafka Connect. Fivetran/AWS DMS/Qlik Replicate là giải pháp thương mại; Snowflake Streams theo dõi thay đổi bên trong Snowflake."
 },
 {
  "id": "b-c3-q8",
  "chapter": 3,
  "difficulty": 2,
  "type": "single",
  "question": "Zero-ETL Integration khác biệt cơ bản với ETL/CDC truyền thống ở điểm nào?",
  "options": [
   "Tích hợp trực tiếp giữa nguồn và đích mà KHÔNG cần xây pipeline trung gian bằng code, hệ thống tự động mapping và đồng bộ",
   "Vẫn cần viết code pipeline nhưng chạy nhanh hơn",
   "Chỉ hoạt động với dữ liệu bẩn cần làm sạch phức tạp",
   "Bắt buộc phải sao chép toàn bộ dữ liệu thủ công"
  ],
  "correct": [
   0
  ],
  "explanation": "Zero-ETL tích hợp trực tiếp nguồn↔đích, không cần pipeline code trung gian; dựa trên Proprietary Connectors, Metadata Sharing & Storage Mirroring."
 },
 {
  "id": "b-c3-q9",
  "chapter": 3,
  "difficulty": 2,
  "type": "single",
  "question": "Hạn chế nào là đặc trưng của Zero-ETL Integration?",
  "options": [
   "Không phù hợp dữ liệu bẩn cần làm sạch phức tạp, và có rủi ro Vendor Lock-in",
   "Độ trễ cực cao, không đạt thời gian thực",
   "Yêu cầu viết nhiều code Python phức tạp",
   "Không thể tích hợp giữa các Cloud khác nhau"
  ],
  "correct": [
   0
  ],
  "explanation": "Hạn chế Zero-ETL: không phù hợp dữ liệu bẩn cần biến đổi phức tạp; rủi ro Vendor Lock-in và chi phí ẩn khi truyền dữ liệu lớn; rào cản với hệ thống On-premise."
 },
 {
  "id": "b-c3-q10",
  "chapter": 3,
  "difficulty": 2,
  "type": "single",
  "question": "Orchestration (điều phối) trong Data Pipeline đóng vai trò gì?",
  "options": [
   "Như một 'nhạc trưởng': đảm bảo các bước thực thi đúng trình tự/điều kiện, tự động Retry và cảnh báo khi lỗi, ghi lịch sử thực thi",
   "Biến đổi và làm sạch dữ liệu trên máy chủ trung gian",
   "Chia bảng thành các Micro-partition",
   "Mã hóa dữ liệu khi di chuyển qua mạng"
  ],
  "correct": [
   0
  ],
  "explanation": "Orchestration điều phối các tác vụ như nhạc trưởng: đúng trình tự, tự Retry, cảnh báo lỗi, ghi lịch sử thực thi (ai kích hoạt, khi nào) phục vụ kiểm toán."
 },
 {
  "id": "b-c3-q11",
  "chapter": 3,
  "difficulty": 2,
  "type": "single",
  "question": "DAG (Directed Acyclic Graph) có hai đặc tính nào?",
  "options": [
   "Directed (luồng chảy một chiều xác định) và Acyclic (không tồn tại vòng lặp, tránh treo hệ thống)",
   "Distributed (phân tán) và Cyclic (có vòng lặp)",
   "Dynamic (động) và Atomic (nguyên tử)",
   "Denormalized (phi chuẩn) và Aggregated (tổng hợp)"
  ],
  "correct": [
   0
  ],
  "explanation": "DAG = Directed (một chiều từ đầu vào đến đầu ra) + Acyclic (không vòng lặp, tránh treo). Ví dụ: lớp Gold chỉ chạy sau khi Silver hoàn tất."
 },
 {
  "id": "b-c3-q12",
  "chapter": 3,
  "difficulty": 2,
  "type": "single",
  "question": "Xu hướng chuyển từ Task-centric sang Asset-centric trong Orchestration khác nhau thế nào?",
  "options": [
   "Task-centric giám sát tác vụ đang chạy (Airflow); Asset-centric quản lý tài sản dữ liệu được tạo ra (Dagster)",
   "Task-centric quản lý tài sản dữ liệu; Asset-centric giám sát tác vụ",
   "Cả hai đều chỉ giám sát tác vụ, khác về ngôn ngữ",
   "Task-centric dùng cho streaming; Asset-centric dùng cho batch"
  ],
  "correct": [
   0
  ],
  "explanation": "Task-centric (Airflow): giám sát tác vụ đang chạy. Asset-centric (Dagster): quản lý tài sản dữ liệu tạo ra, ưu tiên Lineage, hỗ trợ local testing và CI/CD tốt hơn."
 },
 {
  "id": "b-c3-q13",
  "chapter": 3,
  "difficulty": 2,
  "type": "single",
  "question": "Công cụ Orchestration nào được xem là 'tiêu chuẩn công nghiệp phổ biến, kho thư viện kết nối đa dạng'?",
  "options": [
   "Apache Airflow",
   "Dagster",
   "Prefect",
   "AWS Step Functions"
  ],
  "correct": [
   0
  ],
  "explanation": "Apache Airflow là tiêu chuẩn công nghiệp (Task-centric). Dagster/Prefect là thế hệ mới Asset-centric; Step Functions/Google Workflows là dịch vụ Cloud Native Serverless."
 },
 {
  "id": "b-c3-q14",
  "chapter": 3,
  "difficulty": 2,
  "type": "single",
  "question": "So sánh chi phí giữa xử lý Batch và Streaming:",
  "options": [
   "Batch tiết kiệm nhờ tính toán trong thời gian ngắn; Streaming tốn kém hơn do phải duy trì tài nguyên chạy liên tục 24/7",
   "Streaming tiết kiệm hơn Batch vì xử lý ít dữ liệu",
   "Cả hai có chi phí như nhau",
   "Batch tốn kém hơn vì phải chạy 24/7"
  ],
  "correct": [
   0
  ],
  "explanation": "Batch: tiết kiệm (tính toán ngắn hạn theo chu kỳ). Streaming: tốn kém hơn (duy trì tài nguyên 24/7) nhưng bắt buộc cho hệ thống độ trễ cực thấp (chống gian lận thẻ)."
 },
 {
  "id": "b-c3-q15",
  "chapter": 3,
  "difficulty": 2,
  "type": "single",
  "question": "Snowpipe được thiết kế chủ yếu cho mục đích nào?",
  "options": [
   "Nạp file theo dạng batch, tự động mở rộng (>10 triệu file/>10TB mỗi giờ), có cơ chế loại trùng dựa trên theo dõi file",
   "Xử lý luồng dữ liệu real-time có tần suất đến biến động qua hàm insertRows()",
   "Huấn luyện mô hình ML bằng SQL",
   "Biến đổi dữ liệu bằng Jinja templating"
  ],
  "correct": [
   0
  ],
  "explanation": "Snowpipe (batch): nạp file tự động khi xuất hiện trên Cloud Storage, mở rộng >10 triệu file/>10TB mỗi giờ, loại trùng theo file. Snowpipe Streaming (insertRows) mới cho luồng real-time."
 },
 {
  "id": "b-c3-q16",
  "chapter": 3,
  "difficulty": 2,
  "type": "single",
  "question": "Spark Structured Streaming đảm bảo tính chất nào để dữ liệu không bị xử lý lặp hoặc thất thoát?",
  "options": [
   "Exactly-once",
   "At-least-once",
   "At-most-once",
   "Best-effort"
  ],
  "correct": [
   0
  ],
  "explanation": "Spark Structured Streaming đảm bảo Exactly-once (không lặp, không mất). Kèm Windowing & Watermarks (xử lý bản ghi đến trễ) và Fault Tolerance bằng Checkpointing."
 },
 {
  "id": "b-c3-q17",
  "chapter": 3,
  "difficulty": 2,
  "type": "single",
  "question": "Điểm khác biệt cốt lõi giữa kiến trúc Lambda và Kappa là gì?",
  "options": [
   "Lambda duy trì song song 2 luồng (Batch + Speed/Streaming); Kappa chỉ dùng một luồng Streaming duy nhất cho cả dữ liệu thực và lịch sử",
   "Lambda dùng một luồng; Kappa dùng hai luồng",
   "Cả hai đều chỉ xử lý batch",
   "Lambda cho dữ liệu quan hệ; Kappa cho dữ liệu đồ thị"
  ],
  "correct": [
   0
  ],
  "explanation": "Lambda: 2 luồng song song (Batch chính xác + Speed nhanh), hợp nhất tại Serving Layer, gánh nặng 2 codebase. Kappa: 1 luồng Streaming duy nhất → dễ bảo trì, nhất quán cao."
 },
 {
  "id": "b-c3-q18",
  "chapter": 3,
  "difficulty": 2,
  "type": "single",
  "question": "Về tính nhất quán dữ liệu, kiến trúc nào có rủi ro sai lệch giữa luồng Batch và Speed?",
  "options": [
   "Kiến trúc Lambda",
   "Kiến trúc Kappa",
   "Cả hai đều không có rủi ro",
   "Cả hai đều rủi ro như nhau"
  ],
  "correct": [
   0
  ],
  "explanation": "Lambda có rủi ro sai lệch giữa luồng Batch và Speed (2 codebase khác biệt). Kappa đảm bảo nhất quán cao vì chỉ một luồng xử lý, đang trở thành xu hướng chủ đạo."
 },
 {
  "id": "b-c3-q19",
  "chapter": 3,
  "difficulty": 2,
  "type": "single",
  "question": "dbt (Data Build Tool) dựa trên triết lý cốt lõi nào?",
  "options": [
   "'SQL-first': chuyển đổi logic nghiệp vụ phức tạp bằng SQL thuần túy, tích hợp Git để quản lý phiên bản",
   "'Python-first': viết toàn bộ pipeline bằng Python",
   "'No-code': chỉ dùng giao diện kéo-thả",
   "'Streaming-first': mọi biến đổi diễn ra real-time"
  ],
  "correct": [
   0
  ],
  "explanation": "dbt theo triết lý 'SQL-first': dùng SQL thuần chuyển đổi logic, tích hợp Git, module hóa theo nguyên tắc DRY (Don't Repeat Yourself)."
 },
 {
  "id": "b-c3-q20",
  "chapter": 3,
  "difficulty": 2,
  "type": "single",
  "question": "Jinja trong dbt được dùng để làm gì?",
  "options": [
   "Là templating engine bổ sung biến, vòng lặp, điều kiện vào SQL tĩnh để tạo SQL động",
   "Là ngôn ngữ truy vấn đồ thị thay thế Cypher",
   "Là công cụ nén dữ liệu Micro-partition",
   "Là giao thức đọc Redo logs cho CDC"
  ],
  "correct": [
   0
  ],
  "explanation": "Jinja là templating engine, thêm biến/vòng lặp/điều kiện vào SQL tĩnh → SQL động. Kèm Macros (đóng gói SQL lặp lại) và quản lý môi trường Dev/Test/Production."
 },
 {
  "id": "b-c3-q21",
  "chapter": 3,
  "difficulty": 2,
  "type": "single",
  "question": "Trong kiểm thử chất lượng dữ liệu của dbt, 'Schema Tests' làm gì?",
  "options": [
   "Tự động xác thực điều kiện cơ bản như cột rỗng (null) hay trùng lặp",
   "Viết SQL riêng để kiểm tra quy tắc nghiệp vụ đặc thù",
   "Vẽ bản đồ trực quan quan hệ đầu vào–đầu ra",
   "Tự động tạo trang tài liệu từ comment mã nguồn"
  ],
  "correct": [
   0
  ],
  "explanation": "Schema Tests: xác thực điều kiện cơ bản (null, trùng lặp). Singular Tests: SQL riêng cho quy tắc nghiệp vụ đặc thù. Visual Lineage vẽ quan hệ; Auto-Docs tạo tài liệu."
 },
 {
  "id": "b-c3-q22",
  "chapter": 3,
  "difficulty": 2,
  "type": "single",
  "question": "Schema Drift là gì?",
  "options": [
   "Sự thay đổi cấu trúc đột ngột ở dữ liệu nguồn (thêm/xóa cột, đổi kiểu dữ liệu) mà hệ thống đích không được báo trước",
   "Cơ chế cho phép kho dữ liệu tự động thích ứng khi cấu trúc nguồn thay đổi",
   "Sự suy giảm độ chính xác của mô hình ML theo thời gian",
   "Kỹ thuật sắp xếp lại dữ liệu trong Micro-partition"
  ],
  "correct": [
   0
  ],
  "explanation": "Schema Drift = thay đổi cấu trúc đột ngột ở nguồn không báo trước → gián đoạn Downstream, Silent Loss, ảnh hưởng ML. Cơ chế tự thích ứng là Schema Evolution (khác)."
 },
 {
  "id": "b-c3-q23",
  "chapter": 3,
  "difficulty": 2,
  "type": "single",
  "question": "'Silent Loss' – một hậu quả của Schema Drift – nghĩa là gì?",
  "options": [
   "Dữ liệu mới xuất hiện nhưng bị loại bỏ ngầm vì kho không nhận diện được cột mới",
   "Toàn bộ pipeline dừng hoạt động và báo lỗi rõ ràng",
   "Dữ liệu bị mã hóa nhầm khiến không đọc được",
   "Mô hình AI báo lỗi (fail) ngay lập tức"
  ],
  "correct": [
   0
  ],
  "explanation": "Silent Loss: dữ liệu mới bị loại bỏ NGẦM (không báo lỗi) vì kho không nhận diện cột mới → nguy hiểm vì khó phát hiện."
 },
 {
  "id": "b-c3-q24",
  "chapter": 3,
  "difficulty": 2,
  "type": "single",
  "question": "Quy tắc tương thích 'Backward Compatibility' nghĩa là gì?",
  "options": [
   "Code xử lý cũ vẫn đọc được cấu trúc dữ liệu mới",
   "Cấu trúc dữ liệu cũ vẫn hoạt động với phiên bản code mới",
   "Kết hợp cả hai chiều tương thích",
   "Có thể Rollback về phiên bản cấu trúc bất kỳ"
  ],
  "correct": [
   0
  ],
  "explanation": "Backward Compatibility: code CŨ đọc được dữ liệu MỚI. Forward Compatibility: dữ liệu CŨ hoạt động với code MỚI. Full Compatibility kết hợp cả hai."
 },
 {
  "id": "b-c3-q25",
  "chapter": 3,
  "difficulty": 2,
  "type": "single",
  "question": "Điểm khác biệt cốt lõi giữa Monitoring và Data Observability là gì?",
  "options": [
   "Monitoring chỉ báo động khi hệ thống lỗi; Observability giải thích được vì sao lỗi xảy ra và lỗi ở đâu",
   "Observability chỉ báo động; Monitoring giải thích nguyên nhân",
   "Cả hai đều chỉ báo động khi lỗi",
   "Monitoring dùng AI; Observability dùng con người"
  ],
  "correct": [
   0
  ],
  "explanation": "Monitoring chỉ báo động khi lỗi; Data Observability giải thích VÌ SAO và Ở ĐÂU lỗi, chủ động cô lập dữ liệu sai trước khi đến dashboard, giảm Data Downtime."
 },
 {
  "id": "b-c3-q26",
  "chapter": 3,
  "difficulty": 2,
  "type": "single",
  "question": "Năm trụ cột phân tích của Data Observability gồm những gì?",
  "options": [
   "Freshness, Volume, Distribution, Schema, Lineage",
   "Accuracy, Completeness, Consistency, Timeliness, Validity",
   "Bronze, Silver, Gold, Platinum, Diamond",
   "Support, Confidence, Lift, Coverage, Leverage"
  ],
  "correct": [
   0
  ],
  "explanation": "5 trụ cột Observability: Freshness (cập nhật đúng hạn), Volume (số bản ghi bất thường?), Distribution (tham số thống kê an toàn?), Schema (cấu trúc bị đổi?), Lineage (truy vết nguồn lỗi)."
 },
 {
  "id": "b-c3-q27",
  "chapter": 3,
  "difficulty": 2,
  "type": "single",
  "question": "Giá trị kinh tế 'MTTR' được cải thiện nhờ Data Observability nghĩa là gì?",
  "options": [
   "Rút ngắn Mean Time To Repair – thời gian phục hồi sự cố từ vài ngày xuống còn vài phút",
   "Tăng tổng chi phí sở hữu hệ thống",
   "Giảm số lượng người dùng truy vấn đồng thời",
   "Kéo dài thời gian rà soát mã nguồn thủ công"
  ],
  "correct": [
   0
  ],
  "explanation": "MTTR (Mean Time To Repair): Observability rút ngắn thời gian phục hồi sự cố từ vài ngày xuống vài phút; đồng thời tiết kiệm ~80% thời gian rà soát thủ công."
 },
 {
  "id": "b-c4-q1",
  "chapter": 4,
  "difficulty": 2,
  "type": "single",
  "question": "Bốn khía cạnh đánh giá Chất lượng Dữ liệu (Data Quality) là gì?",
  "options": [
   "Accuracy (chính xác), Completeness (đầy đủ), Consistency (nhất quán), Timeliness (kịp thời)",
   "Support, Confidence, Lift, Leverage",
   "Bronze, Silver, Gold, Platinum",
   "Freshness, Volume, Schema, Lineage"
  ],
  "correct": [
   0
  ],
  "explanation": "4 khía cạnh chất lượng dữ liệu: Accuracy (mô tả đúng thực thể), Completeness (tỷ lệ không khuyết), Consistency (đồng bộ logic/định dạng), Timeliness (độ trễ dữ liệu)."
 },
 {
  "id": "b-c4-q2",
  "chapter": 4,
  "difficulty": 2,
  "type": "single",
  "question": "'Completeness' (Tính đầy đủ) trong chất lượng dữ liệu đo lường điều gì?",
  "options": [
   "Tỷ lệ dữ liệu không bị khuyết (Null/Missing)",
   "Mức độ dữ liệu mô tả đúng thực thể",
   "Sự đồng bộ về logic và định dạng giữa các nguồn",
   "Độ trễ của dữ liệu so với thời điểm thực tế"
  ],
  "correct": [
   0
  ],
  "explanation": "Completeness = tỷ lệ dữ liệu không khuyết (Null/Missing). Accuracy = mô tả đúng; Consistency = đồng bộ logic; Timeliness = độ trễ."
 },
 {
  "id": "b-c4-q3",
  "chapter": 4,
  "difficulty": 2,
  "type": "single",
  "question": "'Cross-field Validation' (Kiểm tra chéo giữa các trường) dùng để đảm bảo khía cạnh nào?",
  "options": [
   "Áp dụng quy tắc logic liên thuộc tính để phát hiện mâu thuẫn (chủ yếu cho Consistency)",
   "Tính chính xác của từng giá trị đơn lẻ",
   "Tốc độ nạp dữ liệu vào kho",
   "Việc nén dữ liệu tối ưu"
  ],
  "correct": [
   0
  ],
  "explanation": "Cross-field Validation áp dụng quy tắc logic liên thuộc tính để phát hiện mâu thuẫn, hỗ trợ Consistency (cùng với Kiểm tra Schema qua Metadata)."
 },
 {
  "id": "b-c4-q4",
  "chapter": 4,
  "difficulty": 2,
  "type": "single",
  "question": "Phân biệt Noise (Nhiễu) và Outliers (Ngoại lai):",
  "options": [
   "Noise là sai số ngẫu nhiên làm ẩn tín hiệu (cần làm mượt để loại); Outliers là điểm khác biệt bất thường (cần phát hiện và đánh giá trước khi giữ hay loại)",
   "Noise là điểm khác biệt bất thường; Outliers là sai số ngẫu nhiên",
   "Cả hai đều phải xóa ngay lập tức",
   "Cả hai đều là tín hiệu quan trọng cần giữ lại"
  ],
  "correct": [
   0
  ],
  "explanation": "Noise = sai số ngẫu nhiên ẩn tín hiệu → làm mượt để loại. Outliers = điểm bất thường, có thể là lỗi HOẶC tín hiệu quan trọng (gian lận) → phát hiện và đánh giá trước khi quyết định."
 },
 {
  "id": "b-c4-q5",
  "chapter": 4,
  "difficulty": 2,
  "type": "single",
  "question": "Kỹ thuật 'Binning' để xử lý Noise hoạt động thế nào?",
  "options": [
   "Chia dữ liệu thành các khoảng (bin) và thay thế giá trị bằng trung bình của bin để làm mượt",
   "Dùng hàm toán học để 'khớp' dữ liệu và loại nhiễu",
   "Nhận diện điểm ngoài ngưỡng 3 độ lệch chuẩn",
   "Xóa hẳn các dòng dữ liệu dị biệt"
  ],
  "correct": [
   0
  ],
  "explanation": "Binning chia dữ liệu thành các bin và thay giá trị bằng trung bình bin để làm mượt. Regression dùng hàm toán học để khớp và loại nhiễu."
 },
 {
  "id": "b-c4-q6",
  "chapter": 4,
  "difficulty": 2,
  "type": "single",
  "question": "Theo phương pháp Z-Score, điểm dữ liệu được coi là Outlier tiềm năng khi nào?",
  "options": [
   "|Z| > 3 (nằm ngoài ngưỡng 3 lần độ lệch chuẩn)",
   "|Z| > 1",
   "|Z| < 0,5",
   "Z = 0"
  ],
  "correct": [
   0
  ],
  "explanation": "Z = (x − μ)/σ. Điểm có |Z| > 3 (ngoài 3 độ lệch chuẩn) được coi là Outlier tiềm năng. Z-Score nhạy với phân phối chuẩn (Gaussian)."
 },
 {
  "id": "b-c4-q7",
  "chapter": 4,
  "difficulty": 2,
  "type": "single",
  "question": "Ngưỡng Outlier theo phương pháp IQR (Khoảng tứ phân vị) được xác định thế nào?",
  "options": [
   "Các điểm nằm ngoài khoảng [Q1 − 1,5×IQR, Q3 + 1,5×IQR]",
   "Các điểm có |Z| > 3",
   "Các điểm nằm ngoài khoảng [μ − σ, μ + σ]",
   "Các điểm nằm ở phân vị 50% (median)"
  ],
  "correct": [
   0
  ],
  "explanation": "IQR: ngưỡng Outlier là điểm ngoài [Q1 − 1,5×IQR, Q3 + 1,5×IQR], với IQR = Q3 − Q1. IQR ít bị ảnh hưởng bởi Outlier cực đoan, phù hợp dữ liệu lệch (skewed)."
 },
 {
  "id": "b-c4-q8",
  "chapter": 4,
  "difficulty": 2,
  "type": "single",
  "question": "Vì sao IQR phù hợp với dữ liệu lệch (skewed) hơn Z-Score?",
  "options": [
   "IQR dựa trên phân vị nên ít bị ảnh hưởng bởi chính các Outlier cực đoan; Z-Score dựa trên trung bình và độ lệch chuẩn nên nhạy với phân phối chuẩn",
   "IQR luôn cho kết quả chính xác hơn Z-Score trong mọi trường hợp",
   "IQR tính toán nhanh hơn Z-Score",
   "IQR không cần biết dữ liệu, Z-Score thì cần"
  ],
  "correct": [
   0
  ],
  "explanation": "IQR dùng phân vị → ít bị Outlier cực đoan chi phối → hợp dữ liệu lệch. Z-Score dùng mean/độ lệch chuẩn → nhạy với phân phối chuẩn (Gaussian)."
 },
 {
  "id": "b-c4-q9",
  "chapter": 4,
  "difficulty": 2,
  "type": "single",
  "question": "Trong Data Integration, 'Entity Resolution' là thách thức gì?",
  "options": [
   "Xác định các bản ghi từ nhiều nguồn cùng mô tả một thực thể",
   "Đối chiếu các thuộc tính khác tên nhưng cùng ý nghĩa",
   "Nén dữ liệu để giảm số chiều",
   "Chia dữ liệu thành các tập Train/Test"
  ],
  "correct": [
   0
  ],
  "explanation": "Entity Resolution: xác định bản ghi từ nhiều nguồn cùng mô tả MỘT thực thể. Metadata Resolution: đối chiếu thuộc tính khác tên nhưng cùng ý nghĩa."
 },
 {
  "id": "b-c4-q10",
  "chapter": 4,
  "difficulty": 2,
  "type": "single",
  "question": "Công thức Độ đo Jaccard J(A,B) là gì?",
  "options": [
   "J(A,B) = |A ∩ B| / |A ∪ B| (số phần tử chung chia tổng số phần tử khác nhau)",
   "J(A,B) = |A ∪ B| / |A ∩ B|",
   "J(A,B) = |A ∩ B| / (|A| × |B|)",
   "J(A,B) = |A| + |B| − |A ∩ B|"
  ],
  "correct": [
   0
  ],
  "explanation": "Jaccard J(A,B) = |A∩B| / |A∪B|. Càng gần 1 → hai tập càng tương đồng; càng gần 0 → càng khác biệt."
 },
 {
  "id": "b-c4-q11",
  "chapter": 4,
  "difficulty": 2,
  "type": "single",
  "question": "Với A = {Python, SQL, Tableau, Power BI} và B = {Python, SQL, Excel, R}, giá trị J(A,B) là bao nhiêu?",
  "options": [
   "≈ 0,333 (2/6)",
   "= 0,5 (2/4)",
   "≈ 0,667 (4/6)",
   "= 1,0 (2/2)"
  ],
  "correct": [
   0
  ],
  "explanation": "A∩B = {Python, SQL} → 2 phần tử. A∪B = {Python, SQL, Tableau, Power BI, Excel, R} → 6 phần tử. J = 2/6 ≈ 0,333 (tương đồng thấp)."
 },
 {
  "id": "b-c4-q12",
  "chapter": 4,
  "difficulty": 2,
  "type": "single",
  "question": "Sau khi xác định bản ghi trùng thực thể, Deduplication (Khử trùng lặp) tạo ra gì?",
  "options": [
   "Golden Record duy nhất",
   "Nhiều bản ghi song song để dự phòng",
   "Một Bridge Table nhiều-nhiều",
   "Một Micro-partition mới"
  ],
  "correct": [
   0
  ],
  "explanation": "Deduplication loại bản ghi trùng để tạo Golden Record duy nhất. Conflict Handling xử lý xung đột giá trị bằng Source Authority hoặc Latest timestamp."
 },
 {
  "id": "b-c4-q13",
  "chapter": 4,
  "difficulty": 2,
  "type": "single",
  "question": "Trong Transformation, sự khác biệt giữa Smoothing và Aggregation là gì?",
  "options": [
   "Smoothing làm mượt biến động ngắn hạn; Aggregation tập hợp dữ liệu chi tiết thành bản tóm tắt cấp cao",
   "Smoothing tổng hợp lên cấp cao; Aggregation làm mượt biến động",
   "Cả hai đều là kỹ thuật giảm số chiều",
   "Cả hai đều là kỹ thuật chuẩn hóa thang đo"
  ],
  "correct": [
   0
  ],
  "explanation": "Smoothing = làm mượt biến động ngắn hạn (ví dụ Moving Average). Aggregation = tập hợp dữ liệu chi tiết thành tóm tắt cấp cao (doanh thu ngày → tháng)."
 },
 {
  "id": "b-c4-q14",
  "chapter": 4,
  "difficulty": 2,
  "type": "single",
  "question": "Công thức Simple Moving Average (SMA) với cửa sổ k tính như thế nào?",
  "options": [
   "SMA = (1/k) × tổng của k giá trị gần nhất tính từ thời điểm hiện tại ngược về trước",
   "SMA = tổng của toàn bộ dữ liệu chia cho số ngày",
   "SMA = giá trị lớn nhất trừ giá trị nhỏ nhất chia k",
   "SMA = (v − min)/(max − min)"
  ],
  "correct": [
   0
  ],
  "explanation": "SMA = (1/k) × Σ pᵢ (từ i = n−k+1 đến n): trung bình của k giá trị gần nhất trong cửa sổ trượt → khử biến động ngắn hạn."
 },
 {
  "id": "b-c4-q15",
  "chapter": 4,
  "difficulty": 2,
  "type": "single",
  "question": "Với dữ liệu giá vàng: Ngày1=80, Ngày2=86, Ngày3=82, k=3, SMA Ngày 3 là bao nhiêu?",
  "options": [
   "82,7 = (80+86+82)/3",
   "84,0 = (86+82+84)/3",
   "82,0 = giá Ngày 3",
   "83,0 = trung bình 80 và 86"
  ],
  "correct": [
   0
  ],
  "explanation": "SMA Ngày 3 = (Ngày1 + Ngày2 + Ngày3)/3 = (80+86+82)/3 = 248/3 ≈ 82,7."
 },
 {
  "id": "b-c4-q16",
  "chapter": 4,
  "difficulty": 2,
  "type": "single",
  "question": "Trong OLAP, phép toán 'Roll-up' và 'Drill-down' trên Data Cubes nghĩa là gì?",
  "options": [
   "Roll-up là tổng hợp lên mức cao hơn; Drill-down là chi tiết hóa xuống mức thấp hơn",
   "Roll-up là chi tiết hóa xuống thấp; Drill-down là tổng hợp lên cao",
   "Cả hai đều là tổng hợp lên cao hơn",
   "Cả hai đều là chi tiết hóa xuống thấp hơn"
  ],
  "correct": [
   0
  ],
  "explanation": "Roll-up = tổng hợp LÊN mức cao hơn (ngày→tháng); Drill-down = chi tiết hóa XUỐNG mức thấp hơn. Granularity là mức độ chi tiết cần cân bằng."
 },
 {
  "id": "b-c4-q17",
  "chapter": 4,
  "difficulty": 2,
  "type": "single",
  "question": "Data Reduction gồm hai hướng chính nào?",
  "options": [
   "Dimensionality Reduction (giảm số chiều/cột) và Numerosity Reduction (giảm số lượng/dòng)",
   "Smoothing (làm mượt) và Aggregation (tập hợp)",
   "Normalization (chuẩn hóa) và Discretization (rời rạc hóa)",
   "Binning và Regression"
  ],
  "correct": [
   0
  ],
  "explanation": "Data Reduction: Dimensionality Reduction (giảm số CHIỀU – cột/thuộc tính) và Numerosity Reduction (giảm số LƯỢNG – dòng/bản ghi)."
 },
 {
  "id": "b-c4-q18",
  "chapter": 4,
  "difficulty": 2,
  "type": "single",
  "question": "PCA (Principal Component Analysis) giữ lại điều gì khi giảm số chiều?",
  "options": [
   "Tối đa phương sai của dữ liệu, thông qua các vector riêng ứng với trị riêng lớn nhất của Covariance Matrix",
   "Tối đa số lượng thuộc tính gốc",
   "Toàn bộ dữ liệu ngoại lai",
   "Các thuộc tính có tương quan cao nhất với nhau"
  ],
  "correct": [
   0
  ],
  "explanation": "PCA là phép biến đổi tuyến tính giữ tối đa phương sai; thành phần chính = vector riêng ứng trị riêng lớn nhất của ma trận hiệp phương sai → giải quyết Curse of Dimensionality."
 },
 {
  "id": "b-c4-q19",
  "chapter": 4,
  "difficulty": 2,
  "type": "single",
  "question": "Kỹ thuật Numerosity Reduction nào 'chọn một tập con đại diện, ví dụ Stratified Sampling (lấy mẫu phân tầng)'?",
  "options": [
   "Sampling",
   "Regression Models",
   "Histograms",
   "Clustering"
  ],
  "correct": [
   0
  ],
  "explanation": "Sampling chọn tập con đại diện (Stratified Sampling = lấy mẫu phân tầng). Các kỹ thuật khác: Regression Models, Histograms (phân phối tần suất), Clustering (dùng Centroid đại diện)."
 },
 {
  "id": "b-c4-q20",
  "chapter": 4,
  "difficulty": 2,
  "type": "single",
  "question": "Discretization (Rời rạc hóa) là kỹ thuật gì?",
  "options": [
   "Chia thuộc tính liên tục thành các khoảng giá trị hoặc nhãn định danh để giảm số lượng giá trị",
   "Đưa các thuộc tính về cùng một thang đo",
   "Giảm số chiều bằng vector riêng",
   "Loại bỏ các điểm ngoại lai"
  ],
  "correct": [
   0
  ],
  "explanation": "Discretization chia thuộc tính LIÊN TỤC thành các khoảng/nhãn định danh → giảm số giá trị, hỗ trợ thuật toán khai phá dữ liệu."
 },
 {
  "id": "b-c4-q21",
  "chapter": 4,
  "difficulty": 2,
  "type": "single",
  "question": "Công thức tính độ rộng khoảng trong Equal-width Binning là gì?",
  "options": [
   "Width = (max − min) / N",
   "Width = (max + min) / N",
   "Width = N / (max − min)",
   "Width = (Q3 − Q1) / N"
  ],
  "correct": [
   0
  ],
  "explanation": "Equal-width Binning: Width = (max − min)/N, chia dải giá trị thành N khoảng độ rộng bằng nhau."
 },
 {
  "id": "b-c4-q22",
  "chapter": 4,
  "difficulty": 2,
  "type": "single",
  "question": "Với min = 10 triệu, max = 70 triệu, N = 3 nhóm (Equal-width), độ rộng mỗi nhóm là bao nhiêu?",
  "options": [
   "20 triệu (các nhóm 10–30, 30–50, 50–70)",
   "30 triệu (các nhóm 10–40, 40–70)",
   "15 triệu",
   "60 triệu (một nhóm duy nhất)"
  ],
  "correct": [
   0
  ],
  "explanation": "Width = (70 − 10)/3 = 20 triệu. Ba nhóm: [10–30] Thấp, [30–50] Trung bình, [50–70] Cao — mỗi nhóm rộng 20 triệu."
 },
 {
  "id": "b-c4-q23",
  "chapter": 4,
  "difficulty": 2,
  "type": "single",
  "question": "Điểm khác biệt giữa Equal-width và Equal-frequency Binning là gì?",
  "options": [
   "Equal-width chia đều theo độ rộng giá trị; Equal-frequency chia mỗi bin chứa số bản ghi bằng nhau (tốt cho dữ liệu lệch)",
   "Equal-width chia theo số bản ghi; Equal-frequency chia theo độ rộng",
   "Cả hai cho kết quả giống hệt nhau",
   "Equal-width dùng cho dữ liệu văn bản; Equal-frequency cho dữ liệu số"
  ],
  "correct": [
   0
  ],
  "explanation": "Equal-width: chia đều theo ĐỘ RỘNG giá trị (bin có thể chứa ít/nhiều bản ghi khác nhau). Equal-frequency: mỗi bin chứa SỐ BẢN GHI bằng nhau (độ rộng bin khác nhau), tốt cho dữ liệu lệch."
 },
 {
  "id": "b-c4-q24",
  "chapter": 4,
  "difficulty": 2,
  "type": "single",
  "question": "Concept Hierarchy (Phân cấp khái niệm) tổ chức thuộc tính theo cách nào?",
  "options": [
   "Theo tầng bậc từ cụ thể đến tổng quát, hỗ trợ Multi-level Mining và drill-down",
   "Theo thứ tự thời gian tăng dần",
   "Theo giá trị Jaccard giảm dần",
   "Theo số lượng bản ghi trong mỗi nhóm"
  ],
  "correct": [
   0
  ],
  "explanation": "Concept Hierarchy tổ chức thuộc tính theo tầng bậc từ cụ thể→tổng quát (ví dụ chi nhánh→khu vực), cho phép khai phá luật kết hợp ở nhiều mức trừu tượng (Multi-level Mining)."
 },
 {
  "id": "b-c4-q25",
  "chapter": 4,
  "difficulty": 2,
  "type": "single",
  "question": "Normalization (Chuẩn hóa) nhằm mục đích gì?",
  "options": [
   "Đưa các thuộc tính về cùng một thang đo, giúp thuật toán dựa trên khoảng cách không thiên lệch giữa các biến khác đơn vị/độ lớn",
   "Chia thuộc tính liên tục thành các khoảng rời rạc",
   "Giảm số chiều dữ liệu bằng vector riêng",
   "Nhóm các bản ghi tương tự vào cùng cụm"
  ],
  "correct": [
   0
  ],
  "explanation": "Normalization đưa các thuộc tính về cùng thang đo → thuật toán dựa trên khoảng cách không bị thiên lệch giữa các biến có đơn vị/độ lớn khác nhau."
 },
 {
  "id": "b-c4-q26",
  "chapter": 4,
  "difficulty": 2,
  "type": "single",
  "question": "Công thức Min-Max Normalization (đưa về khoảng [new_min, new_max]) là gì?",
  "options": [
   "v' = [(v − min)/(max − min)] × (new_max − new_min) + new_min",
   "v' = (v − μ)/σ",
   "v' = v / 10ʲ",
   "v' = (v − min)/(max − min) × σ"
  ],
  "correct": [
   0
  ],
  "explanation": "Min-Max: v' = [(v − min)/(max − min)] × (new_max − new_min) + new_min. Ánh xạ về khoảng cố định, thường [0,1]."
 },
 {
  "id": "b-c4-q27",
  "chapter": 4,
  "difficulty": 2,
  "type": "single",
  "question": "Với v = 60, min = 10, max = 110, [new_min, new_max] = [0,1], giá trị Min-Max chuẩn hóa là bao nhiêu?",
  "options": [
   "0,5",
   "0,6",
   "1,0",
   "0,45"
  ],
  "correct": [
   0
  ],
  "explanation": "v' = [(60−10)/(110−10)]×(1−0)+0 = (50/100)×1 = 0,5. Đúng giữa khoảng [0,1] vì 60 nằm giữa [10,110]."
 },
 {
  "id": "b-c4-q28",
  "chapter": 4,
  "difficulty": 2,
  "type": "single",
  "question": "Decimal Scaling di chuyển phần thập phân dựa trên yếu tố nào?",
  "options": [
   "Giá trị tuyệt đối lớn nhất của thuộc tính (v' = v / 10ʲ, với j nhỏ nhất sao cho max|v|/10ʲ < 1)",
   "Giá trị trung bình μ và độ lệch chuẩn σ",
   "Min và max của tập dữ liệu",
   "Số lượng bản ghi trong tập dữ liệu"
  ],
  "correct": [
   0
  ],
  "explanation": "Decimal Scaling: v' = v/10ʲ, j nhỏ nhất sao cho giá trị tuyệt đối lớn nhất sau chia < 1. Dựa trên giá trị tuyệt đối lớn nhất, giữ nguyên dấu âm/dương."
 },
 {
  "id": "b-c4-q29",
  "chapter": 4,
  "difficulty": 2,
  "type": "single",
  "question": "Với dữ liệu số dư từ −750.000 đến 3.500.000, giá trị j trong Decimal Scaling là bao nhiêu?",
  "options": [
   "j = 7 (vì 10⁷ = 10.000.000 ≥ 3.500.000, còn 10⁶ chưa đủ)",
   "j = 6",
   "j = 3",
   "j = 5"
  ],
  "correct": [
   0
  ],
  "explanation": "Giá trị tuyệt đối lớn nhất = 3.500.000. Cần 10ʲ ≥ 3.500.000: 10⁶=1.000.000 (chưa đủ), 10⁷=10.000.000 (đủ) → j = 7."
 },
 {
  "id": "b-c4-q30",
  "chapter": 4,
  "difficulty": 2,
  "type": "single",
  "question": "Z-score Normalization (v' = (v − μ)/σ) đặc biệt hiệu quả khi nào?",
  "options": [
   "Khi dữ liệu có nhiều ngoại lai hoặc không biết trước Min/Max",
   "Khi biết rõ Min/Max và dữ liệu ít ngoại lai",
   "Khi cần giữ nguyên khoảng giá trị cố định [0,1]",
   "Khi cần giữ nguyên dấu âm/dương một cách đơn giản"
  ],
  "correct": [
   0
  ],
  "explanation": "Z-score chuẩn hóa dựa trên μ và σ (dữ liệu sau có μ=0, σ=1). Hiệu quả khi có nhiều ngoại lai hoặc không biết Min/Max. Min-Max hợp khi biết Min/Max và ít ngoại lai."
 },
 {
  "id": "b-c4-q31",
  "chapter": 4,
  "difficulty": 2,
  "type": "single",
  "question": "Nhược điểm chính của Min-Max Normalization so với Z-score là gì?",
  "options": [
   "Nhạy cảm với Outliers vì phụ thuộc min/max",
   "Không đưa dữ liệu về khoảng cố định",
   "Không phản ánh phân phối thống kê của dữ liệu",
   "Không giữ được dấu âm/dương"
  ],
  "correct": [
   0
  ],
  "explanation": "Min-Max nhạy cảm với Outliers (phụ thuộc min/max). Z-score không đưa về khoảng cố định; Decimal Scaling không phản ánh phân phối thống kê."
 },
 {
  "id": "b-c4-q32",
  "chapter": 4,
  "difficulty": 2,
  "type": "single",
  "question": "Feature Selection dựa trên độ đo nào để giữ lại các thuộc tính có sức mạnh phân loại tốt nhất?",
  "options": [
   "Information Gain",
   "Jaccard",
   "Moving Average",
   "Z-Score"
  ],
  "correct": [
   0
  ],
  "explanation": "Feature Selection dùng Information Gain (lý thuyết thông tin của Claude Shannon) để giữ thuộc tính có sức phân loại tốt. Feature Construction tạo thuộc tính mới (BMI, LTV)."
 },
 {
  "id": "b-c4-q33",
  "chapter": 4,
  "difficulty": 2,
  "type": "single",
  "question": "Công thức Entropy tổng Info(D) trong lý thuyết thông tin là gì?",
  "options": [
   "Info(D) = − Σ pᵢ × log₂(pᵢ)",
   "Info(D) = Σ pᵢ × pᵢ",
   "Info(D) = (max − min)/N",
   "Info(D) = |A ∩ B| / |A ∪ B|"
  ],
  "correct": [
   0
  ],
  "explanation": "Info(D) = − Σ pᵢ·log₂(pᵢ), với pᵢ là xác suất một bộ dữ liệu thuộc lớp Cᵢ. Dùng log₂ vì thông tin mã hóa theo bit; Entropy càng nhỏ thì độ tinh khiết (purity) càng cao."
 },
 {
  "id": "b-c4-q34",
  "chapter": 4,
  "difficulty": 2,
  "type": "single",
  "question": "Information Gain của thuộc tính A được tính thế nào?",
  "options": [
   "Gain(A) = Info(D) − Info_A(D) (mức giảm entropy nhờ phân hoạch theo A)",
   "Gain(A) = Info_A(D) − Info(D)",
   "Gain(A) = Info(D) × Info_A(D)",
   "Gain(A) = Info(D) / Info_A(D)"
  ],
  "correct": [
   0
  ],
  "explanation": "Gain(A) = Info(D) − Info_A(D): mức giảm entropy nhờ phân hoạch theo A. Thuộc tính có Gain LỚN NHẤT được chọn làm nút phân tách (nút gốc cây quyết định)."
 },
 {
  "id": "b-c4-q35",
  "chapter": 4,
  "difficulty": 2,
  "type": "single",
  "question": "Với Info(D)=1, và Info(Income)=0,93872; Info(Credit History)=0,4512; Info(Loan Amount)=0,8113, thuộc tính nào nên làm nút gốc?",
  "options": [
   "Credit History (Gain ≈ 0,5488 – lớn nhất)",
   "Income (Gain ≈ 0,06128)",
   "Loan Amount (Gain ≈ 0,1887)",
   "Cả ba bằng nhau"
  ],
  "correct": [
   0
  ],
  "explanation": "Gain = 1 − Info_A(D): Income = 0,06128; Loan Amount = 0,1887; Credit History = 0,5488 (lớn nhất) → chọn Credit History làm nút gốc vì giảm entropy nhiều nhất."
 },
 {
  "id": "b-c4-q36",
  "chapter": 4,
  "difficulty": 2,
  "type": "single",
  "question": "Trong AI-based Feature Extraction, 'Embeddings' làm gì?",
  "options": [
   "Chuyển đổi các thực thể rời rạc thành các vector trong không gian đa chiều để tính độ tương đồng",
   "Chia dữ liệu thành các khoảng rời rạc",
   "Nhóm các bản ghi tương tự vào cùng cụm",
   "Loại bỏ giá trị Null bằng ước lượng"
  ],
  "correct": [
   0
  ],
  "explanation": "Embeddings chuyển thực thể rời rạc thành vector đa chiều để tính độ tương đồng. Sentiment&Topic chuyển văn bản thành cột số về sắc thái/chủ đề."
 },
 {
  "id": "b-c5-q1",
  "chapter": 5,
  "difficulty": 2,
  "type": "single",
  "question": "Một luật kết hợp (Association Rule) có dạng X ⇒ Y, trong đó X và Y lần lượt là gì?",
  "options": [
   "X là Antecedent (Tiền đề) xuất hiện trước ⇒; Y là Consequent (Hậu đề) xuất hiện sau ⇒",
   "X là Hậu đề; Y là Tiền đề",
   "X là tập phổ biến; Y là tập không phổ biến",
   "X là dữ liệu huấn luyện; Y là dữ liệu kiểm tra"
  ],
  "correct": [
   0
  ],
  "explanation": "X = Antecedent (Tiền đề, trước ⇒); Y = Consequent (Hậu đề, sau ⇒). Ý nghĩa: nếu X xảy ra thì Y có khả năng xảy ra."
 },
 {
  "id": "b-c5-q2",
  "chapter": 5,
  "difficulty": 2,
  "type": "single",
  "question": "Độ hỗ trợ (Support) của luật X ⇒ Y đo điều gì?",
  "options": [
   "Tần suất xuất hiện đồng thời của cả X và Y trong toàn bộ dữ liệu: Sup = (số giao dịch chứa cả X và Y)/(tổng số giao dịch)",
   "Xác suất Y xảy ra khi biết X đã xảy ra",
   "Mức độ X làm tăng khả năng Y xảy ra",
   "Số lần Y xuất hiện độc lập"
  ],
  "correct": [
   0
  ],
  "explanation": "Support = P(X∩Y) = (số giao dịch chứa cả X và Y)/(tổng số giao dịch), phản ánh mức độ phổ biến của luật. Tiến gần 1 → phổ biến; gần 0 → hiếm."
 },
 {
  "id": "b-c5-q3",
  "chapter": 5,
  "difficulty": 2,
  "type": "single",
  "question": "Độ tin cậy (Confidence) của luật X ⇒ Y được tính thế nào?",
  "options": [
   "Conf = Sup(X ∩ Y) / Sup(X): xác suất Y xảy ra với điều kiện X đã xảy ra",
   "Conf = Sup(X ∩ Y) / (tổng số giao dịch)",
   "Conf = Sup(X) / Sup(Y)",
   "Conf = Conf(X ⇒ Y) / P(Y)"
  ],
  "correct": [
   0
  ],
  "explanation": "Confidence = Sup(X∩Y)/Sup(X): xác suất Y xảy ra khi biết X. Ví dụ Conf(L)=262/283≈0,926 → 92,6% khách có 2 sản phẩm cũng có thẻ tín dụng."
 },
 {
  "id": "b-c5-q4",
  "chapter": 5,
  "difficulty": 2,
  "type": "single",
  "question": "Độ nâng (Lift) đo lường điều gì mà Confidence không thể hiện được?",
  "options": [
   "Liệu X có thực sự làm tăng khả năng Y xảy ra, hay Y vốn đã phổ biến sẵn (không liên quan gì đến X)",
   "Tần suất xuất hiện đồng thời của X và Y",
   "Số lượng luật có thể sinh ra",
   "Mức chi tiết của mỗi dòng dữ liệu"
  ],
  "correct": [
   0
  ],
  "explanation": "Lift = Conf(X⇒Y)/P(Y) đo mức phụ thuộc THỰC SỰ giữa X và Y. Confidence cao vẫn có thể do Y quá phổ biến sẵn — Lift loại bỏ nhược điểm này."
 },
 {
  "id": "b-c5-q5",
  "chapter": 5,
  "difficulty": 2,
  "type": "single",
  "question": "Ý nghĩa của giá trị Lift là gì?",
  "options": [
   "Lift > 1: quan hệ tích cực (X làm tăng khả năng Y); Lift = 1: độc lập; Lift < 1: quan hệ tiêu cực",
   "Lift > 1: độc lập; Lift = 1: tích cực; Lift < 1: rất mạnh",
   "Lift luôn nằm trong khoảng [0,1]",
   "Lift càng cao thì luật càng hiếm"
  ],
  "correct": [
   0
  ],
  "explanation": "Lift > 1: tiền đề làm TĂNG khả năng hậu đề (tích cực); Lift = 1: độc lập; Lift < 1: làm GIẢM khả năng (tiêu cực). Ví dụ Lift(L)≈1,52 → cao hơn 1,52 lần mức trung bình."
 },
 {
  "id": "b-c5-q6",
  "chapter": 5,
  "difficulty": 2,
  "type": "single",
  "question": "Hai ngưỡng minsup và minconf thường dùng để làm gì?",
  "options": [
   "Loại bỏ luật kém giá trị: luật có Support < minsup hoặc Confidence < minconf sẽ bị loại (thường minsup=1%, minconf=80%)",
   "Xác định số cụm k trong phân cụm",
   "Tính số chiều cần giảm bằng PCA",
   "Xác định độ rộng bin trong Binning"
  ],
  "correct": [
   0
  ],
  "explanation": "minsup (Support tối thiểu, ~0,01=1%) và minconf (Confidence tối thiểu, ~0,8=80%). Luật dưới ngưỡng bị loại để giảm số luật kém giá trị."
 },
 {
  "id": "b-c5-q7",
  "chapter": 5,
  "difficulty": 2,
  "type": "single",
  "question": "Với luật cd ⇒ e: count({c,d})=4, count({c,d,e})=3, tổng 8 giao dịch, count(e)=4. Support, Confidence, Lift lần lượt là:",
  "options": [
   "Support = 3/8 = 0,375; Confidence = 3/4 = 0,75; Lift = 0,75/0,5 = 1,5",
   "Support = 3/4; Confidence = 3/8; Lift = 1,5",
   "Support = 4/8; Confidence = 3/4; Lift = 2,0",
   "Support = 0,375; Confidence = 0,5; Lift = 0,75"
  ],
  "correct": [
   0
  ],
  "explanation": "Support = count({c,d,e})/8 = 3/8 = 0,375. Confidence = count({c,d,e})/count({c,d}) = 3/4 = 0,75. P(e)=4/8=0,5 → Lift = 0,75/0,5 = 1,5 (>1, mua c,d làm tăng khả năng mua e)."
 },
 {
  "id": "b-c5-q8",
  "chapter": 5,
  "difficulty": 2,
  "type": "single",
  "question": "Apriori là thuật toán để làm gì?",
  "options": [
   "Tìm các tập phổ biến (Frequent Itemset) – liệt kê mọi itemset có Support ≥ minsup",
   "Phân cụm dữ liệu không cần biết trước số cụm",
   "Xây dựng cây quyết định phân loại",
   "Chuẩn hóa dữ liệu về cùng thang đo"
  ],
  "correct": [
   0
  ],
  "explanation": "Apriori (Agrawal, 1993) tìm các tập phổ biến (Frequent Itemset) có Support ≥ minsup, làm nền tảng để khai phá luật kết hợp."
 },
 {
  "id": "b-c5-q9",
  "chapter": 5,
  "difficulty": 2,
  "type": "single",
  "question": "Với tập item I có |I| phần tử, số tập con không rỗng có thể có là bao nhiêu?",
  "options": [
   "2^|I| − 1",
   "2 × |I|",
   "|I|²/2",
   "|I|! (giai thừa)"
  ],
  "correct": [
   0
  ],
  "explanation": "Số tập con không rỗng = 2^|I| − 1. Ví dụ |I|=5 → 2⁵−1 = 31. Đây là lý do Apriori cần chiến lược sinh ứng viên hiệu quả thay vì liệt kê vét cạn."
 },
 {
  "id": "b-c5-q10",
  "chapter": 5,
  "difficulty": 2,
  "type": "single",
  "question": "Tính chất 1 (Antimonotone) của Apriori phát biểu điều gì?",
  "options": [
   "Nếu X ⊆ Y thì Sup(Y) ≤ Sup(X) (thêm item chỉ làm Support giảm hoặc giữ nguyên)",
   "Nếu X ⊆ Y thì Sup(Y) ≥ Sup(X)",
   "Support luôn tăng khi thêm item",
   "Support của tập con luôn bằng tập cha"
  ],
  "correct": [
   0
  ],
  "explanation": "Antimonotone: X⊆Y ⇒ Sup(Y)≤Sup(X). Thêm item vào tập chỉ làm Support GIẢM hoặc giữ nguyên, không bao giờ tăng."
 },
 {
  "id": "b-c5-q11",
  "chapter": 5,
  "difficulty": 2,
  "type": "single",
  "question": "Tính chất 2 (Apriori pruning) giúp thuật toán làm gì?",
  "options": [
   "Nếu itemset X không phổ biến thì mọi tập cha Y ⊇ X cũng không phổ biến → cắt tỉa sớm ứng viên mà không cần quét lại dữ liệu",
   "Nếu X phổ biến thì mọi tập con cũng phổ biến",
   "Tự động sinh mọi ứng viên có thể",
   "Loại bỏ item có Support cao nhất"
  ],
  "correct": [
   0
  ],
  "explanation": "Tính chất 2: X không phổ biến ⇒ mọi tập cha Y⊇X cũng không phổ biến → cắt tỉa (pruning) sớm, tiết kiệm phép tính so với liệt kê vét cạn 2ⁿ−1."
 },
 {
  "id": "b-c5-q12",
  "chapter": 5,
  "difficulty": 2,
  "type": "single",
  "question": "FP-Growth khắc phục hai hạn chế nào của Apriori?",
  "options": [
   "Apriori phải quét CSDL nhiều lần và sinh số lượng ứng viên rất lớn; FP-Growth chỉ quét đúng 2 lần và không sinh ứng viên",
   "Apriori chỉ quét 1 lần; FP-Growth quét nhiều lần",
   "FP-Growth sinh nhiều ứng viên hơn Apriori",
   "Apriori không dùng được với dữ liệu lớn, FP-Growth thì không cần minsup"
  ],
  "correct": [
   0
  ],
  "explanation": "Apriori: quét CSDL nhiều lần (mỗi kích thước k), sinh nhiều ứng viên (~n²/2 ở bước 2). FP-Growth: nén vào FP-Tree, chỉ quét 2 lần, KHÔNG sinh ứng viên."
 },
 {
  "id": "b-c5-q13",
  "chapter": 5,
  "difficulty": 2,
  "type": "single",
  "question": "Trong FP-Growth, quy tắc bắt buộc về thứ tự item trong mỗi itemset là gì?",
  "options": [
   "Mọi itemset phải viết theo thứ tự giảm dần của support count để FP-Tree nén tối ưu",
   "Theo thứ tự bảng chữ cái alphabet",
   "Theo thứ tự tăng dần của support count",
   "Theo thứ tự xuất hiện trong giao dịch gốc"
  ],
  "correct": [
   0
  ],
  "explanation": "FP-Growth: chỉ giữ item có support ≥ minsupportcount, viết itemset theo thứ tự GIẢM DẦN support count → các giao dịch chung item phổ biến dùng chung một nhánh, nén tối ưu."
 },
 {
  "id": "b-c5-q14",
  "chapter": 5,
  "difficulty": 2,
  "type": "single",
  "question": "'Conditional Pattern Base' trong FP-Growth là gì?",
  "options": [
   "Với mỗi item (suffix), là tập các đường dẫn tiền tố (prefix path) trong FP-Tree dẫn tới item đó, kèm số lần xuất hiện",
   "Danh sách toàn bộ ứng viên kích thước k",
   "Bảng nhị phân 0/1 biểu diễn giao dịch",
   "Cây quyết định phân loại tập phổ biến"
  ],
  "correct": [
   0
  ],
  "explanation": "Conditional Pattern Base: với mỗi item suffix, là tập các prefix path trong FP-Tree dẫn tới item đó (kèm count) → dùng để tạo Conditional FP-Tree và suy ra tập phổ biến."
 },
 {
  "id": "b-c5-q15",
  "chapter": 5,
  "difficulty": 2,
  "type": "single",
  "question": "So sánh ID3 và C4.5 về tiêu chí chọn thuộc tính:",
  "options": [
   "ID3 dùng Information Gain; C4.5 dùng Gain Ratio",
   "ID3 dùng Gain Ratio; C4.5 dùng Information Gain",
   "Cả hai đều dùng Gini Index",
   "Cả hai đều dùng Jaccard"
  ],
  "correct": [
   0
  ],
  "explanation": "ID3: Information Gain. C4.5 (cải tiến của ID3): Gain Ratio. C4.5 còn hỗ trợ dữ liệu liên tục, giá trị Null, và Post-pruning."
 },
 {
  "id": "b-c5-q16",
  "chapter": 5,
  "difficulty": 2,
  "type": "single",
  "question": "Điểm khác biệt giúp C4.5 kiểm soát Overfitting tốt hơn ID3 là gì?",
  "options": [
   "C4.5 có cơ chế Post-pruning (cắt sau) tạo cây gọn, tính tổng quát cao; ID3 không có cơ chế cắt tỉa",
   "ID3 có Post-pruning; C4.5 thì không",
   "C4.5 không hỗ trợ dữ liệu liên tục",
   "ID3 xử lý được giá trị Null còn C4.5 thì không"
  ],
  "correct": [
   0
  ],
  "explanation": "C4.5 có Post-pruning → cây gọn, chống Overfitting tốt. ID3 không có cắt tỉa (dễ quá khớp khi cây sâu), chỉ dùng dữ liệu rời rạc, không xử lý Null."
 },
 {
  "id": "b-c5-q17",
  "chapter": 5,
  "difficulty": 2,
  "type": "single",
  "question": "Vì sao thuật toán Naive Bayes được gọi là 'Naive' (ngây thơ)?",
  "options": [
   "Vì giả định tất cả thuộc tính đều độc lập hoàn toàn với nhau khi đã biết nhãn lớp",
   "Vì nó luôn cho kết quả sai",
   "Vì nó chỉ dùng được với dữ liệu rất nhỏ",
   "Vì nó không dựa trên xác suất"
  ],
  "correct": [
   0
  ],
  "explanation": "'Naive' vì giả định mọi thuộc tính độc lập hoàn toàn khi biết nhãn lớp → tính toán đơn giản, nhanh, nhưng không đúng với hầu hết dữ liệu thực (thuộc tính thường có quan hệ)."
 },
 {
  "id": "b-c5-q18",
  "chapter": 5,
  "difficulty": 2,
  "type": "single",
  "question": "Bayesian Network (mạng Bayes) khắc phục nhược điểm nào của Naive Bayes?",
  "options": [
   "Mô hình hóa các quan hệ phụ thuộc thực tế giữa nhiều biến (bằng đồ thị có hướng), thay vì giả định độc lập",
   "Giảm độ phức tạp tính toán xuống thấp hơn Naive Bayes",
   "Loại bỏ hoàn toàn nhu cầu về xác suất",
   "Chỉ dùng được cho dữ liệu số"
  ],
  "correct": [
   0
  ],
  "explanation": "Bayesian Network dùng đồ thị có hướng + xác suất để mô hình hóa quan hệ phụ thuộc thực tế giữa các biến → khắc phục giả định độc lập 'Naive', chính xác hơn khi thuộc tính tương quan (đổi lại tính toán phức tạp hơn)."
 },
 {
  "id": "b-c5-q19",
  "chapter": 5,
  "difficulty": 2,
  "type": "single",
  "question": "Khác biệt cốt lõi giữa K-Means và K-Medoids nằm ở đâu?",
  "options": [
   "K-Means dùng Mean (trọng tâm ảo, có thể không tồn tại trong dữ liệu); K-Medoids dùng Medoid (điểm dữ liệu thật trong cụm)",
   "K-Means dùng điểm thật; K-Medoids dùng trọng tâm ảo",
   "Cả hai đều dùng Mean",
   "K-Means dùng cho dữ liệu phân loại; K-Medoids cho dữ liệu số"
  ],
  "correct": [
   0
  ],
  "explanation": "K-Means: tâm = Mean (trọng tâm ảo, có thể không tồn tại thật), nhanh nhưng nhạy nhiễu. K-Medoids: tâm = Medoid (điểm dữ liệu THẬT), chống nhiễu tốt nhưng chậm với dữ liệu lớn."
 },
 {
  "id": "b-c5-q20",
  "chapter": 5,
  "difficulty": 2,
  "type": "single",
  "question": "Vì sao K-Means nhạy cảm với nhiễu (outliers) hơn K-Medoids?",
  "options": [
   "Vì tâm của K-Means là giá trị trung bình được tính toán, một outlier lớn có thể kéo lệch tâm cụm rất nhiều; K-Medoids luôn chọn điểm thật",
   "Vì K-Means không dùng khoảng cách tới tâm",
   "Vì K-Medoids chạy nhanh hơn nên xử lý nhiễu tốt hơn",
   "Vì K-Means chỉ dùng cho dữ liệu phân loại"
  ],
  "correct": [
   0
  ],
  "explanation": "K-Means tính Mean → outlier lớn kéo lệch tâm. K-Medoids chọn điểm dữ liệu THẬT làm tâm → ít bị outlier chi phối (đổi lại chi phí tìm medoid cao hơn)."
 },
 {
  "id": "b-c5-q21",
  "chapter": 5,
  "difficulty": 2,
  "type": "single",
  "question": "Biến thể K-Means nào dành riêng cho dữ liệu phân loại (categorical)?",
  "options": [
   "K-Modes (thay Mean bằng Mode – giá trị xuất hiện nhiều nhất)",
   "Mini-Batch K-Means",
   "K-Prototypes",
   "CLARA/CLARANS"
  ],
  "correct": [
   0
  ],
  "explanation": "K-Modes: cho dữ liệu phân loại, thay Mean bằng Mode. Mini-Batch K-Means: tăng tốc Big Data; K-Prototypes: dữ liệu hỗn hợp; CLARA/CLARANS: bản sampling của K-Medoids."
 },
 {
  "id": "b-c5-q22",
  "chapter": 5,
  "difficulty": 2,
  "type": "single",
  "question": "DBSCAN định nghĩa một cụm như thế nào, và ưu điểm nổi bật là gì?",
  "options": [
   "Cụm là vùng có mật độ điểm dày đặc, ngăn cách bởi vùng mật độ thấp; ưu điểm: không cần biết trước số cụm k và phát hiện được cụm hình dạng bất kỳ",
   "Cụm là vùng có mật độ thấp; cần biết trước số cụm k",
   "Cụm chỉ có hình cầu; cần cho trước số cụm",
   "Cụm được xác định bằng trọng tâm ảo giống K-Means"
  ],
  "correct": [
   0
  ],
  "explanation": "DBSCAN: cụm = vùng mật độ dày đặc, ngăn bởi vùng mật độ thấp. Ưu điểm: KHÔNG cần biết trước k (như K-Means) và phát hiện cụm hình dạng bất kỳ (không chỉ hình cầu)."
 },
 {
  "id": "b-c5-q23",
  "chapter": 5,
  "difficulty": 2,
  "type": "single",
  "question": "Ba loại điểm trong DBSCAN là gì?",
  "options": [
   "Core (≥ MinPts điểm trong bán kính Eps), Border (trong vùng Eps của Core nhưng < MinPts lân cận), Noise (không thuộc hai loại trên)",
   "Root, Branch, Leaf",
   "Bronze, Silver, Gold",
   "Antecedent, Consequent, Neutral"
  ],
  "correct": [
   0
  ],
  "explanation": "Core: có ≥ MinPts điểm trong bán kính Eps (nguồn lan cụm). Border: trong vùng Eps của Core nhưng < MinPts lân cận. Noise: không thuộc hai loại → bị loại, không gán cụm."
 },
 {
  "id": "b-c5-q24",
  "chapter": 5,
  "difficulty": 2,
  "type": "single",
  "question": "Hai tham số quyết định của DBSCAN là gì?",
  "options": [
   "Eps (bán kính lân cận) và MinPts (số điểm tối thiểu trong bán kính Eps để đủ 'dày đặc')",
   "k (số cụm) và Mean",
   "minsup và minconf",
   "df (damping factor) và ε (ngưỡng hội tụ)"
  ],
  "correct": [
   0
  ],
  "explanation": "DBSCAN có hai tham số: Eps (bán kính lân cận quét quanh mỗi điểm) và MinPts (số điểm tối thiểu trong Eps để một điểm được coi là Core)."
 },
 {
  "id": "b-c5-q25",
  "chapter": 5,
  "difficulty": 2,
  "type": "single",
  "question": "So sánh Hierarchical Clustering và Grid-based Clustering về khả năng mở rộng với dữ liệu lớn:",
  "options": [
   "Hierarchical rất kém về khả năng mở rộng; Grid-based tốt (tốc độ siêu nhanh, chuyên trị dữ liệu lớn)",
   "Hierarchical tốt hơn Grid-based với dữ liệu lớn",
   "Cả hai đều kém",
   "Cả hai đều tốt như nhau"
  ],
  "correct": [
   0
  ],
  "explanation": "Hierarchical: khả năng mở rộng RẤT KÉM (chi phí tính toán cao, gộp/chia sai không đảo ngược được). Grid-based: TỐT (chia ô lưới lượng tử hóa → tốc độ siêu nhanh cho dữ liệu lớn)."
 },
 {
  "id": "b-c5-q26",
  "chapter": 5,
  "difficulty": 2,
  "type": "single",
  "question": "Thuật toán tiêu biểu nào thuộc nhóm Grid-based Clustering?",
  "options": [
   "STING, CLIQUE, WaveCluster",
   "AGNES, DIANA, BIRCH, CURE",
   "K-Means, K-Medoids",
   "ID3, C4.5"
  ],
  "correct": [
   0
  ],
  "explanation": "Grid-based: STING, CLIQUE, WaveCluster. Hierarchical: AGNES, DIANA, BIRCH, CURE."
 },
 {
  "id": "b-c5-q27",
  "chapter": 5,
  "difficulty": 2,
  "type": "single",
  "question": "Outlier Detection theo hướng Statistical-based dựa trên cơ sở lý thuyết nào?",
  "options": [
   "Giả định dữ liệu tuân theo một phân phối xác suất (thường là Gaussian); điểm có xác suất cực thấp ở hai đuôi là ngoại lai",
   "Khoảng cách hình học giữa các điểm",
   "Mật độ điểm dày đặc quanh mỗi điểm",
   "Đồ thị có hướng của các biến phụ thuộc"
  ],
  "correct": [
   0
  ],
  "explanation": "Statistical-based: giả định phân phối xác suất (thường Gaussian), điểm ở hai đuôi (xác suất cực thấp) là ngoại lai. Nhanh, hợp dữ liệu đơn giản ít chiều. Distance-based dựa trên khoảng cách hình học, hợp dữ liệu đa chiều."
 },
 {
  "id": "b-c6-q1",
  "chapter": 6,
  "difficulty": 2,
  "type": "single",
  "question": "In-Database Machine Learning là kiến trúc gì?",
  "options": [
   "Huấn luyện và triển khai mô hình ML trực tiếp bên trong hạ tầng lưu trữ của Data Warehouse, thay vì di chuyển dữ liệu ra môi trường xử lý bên ngoài",
   "Trích xuất dữ liệu ra máy chủ ML riêng biệt để huấn luyện",
   "Chỉ dùng cho dữ liệu phi cấu trúc như ảnh/video",
   "Huấn luyện mô hình trên máy cá nhân của Data Scientist"
  ],
  "correct": [
   0
  ],
  "explanation": "In-Database ML: đưa THUẬT TOÁN đến với DỮ LIỆU (huấn luyện/triển khai ngay trong DWH), thay vì đưa dữ liệu đến thuật toán (trích ra máy chủ riêng như cách truyền thống)."
 },
 {
  "id": "b-c6-q2",
  "chapter": 6,
  "difficulty": 2,
  "type": "single",
  "question": "Lợi ích 'Governance' của In-Database ML là gì?",
  "options": [
   "Kiểm soát truy cập dựa trên vai trò (RBAC – Role-Based Access Control) áp dụng đồng nhất, phân quyền mô hình như phân quyền bảng dữ liệu",
   "Tận dụng tính toán song song quy mô lớn và auto-scaling",
   "Tích hợp mô hình vào các ELT Pipeline sẵn có",
   "Tăng băng thông mạng khi dịch chuyển dữ liệu"
  ],
  "correct": [
   0
  ],
  "explanation": "Governance: RBAC đồng nhất, phân quyền dùng mô hình ML giống phân quyền bảng. Scalability = tính toán song song/auto-scaling; Simplicity = tích hợp vào ELT sẵn có."
 },
 {
  "id": "b-c6-q3",
  "chapter": 6,
  "difficulty": 2,
  "type": "single",
  "question": "Hai đại diện tiêu biểu cho kiến trúc In-Database ML (huấn luyện bằng SQL) là gì?",
  "options": [
   "Google BigQuery ML và Snowflake Cortex",
   "Apache Airflow và Dagster",
   "Debezium và Fivetran",
   "Neo4j và Qdrant"
  ],
  "correct": [
   0
  ],
  "explanation": "Google BigQuery ML và Snowflake Cortex là hai đại diện In-Database ML, huấn luyện mô hình hoàn toàn bằng câu lệnh SQL ngay trên dữ liệu đang lưu trữ."
 },
 {
  "id": "b-c6-q4",
  "chapter": 6,
  "difficulty": 2,
  "type": "single",
  "question": "Phân biệt Supervised Learning và Unsupervised Learning dựa vào đâu?",
  "options": [
   "Dữ liệu huấn luyện có được gán nhãn sẵn hay không: Supervised dùng Labeled Data, Unsupervised dùng Unlabeled Data",
   "Supervised dùng dữ liệu chưa gán nhãn; Unsupervised dùng dữ liệu đã gán nhãn",
   "Supervised chạy nhanh hơn; Unsupervised chạy chậm hơn",
   "Supervised cho dữ liệu số; Unsupervised cho dữ liệu văn bản"
  ],
  "correct": [
   0
  ],
  "explanation": "Supervised: Labeled Data (đã có 'đáp án'/nhãn) → học ánh xạ dự đoán. Unsupervised: Unlabeled Data → tự khám phá cấu trúc/quy luật ẩn."
 },
 {
  "id": "b-c6-q5",
  "chapter": 6,
  "difficulty": 2,
  "type": "single",
  "question": "Bài toán nào thuộc nhóm Unsupervised Learning?",
  "options": [
   "Clustering (phân nhóm theo độ tương tự) và Anomaly Detection (tìm bản ghi dị biệt)",
   "Classification (dự đoán nhãn danh mục) và Regression (dự đoán giá trị số)",
   "Chỉ có Classification",
   "Chỉ có Regression"
  ],
  "correct": [
   0
  ],
  "explanation": "Unsupervised: Clustering, Anomaly Detection. Supervised: Classification (dự đoán nhãn danh mục), Regression (dự đoán giá trị số liên tục)."
 },
 {
  "id": "b-c6-q6",
  "chapter": 6,
  "difficulty": 2,
  "type": "single",
  "question": "Trong các độ đo đánh giá mô hình, 'Recall' đo lường điều gì?",
  "options": [
   "Trong số các trường hợp thực sự là dương tính, mô hình phát hiện đúng được bao nhiêu",
   "Trong số các trường hợp mô hình dự đoán là dương tính, tỉ lệ thực sự đúng",
   "Tỉ lệ dự đoán đúng trên tổng số dự đoán",
   "Trung bình điều hòa giữa Precision và Recall"
  ],
  "correct": [
   0
  ],
  "explanation": "Recall: trong số thực sự dương tính, phát hiện đúng bao nhiêu. Precision: trong số dự đoán dương tính, đúng bao nhiêu. Accuracy: tỉ lệ đúng tổng thể. F1-Score: trung bình điều hòa Precision-Recall."
 },
 {
  "id": "b-c6-q7",
  "chapter": 6,
  "difficulty": 2,
  "type": "single",
  "question": "F1-Score đặc biệt hữu ích trong tình huống nào?",
  "options": [
   "Khi cần cân bằng cả Precision và Recall, đặc biệt với dữ liệu mất cân bằng nhãn",
   "Khi dữ liệu hoàn toàn cân bằng giữa các nhãn",
   "Khi chỉ quan tâm đến Precision",
   "Khi không có nhãn để đánh giá"
  ],
  "correct": [
   0
  ],
  "explanation": "F1-Score = trung bình điều hòa Precision & Recall, dùng khi cần cân bằng cả hai, đặc biệt với dữ liệu MẤT CÂN BẰNG nhãn (Accuracy hợp khi dữ liệu cân bằng)."
 },
 {
  "id": "b-c6-q8",
  "chapter": 6,
  "difficulty": 2,
  "type": "single",
  "question": "Compact Prediction Tree+ (CPT+) dùng để làm gì?",
  "options": [
   "Dự đoán chuỗi tuần tự (sequence prediction) – dự đoán phần tử tiếp theo sau một chuỗi sự kiện đã cho",
   "Phân cụm dữ liệu số chiều cao",
   "Xếp hạng tầm quan trọng của trang web",
   "Chuẩn hóa dữ liệu về cùng thang đo"
  ],
  "correct": [
   0
  ],
  "explanation": "CPT+ là thuật toán dự đoán chuỗi tuần tự: dự đoán phần tử kế tiếp sau một chuỗi sự kiện, ứng dụng dự đoán truy cập web, giỏ hàng, gợi ý sản phẩm kế tiếp."
 },
 {
  "id": "b-c6-q9",
  "chapter": 6,
  "difficulty": 2,
  "type": "single",
  "question": "CPT+ lưu tri thức qua ba cấu trúc dữ liệu nào?",
  "options": [
   "Prediction Tree (cây tiền tố dùng chung), Inverted Index (đánh dấu phần tử trong chuỗi nào), Lookup Table (trỏ tới node cuối mỗi chuỗi)",
   "FP-Tree, Conditional Pattern Base, Count Table",
   "Bronze, Silver, Gold",
   "Queue, Stack, Dendrogram"
  ],
  "correct": [
   0
  ],
  "explanation": "CPT+ gồm: Prediction Tree (cây tiền tố chia sẻ nhánh), Inverted Index (bảng 1/0 phần tử có trong chuỗi nào), Lookup Table (trỏ từ chuỗi tới node cuối trên cây)."
 },
 {
  "id": "b-c6-q10",
  "chapter": 6,
  "difficulty": 2,
  "type": "single",
  "question": "Với chuỗi s = ⟨A, D⟩, mệnh đề kết quả của mỗi chuỗi tương tự là gì?",
  "options": [
   "Chuỗi con dài nhất nằm phía sau tất cả các phần tử của hậu tố Pᵧ(s) trong chuỗi đó",
   "Toàn bộ chuỗi tương tự",
   "Phần tử đầu tiên của chuỗi tương tự",
   "Số lần A và D xuất hiện"
  ],
  "correct": [
   0
  ],
  "explanation": "Mệnh đề kết quả (consequent) của chuỗi u đối với s = chuỗi con dài nhất đứng SAU tất cả phần tử của Pᵧ(s) trong u. Tần suất mỗi phần tử được cộng vào Count Table."
 },
 {
  "id": "b-c6-q11",
  "chapter": 6,
  "difficulty": 2,
  "type": "single",
  "question": "Với s=⟨A,D⟩, mệnh đề kết quả: s1→⟨F⟩, s3→⟨C,B⟩, s4→⟨B,C⟩ (3 chuỗi tương tự). Phần tử dự đoán kế tiếp là gì?",
  "options": [
   "B hoặc C (đồng điểm cao nhất 2/3 ≈ 0,667)",
   "F (điểm 1/3)",
   "A (không xuất hiện trong mệnh đề)",
   "D (đã có trong chuỗi)"
  ],
  "correct": [
   0
  ],
  "explanation": "P(C)=2/3 (s3,s4), P(B)=2/3 (s3,s4), P(F)=1/3 (s1). B và C đồng điểm cao nhất 0,667 → dự đoán là B hoặc C."
 },
 {
  "id": "b-c6-q12",
  "chapter": 6,
  "difficulty": 2,
  "type": "single",
  "question": "PageRank (Google) xếp hạng tầm quan trọng của một trang web dựa trên gì?",
  "options": [
   "Số lượng và chất lượng các liên kết (link) trỏ đến trang đó – trang được nhiều trang quan trọng liên kết thì điểm cao",
   "Số lượng từ khóa trên trang",
   "Tốc độ tải trang",
   "Số lượng liên kết trang đó trỏ đi"
  ],
  "correct": [
   0
  ],
  "explanation": "PageRank: một trang được nhiều trang QUAN TRỌNG khác liên kết đến thì bản thân có điểm cao. Dựa trên số lượng + chất lượng link trỏ ĐẾN trang."
 },
 {
  "id": "b-c6-q13",
  "chapter": 6,
  "difficulty": 2,
  "type": "single",
  "question": "Trong công thức PageRank, damping factor (df) thường có giá trị mặc định là bao nhiêu?",
  "options": [
   "0,85",
   "1,0",
   "0,5",
   "0,0001"
  ],
  "correct": [
   0
  ],
  "explanation": "df (damping factor) thường lấy 0,85. Nếu đề không cho thì mặc định 0,85. (0,0001 là ngưỡng hội tụ ε)."
 },
 {
  "id": "b-c6-q14",
  "chapter": 6,
  "difficulty": 2,
  "type": "single",
  "question": "Tính PR₁(F) biết F nhận đúng 1 liên kết từ E, E trỏ đi 3 nơi (C(E)=3), khởi tạo PR₀=1, df=0,85:",
  "options": [
   "(1 − 0,85) + 0,85 × (1/3) = 0,43",
   "(1 − 0,85) + 0,85 × 1 = 1,0",
   "0,85 + 0,15 × (1/3) = 0,9",
   "(1 − 0,85) × (1/3) = 0,05"
  ],
  "correct": [
   0
  ],
  "explanation": "PR₁(F) = (1 − df) + df × (PR₀(E)/C(E)) = (1 − 0,85) + 0,85 × (1/3) = 0,15 + 0,283 ≈ 0,43 (kết quả vòng lặp 1)."
 },
 {
  "id": "b-c6-q15",
  "chapter": 6,
  "difficulty": 2,
  "type": "single",
  "question": "Trong BigQuery ML, câu lệnh/hàm nào dùng để khởi tạo và huấn luyện mô hình?",
  "options": [
   "CREATE MODEL (ví dụ chọn LOGISTIC_REG hoặc LINEAR_REG)",
   "ML.EVALUATE",
   "ML.PREDICT",
   "SELECT *"
  ],
  "correct": [
   0
  ],
  "explanation": "CREATE MODEL: khởi tạo/huấn luyện (chọn LOGISTIC_REG, LINEAR_REG...). ML.EVALUATE: trích chỉ số (ROC-AUC, F1). ML.PREDICT: dự báo trên bảng mới."
 },
 {
  "id": "b-c6-q16",
  "chapter": 6,
  "difficulty": 2,
  "type": "single",
  "question": "Snowflake Cortex cung cấp năng lực đặc trưng nào?",
  "options": [
   "Các hàm ML/AI đóng gói sẵn cho Forecasting, Anomaly Detection và tích hợp LLM (Llama, Mistral) qua SQL",
   "Chỉ huấn luyện Logistic/Linear Regression bằng CREATE MODEL",
   "Chỉ dùng để nạp file batch vào kho",
   "Chỉ dùng để đọc Redo logs"
  ],
  "correct": [
   0
  ],
  "explanation": "Snowflake Cortex: hàm ML/AI đóng gói (Forecasting, Anomaly Detection) + Cortex AI & LLM Integration gọi Llama/Mistral qua SQL. BigQuery ML dùng CREATE MODEL/ML.EVALUATE/ML.PREDICT."
 },
 {
  "id": "b-c6-q17",
  "chapter": 6,
  "difficulty": 2,
  "type": "single",
  "question": "Snowpark cho phép lập trình viên làm gì?",
  "options": [
   "Viết mã bằng Python/R/Scala (API dạng DataFrame) nhưng toàn bộ thực thi diễn ra bên trong hạ tầng Snowflake",
   "Viết mã chạy trên máy cá nhân rồi tải kết quả về",
   "Chỉ dùng SQL thuần túy để truy vấn",
   "Chỉ đọc dữ liệu chứ không tính toán"
  ],
  "correct": [
   0
  ],
  "explanation": "Snowpark cung cấp API DataFrame cho Python/R/Scala, nhưng thực thi bên trong Snowflake (In-Database). Cơ chế Push-down tự biên dịch Python thành SQL tối ưu, Zero Data Movement, Secure Sandboxing."
 },
 {
  "id": "b-c6-q18",
  "chapter": 6,
  "difficulty": 2,
  "type": "single",
  "question": "Feature Store mang lại ba lợi ích chính nào?",
  "options": [
   "Discovery (dễ tái sử dụng đặc trưng), Consistency (nhất quán giữa các mô hình), Lineage (truy vết nguồn gốc)",
   "Accuracy, Precision, Recall",
   "Bronze, Silver, Gold",
   "Support, Confidence, Lift"
  ],
  "correct": [
   0
  ],
  "explanation": "Feature Store là kho tập trung quản lý/phân phối đặc trưng đã tính sẵn, ba lợi ích: Discovery, Consistency, Lineage — tránh các phòng ban tính trùng lặp/sai lệch logic."
 },
 {
  "id": "b-c6-q19",
  "chapter": 6,
  "difficulty": 2,
  "type": "single",
  "question": "Hai thành phần cốt lõi của MLOps là gì?",
  "options": [
   "Model Registry (danh mục lưu trữ tập trung mô hình đã huấn luyện) và Model Versioning (ràng buộc phiên bản mô hình với phiên bản dữ liệu và mã nguồn)",
   "Feature Construction và Feature Selection",
   "Bronze Layer và Gold Layer",
   "Producer và Consumer"
  ],
  "correct": [
   0
  ],
  "explanation": "MLOps áp dụng tư duy DevOps vào ML. Hai thành phần: Model Registry (quản lý trạng thái mô hình) và Model Versioning (gắn mô hình với đúng Data Version + mã nguồn → reproducibility)."
 },
 {
  "id": "b-c6-q20",
  "chapter": 6,
  "difficulty": 2,
  "type": "single",
  "question": "Phân biệt Data Drift và Concept Drift:",
  "options": [
   "Data Drift: phân phối dữ liệu đầu vào thay đổi so với dữ liệu huấn luyện; Concept Drift: mối quan hệ giữa thuộc tính đầu vào và nhãn mục tiêu bị thay đổi",
   "Data Drift: quan hệ đầu vào-nhãn đổi; Concept Drift: phân phối đầu vào đổi",
   "Cả hai giống hệt nhau",
   "Data Drift chỉ xảy ra với dữ liệu văn bản"
  ],
  "correct": [
   0
  ],
  "explanation": "Data Drift: phân phối ĐẦU VÀO thay đổi (tuổi/thu nhập khách đổi). Concept Drift: quan hệ đầu vào↔NHÃN đổi (cùng hành vi nhưng ý nghĩa dự đoán khác, ví dụ thị hiếu đổi)."
 },
 {
  "id": "b-c6-q21",
  "chapter": 6,
  "difficulty": 2,
  "type": "single",
  "question": "Dấu hiệu nhận biết Concept Drift là gì?",
  "options": [
   "Độ chính xác mô hình giảm dù phân phối dữ liệu đầu vào không đổi nhiều",
   "Phân phối thống kê (mean, variance) của dữ liệu mới khác dữ liệu huấn luyện",
   "Số lượng bản ghi tăng vọt bất thường",
   "Cấu trúc bảng bị thay đổi trái phép"
  ],
  "correct": [
   0
  ],
  "explanation": "Concept Drift: độ chính xác GIẢM dù phân phối đầu vào ít đổi (do quan hệ đầu vào-nhãn đổi). Data Drift nhận biết qua so sánh phân phối thống kê dữ liệu mới vs huấn luyện."
 },
 {
  "id": "b-c6-q22",
  "chapter": 6,
  "difficulty": 2,
  "type": "single",
  "question": "AutoML (Automated Machine Learning) tự động hóa ba bước nào?",
  "options": [
   "Tự động chọn/biến đổi đặc trưng, tự động thử nghiệm nhiều thuật toán, tự động Hyperparameter Tuning",
   "Tự động nạp dữ liệu, tự động mã hóa, tự động vẽ biểu đồ",
   "Tự động backup, tự động failover, tự động phân quyền",
   "Bronze, Silver, Gold"
  ],
  "correct": [
   0
  ],
  "explanation": "AutoML tự động: (1) Feature Engineering (chọn/biến đổi đặc trưng), (2) thử nghiệm nhiều thuật toán chọn cái tốt nhất, (3) Hyperparameter Tuning."
 },
 {
  "id": "b-c6-q23",
  "chapter": 6,
  "difficulty": 2,
  "type": "single",
  "question": "Sau khi được huấn luyện và phê duyệt, mô hình ML được đóng gói thành gì để triển khai trong kho dữ liệu?",
  "options": [
   "UDF (User-Defined Function) – biến mô hình thành một lệnh SQL trực quan",
   "Một Micro-partition mới",
   "Một Bridge Table",
   "Một Redo log"
  ],
  "correct": [
   0
  ],
  "explanation": "Mô hình được đóng gói thành UDF (User-Defined Function) ngay trong kho — bước cuối khép kín MLOps. Scoring diễn ra tức thời chỉ bằng câu lệnh SELECT thông thường."
 },
 {
  "id": "b-c7-q1",
  "chapter": 7,
  "difficulty": 2,
  "type": "single",
  "question": "Data Governance (Quản trị dữ liệu) là gì?",
  "options": [
   "Tập hợp các quy tắc, quy trình và trách nhiệm giúp kiểm soát toàn diện dữ liệu từ thu thập đến sử dụng, đảm bảo dữ liệu chính xác, an toàn và tuân thủ pháp luật",
   "Kỹ thuật nén dữ liệu để giảm chi phí lưu trữ",
   "Cơ chế truy vấn liên kết nhiều nền tảng lưu trữ",
   "Thuật toán phân cụm dữ liệu không giám sát"
  ],
  "correct": [
   0
  ],
  "explanation": "Data Governance là tập hợp quy tắc/quy trình/trách nhiệm kiểm soát toàn diện dữ liệu (thu thập→sử dụng), đảm bảo chính xác, an toàn, tuân thủ pháp luật. Từ 2026 bắt buộc theo AI Act."
 },
 {
  "id": "b-c7-q2",
  "chapter": 7,
  "difficulty": 2,
  "type": "single",
  "question": "Ba trụ cột bắt buộc của khung AI Act là gì?",
  "options": [
   "Transparency (Minh bạch), Human Oversight (Giám sát con người), Data Quality (Chất lượng dữ liệu huấn luyện)",
   "Accuracy, Completeness, Consistency",
   "Confidentiality, Integrity, Availability",
   "Bronze, Silver, Gold"
  ],
  "correct": [
   0
  ],
  "explanation": "Ba trụ cột AI Act: Transparency (công khai cách AI ra quyết định), Human Oversight (con người giám sát), Data Quality (dữ liệu đầu vào đủ sạch, đại diện)."
 },
 {
  "id": "b-c7-q3",
  "chapter": 7,
  "difficulty": 2,
  "type": "single",
  "question": "Theo AI Act, cấp độ rủi ro nào bị 'Cấm hoàn toàn'?",
  "options": [
   "Unacceptable Risk (ví dụ: chấm điểm công dân xã hội, AI thao túng hành vi dưới ngưỡng nhận thức)",
   "High Risk",
   "Transparent / Limited Risk",
   "Minimal Risk"
  ],
  "correct": [
   0
  ],
  "explanation": "Unacceptable Risk bị CẤM hoàn toàn (chấm điểm công dân, thao túng hành vi tiềm thức). High Risk: kiểm soát nghiêm ngặt; Limited: dán nhãn; Minimal: tự do vận hành."
 },
 {
  "id": "b-c7-q4",
  "chapter": 7,
  "difficulty": 2,
  "type": "single",
  "question": "AI đánh giá điểm tín dụng (Fintech), tuyển dụng nhân sự thuộc cấp độ rủi ro nào?",
  "options": [
   "High Risk – kiểm soát nghiêm ngặt",
   "Unacceptable Risk – cấm hoàn toàn",
   "Transparent / Limited Risk – dán nhãn rõ ràng",
   "Minimal Risk – tự do vận hành"
  ],
  "correct": [
   0
  ],
  "explanation": "High Risk (kiểm soát nghiêm ngặt): AI điểm tín dụng Fintech, tuyển dụng, hạ tầng thiết yếu. Chatbot/Deepfake là Limited Risk; bộ lọc Spam/AI game là Minimal Risk."
 },
 {
  "id": "b-c7-q5",
  "chapter": 7,
  "difficulty": 2,
  "type": "single",
  "question": "Chatbot và hệ thống tạo ảnh Deepfake thuộc cấp độ rủi ro nào theo AI Act?",
  "options": [
   "Transparent / Limited Risk – bắt buộc dán nhãn rõ ràng",
   "High Risk – kiểm soát nghiêm ngặt",
   "Unacceptable Risk – cấm hoàn toàn",
   "Minimal Risk – tự do vận hành"
  ],
  "correct": [
   0
  ],
  "explanation": "Chatbot và Deepfake thuộc Transparent/Limited Risk → bắt buộc dán nhãn rõ ràng (cho người dùng biết đang tương tác với AI/nội dung do AI tạo)."
 },
 {
  "id": "b-c7-q6",
  "chapter": 7,
  "difficulty": 2,
  "type": "single",
  "question": "Nghĩa vụ 'Traceability' với hệ thống High Risk yêu cầu điều gì?",
  "options": [
   "Hệ thống phải tự động ghi nhật ký để theo dõi, kiểm toán toàn bộ vòng đời vận hành",
   "Bộ dữ liệu huấn luyện phải đại diện, không chứa sai sót hệ thống",
   "Lưu trữ toàn bộ kiến trúc hệ thống để phục vụ thanh tra",
   "Mã hóa toàn bộ dữ liệu ở trạng thái tĩnh"
  ],
  "correct": [
   0
  ],
  "explanation": "Traceability: tự động ghi nhật ký để theo dõi/kiểm toán vòng đời → tiền đề cho Automated Data Lineage. (Data Quality = dữ liệu đại diện; Technical Documentation = lưu kiến trúc.)"
 },
 {
  "id": "b-c7-q7",
  "chapter": 7,
  "difficulty": 2,
  "type": "single",
  "question": "Data Lineage (Truy vết dòng dữ liệu) là gì?",
  "options": [
   "Khả năng quan sát và ghi nhận toàn diện luồng đi của dữ liệu, từ nguồn gốc, qua các bước biến đổi, đến khi mô hình AI sử dụng",
   "Kỹ thuật che dấu dữ liệu nhạy cảm ở mức cột",
   "Cơ chế chia sẻ dữ liệu không sao chép giữa các tổ chức",
   "Thuật toán phát hiện ngoại lai theo khoảng cách"
  ],
  "correct": [
   0
  ],
  "explanation": "Data Lineage: quan sát/ghi nhận luồng dữ liệu từ nguồn → biến đổi → khi AI dùng. Khi tự động hóa → Automated Data Lineage, hiện thực hóa nghĩa vụ Traceability."
 },
 {
  "id": "b-c7-q8",
  "chapter": 7,
  "difficulty": 2,
  "type": "single",
  "question": "Trong luồng quan sát 360 độ của Automated Lineage, điểm chốt 'Transformation' làm gì?",
  "options": [
   "Trích xuất mã SQL từ công cụ biên dịch như dbt hoặc Spark để xem lại logic làm sạch",
   "Ghi nhận metadata từ CRM, ERP, Web Logs",
   "Ghi nhận kết quả các bài test dữ liệu (không Null, không trùng)",
   "Kết nối đặc trưng với kết quả dự báo của mô hình ML"
  ],
  "correct": [
   0
  ],
  "explanation": "4 điểm chốt: Data Source (metadata CRM/ERP/Web Logs), Transformation (trích SQL từ dbt/Spark), Data Quality Check (kết quả test), AI Consumption (nối đặc trưng với dự báo)."
 },
 {
  "id": "b-c7-q9",
  "chapter": 7,
  "difficulty": 2,
  "type": "single",
  "question": "Điểm khác biệt giữa Row-level Security (RLS) và Column-level Masking (CLM):",
  "options": [
   "RLS lọc động theo danh tính người dùng (mỗi người thấy tập DÒNG khác nhau); CLM ẩn/mã hóa một phần dữ liệu nhạy cảm ở CỘT mà không đổi cấu trúc bảng",
   "RLS che dấu cột; CLM lọc dòng",
   "Cả hai đều lọc dòng theo danh tính",
   "Cả hai đều che dấu cột PII"
  ],
  "correct": [
   0
  ],
  "explanation": "RLS: bộ lọc động theo User Context → mỗi người thấy tập DÒNG khác nhau (nhân viên vùng A chỉ thấy khách vùng A). CLM: ẩn/mã hóa một phần dữ liệu CỘT nhạy cảm (091xxxx888), cấu trúc bảng không đổi."
 },
 {
  "id": "b-c7-q10",
  "chapter": 7,
  "difficulty": 2,
  "type": "single",
  "question": "Secure Data Sharing (Zero-copy) hoạt động theo cơ chế nào?",
  "options": [
   "Tổ chức chủ quản cấp quyền truy cập trực tiếp vào vùng dữ liệu; đối tác xem tại chỗ (in-place) không sao chép; khi dừng chỉ cần Revoke access",
   "Sao chép file dữ liệu ra bên ngoài qua ETL/FTP",
   "Mã hóa dữ liệu rồi gửi qua email cho đối tác",
   "Tạo bản sao vật lý cho mỗi đối tác để cách ly"
  ],
  "correct": [
   0
  ],
  "explanation": "Zero-copy Data Sharing: cấp quyền truy cập trực tiếp, đối tác xem in-place không sao chép byte nào; dừng hợp tác chỉ cần Revoke access → giải quyết triệt để mất kiểm soát sau chia sẻ."
 },
 {
  "id": "b-c7-q11",
  "chapter": 7,
  "difficulty": 2,
  "type": "single",
  "question": "So sánh ETL truyền thống và Secure Data Sharing về độ trễ:",
  "options": [
   "ETL truyền thống bị trễ (Batch/Schedule); Secure Data Sharing đạt thời gian thực (Live)",
   "ETL thời gian thực; Secure Data Sharing bị trễ",
   "Cả hai đều thời gian thực",
   "Cả hai đều bị trễ như nhau"
  ],
  "correct": [
   0
  ],
  "explanation": "ETL truyền thống: trễ (Batch/Schedule), rủi ro lộ file bản sao, tốn gấp đôi tài nguyên. Secure Data Sharing: Live (thời gian thực), kiểm soát tập trung qua IAM, tối ưu tài nguyên."
 },
 {
  "id": "b-c7-q12",
  "chapter": 7,
  "difficulty": 2,
  "type": "single",
  "question": "Differential Privacy đạt được quyền riêng tư bằng cách nào?",
  "options": [
   "Chủ động bơm thêm sai số ngẫu nhiên (noise) để hòa lẫn thông tin cá nhân vào cộng đồng, khiến kết quả gần như không đổi dù có/không một cá nhân",
   "Xóa hẳn toàn bộ dữ liệu cá nhân khỏi tập dữ liệu",
   "Mã hóa dữ liệu bằng SHA-256",
   "Nhóm các cá nhân giống nhau thành khoảng giá trị"
  ],
  "correct": [
   0
  ],
  "explanation": "Differential Privacy bơm noise ngẫu nhiên để kết quả gần như không đổi dù có/không một cá nhân → không thể dịch ngược để định danh. (Nhóm giống nhau là K-Anonymity.)"
 },
 {
  "id": "b-c7-q13",
  "chapter": 7,
  "difficulty": 2,
  "type": "single",
  "question": "Trong Differential Privacy, Epsilon (ε) thấp có nghĩa là gì?",
  "options": [
   "Bảo mật tối đa, nhưng độ chính xác phân tích giảm",
   "Bảo mật thấp, nhưng độ chính xác cao",
   "Không ảnh hưởng đến bảo mật lẫn độ chính xác",
   "Bảo mật cao và độ chính xác cũng cao"
  ],
  "correct": [
   0
  ],
  "explanation": "Epsilon THẤP: bảo mật tối đa nhưng độ chính xác giảm. Epsilon CAO: báo cáo chính xác hơn nhưng rủi ro bảo mật danh tính tăng. ε là ngân sách quyền riêng tư."
 },
 {
  "id": "b-c7-q14",
  "chapter": 7,
  "difficulty": 2,
  "type": "single",
  "question": "Công thức Differential Privacy Pr[M(D)=O] ≤ e^ε × Pr[M(D')=O], trong đó D và D' khác nhau thế nào?",
  "options": [
   "D và D' là hai tập dữ liệu chỉ khác nhau đúng một cá nhân",
   "D và D' hoàn toàn khác nhau về mọi bản ghi",
   "D là dữ liệu huấn luyện, D' là dữ liệu kiểm tra",
   "D và D' giống hệt nhau"
  ],
  "correct": [
   0
  ],
  "explanation": "D và D' chỉ khác nhau ĐÚNG MỘT cá nhân (D' = D bớt 1 khách hàng). Công thức giới hạn mức thay đổi kết quả khi có/không một cá nhân, chặn trên bởi e^ε."
 },
 {
  "id": "b-c7-q15",
  "chapter": 7,
  "difficulty": 2,
  "type": "single",
  "question": "So sánh ε = 0,1 và ε = 5 về mức độ an toàn:",
  "options": [
   "ε = 0,1 an toàn hơn (e^0,1 ≈ 1,105 « e^5 ≈ 148,4), sự có/không một cá nhân làm đổi kết quả ít hơn rất nhiều",
   "ε = 5 an toàn hơn vì giá trị lớn hơn",
   "Cả hai an toàn như nhau",
   "Không thể so sánh"
  ],
  "correct": [
   0
  ],
  "explanation": "ε=0,1 → e^ε≈1,105 (kết quả chỉ được lớn hơn tối đa 1,105 lần). ε=5 → e^ε≈148,4. Vì 1,105 « 148,4, ε=0,1 an toàn hơn nhiều."
 },
 {
  "id": "b-c7-q16",
  "chapter": 7,
  "difficulty": 2,
  "type": "single",
  "question": "Một tập dữ liệu đạt thuộc tính K-Anonymity khi nào?",
  "options": [
   "Mọi cá nhân trong bảng không thể bị phân biệt với ít nhất k−1 cá nhân khác cũng trong bảng",
   "Mọi cá nhân đều có k thuộc tính bị xóa",
   "Mọi cột đều được mã hóa bằng k lớp",
   "Tập dữ liệu được chia thành k phần bằng nhau"
  ],
  "correct": [
   0
  ],
  "explanation": "K-Anonymity: mỗi cá nhân không thể bị phân biệt với ít nhất k−1 cá nhân khác trong bảng (dựa trên Quasi-identifiers). Yếu tố rủi ro chính là Quasi-identifiers."
 },
 {
  "id": "b-c7-q17",
  "chapter": 7,
  "difficulty": 2,
  "type": "single",
  "question": "Trong K-Anonymity, 'Quasi-identifiers' là gì?",
  "options": [
   "Nhóm các cột đơn lẻ không nhạy cảm (Tuổi, Giới tính) nhưng nếu kết hợp có thể giúp Re-identification (định danh lại)",
   "Các cột chứa dữ liệu nhạy cảm trực tiếp như số CMND",
   "Khóa chính của bảng dữ liệu",
   "Các cột đã được mã hóa hoàn toàn"
  ],
  "correct": [
   0
  ],
  "explanation": "Quasi-identifiers: cột đơn lẻ không nhạy cảm (Tuổi, Giới tính...) nhưng kết hợp lại có thể định danh lại (Re-identification). Xử lý bằng Generalization và Suppression."
 },
 {
  "id": "b-c7-q18",
  "chapter": 7,
  "difficulty": 2,
  "type": "single",
  "question": "Hai kỹ thuật xử lý Quasi-identifiers trong K-Anonymity là gì?",
  "options": [
   "Generalization (biến số cụ thể thành khoảng, ví dụ 23 tuổi → nhóm 20-30) và Suppression (xóa hẳn dòng dữ liệu quá dị biệt)",
   "Encryption và Hashing",
   "Roll-up và Drill-down",
   "Binning và Regression"
  ],
  "correct": [
   0
  ],
  "explanation": "Generalization: khái quát hóa (23 tuổi → 20-30 tuổi). Suppression: triệt tiêu — xóa hẳn dòng của cá nhân quá dị biệt để tránh lộ."
 },
 {
  "id": "b-c7-q19",
  "chapter": 7,
  "difficulty": 2,
  "type": "single",
  "question": "Với 4 bệnh nhân (23,Q1),(26,Q1),(41,Q3),(52,Q3), áp dụng Generalization để đạt k=2-anonymity cho kết quả gì?",
  "options": [
   "Hai nhóm: ('20-30 tuổi', Q1) x2 và ('40-55 tuổi', Q3) x2 — mỗi tổ hợp xuất hiện ở đúng 2 bản ghi",
   "Bốn nhóm riêng biệt mỗi bệnh nhân một nhóm",
   "Một nhóm duy nhất chứa cả 4 bệnh nhân",
   "Xóa hết cả 4 bản ghi"
  ],
  "correct": [
   0
  ],
  "explanation": "Nhóm theo Khu vực rồi khái quát Tuổi: (20-30, Q1) x2 và (40-55, Q3) x2. Mỗi tổ hợp xuất hiện ở đúng 2 bản ghi → không ai bị phân biệt với ít hơn k−1=1 người → đạt 2-anonymity."
 },
 {
  "id": "b-c7-q20",
  "chapter": 7,
  "difficulty": 2,
  "type": "single",
  "question": "Khi dữ liệu doanh nghiệp mở rộng quá nhanh, hệ thống dễ rơi vào trạng thái nào?",
  "options": [
   "Data Swamps (vũng lầy dữ liệu) – khó nhận biết dữ liệu sạch nằm ở đâu",
   "Data Warehouse tối ưu hoàn hảo",
   "Zero-copy Data Sharing",
   "Golden Record duy nhất"
  ],
  "correct": [
   0
  ],
  "explanation": "Data Swamps (vũng lầy dữ liệu): khó biết dữ liệu sạch ở đâu. Giải pháp là AI-driven Data Catalog tự động thu thập/phân loại Metadata và nhận diện cột PII."
 },
 {
  "id": "b-c7-q21",
  "chapter": 7,
  "difficulty": 2,
  "type": "single",
  "question": "Phân biệt Business Glossary và Technical Metadata:",
  "options": [
   "Business Glossary (Governance Layer) thống nhất khái niệm kinh doanh giữa các phòng ban; Technical Metadata (Data Engineer Layer) lưu thông tin kỹ thuật (kiểu dữ liệu, Schema, Freshness)",
   "Business Glossary lưu kiểu dữ liệu; Technical Metadata định nghĩa khái niệm kinh doanh",
   "Cả hai đều do Data Engineer quản lý",
   "Cả hai đều chỉ lưu định nghĩa nghiệp vụ"
  ],
  "correct": [
   0
  ],
  "explanation": "Business Glossary (Governance): định nghĩa nghiệp vụ (Churn = không giao dịch >90 ngày), trả lời 'khái niệm này nghĩa là gì?'. Technical Metadata (Data Engineer): kiểu dữ liệu, Schema, Freshness, Owner — 'dữ liệu lưu trữ/vận hành ra sao?'."
 },
 {
  "id": "b-c7-q22",
  "chapter": 7,
  "difficulty": 2,
  "type": "single",
  "question": "Bản chất của Bias (định kiến/thiên lệch) trong AI nằm ở đâu?",
  "options": [
   "Không tự sinh ra từ mô hình, mà nằm trong dữ liệu lịch sử do con người thu thập; AI học và khuếch đại nó",
   "Do lỗi ngẫu nhiên trong thuật toán tính toán",
   "Do phần cứng máy chủ bị lỗi",
   "Do người dùng cố tình nhập sai dữ liệu"
  ],
  "correct": [
   0
  ],
  "explanation": "Bias không tự sinh từ mô hình mà nằm trong DỮ LIỆU LỊCH SỬ do con người thu thập; nếu quá khứ có phân biệt đối xử, AI học và khuếch đại ở quy mô lớn — hệ quả của thiếu Data Quality."
 },
 {
  "id": "b-c7-q23",
  "chapter": 7,
  "difficulty": 2,
  "type": "single",
  "question": "Kỹ thuật kiểm soát Bias 'In-processing' can thiệp ở thời điểm nào?",
  "options": [
   "Trong lúc huấn luyện – thêm Fairness Constraints trực tiếp vào Loss Function",
   "Trước khi huấn luyện – Resampling hoặc gán trọng số",
   "Sau khi mô hình cho ra kết quả – điều chỉnh ngưỡng quyết định",
   "Trước khi thu thập dữ liệu"
  ],
  "correct": [
   0
  ],
  "explanation": "In-processing: TRONG lúc huấn luyện (thêm Fairness Constraints vào Loss Function). Pre-processing: TRƯỚC (Resampling/gán trọng số). Post-processing: SAU (điều chỉnh Classification Threshold)."
 },
 {
  "id": "b-c7-q24",
  "chapter": 7,
  "difficulty": 2,
  "type": "single",
  "question": "Kỹ thuật 'Post-processing' kiểm soát Bias thực hiện như thế nào?",
  "options": [
   "Sau khi mô hình cho ra kết quả, điều chỉnh ngưỡng quyết định (Classification Threshold) tối ưu riêng cho từng nhóm thiểu số",
   "Trước khi huấn luyện, gán trọng số để cân bằng dữ liệu",
   "Trong lúc huấn luyện, thêm ràng buộc vào Loss Function",
   "Mã hóa dữ liệu đầu ra bằng SHA-256"
  ],
  "correct": [
   0
  ],
  "explanation": "Post-processing: SAU khi có kết quả, điều chỉnh Classification Threshold riêng cho từng nhóm thiểu số. Đây là một trong ba kỹ thuật theo vòng đời mô hình."
 },
 {
  "id": "b-c7-q25",
  "chapter": 7,
  "difficulty": 2,
  "type": "single",
  "question": "Nguyên tắc 'Human-in-the-loop' trong khung đạo đức yêu cầu gì?",
  "options": [
   "AI chỉ hỗ trợ ra quyết định; quyết định cuối cùng ảnh hưởng quyền lợi công dân (bác đơn vay) phải có sự phê duyệt của con người",
   "AI tự động ra mọi quyết định mà không cần con người",
   "Con người chỉ giám sát phần cứng, không giám sát quyết định",
   "Loại bỏ hoàn toàn vai trò con người để tăng tốc độ"
  ],
  "correct": [
   0
  ],
  "explanation": "Human-in-the-loop: AI chỉ là Decision Support System; quyết định cuối cùng ảnh hưởng quyền lợi công dân (bác đơn vay, từ chối hồ sơ) BẮT BUỘC phải có con người phê duyệt. Kèm Explainable AI (không hộp đen)."
 },
 {
  "id": "b-c7-q26",
  "chapter": 7,
  "difficulty": 2,
  "type": "single",
  "question": "Continuous Auditing (Kiểm toán liên tục) khác Audit truyền thống ở điểm nào?",
  "options": [
   "Ứng dụng AI theo dõi tự động toàn bộ hạ tầng theo thời gian thực (24/7), thay cho kiểm toán định kỳ (quý/năm) bằng con người",
   "Kiểm toán một lần duy nhất khi khởi tạo hệ thống",
   "Chỉ kiểm toán khi có sự cố xảy ra",
   "Chỉ do con người thực hiện thủ công"
  ],
  "correct": [
   0
  ],
  "explanation": "Continuous Auditing: AI theo dõi 24/7 thời gian thực, giảm chi phí, phát hiện/ngăn vi phạm ngay khi xảy ra — thay cho audit truyền thống định kỳ (quý/năm) bằng con người, dễ bỏ sót."
 },
 {
  "id": "b-c7-q27",
  "chapter": 7,
  "difficulty": 2,
  "type": "single",
  "question": "Bốn bước vận hành của hệ thống Continuous Auditing theo đúng thứ tự là:",
  "options": [
   "Monitor → Detect → Alert → Report",
   "Detect → Monitor → Report → Alert",
   "Report → Alert → Detect → Monitor",
   "Alert → Report → Monitor → Detect"
  ],
  "correct": [
   0
  ],
  "explanation": "Monitor (theo dõi truy vấn nhạy cảm) → Detect (Anomaly Detection phát hiện bất thường) → Alert (báo động đỏ, khóa quyền) → Report (kết xuất Compliance Report theo AI Act)."
 },
 {
  "id": "b-c7-q28",
  "chapter": 7,
  "difficulty": 2,
  "type": "single",
  "question": "'Data Audit Trail' trong báo cáo tuân thủ là gì?",
  "options": [
   "Sổ cái lưu trữ bất biến (Immutable log) ghi nhận ai đã tạo, sửa, xóa hoặc xem dữ liệu, phục vụ điều tra tư pháp",
   "Báo cáo đo lường Fairness Metrics của các mô hình AI",
   "Theo dõi mức hao hụt ngân sách quyền riêng tư (Epsilon)",
   "Bản đồ trực quan quan hệ đầu vào-đầu ra của bảng"
  ],
  "correct": [
   0
  ],
  "explanation": "Data Audit Trail: sổ cái bất biến (Immutable log) ghi ai tạo/sửa/xóa/xem dữ liệu. Bias Reporting Dashboard đo Fairness Metrics; Privacy Audit Trail theo dõi Epsilon budget loss."
 },
 {
  "id": "b-c8-q1",
  "chapter": 8,
  "difficulty": 2,
  "type": "single",
  "question": "Phân biệt Descriptive Analytics và Actionable/Prescriptive Analytics:",
  "options": [
   "Descriptive trả lời 'điều gì đã xảy ra?' (dữ liệu quá khứ, con người tự quyết định); Actionable trả lời 'điều gì sẽ xảy ra và nên làm gì?' (AI dự báo và đề xuất hành động)",
   "Descriptive dự báo tương lai; Actionable mô tả quá khứ",
   "Cả hai đều chỉ mô tả quá khứ",
   "Cả hai đều loại bỏ vai trò con người"
  ],
  "correct": [
   0
  ],
  "explanation": "Descriptive: 'điều gì đã xảy ra?', dữ liệu tĩnh, con người tự quyết. Actionable/Prescriptive: 'sẽ xảy ra gì và nên làm gì?', AI (BigQuery ML) dự báo + đề xuất hành động cụ thể tức thì."
 },
 {
  "id": "b-c8-q2",
  "chapter": 8,
  "difficulty": 2,
  "type": "single",
  "question": "Object Tables cho phép Data Warehouse làm gì mới?",
  "options": [
   "Phân tích trực tiếp dữ liệu phi cấu trúc (hình ảnh, PDF, âm thanh, video) thông qua câu lệnh SQL thông thường",
   "Chỉ xử lý dữ liệu có cấu trúc bảng, cột",
   "Tự động phát hiện Schema Drift",
   "Nén dữ liệu thành Micro-partition"
  ],
  "correct": [
   0
  ],
  "explanation": "Object Tables cho phép kho dữ liệu phân tích trực tiếp dữ liệu PHI CẤU TRÚC (ảnh, PDF, âm thanh, video) bằng SQL, tích hợp Vertex AI, không cần di chuyển dữ liệu ra ngoài."
 },
 {
  "id": "b-c8-q3",
  "chapter": 8,
  "difficulty": 2,
  "type": "single",
  "question": "Theo slide, dữ liệu phi cấu trúc chiếm khoảng bao nhiêu phần trăm lượng dữ liệu tiềm ẩn của doanh nghiệp?",
  "options": [
   "Khoảng 80%",
   "Khoảng 20%",
   "Khoảng 50%",
   "Khoảng 10%"
  ],
  "correct": [
   0
  ],
  "explanation": "Dữ liệu phi cấu trúc chiếm ~80% lượng dữ liệu tiềm ẩn mà trước đây chưa được khai thác — Object Tables giúp khai thác phần dữ liệu này."
 },
 {
  "id": "b-c8-q4",
  "chapter": 8,
  "difficulty": 2,
  "type": "single",
  "question": "Semantic Search khác Keyword Search (truyền thống) ở điểm nào?",
  "options": [
   "Semantic Search khớp theo Ý NGHĨA qua vector embeddings (chấp nhận cách diễn đạt khác nhau cùng ý); Keyword Search khớp TỪ KHÓA chính xác",
   "Semantic Search khớp từ khóa chính xác; Keyword Search khớp ý nghĩa",
   "Cả hai đều khớp từ khóa chính xác",
   "Cả hai đều dùng vector embeddings"
  ],
  "correct": [
   0
  ],
  "explanation": "Keyword Search: khớp từ khóa chính xác, người dùng phải dùng đúng từ trong dữ liệu. Semantic Search: khớp theo ý nghĩa qua Vector Index (IVFFLAT), chấp nhận diễn đạt khác nhau cùng ý."
 },
 {
  "id": "b-c8-q5",
  "chapter": 8,
  "difficulty": 2,
  "type": "single",
  "question": "Kiến trúc RAG (Retrieval-Augmented Generation) giúp AI làm gì?",
  "options": [
   "Trả lời dựa trên kho dữ liệu tin cậy, đã kiểm chứng của doanh nghiệp, thay vì chỉ dựa vào kiến thức chung học trên Internet",
   "Tự động phân cụm dữ liệu không giám sát",
   "Nén tài liệu để giảm dung lượng lưu trữ",
   "Mã hóa dữ liệu nhạy cảm ở mức cột"
  ],
  "correct": [
   0
  ],
  "explanation": "RAG giúp AI sinh tạo trả lời dựa trên kho dữ liệu nội bộ ĐÃ KIỂM CHỨNG, thay vì kiến thức chung chung → loại bỏ Hallucination (ảo giác)."
 },
 {
  "id": "b-c8-q6",
  "chapter": 8,
  "difficulty": 2,
  "type": "single",
  "question": "Bốn bước vận hành của RAG theo đúng thứ tự là:",
  "options": [
   "Ingestion → Embedding → Retrieval → Generation",
   "Retrieval → Generation → Ingestion → Embedding",
   "Embedding → Ingestion → Generation → Retrieval",
   "Generation → Retrieval → Embedding → Ingestion"
  ],
  "correct": [
   0
  ],
  "explanation": "RAG: Ingestion (nạp tài liệu vào Object Tables) → Embedding (băm thành chunks, chuyển vector) → Retrieval (tìm ngữ cảnh qua Vector Search) → Generation (LLM tổng hợp câu trả lời, không 'bịa')."
 },
 {
  "id": "b-c8-q7",
  "chapter": 8,
  "difficulty": 2,
  "type": "single",
  "question": "RAG giải quyết vấn đề Hallucination (ảo giác) bằng cách nào?",
  "options": [
   "Chỉ cho phép mô hình dùng dữ liệu nội bộ đã kiểm chứng làm ngữ cảnh trả lời, không tự đưa ra câu trả lời thiếu căn cứ",
   "Cho phép mô hình tự do sáng tạo câu trả lời",
   "Xóa toàn bộ dữ liệu Internet khỏi mô hình",
   "Tăng số lượng tham số của mô hình"
  ],
  "correct": [
   0
  ],
  "explanation": "RAG loại Hallucination vì mô hình chỉ được dùng dữ liệu nội bộ ĐÃ KIỂM CHỨNG làm ngữ cảnh → không tự bịa thông tin sai lệch, thiếu căn cứ."
 },
 {
  "id": "b-c8-q8",
  "chapter": 8,
  "difficulty": 2,
  "type": "single",
  "question": "Generative BI mang lại giá trị cốt lõi gì?",
  "options": [
   "Dân chủ hóa dữ liệu: người dùng không chuyên môn kỹ thuật đặt câu hỏi bằng ngôn ngữ tự nhiên và nhận kết quả phân tích ngay lập tức",
   "Chỉ dành cho các Data Engineer chuyên nghiệp",
   "Tăng độ phức tạp của câu lệnh SQL",
   "Loại bỏ hoàn toàn công cụ BI như Tableau"
  ],
  "correct": [
   0
  ],
  "explanation": "Generative BI dân chủ hóa dữ liệu: người dùng phi kỹ thuật hỏi bằng ngôn ngữ tự nhiên (Việt/Anh), nhận kết quả ngay, nhờ kết hợp công cụ BI (Looker/Tableau) và LLMs (Gemini/ChatGPT)."
 },
 {
  "id": "b-c8-q9",
  "chapter": 8,
  "difficulty": 2,
  "type": "single",
  "question": "Trong workflow Conversational BI, bước 'Auto-SQL' làm gì?",
  "options": [
   "LLM tự động biên dịch câu hỏi ngữ nghĩa thành câu lệnh SQL chuẩn xác, tối ưu và an toàn",
   "Người dùng tự viết câu lệnh SQL",
   "Hệ thống chọn loại biểu đồ phù hợp",
   "Nạp tài liệu vào Object Tables"
  ],
  "correct": [
   0
  ],
  "explanation": "Workflow: Natural Query (hỏi bằng ngôn ngữ tự nhiên) → Auto-SQL (LLM biên dịch thành SQL chuẩn) → Instant Insight (truy xuất + chọn biểu đồ phù hợp)."
 },
 {
  "id": "b-c8-q10",
  "chapter": 8,
  "difficulty": 2,
  "type": "single",
  "question": "Trong hệ sinh thái Apache Kafka, Producer và Consumer hoạt động thế nào?",
  "options": [
   "Producer sinh dữ liệu đẩy vào Kafka Cluster, Cluster phân phối tới nhiều Consumer; nhiều nguồn ghi và nhiều bên đọc hoạt động độc lập, không giao tiếp trực tiếp",
   "Producer đọc dữ liệu; Consumer sinh dữ liệu",
   "Producer và Consumer phải giao tiếp trực tiếp với nhau",
   "Chỉ có một Producer và một Consumer duy nhất"
  ],
  "correct": [
   0
  ],
  "explanation": "Kafka: Producer sinh dữ liệu → Kafka Cluster → phân phối tới nhiều Consumer. Nhiều Producer/Consumer hoạt động ĐỘC LẬP, không giao tiếp trực tiếp (mô hình Pub/Sub)."
 },
 {
  "id": "b-c8-q11",
  "chapter": 8,
  "difficulty": 2,
  "type": "single",
  "question": "Bên trong Kafka Cluster, dữ liệu được tổ chức và ghi theo cơ chế nào?",
  "options": [
   "Theo Topic (chia thành nhiều Partition để xử lý song song), mỗi Record ghi tuần tự vào Partition theo cơ chế FIFO",
   "Theo cấu trúc cây phân cấp LIFO",
   "Theo Micro-partition Columnar",
   "Theo Star Schema"
  ],
  "correct": [
   0
  ],
  "explanation": "Trong Kafka Cluster: dữ liệu tổ chức theo Topic → chia nhiều Partition (song song), mỗi Record ghi tuần tự vào Partition theo FIFO (vào trước ra trước). Zookeeper điều phối Broker."
 },
 {
  "id": "b-c8-q12",
  "chapter": 8,
  "difficulty": 2,
  "type": "single",
  "question": "Thành phần nào trong hệ sinh thái Kafka đảm nhận việc 'quản lý cấu hình và điều phối cluster'?",
  "options": [
   "Zookeeper",
   "Producer",
   "Consumer",
   "Partition"
  ],
  "correct": [
   0
  ],
  "explanation": "Zookeeper quản lý cấu hình và điều phối cluster; Broker là máy chủ lưu trữ/phân phối dữ liệu; Producer sinh dữ liệu; Consumer đọc dữ liệu."
 },
 {
  "id": "b-c8-q13",
  "chapter": 8,
  "difficulty": 2,
  "type": "single",
  "question": "'Zero Latency Decision' trong Real-time Insights được minh họa bằng ví dụ nào?",
  "options": [
   "Hệ thống tự động gửi thông báo khuyến mãi cá nhân hóa ngay khi khách rời giỏ hàng mà chưa thanh toán",
   "Báo cáo doanh thu được tổng hợp vào cuối tháng",
   "Tính lương nhân viên vào cuối kỳ",
   "Sao lưu dữ liệu định kỳ hàng đêm"
  ],
  "correct": [
   0
  ],
  "explanation": "Zero Latency Decision: hành động tự động ngay khi dữ liệu phát sinh — ví dụ gửi khuyến mãi cá nhân hóa ngay lúc khách rời giỏ hàng chưa thanh toán (kết hợp Pub/Sub + Continuous Queries)."
 },
 {
  "id": "b-c8-q14",
  "chapter": 8,
  "difficulty": 2,
  "type": "single",
  "question": "Data Storytelling có cấu trúc trình bày như thế nào?",
  "options": [
   "Bối cảnh → Vấn đề → Giải pháp → Hành động",
   "Bronze → Silver → Gold → Platinum",
   "Monitor → Detect → Alert → Report",
   "Ingestion → Embedding → Retrieval → Generation"
  ],
  "correct": [
   0
  ],
  "explanation": "Data Storytelling trình bày dữ liệu như câu chuyện có cấu trúc: Bối cảnh → Vấn đề → Giải pháp → Hành động, tăng khả năng ghi nhớ và thuyết phục (cao hơn ~65% so với con số khô khan)."
 },
 {
  "id": "b-c8-q15",
  "chapter": 8,
  "difficulty": 2,
  "type": "single",
  "question": "Agentic BI khác với trợ lý BI hỏi-đáp thông thường ở điểm nào?",
  "options": [
   "AI Agents trở thành 'chuyên viên phân tích tự hành': tự theo dõi mục tiêu, tự lập kế hoạch, truy vấn, phát hiện xu hướng ẩn và chủ động gửi báo cáo đề xuất — không cần con người ra lệnh liên tục",
   "AI Agents chỉ trả lời khi được hỏi một câu cụ thể",
   "AI Agents chỉ vẽ biểu đồ theo yêu cầu",
   "AI Agents không thể tự truy vấn kho dữ liệu"
  ],
  "correct": [
   0
  ],
  "explanation": "Agentic BI: AI Agents là 'chuyên viên phân tích tự hành' — tự theo dõi mục tiêu, lập kế hoạch, truy vấn, phát hiện xu hướng ẩn, chủ động gửi báo cáo, không cần con người ra lệnh liên tục (dự báo 2025-2030)."
 },
 {
  "id": "b-c9-q1",
  "chapter": 9,
  "difficulty": 2,
  "type": "single",
  "question": "Polyglot Persistence dựa trên triết lý cốt lõi nào?",
  "options": [
   "'One size does not fit all' – dùng đồng thời nhiều công nghệ lưu trữ (SQL, NoSQL) cho các dạng dữ liệu khác nhau",
   "'One size fits all' – một CSDL duy nhất cho mọi tác vụ",
   "Chỉ dùng SQL cho mọi loại dữ liệu",
   "Chỉ dùng NoSQL cho mọi loại dữ liệu"
  ],
  "correct": [
   0
  ],
  "explanation": "Polyglot Persistence: 'One size does not fit all' — dùng đồng thời nhiều công nghệ lưu trữ (SQL, NoSQL) vì không có CSDL duy nhất tối ưu cho mọi tác vụ."
 },
 {
  "id": "b-c9-q2",
  "chapter": 9,
  "difficulty": 2,
  "type": "single",
  "question": "Trong Polyglot Persistence, Key-Value Store phục vụ vai trò gì?",
  "options": [
   "Truy xuất tốc độ cao cho tầng bộ nhớ đệm (Caching) và phiên làm việc (Session)",
   "Đảm bảo tính toàn vẹn tuyệt đối (ACID) cho dữ liệu giao dịch cốt lõi",
   "Lưu trữ hồ sơ thực thể có cấu trúc thay đổi liên tục (Schema-less)",
   "Lưu trữ dữ liệu đồ thị"
  ],
  "correct": [
   0
  ],
  "explanation": "Key-Value Store: truy xuất tốc độ cao cho Caching/Session. RDBMS(SQL): giao dịch cốt lõi ACID. Document Store(NoSQL): hồ sơ Schema-less thay đổi liên tục."
 },
 {
  "id": "b-c9-q3",
  "chapter": 9,
  "difficulty": 2,
  "type": "single",
  "question": "CAP Theorem trong tích hợp Polyglot Persistence được áp dụng thế nào?",
  "options": [
   "Chấp nhận Eventual Consistency ở các tầng NoSQL vệ tinh để đổi lấy tốc độ/sẵn sàng, nhưng đảm bảo Strong Consistency tại kho trung tâm",
   "Đảm bảo Strong Consistency ở mọi tầng bất kể chi phí",
   "Loại bỏ hoàn toàn tính nhất quán để tối ưu tốc độ",
   "Chỉ đảm bảo Availability, bỏ qua Consistency và Partition tolerance"
  ],
  "correct": [
   0
  ],
  "explanation": "CAP: chấp nhận Eventual Consistency ở NoSQL vệ tinh (đổi lấy tốc độ, tính sẵn sàng), nhưng Strong Consistency tại kho trung tâm."
 },
 {
  "id": "b-c9-q4",
  "chapter": 9,
  "difficulty": 2,
  "type": "single",
  "question": "Knowledge Graph có tư duy cốt lõi 'Relationship-First' nghĩa là gì?",
  "options": [
   "Mối quan hệ giữa các dữ liệu được lưu trực tiếp như một thực thể hạng nhất, thay vì phải tính toán online qua lệnh JOIN",
   "Chỉ lưu các thực thể mà không lưu quan hệ",
   "Quan hệ được tính lại mỗi lần truy vấn bằng JOIN",
   "Ưu tiên lưu trữ dạng bảng quan hệ chuẩn hóa"
  ],
  "correct": [
   0
  ],
  "explanation": "Knowledge Graph (Nodes + Edges): Relationship-First — quan hệ được lưu trực tiếp như thực thể hạng nhất, không phải tính online qua JOIN. Ontology định nghĩa quan hệ (Customer-[WORKS_AT]-Organization)."
 },
 {
  "id": "b-c9-q5",
  "chapter": 9,
  "difficulty": 2,
  "type": "single",
  "question": "So sánh chiến lược duyệt của BFS và DFS:",
  "options": [
   "BFS duyệt theo từng cấp độ (level by level, chiều ngang) dùng Queue-FIFO; DFS duyệt sâu theo một nhánh đến khi cụt mới quay lui, dùng Stack-LIFO",
   "BFS duyệt sâu theo nhánh; DFS duyệt theo cấp độ",
   "Cả hai đều dùng Queue-FIFO",
   "Cả hai đều dùng Stack-LIFO"
  ],
  "correct": [
   0
  ],
  "explanation": "BFS: duyệt theo cấp độ (chiều ngang), Queue-FIFO. DFS: duyệt sâu theo một nhánh đến khi cụt mới quay lui (backtrack), Stack-LIFO hoặc đệ quy."
 },
 {
  "id": "b-c9-q6",
  "chapter": 9,
  "difficulty": 2,
  "type": "single",
  "question": "Với đồ thị A-G xuất phát từ A, output của BFS và DFS lần lượt là:",
  "options": [
   "BFS: A, B, D, G, E, F, C — DFS: A, B, E, G, F, C, D",
   "BFS: A, B, E, G, F, C, D — DFS: A, B, D, G, E, F, C",
   "Cả hai giống nhau: A, B, C, D, E, F, G",
   "BFS: A, C, B, D — DFS: A, D, C, B"
  ],
  "correct": [
   0
  ],
  "explanation": "BFS (theo cấp độ): A, B, D, G, E, F, C. DFS (đi sâu A→B→E→G rồi quay lui khám phá F→C→D): A, B, E, G, F, C, D."
 },
 {
  "id": "b-c9-q7",
  "chapter": 9,
  "difficulty": 2,
  "type": "single",
  "question": "Ứng dụng nào phù hợp với BFS trong Knowledge Graph?",
  "options": [
   "Tìm đường đi ngắn nhất giữa hai thực thể, gợi ý sản phẩm dựa trên lịch sử mua, mở rộng truy vấn theo từng cấp lân cận",
   "Khám phá quan hệ sâu nhiều tầng, duyệt ontology tìm khái niệm con",
   "Xây dựng cây phân cấp (taxonomy)",
   "Khai phá chuỗi liên kết dài giữa các thực thể"
  ],
  "correct": [
   0
  ],
  "explanation": "BFS: tìm đường ngắn nhất, gợi ý sản phẩm, mở rộng truy vấn theo cấp lân cận. DFS: khám phá quan hệ sâu nhiều tầng, duyệt ontology, xây taxonomy, khai phá chuỗi liên kết dài."
 },
 {
  "id": "b-c9-q8",
  "chapter": 9,
  "difficulty": 2,
  "type": "single",
  "question": "Công cụ Graph Database thương mại nào được minh họa trong slide, dùng ngôn ngữ truy vấn Cypher?",
  "options": [
   "Neo4j (Neo4j Aura)",
   "Qdrant",
   "Apache Kafka",
   "BigQuery"
  ],
  "correct": [
   0
  ],
  "explanation": "Neo4j (Neo4j Aura) là hệ quản trị Graph Database thương mại dùng ngôn ngữ Cypher (ví dụ MATCH (u:WikiUser)-[:VOTED_FOR]->...) trên đồ thị 7.115 nodes, 103.689 relationships."
 },
 {
  "id": "b-c9-q9",
  "chapter": 9,
  "difficulty": 2,
  "type": "single",
  "question": "Vector Embeddings thường có số chiều bao nhiêu và giúp làm gì?",
  "options": [
   "Từ 768 đến 1536 chiều; các thực thể có ý nghĩa tương đồng nằm gần nhau, cho phép thay tìm kiếm từ khóa thô bằng Semantic Search",
   "Chỉ 2-3 chiều; dùng để vẽ biểu đồ",
   "Vô hạn chiều; dùng để nén dữ liệu",
   "1 chiều; dùng để sắp xếp dữ liệu"
  ],
  "correct": [
   0
  ],
  "explanation": "Vector Embeddings: 768-1536 chiều, do mô hình Deep Learning tạo; thực thể tương đồng nằm gần nhau → thay tìm kiếm từ khóa bằng Semantic Search."
 },
 {
  "id": "b-c9-q10",
  "chapter": 9,
  "difficulty": 2,
  "type": "single",
  "question": "Hiện tượng 'Curse of Dimensionality' khi quét vector số chiều cao là gì?",
  "options": [
   "Quét khoảng cách toán học trên hàng triệu vector số chiều cao gây quá tải CPU",
   "Vector bị mất chiều khi lưu trữ",
   "Số chiều tự động giảm về 1",
   "Dữ liệu bị mã hóa nhầm"
  ],
  "correct": [
   0
  ],
  "explanation": "Curse of Dimensionality: quét khoảng cách trên hàng triệu vector số chiều cao gây quá tải CPU. Giải pháp là Approximate Nearest Neighbor (ANN)."
 },
 {
  "id": "b-c9-q11",
  "chapter": 9,
  "difficulty": 2,
  "type": "single",
  "question": "Kỹ thuật ANN nào 'xây dựng đồ thị phân cấp mạng lưới để nhảy vùng tìm láng giềng gần nhất với tốc độ mili-giây'?",
  "options": [
   "HNSW (Hierarchical Navigable Small World)",
   "IVF (Inverted File Index)",
   "Quantization (PQ)",
   "IVFFLAT"
  ],
  "correct": [
   0
  ],
  "explanation": "HNSW: đồ thị phân cấp mạng lưới nhảy vùng tìm láng giềng gần (mili-giây). IVF: phân cụm vector thành Voronoi cells. Quantization (PQ): nén để đưa chỉ mục vào RAM."
 },
 {
  "id": "b-c9-q12",
  "chapter": 9,
  "difficulty": 2,
  "type": "single",
  "question": "On-chain Data là gì?",
  "options": [
   "Toàn bộ thông tin lịch sử giao dịch, số dư tài khoản và mã trạng thái thực thi của Smart Contracts được ghi vĩnh viễn trên Blockchain",
   "Dữ liệu tạm thời trong bộ nhớ đệm của node",
   "Dữ liệu chỉ lưu trên máy chủ trung tâm",
   "Metadata mô tả kỹ thuật của bảng dữ liệu"
  ],
  "correct": [
   0
  ],
  "explanation": "On-chain Data: toàn bộ lịch sử giao dịch, số dư, mã trạng thái Smart Contracts ghi VĨNH VIỄN trên Blockchain — minh bạch tuyệt đối nhưng ở dạng byte/hex phi cấu trúc."
 },
 {
  "id": "b-c9-q13",
  "chapter": 9,
  "difficulty": 2,
  "type": "single",
  "question": "Trong quy trình Blockchain ETL, bước 'Event Decoding' làm gì?",
  "options": [
   "Dùng tệp ABI (Application Binary Interface) để dịch chuỗi Hex trong Logs thành tên hàm và tham số cụ thể (người gửi, nhận, số tiền)",
   "Kết nối với các nút mạng qua giao thức RPC để bắt các khối mới",
   "Chuyển đổi đơn vị Wei sang Ether và đồng bộ Timestamp về UTC",
   "Băm dữ liệu bằng SHA-256"
  ],
  "correct": [
   0
  ],
  "explanation": "Blockchain ETL: Node Ingestion (kết nối node qua RPC bắt block) → Event Decoding (dùng ABI dịch Hex thành tên hàm/tham số) → Data Normalization (Wei→Ether, Timestamp→UTC)."
 },
 {
  "id": "b-c9-q14",
  "chapter": 9,
  "difficulty": 2,
  "type": "single",
  "question": "Cơ chế Data Anchoring dùng Blockchain đảm bảo tính toàn vẹn Audit Logs giải quyết lỗ hổng nào?",
  "options": [
   "DBA có quyền tối cao có thể sửa/xóa Audit Logs để xóa dấu vết gian lận",
   "Dữ liệu bị mất khi mạng gián đoạn",
   "Truy vấn quá chậm trên dữ liệu lớn",
   "Thiếu khả năng mở rộng theo chiều ngang"
  ],
  "correct": [
   0
  ],
  "explanation": "Lỗ hổng: DBA có quyền tối cao, có thể sửa/xóa Audit Logs để xóa dấu vết gian lận. Giải pháp: dùng Blockchain làm bên thứ ba độc lập không thể thao túng → Non-repudiation."
 },
 {
  "id": "b-c9-q15",
  "chapter": 9,
  "difficulty": 2,
  "type": "single",
  "question": "Trong cơ chế Data Anchoring, Merkle Tree có vai trò gì?",
  "options": [
   "Gom hàng ngàn mã băm nhật ký trong ngày thành một mã băm gốc duy nhất (Merkle Root Hash)",
   "Băm dữ liệu thành SHA-256 riêng lẻ cho từng bản ghi",
   "Ghi trực tiếp toàn bộ dữ liệu thô lên Blockchain",
   "Mã hóa dữ liệu bằng khóa đối xứng"
  ],
  "correct": [
   0
  ],
  "explanation": "Merkle Tree gom hàng ngàn mã băm nhật ký thành một Merkle Root Hash duy nhất; sau đó Anchoring ghi Root Hash lên Blockchain qua Smart Contract để đối chiếu khi tranh chấp."
 },
 {
  "id": "b-c9-q16",
  "chapter": 9,
  "difficulty": 2,
  "type": "single",
  "question": "Federated Querying cho phép làm gì?",
  "options": [
   "Viết một câu lệnh SQL duy nhất để lấy và liên kết dữ liệu từ nhiều nền tảng (SQL, Graph, Blockchain) mà không cần di chuyển dữ liệu thô (Zero-Copy)",
   "Gom toàn bộ dữ liệu về một kho trung tâm bằng ETL",
   "Chỉ truy vấn được một loại CSDL tại một thời điểm",
   "Sao chép dữ liệu từ nguồn về đích thủ công"
  ],
  "correct": [
   0
  ],
  "explanation": "Federated Querying: một SQL duy nhất lấy/liên kết dữ liệu từ nhiều nền tảng (SQL, Graph, Blockchain) không di chuyển dữ liệu thô (Zero-Copy/Query Virtualization), giữ dữ liệu tại nguồn."
 },
 {
  "id": "b-c9-q17",
  "chapter": 9,
  "difficulty": 2,
  "type": "single",
  "question": "Trong Federated Querying, 'Connector/Wrapper Engines' (Presto, Trino) làm gì?",
  "options": [
   "Tiếp nhận SQL tổng, tự động dịch thành ngôn ngữ nguồn tương ứng (Cypher cho Graph, RPC cho Blockchain)",
   "Duy trì từ điển dữ liệu chung để biết cột nào ở CSDL nào",
   "Đẩy điều kiện lọc WHERE xuống thẳng nguồn dữ liệu",
   "Băm dữ liệu bằng SHA-256"
  ],
  "correct": [
   0
  ],
  "explanation": "Connector/Wrapper Engines (Presto, Trino, BigQuery Omni): dịch SQL tổng thành ngôn ngữ nguồn (Cypher/RPC). Global Catalog: từ điển dữ liệu chung. Predicate Pushdown: đẩy WHERE xuống nguồn."
 },
 {
  "id": "b-c9-q18",
  "chapter": 9,
  "difficulty": 2,
  "type": "single",
  "question": "Trong tối ưu truy vấn đa mô hình, Cost-Based Optimizer ước tính chi phí dựa trên hai tham số nào?",
  "options": [
   "Chi phí tính toán tại chỗ (CPU/I-O) và chi phí vận chuyển dữ liệu qua mạng",
   "Số lượng người dùng và số lượng bảng",
   "Dung lượng đĩa và số lượng cột",
   "Số lần quét CSDL và số ứng viên sinh ra"
  ],
  "correct": [
   0
  ],
  "explanation": "Cost-Based Optimizer ước tính dựa trên: chi phí tính toán tại chỗ (CPU/I-O) và chi phí vận chuyển dữ liệu qua mạng — để xây Execution Plan thông minh nhất, tránh Network Bottleneck."
 },
 {
  "id": "b-c9-q19",
  "chapter": 9,
  "difficulty": 2,
  "type": "single",
  "question": "Chiến lược 'Broadcast Join' trong Hybrid Join Strategies là gì?",
  "options": [
   "Kéo bảng nhỏ sang máy chủ chứa bảng lớn",
   "Băm nhỏ cả hai bảng rồi phân phối (Hash Join)",
   "Gom hai bảng về máy chủ trung tâm",
   "Xóa một trong hai bảng để giảm tải"
  ],
  "correct": [
   0
  ],
  "explanation": "Broadcast Join: kéo bảng NHỎ sang máy chủ chứa bảng LỚN. Hash Join: băm nhỏ cả hai bảng. Query Hints ép hệ thống thực thi đúng ý đồ khi thiếu thống kê."
 },
 {
  "id": "b-c9-q20",
  "chapter": 9,
  "difficulty": 2,
  "type": "single",
  "question": "Phân biệt hai chỉ số SLA là RTO và RPO trong HA/DR:",
  "options": [
   "RTO (Recovery Time Objective): thời gian tối đa chấp nhận để khôi phục hệ thống; RPO (Recovery Point Objective): lượng dữ liệu tối đa chấp nhận bị mất",
   "RTO là lượng dữ liệu bị mất; RPO là thời gian khôi phục",
   "Cả hai đều đo thời gian khôi phục",
   "Cả hai đều đo lượng dữ liệu bị mất"
  ],
  "correct": [
   0
  ],
  "explanation": "RTO (Recovery TIME Objective): thời gian tối đa để khôi phục hệ thống. RPO (Recovery POINT Objective): lượng dữ liệu tối đa chấp nhận bị mất (phút/giờ)."
 },
 {
  "id": "b-c9-q21",
  "chapter": 9,
  "difficulty": 2,
  "type": "single",
  "question": "Trong thiết kế HA/DR đa mô hình, cơ chế 'Automated Failover' hoạt động thế nào?",
  "options": [
   "Bộ giám sát Health Check; nếu vùng chính mất tín hiệu quá 30 giây, hệ thống tự động chuyển toàn bộ luồng truy cập sang vùng dự phòng",
   "Sao chép dữ liệu liên tục từ Primary sang DR Region",
   "Dùng nhân bản bất đồng bộ xuyên quốc gia cho NoSQL",
   "Băm dữ liệu để đảm bảo tính toàn vẹn"
  ],
  "correct": [
   0
  ],
  "explanation": "Automated Failover: Health Check giám sát; nếu vùng chính mất tín hiệu >30 giây → tự động chuyển luồng sang vùng dự phòng. Multi-Region Replication sao chép liên tục; Asynchronous Sync cho NoSQL/Graph."
 }
];
if (typeof module !== 'undefined' && module.exports) { module.exports = QUESTIONS_BO2; }
