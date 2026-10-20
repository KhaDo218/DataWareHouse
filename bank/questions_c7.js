const QUESTIONS_C7 = [
// ============ KHUNG DATA GOVERNANCE THEO AI ACT ============
{id:"c7-q1", chapter:7, difficulty:1, type:"single",
 question:"Đạo luật AI Act chính thức được áp dụng toàn diện từ năm nào?",
 options:["Năm 2024","Năm 2025","Năm 2026","Năm 2027"], correct:[2]},

{id:"c7-q2", chapter:7, difficulty:1, type:"single",
 question:"AI Act phân cấp các hệ thống AI thành bao nhiêu mức độ rủi ro nhằm bảo vệ người dùng?",
 options:["3 mức độ","4 mức độ","5 mức độ","2 mức độ"], correct:[1]},

{id:"c7-q3", chapter:7, difficulty:1, type:"multiple",
 question:"Ba trụ cột bắt buộc của khung Data Governance theo tiêu chuẩn AI Act gồm những gì? (chọn nhiều đáp án)",
 options:["Kiểm soát tính minh bạch (Transparency)","Tối đa hóa lợi nhuận từ dữ liệu khách hàng","Giám sát tối đa yếu tố con người (Human Oversight)","Đảm bảo chất lượng dữ liệu huấn luyện (Data Quality)"], correct:[0,2,3]},

{id:"c7-q4", chapter:7, difficulty:1, type:"single",
 question:"Theo AI Act, các hệ thống AI thuộc mức Unacceptable Risk sẽ bị xử lý như thế nào?",
 options:["Bị cấm hoàn toàn","Được kiểm soát nghiêm ngặt nhưng vẫn vận hành","Chỉ cần dán nhãn rõ ràng","Được tự do vận hành"], correct:[0]},

{id:"c7-q5", chapter:7, difficulty:1, type:"single",
 question:"Hệ thống chấm điểm công dân xã hội (Social Scoring) thuộc mức rủi ro nào theo AI Act?",
 options:["Minimal Risk","High Risk","Transparent/Limited Risk","Unacceptable Risk"], correct:[3]},

{id:"c7-q6", chapter:7, difficulty:2, type:"single",
 question:"Theo AI Act, hệ thống AI trong Fintech dùng để đánh giá điểm tín dụng khách hàng được xếp vào mức rủi ro nào?",
 options:["Unacceptable Risk","High Risk","Limited Risk","Minimal Risk"], correct:[1]},

{id:"c7-q7", chapter:7, difficulty:1, type:"single",
 question:"Theo AI Act, Chatbots là ví dụ điển hình thuộc mức rủi ro nào?",
 options:["Unacceptable Risk","High Risk","Transparent/Limited Risk","Minimal Risk"], correct:[2]},

{id:"c7-q8", chapter:7, difficulty:1, type:"single",
 question:"Theo AI Act, bộ lọc Spam được xếp vào mức rủi ro nào?",
 options:["Minimal Risk – tự do vận hành","High Risk – kiểm soát nghiêm ngặt","Limited Risk – dán nhãn rõ ràng","Unacceptable Risk – cấm hoàn toàn"], correct:[0]},

{id:"c7-q9", chapter:7, difficulty:2, type:"single",
 question:"Yêu cầu bắt buộc đối với các hệ thống AI thuộc mức Transparent/Limited Risk theo AI Act là gì?",
 options:["Cấm hoàn toàn không được triển khai","Phải có giấy phép của cơ quan tư pháp","Phải mã hóa toàn bộ dữ liệu đầu vào","Phải dán nhãn rõ ràng cho người dùng"], correct:[3]},

{id:"c7-q10", chapter:7, difficulty:2, type:"multiple",
 question:"Những hệ thống nào sau đây là ví dụ của mức High Risk theo AI Act? (chọn nhiều đáp án)",
 options:["AI đánh giá điểm tín dụng trong Fintech","Bộ lọc Spam trong email","AI hỗ trợ tuyển dụng nhân sự","AI quản trị cơ sở hạ tầng thiết yếu"], correct:[0,2,3]},

{id:"c7-q11", chapter:7, difficulty:2, type:"multiple",
 question:"Nghĩa vụ về Data Quality đối với hệ thống AI rủi ro cao yêu cầu bộ dữ liệu huấn luyện, kiểm thử phải đáp ứng những tiêu chí nào? (chọn nhiều đáp án)",
 options:["Không chứa sai sót hệ thống","Có tính đại diện","Kiểm soát được định kiến (Bias)","Chỉ cần có dung lượng đủ lớn"], correct:[0,1,2]},

{id:"c7-q12", chapter:7, difficulty:2, type:"single",
 question:"Nghĩa vụ Technical Documentation đối với hệ thống AI rủi ro cao yêu cầu doanh nghiệp phải làm gì?",
 options:["Xóa toàn bộ tài liệu kỹ thuật sau khi triển khai","Lưu trữ toàn bộ kiến trúc hệ thống và luồng dữ liệu để phục vụ thanh tra bất cứ lúc nào","Chỉ lưu tài liệu hướng dẫn sử dụng cho người dùng cuối","Công khai mã nguồn của mô hình AI lên Internet"], correct:[1]},

{id:"c7-q13", chapter:7, difficulty:2, type:"single",
 question:"Nghĩa vụ Traceability đối với hệ thống AI rủi ro cao theo AI Act yêu cầu điều gì?",
 options:["Hệ thống phải chạy hoàn toàn trên máy chủ nội bộ","Hệ thống phải xóa nhật ký định kỳ để tiết kiệm lưu trữ","Hệ thống phải tự động ghi nhật ký để theo dõi và kiểm toán toàn bộ vòng đời vận hành","Hệ thống phải thuê kiểm toán viên bên ngoài hàng tuần"], correct:[2]},

{id:"c7-q14", chapter:7, difficulty:3, type:"single",
 question:"Một công ty phát triển hệ thống AI thao túng hành vi người dùng dưới ngưỡng nhận thức để thúc đẩy mua sắm. Theo AI Act, hệ thống này thuộc mức rủi ro nào?",
 options:["Unacceptable Risk – bị cấm hoàn toàn","High Risk – kiểm soát nghiêm ngặt","Limited Risk – yêu cầu dán nhãn","Minimal Risk – tự do vận hành"], correct:[0]},

{id:"c7-q15", chapter:7, difficulty:3, type:"single",
 question:"Một doanh nghiệp triển khai AI tự động sàng lọc hồ sơ ứng viên để quyết định ai được vào vòng phỏng vấn. Theo AI Act, hệ thống này được phân loại vào mức nào?",
 options:["Minimal Risk vì chỉ là công cụ nội bộ","Unacceptable Risk vì liên quan đến con người","Limited Risk vì chỉ cần dán nhãn","High Risk vì thuộc lĩnh vực tuyển dụng nhân sự"], correct:[3]},

{id:"c7-q16", chapter:7, difficulty:3, type:"single",
 question:"Một hệ thống tạo ảnh Deepfake phục vụ giải trí được phát hành ra công chúng. Theo AI Act, hệ thống này thuộc mức rủi ro nào và nghĩa vụ kèm theo là gì?",
 options:["Unacceptable Risk – phải gỡ bỏ ngay","Transparent/Limited Risk – phải dán nhãn rõ ràng","High Risk – phải nộp Technical Documentation","Minimal Risk – không có nghĩa vụ gì"], correct:[1]},

{id:"c7-q17", chapter:7, difficulty:3, type:"single",
 question:"Một studio dùng AI để điều khiển nhân vật trong trò chơi điện tử. Theo AI Act, hệ thống này thuộc mức rủi ro nào?",
 options:["High Risk vì ảnh hưởng đến trẻ em","Limited Risk vì phải dán nhãn AI","Minimal Risk – được tự do vận hành","Unacceptable Risk vì thao túng hành vi"], correct:[2]},

{id:"c7-q18", chapter:7, difficulty:3, type:"single",
 question:"Một hệ thống AI được dùng để quản trị vận hành lưới điện quốc gia (cơ sở hạ tầng thiết yếu). Theo AI Act, hệ thống này thuộc mức rủi ro nào?",
 options:["High Risk – kiểm soát nghiêm ngặt","Minimal Risk – tự do vận hành","Unacceptable Risk – cấm hoàn toàn","Limited Risk – chỉ cần dán nhãn"], correct:[0]},

{id:"c7-q19", chapter:7, difficulty:2, type:"single",
 question:"Theo yêu cầu cốt lõi của AI Act, các doanh nghiệp thuộc khối MIS & Fintech bắt buộc phải thiết lập hệ thống quản trị dữ liệu nghiêm ngặt trong phạm vi nào?",
 options:["Chỉ ở khâu huấn luyện mô hình AI","Chỉ ở khâu lưu trữ dữ liệu","Chỉ ở khâu báo cáo cuối kỳ","Từ khâu nạp dữ liệu (Ingestion) đến khâu vận hành"], correct:[3]},

{id:"c7-q20", chapter:7, difficulty:3, type:"multiple",
 question:"Một ngân hàng vận hành hệ thống AI chấm điểm tín dụng (High Risk). Theo AI Act, ngân hàng phải tuân thủ những nghĩa vụ nào? (chọn nhiều đáp án)",
 options:["Data Quality: dữ liệu huấn luyện đại diện, không sai sót hệ thống, kiểm soát Bias","Technical Documentation: lưu trữ toàn bộ kiến trúc hệ thống, luồng dữ liệu phục vụ thanh tra","Ngừng hoàn toàn hệ thống vì bị cấm tuyệt đối","Traceability: tự động ghi nhật ký để kiểm toán toàn bộ vòng đời vận hành"], correct:[0,1,3]},

// ============ AUTOMATED DATA LINEAGE ============
{id:"c7-q21", chapter:7, difficulty:1, type:"single",
 question:"Automated Data Lineage được định nghĩa là gì?",
 options:["Kỹ thuật nén dữ liệu để giảm chi phí lưu trữ","Khả năng quan sát và ghi nhận toàn diện flow của data từ nguồn gốc ban đầu, qua các bước biến đổi đến mô hình AI cuối cùng","Công cụ mã hóa dữ liệu nhạy cảm trong kho dữ liệu","Phương pháp sao lưu dữ liệu tự động theo lịch trình"], correct:[1]},

{id:"c7-q22", chapter:7, difficulty:1, type:"single",
 question:"Trong kiến trúc Medallion, tầng dữ liệu thô được gọi là gì?",
 options:["Bronze Layer","Silver Layer","Gold Layer","Platinum Layer"], correct:[0]},

{id:"c7-q23", chapter:7, difficulty:1, type:"single",
 question:"Trong kiến trúc Medallion, tầng làm sạch dữ liệu được gọi là gì?",
 options:["Bronze Layer","Gold Layer","Silver Layer","Raw Layer"], correct:[2]},

{id:"c7-q24", chapter:7, difficulty:1, type:"single",
 question:"Trong kiến trúc Medallion, tầng tính toán đặc trưng (Feature) được gọi là gì?",
 options:["Bronze Layer","Silver Layer","Staging Layer","Gold Layer"], correct:[3]},

{id:"c7-q25", chapter:7, difficulty:2, type:"single",
 question:"Automated Data Lineage theo dõi dữ liệu biến đổi tự động trong kiến trúc Medallion theo trình tự nào?",
 options:["Gold → Silver → Bronze","Bronze → Silver → Gold","Silver → Bronze → Gold","Bronze → Gold → Silver"], correct:[1]},

{id:"c7-q26", chapter:7, difficulty:2, type:"single",
 question:"Giá trị cốt lõi của Automated Data Lineage là giúp kiểm toán viên và kỹ sư dữ liệu trả lời câu hỏi nào?",
 options:["“Mô hình AI lấy dữ liệu từ đâu, bị biến đổi bởi câu lệnh SQL nào?”","“Mô hình AI có lợi nhuận bao nhiêu mỗi quý?”","“Máy chủ nào đang tiêu thụ nhiều điện năng nhất?”","“Nhân viên nào làm việc hiệu quả nhất trong tháng?”"], correct:[0]},

{id:"c7-q27", chapter:7, difficulty:1, type:"multiple",
 question:"Trong luồng quan sát 360 độ của Data Pipeline, bước Data Source ghi nhận siêu dữ liệu (Metadata) từ những nguồn nào? (chọn nhiều đáp án)",
 options:["CRM","ERP","Web Logs","Loss Function"], correct:[0,1,2]},

{id:"c7-q28", chapter:7, difficulty:2, type:"single",
 question:"Trong luồng quan sát 360 độ, bước Transformation trích xuất mã SQL từ các công cụ biên dịch nào để xem logic làm sạch?",
 options:["Excel hoặc Word","Photoshop hoặc Illustrator","dbt hoặc Spark","CRM hoặc ERP"], correct:[2]},

{id:"c7-q29", chapter:7, difficulty:2, type:"multiple",
 question:"Bước Data Quality Check trong luồng quan sát 360 độ ghi nhận những bài test dữ liệu nào? (chọn nhiều đáp án)",
 options:["Kiểm tra đúng định dạng","Đo lường lợi nhuận của mô hình","Kiểm tra không Null","Kiểm tra trùng lặp"], correct:[0,2,3]},

{id:"c7-q30", chapter:7, difficulty:2, type:"single",
 question:"Trong luồng quan sát 360 độ, bước AI Consumption thực hiện điều gì?",
 options:["Xóa các đặc trưng dữ liệu không dùng đến","Mã hóa kết quả dự báo trước khi lưu trữ","Sao chép dữ liệu sang hệ thống đối tác","Kết nối trực tiếp đặc trưng dữ liệu với kết quả dự báo của mô hình Machine Learning"], correct:[3]},

{id:"c7-q31", chapter:7, difficulty:2, type:"single",
 question:"Trong Automated Data Lineage, chức năng Impact Analysis hoạt động như thế nào?",
 options:["Khi một bảng ở tầng Bronze thay đổi cấu trúc (Schema), hệ thống tự động cảnh báo các model AI ở tầng Gold sẽ bị ảnh hưởng","Tự động xóa các bảng dữ liệu không còn được sử dụng","Đo lường tác động tài chính của mỗi truy vấn SQL","Tự động huấn luyện lại mô hình AI khi có dữ liệu mới"], correct:[0]},

{id:"c7-q32", chapter:7, difficulty:1, type:"single",
 question:"Automated Data Lineage giúp giảm bao nhiêu phần trăm thời gian rà soát mã nguồn thủ công khi mô hình AI trả về kết quả sai lệch?",
 options:["50%","70%","90%","100%"], correct:[2]},

{id:"c7-q33", chapter:7, difficulty:2, type:"single",
 question:"Khái niệm Data Trust trong Automated Data Lineage nghĩa là gì?",
 options:["Người dùng phải ký cam kết bảo mật trước khi truy cập dữ liệu","Một Pipeline tốt phải chứng minh được tính nguyên bản và sạch của dữ liệu trước khi đưa vào mô hình học máy","Dữ liệu chỉ được tin cậy khi do lãnh đạo phê duyệt","Mọi dữ liệu đều phải mã hóa hai lớp"], correct:[1]},

{id:"c7-q34", chapter:7, difficulty:3, type:"multiple",
 question:"Luồng quan sát 360 độ trong Data Pipeline của Automated Data Lineage bao gồm những bước nào sau đây? (chọn nhiều đáp án)",
 options:["Data Source: ghi nhận metadata từ CRM, ERP, Web Logs","Transformation: trích xuất mã SQL từ dbt hoặc Spark","Revoke Access: thu hồi quyền truy cập của đối tác","AI Consumption: kết nối đặc trưng dữ liệu với kết quả dự báo"], correct:[0,1,3]},

{id:"c7-q35", chapter:7, difficulty:3, type:"single",
 question:"Một bảng ở tầng Bronze vừa bị thay đổi Schema và vài ngày sau mô hình AI ở tầng Gold cho kết quả sai lệch. Cơ chế nào của Automated Data Lineage lẽ ra đã giúp đội dữ liệu phát hiện sớm vấn đề này?",
 options:["Semantic Search trong Data Catalog","Column-level Masking","Differential Privacy","Impact Analysis tự động cảnh báo các model AI ở tầng Gold bị ảnh hưởng"], correct:[3]},

// ============ FINE-GRAINED SECURITY: RLS & CLM ============
{id:"c7-q36", chapter:7, difficulty:1, type:"single",
 question:"Cơ chế hoạt động của Row-level Security (RLS) là gì?",
 options:["Mã hóa toàn bộ bảng dữ liệu bằng một khóa duy nhất","Xóa các dòng dữ liệu nhạy cảm khỏi bảng","Bộ lọc động dựa trên danh tính người truy cập (User Context)","Che một phần giá trị trong cột dữ liệu nhạy cảm"], correct:[2]},

{id:"c7-q37", chapter:7, difficulty:1, type:"single",
 question:"Ví dụ nào sau đây minh họa đúng cho Row-level Security (RLS)?",
 options:["Nhân viên vùng A chỉ được xem dữ liệu khách hàng vùng A; cấp quản lý được xem toàn bộ","Số điện thoại hiển thị dạng 091xxxx888","Dữ liệu tuổi 23 được nhóm thành khoảng 20-30 tuổi","Đối tác truy cập dữ liệu qua metadata mà không sao chép"], correct:[0]},

{id:"c7-q38", chapter:7, difficulty:1, type:"single",
 question:"Cơ chế của Column-level Masking (CLM) là gì?",
 options:["Lọc các dòng dữ liệu theo vùng địa lý của người dùng","Ẩn hoặc mã hóa một phần dữ liệu nhạy cảm (PII) mà không làm thay đổi cấu trúc bảng","Xóa hoàn toàn cột dữ liệu nhạy cảm khỏi bảng","Sao chép bảng sang một schema riêng cho từng phòng ban"], correct:[1]},

{id:"c7-q39", chapter:7, difficulty:1, type:"single",
 question:"Số điện thoại hiển thị dưới dạng 091xxxx888 là ví dụ của kỹ thuật nào?",
 options:["Row-level Security (RLS)","Differential Privacy","Zero-copy Data Sharing","Column-level Masking (CLM)"], correct:[3]},

{id:"c7-q40", chapter:7, difficulty:3, type:"single",
 question:"Điểm khác biệt cốt lõi giữa Row-level Security (RLS) và Column-level Masking (CLM) là gì?",
 options:["RLS mã hóa dữ liệu còn CLM nén dữ liệu","RLS chỉ dùng cho Cloud còn CLM chỉ dùng cho On-premise","RLS lọc động các dòng dữ liệu theo danh tính người truy cập, còn CLM ẩn/mã hóa một phần dữ liệu nhạy cảm ở cấp cột mà không đổi cấu trúc bảng","RLS làm thay đổi cấu trúc bảng, còn CLM xóa hẳn các dòng dữ liệu"], correct:[2]},

{id:"c7-q41", chapter:7, difficulty:3, type:"single",
 question:"Một ngân hàng muốn nhân viên chi nhánh Hà Nội chỉ nhìn thấy các khách hàng thuộc chi nhánh Hà Nội khi truy vấn cùng một bảng dữ liệu. Kỹ thuật phù hợp nhất là gì?",
 options:["Row-level Security (RLS) với bộ lọc động theo User Context","Column-level Masking (CLM) che cột tên khách hàng","K-Anonymity với Generalization","Differential Privacy với Epsilon thấp"], correct:[0]},

{id:"c7-q42", chapter:7, difficulty:3, type:"single",
 question:"Bộ phận chăm sóc khách hàng cần xem danh sách đơn hàng nhưng không được thấy đầy đủ số điện thoại khách (chỉ thấy dạng 091xxxx888), trong khi cấu trúc bảng phải giữ nguyên. Kỹ thuật phù hợp nhất là gì?",
 options:["Row-level Security (RLS)","Column-level Masking (CLM)","Suppression – xóa dòng dữ liệu","Zero-copy Data Sharing"], correct:[1]},

{id:"c7-q43", chapter:7, difficulty:3, type:"single",
 question:"Công ty yêu cầu: nhân viên vùng A chỉ xem được khách hàng vùng A, đồng thời cột số CMND/PII phải bị che một phần với mọi nhân viên. Giải pháp đúng là gì?",
 options:["Chỉ cần RLS vì đã lọc theo vùng","Chỉ cần CLM vì đã che PII","Dùng Differential Privacy thay cho cả hai","Kết hợp cả RLS (lọc dòng theo vùng) và CLM (che cột PII)"], correct:[3]},

{id:"c7-q44", chapter:7, difficulty:2, type:"single",
 question:"Theo Case Study về trade-off giữa bảo mật và hiệu năng, khi mã hóa các bảng dữ liệu lớn (Large Tabular Data), hệ thống thường gặp vấn đề gì?",
 options:["Hệ thống bị chậm, độ trễ truy vấn cao","Dữ liệu tự động bị xóa sau khi mã hóa","Cấu trúc bảng bị thay đổi hoàn toàn","Chi phí lưu trữ giảm mạnh"], correct:[0]},

{id:"c7-q45", chapter:7, difficulty:2, type:"single",
 question:"Nghiên cứu được tham chiếu trong bài giảng về tối ưu hóa hiệu năng mã hóa/giải mã dữ liệu dạng bảng có tên là gì?",
 options:["“Improving Data Quality in Data Warehouses”","“Zero-copy Data Sharing in Cloud Computing”","“Enhancing the Time Performance of Encrypting and Decrypting Large Tabular Data”","“Differential Privacy for Machine Learning”"], correct:[2]},

{id:"c7-q46", chapter:7, difficulty:2, type:"single",
 question:"Bài học cho MIS từ trade-off giữa bảo mật và hiệu năng là gì?",
 options:["Nên bỏ mã hóa để hệ thống chạy nhanh nhất","Bảo mật dữ liệu không được phép đánh đổi bằng hiệu năng vận hành thời gian thực của hệ thống thông tin doanh nghiệp","Hiệu năng luôn quan trọng hơn bảo mật trong mọi tình huống","Chỉ mã hóa dữ liệu vào cuối tuần khi ít người dùng"], correct:[1]},

{id:"c7-q47", chapter:7, difficulty:2, type:"multiple",
 question:"Những phát biểu nào đúng về Column-level Masking (CLM)? (chọn nhiều đáp án)",
 options:["Ẩn hoặc mã hóa một phần dữ liệu nhạy cảm (PII)","Xóa hẳn dòng dữ liệu của cá nhân dị biệt","Không làm thay đổi cấu trúc bảng","Lọc các dòng dữ liệu theo vùng của người truy cập"], correct:[0,2]},

{id:"c7-q48", chapter:7, difficulty:3, type:"single",
 question:"Giải pháp nghiên cứu được đề cập cho bài toán mã hóa bảng dữ liệu lớn bị chậm hướng tới mục tiêu gì?",
 options:["Giảm số cột trong bảng để mã hóa nhanh hơn","Chuyển toàn bộ dữ liệu về dạng văn bản thuần","Bỏ qua bước giải mã khi phân tích dữ liệu","Tối ưu hóa hiệu năng thời gian (Time Performance) của quá trình mã hóa/giải mã cấu trúc dữ liệu dạng bảng"], correct:[3]},

// ============ SECURE DATA SHARING ============
{id:"c7-q49", chapter:7, difficulty:1, type:"single",
 question:"Mô hình chia sẻ dữ liệu truyền thống giữa các tổ chức được thực hiện bằng cách nào?",
 options:["Truy cập trực tiếp qua metadata trên Cloud","Sao chép file dữ liệu ra bên ngoài qua ETL/FTP","Cấp quyền IAM tập trung cho đối tác","Chia sẻ màn hình khi họp trực tuyến"], correct:[1]},

{id:"c7-q50", chapter:7, difficulty:1, type:"multiple",
 question:"Mô hình chia sẻ dữ liệu truyền thống (ETL/FTP) có những nhược điểm nào? (chọn nhiều đáp án)",
 options:["Tốn dung lượng lưu trữ","Nguy cơ lộ bí mật dữ liệu từ các bản sao rất cao","Dữ liệu luôn được cập nhật thời gian thực","Quyền truy cập được kiểm soát tập trung bằng IAM"], correct:[0,1]},

{id:"c7-q51", chapter:7, difficulty:1, type:"multiple",
 question:"Những nền tảng nào được nêu làm ví dụ cho mô hình Zero-copy Data Sharing? (chọn nhiều đáp án)",
 options:["BigQuery","FTP Server","Snowflake","dbt"], correct:[0,2]},

{id:"c7-q52", chapter:7, difficulty:2, type:"single",
 question:"Mô hình Zero-copy Data Sharing cho phép nhiều hệ thống hoặc người dùng cùng truy cập, truy vấn và phân tích dữ liệu tại một nguồn duy nhất thông qua cái gì?",
 options:["Metadata","Bản sao dữ liệu định kỳ","Email đính kèm file","Ổ cứng vật lý chuyển giao"], correct:[0]},

{id:"c7-q53", chapter:7, difficulty:2, type:"single",
 question:"Trong cơ chế hoạt động của Zero-copy Data Sharing, đối tác truy cập dữ liệu như thế nào?",
 options:["Tải toàn bộ dữ liệu về máy chủ riêng để phân tích","Nhận bản sao dữ liệu qua FTP hàng đêm","Xem dữ liệu tại chỗ, không cần sao chép bất kỳ byte dữ liệu nào","Chụp ảnh màn hình các báo cáo từ tổ chức chủ quản"], correct:[2]},

{id:"c7-q54", chapter:7, difficulty:2, type:"multiple",
 question:"Triết lý quản trị của kiến trúc Zero-copy Data Sharing phát biểu rằng dữ liệu là tài sản như thế nào? (chọn nhiều đáp án)",
 options:["Duy nhất tăng giá trị khi được chia sẻ đúng cách","Rủi ro nhất khi bị nhân bản hàng loạt","Tăng giá trị khi được sao chép ra càng nhiều nơi càng tốt","An toàn nhất khi gửi qua FTP định kỳ"], correct:[0,1]},

{id:"c7-q55", chapter:7, difficulty:1, type:"single",
 question:"Trong Zero-copy Data Sharing, khi dừng hợp tác, tổ chức chủ quản cần làm gì để đối tác không còn nhìn thấy dữ liệu?",
 options:["Yêu cầu đối tác tự giác xóa các file đã nhận","Đổi tên toàn bộ các bảng dữ liệu","Chuyển dữ liệu sang máy chủ khác","Revoke access trên Cloud – đối tác lập tức mất quyền xem dữ liệu"], correct:[3]},

{id:"c7-q56", chapter:7, difficulty:3, type:"single",
 question:"So sánh theo tiêu chí Thời gian (Độ trễ): ETL truyền thống và Secure Data Sharing (Zero-copy) khác nhau như thế nào?",
 options:["Cả hai đều là thời gian thực","ETL truyền thống bị trễ (Batch/Schedule), còn Zero-copy là thời gian thực (Live)","ETL truyền thống là thời gian thực, còn Zero-copy bị trễ theo lịch","Cả hai đều bị trễ theo lô như nhau"], correct:[1]},

{id:"c7-q57", chapter:7, difficulty:2, type:"single",
 question:"Về tiêu chí Bảo mật & Quản trị, Secure Data Sharing (Zero-copy) có ưu điểm gì so với ETL truyền thống?",
 options:["Không cần bất kỳ cơ chế phân quyền nào","Dữ liệu được in ra giấy để lưu trữ an toàn","Kiểm soát quyền tập trung bằng chính sách IAM trên Cloud","Mỗi đối tác giữ một bản sao riêng để tự bảo vệ"], correct:[2]},

{id:"c7-q58", chapter:7, difficulty:3, type:"single",
 question:"Về tiêu chí Chi phí hạ tầng, ETL truyền thống có nhược điểm gì so với Zero-copy Data Sharing?",
 options:["Tốn gấp đôi tài nguyên do nhân bản chi phí lưu trữ và tính toán","Chi phí bằng không vì dùng công cụ mã nguồn mở","Chỉ tốn chi phí băng thông mạng","Chi phí thấp hơn Zero-copy vì không dùng Cloud"], correct:[0]},

{id:"c7-q59", chapter:7, difficulty:3, type:"single",
 question:"Một ngân hàng chia sẻ dữ liệu giao dịch cho công ty Fintech đối tác và lo ngại việc mất kiểm soát dữ liệu sau khi kết thúc hợp đồng. Vì sao Zero-copy Data Sharing là lựa chọn phù hợp nhất?",
 options:["Vì dữ liệu sẽ tự hủy sau 30 ngày trong mọi trường hợp","Vì đối tác chỉ nhận được dữ liệu đã mã hóa vĩnh viễn","Vì hợp đồng pháp lý sẽ thay thế hoàn toàn biện pháp kỹ thuật","Vì chỉ cần Revoke access trên Cloud là đối tác lập tức không còn nhìn thấy bất kỳ dữ liệu nào"], correct:[3]},

{id:"c7-q60", chapter:7, difficulty:2, type:"single",
 question:"Bias Reporting Dashboard trong báo cáo tuân thủ dữ liệu có chức năng gì?",
 options:["Ghi nhận ai đã tạo, sửa, xóa dữ liệu","Báo cáo định kỳ tự động đo lường Fairness Metrics của các mô hình AI đang thực thi thực tế trên hệ thống","Theo dõi mức hao hụt ngân sách Epsilon","Tìm kiếm bảng dữ liệu bằng ngôn ngữ tự nhiên"], correct:[1]},

{id:"c7-q61", chapter:7, difficulty:3, type:"multiple",
 question:"Những ưu điểm nào sau đây thuộc về mô hình Secure Data Sharing (Zero-copy) khi so sánh với ETL truyền thống? (chọn nhiều đáp án)",
 options:["Tối ưu chi phí: dùng chung không gian lưu trữ gốc, không sinh bản sao","Kiểm soát quyền tập trung bằng chính sách IAM trên Cloud","Truy cập dữ liệu thời gian thực (Live)","Bắt buộc sao chép dữ liệu sang kho của đối tác"], correct:[0,1,2]},

{id:"c7-q62", chapter:7, difficulty:3, type:"single",
 question:"Một công ty đang gửi file dữ liệu cho đối tác qua FTP theo lịch hàng đêm. Xét đủ 3 tiêu chí (độ trễ, bảo mật, chi phí), mô hình này có những hạn chế gì so với Zero-copy?",
 options:["Chỉ có hạn chế duy nhất là tốc độ đường truyền","Không có hạn chế nào nếu file được đặt mật khẩu","Dữ liệu bị trễ theo lô, rủi ro lộ lọt cao từ các file bản sao lưu lạc, và tốn gấp đôi tài nguyên lưu trữ/tính toán","Chỉ tốn chi phí nhưng bảo mật tốt hơn Zero-copy"], correct:[2]},

// ============ ANONYMIZATION & DIFFERENTIAL PRIVACY ============
{id:"c7-q63", chapter:7, difficulty:1, type:"single",
 question:"Triết lý của Differential Privacy là gì?",
 options:["Kết quả phân tích của AI sẽ gần như không thay đổi dù có hay không có dữ liệu của một cá nhân, nên hacker không thể “dịch ngược” báo cáo để định danh bất kỳ ai","Mọi dữ liệu cá nhân phải bị xóa hoàn toàn trước khi phân tích","Chỉ nhà quản trị cấp cao mới được xem kết quả phân tích","Dữ liệu phải được mã hóa hai lớp trước khi chia sẻ"], correct:[0]},

{id:"c7-q64", chapter:7, difficulty:1, type:"single",
 question:"Cơ chế cốt lõi của Differential Privacy hoạt động như thế nào?",
 options:["Xóa các dòng dữ liệu của cá nhân dị biệt","Che một phần giá trị của cột nhạy cảm","Lọc các dòng dữ liệu theo danh tính người truy cập","Chủ động trộn thêm các sai số ngẫu nhiên (bơm “nhiễu”) để hòa lẫn thông tin cá nhân vào cộng đồng"], correct:[3]},

{id:"c7-q65", chapter:7, difficulty:1, type:"single",
 question:"Trong Differential Privacy, mức Epsilon được gọi là gì?",
 options:["Hệ số nén dữ liệu","Ngân sách quyền riêng tư – kiểm soát và đo lường sự đánh đổi giữa mức độ an toàn thông tin và giá trị phân tích kinh doanh","Tốc độ truy vấn tối đa của hệ thống","Số lượng bản sao dữ liệu được phép tạo"], correct:[1]},

{id:"c7-q66", chapter:7, difficulty:2, type:"multiple",
 question:"Theo quy luật trade-off của Differential Privacy, việc đưa Epsilon xuống thấp dẫn đến những hệ quả nào? (chọn nhiều đáp án)",
 options:["Bảo mật đạt mức tối đa","Độ chính xác của kết quả phân tích giảm","Báo cáo kinh doanh trở nên chính xác hơn","Rủi ro lộ danh tính tăng cao"], correct:[0,1]},

{id:"c7-q67", chapter:7, difficulty:3, type:"single",
 question:"Theo quy luật trade-off của Differential Privacy, việc đưa Epsilon lên cao sẽ dẫn đến điều gì?",
 options:["Bảo mật tối đa nhưng báo cáo kém chính xác","Cả bảo mật và độ chính xác cùng đạt tối đa","Báo cáo tốt (chính xác cao) nhưng rủi ro về bảo mật danh tính","Hệ thống ngừng bơm nhiễu hoàn toàn và bị cấm vận hành"], correct:[2]},

{id:"c7-q68", chapter:7, difficulty:3, type:"single",
 question:"Một bệnh viện công bố thống kê về bệnh nhân HIV – dữ liệu cực kỳ nhạy cảm, ưu tiên tuyệt đối là không ai bị định danh lại, chấp nhận số liệu kém chính xác hơn. Nhà quản trị nên cấu hình Epsilon như thế nào?",
 options:["Epsilon thấp – bảo mật tối đa, chấp nhận giảm độ chính xác của phân tích","Epsilon cao – để báo cáo chính xác nhất","Epsilon bằng vô cùng – bỏ hoàn toàn nhiễu","Không dùng Epsilon vì dữ liệu y tế được miễn trừ"], correct:[0]},

{id:"c7-q69", chapter:7, difficulty:3, type:"single",
 question:"Một đội marketing phân tích xu hướng mua sắm tổng hợp (ít nhạy cảm) và cần báo cáo có độ chính xác cao để ra quyết định kinh doanh. Theo trade-off của Differential Privacy, lựa chọn hợp lý là gì?",
 options:["Epsilon thấp nhất có thể để an toàn tuyệt đối","Không phân tích dữ liệu để tránh mọi rủi ro","Xóa toàn bộ dữ liệu sau mỗi lần phân tích","Chấp nhận Epsilon cao hơn để giữ độ chính xác, đổi lại rủi ro bảo mật danh tính tăng"], correct:[3]},

{id:"c7-q70", chapter:7, difficulty:1, type:"single",
 question:"Một tập dữ liệu đạt thuộc tính k-anonymity khi nào?",
 options:["Khi mọi cột nhạy cảm đều bị mã hóa k lần","Khi mọi cá nhân trong bảng không thể bị phân biệt với ít nhất k-1 cá nhân khác cũng nằm trong bảng đó","Khi bảng có đúng k dòng dữ liệu","Khi có k người cùng được cấp quyền truy cập bảng"], correct:[1]},

{id:"c7-q71", chapter:7, difficulty:1, type:"multiple",
 question:"Những thuộc tính nào sau đây là ví dụ về Quasi-identifiers – các cột đơn lẻ không nhạy cảm nhưng kết hợp lại có thể giúp hacker Re-identification? (chọn nhiều đáp án)",
 options:["Tuổi","Giới tính","Mật khẩu đăng nhập","Khóa mã hóa riêng tư"], correct:[0,1]},

{id:"c7-q72", chapter:7, difficulty:2, type:"single",
 question:"Kỹ thuật Generalization trong K-Anonymity được minh họa đúng bởi ví dụ nào?",
 options:["Xóa hẳn dòng dữ liệu của cá nhân dị biệt","Hiển thị số điện thoại dạng 091xxxx888","Biến số cụ thể thành khoảng: 23 tuổi được nhóm thành 20-30 tuổi","Trộn sai số ngẫu nhiên vào kết quả thống kê"], correct:[2]},

{id:"c7-q73", chapter:7, difficulty:2, type:"single",
 question:"Kỹ thuật Suppression trong K-Anonymity là gì?",
 options:["Xóa hẳn dòng dữ liệu của những cá nhân quá dị biệt để tránh bị lộ bí mật","Nén dữ liệu để giảm dung lượng lưu trữ","Chuyển giá trị cụ thể thành khoảng giá trị","Mã hóa cột nhạy cảm bằng thuật toán đối xứng"], correct:[0]},

{id:"c7-q74", chapter:7, difficulty:3, type:"single",
 question:"Trong một bảng dữ liệu đã ẩn danh, xét theo bộ Quasi-identifiers (tuổi, giới tính), mỗi bản ghi đều giống hệt với đúng 4 bản ghi khác trong bảng. Bảng này đạt k-anonymity với k bằng bao nhiêu?",
 options:["k = 4","k = 5","k = 3","k = 9"], correct:[1]},

{id:"c7-q75", chapter:7, difficulty:3, type:"single",
 question:"Một tập dữ liệu được tuyên bố đạt k-anonymity với k = 10. Điều này nghĩa là gì?",
 options:["Bảng chỉ chứa tối đa 10 dòng dữ liệu","Có 10 cột Quasi-identifiers trong bảng","Mọi cá nhân trong bảng không thể bị phân biệt với ít nhất 9 cá nhân khác cũng nằm trong bảng","Mỗi cá nhân xuất hiện đúng 10 lần trong 10 bảng khác nhau"], correct:[2]},

{id:"c7-q76", chapter:7, difficulty:3, type:"single",
 question:"Trong quá trình ẩn danh hóa, một bản ghi có tổ hợp Quasi-identifiers quá dị biệt, không nhóm được với bất kỳ bản ghi nào khác dù đã khái quát hóa. Theo K-Anonymity, cách xử lý phù hợp là gì?",
 options:["Giữ nguyên bản ghi vì dữ liệu nào cũng quý","Tăng Epsilon để bảo vệ bản ghi đó","Sao chép bản ghi đó thành nhiều bản để tạo nhóm","Dùng Suppression – xóa hẳn dòng dữ liệu của cá nhân quá dị biệt để tránh lộ bí mật"], correct:[3]},

{id:"c7-q77", chapter:7, difficulty:2, type:"single",
 question:"Re-identification trong ngữ cảnh K-Anonymity là gì?",
 options:["Việc hacker kết hợp các Quasi-identifiers (tuổi, giới tính, …) để định danh lại danh tính khách hàng","Việc người dùng đăng nhập lại hệ thống sau khi hết phiên","Việc gắn nhãn lại các cột PII trong Data Catalog","Việc khôi phục dữ liệu từ bản sao lưu"], correct:[0]},

{id:"c7-q78", chapter:7, difficulty:2, type:"multiple",
 question:"Theo đồ thị Privacy Loss – Utility, khi siết chặt bảo mật bằng cách thêm quá nhiều độ nhiễu hoặc khái quát hóa quá mức (Epsilon tiến về 0), điều gì xảy ra? (chọn nhiều đáp án)",
 options:["Quyền riêng tư đạt tối đa","Tính hữu dụng của dữ liệu giảm mạnh","Mô hình AI dự báo không còn chính xác","Báo cáo kinh doanh trở nên chính xác hơn"], correct:[0,1,2]},

{id:"c7-q79", chapter:7, difficulty:2, type:"single",
 question:"Theo đồ thị Privacy vs Utility, nhiệm vụ của nhà quản trị dữ liệu là gì?",
 options:["Luôn chọn mức bảo mật tối đa bất chấp độ chính xác","Luôn chọn mức hữu dụng tối đa bất chấp quyền riêng tư","Loại bỏ hoàn toàn khái niệm trade-off khỏi hệ thống","Tìm ra điểm Optimal Balance để vừa tuân thủ pháp luật bảo mật, vừa giữ đủ độ chính xác cho các thuật toán Data Science"], correct:[3]},

{id:"c7-q80", chapter:7, difficulty:3, type:"multiple",
 question:"Để đưa một bảng dữ liệu đạt thuộc tính k-anonymity, hai kỹ thuật xử lý chính nào được sử dụng? (chọn nhiều đáp án)",
 options:["Generalization – biến số cụ thể thành khoảng","Resampling – lấy mẫu lại để cân bằng nhóm","Suppression – xóa hẳn dòng dữ liệu quá dị biệt","Fairness Constraints – thêm ràng buộc vào Loss Function"], correct:[0,2]},

// ============ METADATA & AI DATA CATALOG ============
{id:"c7-q81", chapter:7, difficulty:1, type:"single",
 question:"Data Swamps là hiện tượng gì trong thực trạng doanh nghiệp?",
 options:["Dữ liệu bị mã hóa quá nhiều lớp khiến không giải mã được","Dữ liệu bị đối tác sao chép trái phép ra bên ngoài","Dữ liệu mở rộng quá nhanh khiến khó nhận biết dữ liệu sạch nằm ở nơi nào","Dữ liệu bị xóa nhầm do lỗi hệ thống sao lưu"], correct:[2]},

{id:"c7-q82", chapter:7, difficulty:1, type:"single",
 question:"Giải pháp cho vấn đề Data Swamps được đề cập trong chương là gì?",
 options:["Xóa bớt dữ liệu cũ mỗi quý","AI-driven Data Catalog tự động thu thập và phân loại Metadata từ toàn bộ hệ thống","Chuyển toàn bộ dữ liệu về giấy tờ vật lý","Cấm nhân viên tạo bảng dữ liệu mới"], correct:[1]},

{id:"c7-q83", chapter:7, difficulty:2, type:"multiple",
 question:"Tính năng tự động của AI Data Catalog có thể quét các thuộc tính mới tạo ra và nhận diện đâu là cột chứa dữ liệu PII để tự động gắn nhãn phân quyền bảo mật. Những loại cột nào được nêu làm ví dụ? (chọn nhiều đáp án)",
 options:["Cột chứa email","Cột chứa số thẻ tín dụng","Cột kiểu dữ liệu INT64","Cột điểm Trust Score"], correct:[0,1]},

{id:"c7-q84", chapter:7, difficulty:1, type:"single",
 question:"Thành phần Semantic Search của AI Data Catalog cho phép chuyên viên phân tích làm gì?",
 options:["Dùng ngôn ngữ tự nhiên để tìm bảng dữ liệu (ví dụ nhập: “Tìm bảng chứa doanh thu 2 năm trước” và AI tự tìm ra bảng đúng)","Viết câu lệnh SQL phức tạp nhanh gấp đôi","Mã hóa các bảng dữ liệu bằng giọng nói","Tự động xóa các bảng dữ liệu trùng lặp"], correct:[0]},

{id:"c7-q85", chapter:7, difficulty:2, type:"single",
 question:"Thành phần Data Lineage Integration trong AI Data Catalog có chức năng gì?",
 options:["Tự động dịch tài liệu kỹ thuật sang nhiều ngôn ngữ","Chấm điểm hiệu suất của các kỹ sư dữ liệu","Sao chép sơ đồ dữ liệu sang hệ thống đối tác","Tích hợp trực tiếp sơ đồ truy vết luồng dữ liệu vào trang mô tả tài sản dữ liệu"], correct:[3]},

{id:"c7-q86", chapter:7, difficulty:2, type:"single",
 question:"Privacy Audit Trail trong báo cáo tuân thủ dữ liệu theo dõi điều gì?",
 options:["Số lần đăng nhập sai của nhân viên","Mức độ hao hụt ngân sách quyền riêng tư (Epsilon privacy budget loss) của doanh nghiệp theo thời gian","Danh sách các bảng có Trust Score thấp","Tần suất cập nhật dữ liệu (Freshness) của các bảng"], correct:[1]},

{id:"c7-q87", chapter:7, difficulty:2, type:"multiple",
 question:"Trust Score trong AI Data Catalog đánh giá chất lượng bảng dữ liệu dựa trên những yếu tố nào? (chọn nhiều đáp án)",
 options:["Tần suất sử dụng","Lịch sử kiểm định chất lượng tự động","Chức danh của người tạo bảng","Kích thước dung lượng của bảng"], correct:[0,1]},

{id:"c7-q88", chapter:7, difficulty:1, type:"single",
 question:"Business Glossary do tầng nào định nghĩa để thống nhất khái niệm kinh doanh?",
 options:["Data Engineer Layer","Application Layer","Governance Layer","Network Layer"], correct:[2]},

{id:"c7-q89", chapter:7, difficulty:2, type:"single",
 question:"Theo ví dụ về Business Glossary, khái niệm Churn của ngân hàng được định nghĩa như thế nào?",
 options:["Khách hàng không phát sinh giao dịch trên 90 ngày","Khách hàng đóng tài khoản trong vòng 30 ngày","Khách hàng có số dư dưới mức tối thiểu","Khách hàng khiếu nại quá 3 lần trong một quý"], correct:[0]},

{id:"c7-q90", chapter:7, difficulty:2, type:"single",
 question:"Technical Metadata do ai quản lý?",
 options:["Ban giám đốc điều hành","Phòng nhân sự","Governance Layer","Data Engineer Layer"], correct:[3]},

{id:"c7-q91", chapter:7, difficulty:3, type:"single",
 question:"Phòng Marketing và phòng Tài chính của một ngân hàng đang tranh cãi vì mỗi bên hiểu “khách hàng rời bỏ (Churn)” theo một cách khác nhau. Thành phần nào giúp giải quyết vấn đề này?",
 options:["Technical Metadata – vì lưu kiểu dữ liệu INT64/FLOAT64","Business Glossary – do Governance Layer định nghĩa, đảm bảo mọi phòng ban thống nhất một ngôn ngữ chung","Trust Score – vì đánh giá chất lượng bảng","Row-level Security – vì phân quyền theo phòng ban"], correct:[1]},

{id:"c7-q92", chapter:7, difficulty:3, type:"multiple",
 question:"Technical Metadata lưu trữ những thông tin nào sau đây? (chọn nhiều đáp án)",
 options:["Kiểu dữ liệu (INT64, FLOAT64, …)","Sơ đồ cấu trúc bảng (Schema)","Tần suất cập nhật dữ liệu (Freshness) và chủ sở hữu kỹ thuật (Owner)","Định nghĩa kinh doanh: Churn là khách hàng không giao dịch trên 90 ngày"], correct:[0,1,2]},

// ============ ĐẠO ĐỨC DỮ LIỆU: BIAS & QUYỀN RIÊNG TƯ ============
{id:"c7-q93", chapter:7, difficulty:1, type:"single",
 question:"Bản chất của Bias (định kiến) trong AI là gì?",
 options:["AI tự sinh ra định kiến trong quá trình tính toán","Định kiến chỉ xuất hiện khi hacker tấn công mô hình","AI không tự sinh ra định kiến; định kiến nằm trong dữ liệu lịch sử của con người, AI học hành vi đó và khuếch đại nó ở quy mô lớn hơn","Định kiến chỉ tồn tại ở các mô hình mã nguồn mở"], correct:[2]},

{id:"c7-q94", chapter:7, difficulty:3, type:"single",
 question:"AI duyệt hồ sơ vay vốn tự động liên tục từ chối nhóm khách hàng thuộc một vùng địa lý nhất định. Theo bài giảng, nguyên nhân gốc rễ của hiện tượng này là gì?",
 options:["Dữ liệu quá khứ của nhóm khách hàng vùng này quá ít, thiếu tính đại diện","Thuật toán bị hacker chỉnh sửa tham số","Máy chủ đặt tại vùng địa lý khác nên xử lý chậm","AI cố tình phân biệt đối xử để tối đa hóa lợi nhuận"], correct:[0]},

{id:"c7-q95", chapter:7, difficulty:1, type:"multiple",
 question:"Kỹ thuật Pre-processing để khử bias tác động trực tiếp vào tập dữ liệu Gold trước khi học bằng những cách nào? (chọn nhiều đáp án)",
 options:["Lấy mẫu lại (Resampling)","Gán trọng số để cân bằng dữ liệu giữa các nhóm","Thêm Fairness Constraints vào Loss Function","Điều chỉnh Classification Threshold cho nhóm thiểu số"], correct:[0,1]},

{id:"c7-q96", chapter:7, difficulty:2, type:"single",
 question:"Kỹ thuật In-processing để khử bias được thực hiện như thế nào?",
 options:["Lấy mẫu lại dữ liệu trước khi huấn luyện","Điều chỉnh kết quả đầu ra sau khi mô hình dự báo","Xóa các cột nhạy cảm khỏi tập huấn luyện","Thay đổi thuật toán huấn luyện bằng cách thêm Fairness Constraints trực tiếp vào Loss Function"], correct:[3]},

{id:"c7-q97", chapter:7, difficulty:2, type:"single",
 question:"Kỹ thuật Post-processing để khử bias được thực hiện như thế nào?",
 options:["Gán trọng số cho dữ liệu trước khi học","Thay đổi kết quả đầu ra bằng cách điều chỉnh lại ngưỡng quyết định (Classification Threshold) tối ưu riêng cho từng nhóm đối tượng thiểu số","Thêm ràng buộc công bằng vào hàm mất mát","Thu thập thêm dữ liệu cho nhóm thiểu số"], correct:[1]},

{id:"c7-q98", chapter:7, difficulty:3, type:"single",
 question:"Một kỹ sư dữ liệu phát hiện nhóm khách hàng nữ chỉ chiếm 5% tập huấn luyện, nên đã dùng Resampling để cân bằng lại số mẫu giữa các nhóm trước khi đưa vào huấn luyện. Đây là kỹ thuật khử bias nào?",
 options:["In-processing","Post-processing","Pre-processing","Human-in-the-loop"], correct:[2]},

{id:"c7-q99", chapter:7, difficulty:3, type:"single",
 question:"Một nhóm Data Science sửa lại thuật toán huấn luyện, thêm ràng buộc công bằng (Fairness Constraints) trực tiếp vào Loss Function của mô hình. Đây là kỹ thuật khử bias nào?",
 options:["In-processing","Pre-processing","Post-processing","Suppression"], correct:[0]},

{id:"c7-q100", chapter:7, difficulty:3, type:"single",
 question:"Sau khi mô hình đã huấn luyện xong, đội vận hành điều chỉnh riêng ngưỡng phê duyệt (Classification Threshold) cho nhóm khách hàng thiểu số để kết quả đầu ra công bằng hơn. Đây là kỹ thuật khử bias nào?",
 options:["Pre-processing","In-processing","Generalization","Post-processing"], correct:[3]},

{id:"c7-q101", chapter:7, difficulty:2, type:"single",
 question:"Nguyên tắc cốt lõi của cơ chế Human-in-the-loop là gì?",
 options:["Con người chỉ can thiệp khi hệ thống AI bị sập","AI chỉ đóng vai trò hỗ trợ ra quyết định; quyết định cuối cùng ảnh hưởng đến quyền lợi công dân (bác đơn vay vốn, từ chối hồ sơ năng lực) bắt buộc phải có sự phê duyệt của con người","AI được toàn quyền quyết định để đảm bảo tính khách quan","Con người chỉ được xem báo cáo do AI tạo ra mỗi quý"], correct:[1]},

{id:"c7-q102", chapter:7, difficulty:2, type:"single",
 question:"Yêu cầu của Explainable AI theo bài giảng là gì?",
 options:["Mô hình phải chạy nhanh hơn con người phân tích","Mô hình phải được huấn luyện lại mỗi tuần","Mô hình AI không được phép là một chiếc hộp đen (Black-box); hệ thống phải giải trình được lý do của sự kiện theo ngữ cảnh","Mô hình chỉ được dùng dữ liệu công khai"], correct:[2]},

// ============ TỰ ĐỘNG AUDITING & BÁO CÁO TUÂN THỦ ============
{id:"c7-q103", chapter:7, difficulty:1, type:"multiple",
 question:"Mô hình Audit truyền thống (kiểm toán định kỳ bằng con người hàng quý/hàng năm) có những nhược điểm nào? (chọn nhiều đáp án)",
 options:["Chậm trễ","Tốn kém chi phí vận hành cao","Dễ bỏ sót lỗi hệ thống","Theo dõi hạ tầng dữ liệu 24/7"], correct:[0,1,2]},

{id:"c7-q104", chapter:7, difficulty:1, type:"multiple",
 question:"Mô hình Continuous Auditing ứng dụng AI mang lại những ưu điểm nào? (chọn nhiều đáp án)",
 options:["Giảm phần lớn chi phí vận hành cho doanh nghiệp","Phát hiện và ngăn chặn hành vi vi phạm chính sách bảo mật ngay lập tức khi nó vừa xảy ra","Chỉ cần kiểm toán một lần mỗi quý","Loại bỏ hoàn toàn nhu cầu ghi nhật ký hệ thống"], correct:[0,1]},

{id:"c7-q105", chapter:7, difficulty:2, type:"single",
 question:"Bốn bước vận hành của hệ thống Audit tuân thủ tự động theo đúng thứ tự là gì?",
 options:["Detect → Monitor → Report → Alert","Monitor → Detect → Alert → Report","Alert → Detect → Monitor → Report","Report → Alert → Detect → Monitor"], correct:[1]},

{id:"c7-q106", chapter:7, difficulty:2, type:"single",
 question:"Trong bước Detect của hệ thống Audit tự động, AI chạy thuật toán gì và ví dụ điển hình về hành vi bất thường được phát hiện là gì?",
 options:["Thuật toán nén dữ liệu; ví dụ: file dữ liệu quá lớn","Thuật toán Resampling; ví dụ: dữ liệu bị mất cân bằng","Thuật toán Generalization; ví dụ: tuổi bị nhóm sai khoảng","Thuật toán Anomaly Detection; ví dụ: tài khoản nhân viên tải hàng loạt dữ liệu khách hàng vào lúc 2 giờ đêm"], correct:[3]},

{id:"c7-q107", chapter:7, difficulty:2, type:"multiple",
 question:"Khi phát hiện hành vi bất thường, bước Alert của hệ thống Audit tự động thực hiện những hành động nào? (chọn nhiều đáp án)",
 options:["Kích hoạt hệ thống báo động đỏ","Tự động khóa quyền truy cập của tài khoản nghi vấn","Gửi Compliance Report lên cơ quan quản lý","Xóa toàn bộ nhật ký truy cập để bảo mật"], correct:[0,1]},

{id:"c7-q108", chapter:7, difficulty:2, type:"single",
 question:"Bước Report trong hệ thống Audit tuân thủ tự động thực hiện điều gì?",
 options:["Tự động kết xuất Compliance Report gửi lên cơ quan quản lý theo đúng khung chuẩn AI Act","Gửi email cảm ơn đến toàn bộ nhân viên","In báo cáo giấy lưu trữ tại văn phòng","Đăng kết quả kiểm toán lên mạng xã hội của công ty"], correct:[0]},

{id:"c7-q109", chapter:7, difficulty:2, type:"single",
 question:"Data Audit Trail trong báo cáo tuân thủ dữ liệu là gì?",
 options:["Bảng xếp hạng chất lượng dữ liệu của các phòng ban","Công cụ tìm kiếm bảng dữ liệu bằng ngôn ngữ tự nhiên","Sổ cái lưu trữ bất biến (Immutable log) ghi nhận ai đã tạo, sửa, xóa hoặc xem dữ liệu, phục vụ công tác điều tra tư pháp khi có sự cố rò rỉ","Sơ đồ truy vết luồng dữ liệu từ Bronze đến Gold"], correct:[2]},

{id:"c7-q110", chapter:7, difficulty:3, type:"multiple",
 question:"Những thành phần kỹ thuật nào thuộc báo cáo tuân thủ dữ liệu tự động? (chọn nhiều đáp án)",
 options:["Data Audit Trail – sổ cái bất biến ghi nhận ai tạo, sửa, xóa, xem dữ liệu","Bias Reporting Dashboard – đo lường Fairness Metrics của các mô hình AI","Privacy Audit Trail – theo dõi mức hao hụt Epsilon privacy budget","Semantic Search – tìm bảng dữ liệu bằng ngôn ngữ tự nhiên"], correct:[0,1,2]},
];
if (typeof module !== "undefined" && module.exports) { module.exports = QUESTIONS_C7; }
