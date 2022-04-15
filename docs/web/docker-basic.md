---
sidebar_position: 3
---

# Tìm hiểu về Docker và CICD
Hôm nay mình đã có cơ hội được a Lead chỉ và hướng dẫn các khái niệm cơ bản của Docker, cách tạo Dockerfile và deploy một web app lên môi trường staging.

Sau đây mình sẽ chia sẻ qua những ý hiểu của mình

### 1. Các khái niệm của Docker
Docker là 1 nền tảng cung cấp các dịch vụ giúp build, deploy và chạy ứng dụng 1 cách dễ dàng bằng cách sử dụng các containers trên nền tảng ảo hoá.
Để hiểu rõ cách vận hành của Docker thì các bạn hãy nhìn vào hình dưới đây:
![Docusaurus logo](/img/docker-overview.jpg)
  - Dockerfile là tập hợp các lệnh để build ra 1 docker image. Hiểu nôm na nó như một danh sách các gia vị và công thức để có thể nấu thành món ăn vậy
  - Docker image là 1 khuôn mẫu để build ra các docker container. Nó như một bản ghost của Window vậy đó !!! 
  - Docker container là 1 package chứa toàn bộ các công cụ cần thiết để chạy ứng dụng.  Và là 1 instance của docker image

Đó là một luồng cơ bản để giúp chúng ta hiểu hơn về cách hoạt động và vận hành của Docker.

#### 1.1 Vậy trong Dockerfile có gì nhỉ?

Để có thể viết ra được một Dockerfile thì chúng ta cần nắm được các cú pháp của nó: 

  - **FROM**: Xác định cái base image mà chúng ta cần để tạo ra image của mình, luôn được đặt ở trên cùng của Dockerfile
  - **WORKDIR**:
    - Set working directory cho các lệnh RUN, CMD, COPY, ADD, ENTRYPOINT trong file Dockerfile
    - Được sử dụng nhiều lần trong Dockerfile
    - Nếu chưa được tạo sẽ được tự động tạo ra
  
  - **COPY**: Copy một file từ host machine tới docker image. Có thể sử dụng URL cho tệp tin cần copy, khi đó docker sẽ tiến hành tải tệp tin đó đến thư mục đích.
    - **COPY** có hai kiểu chính COPY `<src>... <dest>` hoặc COPY `["<src>",... "<dest>"]`
  - **RUN**: 
    - Sử dụng khi muốn thực thi một command trong quá trình build image
    - **RUN** được thực thi trong quá trình build. Khi ta build một Docker image, Docker sẽ đọc các câu lệnh trong chỉ dẫn RUN và build tới một layer mới trong image sử dụng.
  - **CMD**: Định nghĩa các commands mặc định khi không có ENTRYPOINT và Extra COMMANDS
    - Mỗi Dockerfile chỉ có duy nhất một lệnh CMD, có nhiều hơn thì chỉ cái cuối được chạy
    - Cung cấp lệnh chạy mặc định cho container
  - **ENTRYPOINT**: Định nghĩa những commands sẽ được chạy đầu tiên khi container chạy. Các lệnh thêm vào sau docker run `[OPTIONS] <image> [Extra COMMANDs]` sẽ được thêm vào chuỗi các commands của entrypoint
  - **ENV**: Định nghĩa các biến môi trường. ENV có thể được gán bằng 2 cách:
    - Gán giá trị mặc định thông qua biến ARG khi build image
    - Gán trực tiếp hoặc override khi run container

  - **Build docker** :
  
  ` docker build -t {DOCKER_NAME}:{tag}`  
  
  `docker build -t video-api:test`
  - **Run docker**: 
  
  `docker run --rm -d -p {HOST_PORT}:{CONTAINER_PORT} --name {DOCKER_CONTAINER_NAME} {IMAGE_NAME}` 
  
  `docker run --rm -d -p 3000:3000 --name video-api video-api:test`
  - **Xem các container đang chạy**: `docker ps`
  - **Xem các images đang có**: `docker images`
  - **Xóa container**: `docker rm {containerID, có thể lấy 2 kí tự đầu}`
  - **Xóa Images**: `docker rmi {imageID, có thể lấy 2 kí tự đầu}`
  - **start một docker**: `docker start {imageID}`
  - **stop một docker**: `docker stop {imageID}`
### 2. Liên kết gitlab và Rancher để auto deploy web app
