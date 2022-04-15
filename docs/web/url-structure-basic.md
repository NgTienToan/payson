---
sidebar_position: 1
---

# Cấu trúc cơ bản của URL
URL (Uniform Resource Locator) là một mã định danh duy nhất được sử dụng để định vị một tài nguyên trên Internet. Trong ngữ cảnh của **HTTP** nó còn được gọi là `địa chỉ Web` hoặc `link`. Trình duyệt sẽ hiển thị Url trên thanh address bar, Ví dụ: `https://facebook.com`.

Một Url có nhiều thành phần cấu tạo nên chúng. Sau đây mình sẽ giới thiệu một cách tổng quan về các thành phần này.

`URL` bao gồm các phần khác nhau, một số phần bắt buộc và một số phần khác tùy chọn. Hình dưới đây là cái nhìn bao quát về các thành phần trên URL
![Docusaurus logo](/img/seminar-url.jpg)


![Docusaurus logo](/img/url-all.png)

### 1.Scheme
  `Scheme` là thành phần đầu tiên của URL

  ![Docusaurus logo](/img/scheme.png)

  sẽ cho biết giao thức mà browser sẽ sử dụng để yêu cầu tài nguyên. Các loại `scheme` thường gặp bao gồm

  - **HTTP**: xác định các hành động của máy chủ với thao tác của người dùng trên trình duyệt web bằng các lệnh nhất định. HTTP sẽ sử dụng Port 80 để giao tiếp.
  - **HTTPS**: sử dụng SSL (Secure Socket Layer) để đảm bảo truyền dữ liệu an toàn giữa web server và trình duyệt website. HTTPS sẽ sử dụng port 433 để truyền dữ liệu. (phiên bản an toàn hơn của HTTP)
  - **FTP**: chuyển đổi file qua lại giữa trình duyệt và web server.

Thông thường, không nhất thiết phải gõ `scheme` trước tất cả các URL. Vì khi gõ phần URL còn lại bất kỳ thì browser sẽ tự lựa chọn phương thức phù hợp.

    
### 2.Authority

 ![Docusaurus logo](/img/auth.png)

  Chúng được tách khỏi `Scheme` bằng kí tự `://`
  - Nếu Authority chứa tên miền. Ví dụ `www.google.com` thì sẽ được mặc định hiểu là đang chạy dưới cổng **80** tương đương với hình trên.
  - Thông tin người dùng: Chứa tên người dùng và mật khẩu. Ví dụ: 
  
    `admin:password@www.google.com`, trong đó, `admin:password` chính là thông tin đăng nhập của tài khoản, được liên kết với host `google.com` bằng “@”.
  - Có thể có `subdomain`

### 3.Path
 ![Docusaurus logo](/img/path.png)
 
  `/path/to/myfile.html` là đường dẫn đến tài nguyên trên máy chủ Web. Trong những ngày đầu của Web, một đường dẫn như thế này đại diện cho một vị trí tệp vật lý trên máy chủ Web. Ngày nay, nó chủ yếu là một phần trừu tượng được xử lý bởi các máy chủ Web mà không có bất kỳ thực tế vật lý nào.

  Đường dẫn này được bắt đầu bằng dấu gạch chéo. Những dấu gạch chéo này sẽ tiếp tục thể hiện phân chia giữa các thư mục và thư mục con (subfolder). Ví dụ như: www.example.com/folder/subfolder/filename.html

  Nếu URL đưa bạn đến đúng máy chủ thì Path sẽ đưa bạn đến đúng thư mục hoặc file trên máy chủ đó.
### 4.Parameters
![Docusaurus logo](/img/params.png)

  `?key1=value1&key2=value2` là các tham số bổ sung được cung cấp cho máy chủ Web. 

  Các tham số đó là danh sách các cặp `khóa / giá trị` được phân tách bằng ký hiệu `&` và được bắt đầu bằng kí hiệu `?`. 
  
  Web có thể sử dụng các tham số đó để thực hiện các công việc query để trả về dữ liệu. 
### 5.Anchor
![Docusaurus logo](/img/anchor.png)

  `Anchor`được bắt đầu bằng một dấu thăng (#) và được sử dụng để xác định vị trí cụ thể của trang web.

Many Thank !!!

https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL