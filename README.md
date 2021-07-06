## Thông tin ứng viên
***
1. Họ và tên: **Phạm Tấn**
2. Email: <phamtan.260400@gmail.com>
3. Số điện thoại: 0385305307
## Cách deploy source code ở local PC 
***
1. Mở project, vào terminal.
2. Nhập "npm i" để cài đặt dependencies.
3. Nhập "npm start" để chạy server.
## Cách migration database
***
1. Sử dụng Navicat để quản trị cơ sở dữ liệu.
2. Tạo 3 bảng: users, tasks và tasks_users.
* users: lưu thông tin của user. Gồm 3 cột: id, username và password.
* tasks: lưu thông tin To-do. Gồm các cột: id, name, descripton, status, datecreated, datecomplete và datemodified.
* tasks_users: lưu thông tin tham gia To-do của user. Gồm 2 cột: taskid và userid.
