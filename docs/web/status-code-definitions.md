---
sidebar_position: 2
---

# Tìm hiểu về HTTP status code
Trong phần này mình sẽ giới thiệu về **HTTP status code** trong lập trình WEB.

Đa số chúng ta khi làm Web developer đều đã từng tiếp xúc và thao tác qua với API. Vậy mọi người đã hiểu và biết được **mã** được trả về trong mỗi lần chúng ta request một api là gì chưa?


## 1. **HTTP status code** là gì?
**HTTP status code** `mã trạng thái` là gì:

Status code chính là mã code server trả về sau mỗi lần gửi request. Tất cả các request mà server nhận được đều sẽ được trả về 1 response với 1 mã code tương ứng.

Các **HTTP status code** là chuẩn để server trả về. **HTTP status code** giúp xác định request thành công hay không, nếu thất bại thì nguyên nhân là gì.
## Các loại HTTP status code
**HTTP status code** được quy định gồm **3 chữ số** và chúng được chia thành **5 loại** khác nhau, mỗi loại bắt đầu bằng một chữ số khác nhau để phân biệt và mỗi loại đều mang một ý nghĩa riêng

  - **Informational 1xx** `Thông tin`
  - **Successful 2xx** `Thành công`: Loại mã trạng thái này cho biết rằng **request** đã được nhận, hiểu và xử lý thành công
  - **Redirection 3xx** `Chuyển hướng`: Loại mã trạng thái này có ý nghĩa rằng server sẽ chuyển tiếp request hiện tại sang một request khác và client cần thực hiện việc gửi request tiếp theo đó để có thể hoàn tất. Thông thường khi trình duyệt nhận được status code loại này nó sẽ tự động thực hiện việc gửi request tiếp theo để lấy về kết quả.
  - **Client Error 4xx** `Lỗi client`: Loại mã trạng thái này có ý nghĩa rằng đã có lỗi từ phía client trong khi gửi request. Ví dụ như sai URL, sai HTTP method, không có quyền truy cập vào trang…

  Khi nhận được mã **4xxx** mà client chưa hoàn thành được **request**, nó sẽ ngay lập tức ngừng gửi dữ liệu đến server (ngoại trừ một số trường hợp).
  - **Server Error 5xx** `Lỗi server`: Loại mã trạng thái này có ý nghĩa rằng đã có lỗi từ phía server trong khi xử lý request. Ví dụ như server quá tải, hết bộ nhớ, lỗi kết nối database…

  Khi nhận được mã **5xx** mà client chưa hoàn thành được **request**, nó sẽ ngay lập tức ngừng gửi dữ liệu đến server (ngoại trừ một số trường hợp).
  ### 1xx (Informational - Thông tin)
    - 100 Continue: Chỉ một phần của Request được nhận bởi Server (có thể là header và Client cần gửi tiếp body), nhưng miễn là nó không bị loại bỏ, Client nên tiếp tục gửi phần còn lại của **request**, nếu được hoàn thành thì loại bỏ response này.
    - 101 Switching Protocols: Server thay đổi protocol 
  ### 2xx (Successful - Thành công)
    - 200 OK: Request đã được tiếp nhận và xử lý thành công.
    - 201 Created: Request đã được tiếp nhận và xử lý thành công và 1 tài nguyên mới được tạo trên server.
    - 202 Accepted: Request được chấp nhận xử lý nhưng việc sử lý không hoàn thành
    - 203 Non-autoriative Infomation:
    - 204 No content: Request được xử lý thành công nhưng server không trả về dữ liệu nào.
    - 205 Reset content: Giống với 205 nhưng yêu cầu phía client phải thiết lập lại document view.
    - 206 Partial Content:  Server chỉ trả về một phần dữ liệu.
  ### 3xx (Redirect – Chuyển hướng)
    - 300 Multiple Choices: Một danh sách các link. Người sử dụng có thể chọn một link và tới vị trí đó. Có tối đa 5 địa chỉ. Ví dụ: List các file video với format khác nhau
    - 301 Moved Permanently: Request hiện tại và các request sau được yêu cầu di chuyển tới một URI mới.
    - 302 Found: Trang được yêu cầu đã được di chuyển tới vị trí mới.
    - 303 See Other: Trang được yêu cầu cũng có thể được tả về ở một URL khác bằng cách sử dụng phương thức GET.
    - 304 Not Modified:
    - 305 Use Proxy:
    - 306 Switch Proxy:
    - 307 Temporary Redirect:
  ### 4xx (Client Error – Lỗi Client)
    - 400 Bad Request: Server không thể xử lý hoặc sẽ không xử lý các Request lỗi của phía client (ví dụ Request có cú pháp sai)
    - 401 Unauthorized: Cần username, password để truy cập.
    - 402 Payment Required: Mã này chưa được định nghĩa.
    - 403 Forbidden: Truy cập bị từ chối (ví dụ ip bị chặn)
    - 404 Not Found: Trang được yêu cầu không tồn tại tại thời điểm hiện tại, tuy nhiên có thể tồn tại trong tương lai.
    - 405 Method Not Allowed: Trang được yêu cầu không hỗ trợ method của request (ví dụ chỉ xử lý method POST, không xử lý method GET)
    - 406 Not Acceptable: Server chỉ có thể tạo một Response mà không được chấp nhận bởi Client.
    - 407 Proxy Authentication Required: Bạn phải xác nhận với một proxy server trước khi request này được phục vụ.
    - 408 Request Timeout: Request tốn thời gian dài hơn thời gian Server được chuẩn bị để đợi.
    - 409 Conflict: Request không thể được hoàn thành bởi vì sự xung đột
    - 410 Gone: Giống 404 nhưng tài nguyên/trang cũng không tồn tại trong tương lai
    - 411 Length Required: Chưa định nghĩa trường “Content-Length” trong header của request gửi đi.
    - 412 Precondition Failed: Server sẽ không đáp ứng một trong những điều kiện tiên quyết của Client trong Request.
    - 413 Payload Too Large: Server sẽ không chấp nhận yêu cầu, bởi vì đối tượng yêu cầu là quá rộng.
    - 414 URI Too Long: URI được cung cấp là quá dài để Server xử lý.
    - 415 Unsupported Media Type: Server sẽ không chấp nhận Request, bởi vì kiểu phương tiện không được hỗ trợ.
    - 416 Range Not Satisfiable: Client yêu cầu một phần dữ liệu nhưng không có sẵn trên server.
    - 417 Expectation Failed:
  ### 5xx (Server error – Lỗi server)
    - 500 Internal Server Error: Một thông báo chung chung, được đưa ra khi Server bị lỗi bất ngờ (chủ yếu do lỗi lập trình, kết nối database)
    - 501 Not Implemented: Server không hỗ trợ xử lý request này.
    - 502 Bad Gateway: Server đã hoạt động như một gateway hoặc proxy và nhận được một Response không hợp lệ từ máy chủ nguồn.
    - 503 Service Unavailable: Server hiện tại không có sẵn (Quá tải hoặc được down để bảo trì). Nói chung đây chỉ là trạng thái tạm thời.
    - 504 Gateway Timeout: Server đã hoạt động như một gateway hoặc proxy và không nhận được một Response từ máy chủ nguồn.
    - 505 HTTP Version Not Supported: Server không hỗ trợ phiên bản “giao thức HTTP”.

https://www.w3.org/Protocols/HTTP/1.1/draft-ietf-http-v11-spec-01#Status-Codes