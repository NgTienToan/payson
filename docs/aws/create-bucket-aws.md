---
sidebar_position: 1
---

# Tạo Bucket AWS-S3 và upload ảnh từ project Next
Mình đã note lại một vài các bước để tạo một bucket và setup project Nextjs cho việc upload ảnh lên AWS S3



### 1. Tạo một Bucket trên S3

- Click vào **Create bucket** để tạo một bucket mới

![Docusaurus logo](/img/bucket-setup1.PNG)

- Bỏ chọn **Block public access** để đảm bảo rằng quyền truy cập công khai không bị chặn

![Docusaurus logo](/img/bucket-setup2.PNG)

- Sau đó tạo bucket rồi vào phần **Permissions** của bucket vừa tạo

  - Chọn Edit sửa tên ``BUCKET_NAME`` vừa tạo và copy vào
  ![Docusaurus logo](/img/bucket-setup3.PNG)
    ```
    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Sid": "Statement1",
                "Effect": "Allow",
                "Principal": "*",
                "Action": "s3:GetObject",
                "Resource": "arn:aws:s3:::BUCKET_NAME/*"
            }
        ]
    }
    ```
  - Vào phần **CORS permissions** để chỉnh sửa config

    ```
      [
        {
          "AllowedHeaders": ["*"],
          "AllowedMethods": ["PUT", "POST"],
          "AllowedOrigins": ["*"],
          "ExposeHeaders": ["ETag"]
        }
      ]
    ```
    ![Docusaurus logo](/img/bucket-setup4.PNG)

### 2. Config IAM user

  Nếu chưa có user thì tạo một user

  Còn nếu đã có rồi thì ta sẽ tạo một **Policy**
  ![Docusaurus logo](/img/bucket-setup5.PNG)

  Mở Policy Editor chọn **JSON** và paste vào

  ```
  {
    "Version": "2012-10-17",
    "Statement": [
      {
        "Sid": "STSToken",
        "Effect": "Allow",
        "Action": "sts:GetFederationToken",
        "Resource": ["arn:aws:sts::ACCOUNT_ID:federated-user/S3UploadWebToken"]
      },
      {
        "Sid": "S3UploadAssets",
        "Effect": "Allow",
        "Action": "s3:*",
        "Resource": [
          "arn:aws:s3:::BUCKET_NAME",
          "arn:aws:s3:::BUCKET_NAME/*.jpg",
          "arn:aws:s3:::BUCKET_NAME/*.png",
          "arn:aws:s3:::BUCKET_NAME/*.gif",
          "==== ADD OTHER FILE FORMATS HERE ====",
          "arn:aws:s3:::BUCKET_NAME/*.format"
        ]
      }
    ]
  }
  ```

  ![Docusaurus logo](/img/bucket-setup6.PNG)


  - Quay lại tab tạo User. Tìm policy chúng ta vừa tạo và nhấn chọn ``select`` rồi tiếp tục
  ta sẽ có ``Access key`` và ``Secret key`` để config cho phần sau

  ![Docusaurus logo](/img/bucket-setup7.PNG)

### 3. Setup project Nextjs




