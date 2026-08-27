---
title: "Quản lý Tài khoản"
sidebar_label: "Quản lý tài khoản"
sidebar_position: 5
---
# 👤 Quản lý Tài khoản

> **Đường dẫn:** Menu bên trái → Hệ thống → Quản lý Tài khoản
>
> **Quyền truy cập:** Yêu cầu quyền `user:readAll`

---

## Màn hình chính

![accounts](/img/screenshots/system/accounts-01-overview.png)

Quản lý tài khoản người dùng, gán vai trò.

### Bảng danh sách

| Cột | Mô tả |
|-----|-------|
| **Email** | Địa chỉ email đăng nhập |
| **Họ và tên** | Tên đầy đủ của người dùng |
| **Vai trò** | Vai trò được gán (Admin, Giám đốc, Trưởng phòng, KTTS, Nhân viên...) |
| **Phòng ban** | Phòng ban trực thuộc |
| **Trạng thái** | Hoạt động / Bị khóa |

### Thao tác

#### Thêm tài khoản mới

1. Nhấn **"➕ Thêm tài khoản"**.
2. Điền thông tin:

| Trường | Bắt buộc | Mô tả |
|--------|----------|-------|
| **Email** | ✅ | Email đăng nhập (đồng thời là nơi nhận mật khẩu) |
| **Họ và tên** | ✅ | Tên đầy đủ |
| **Vai trò** | ✅ | Chọn từ 10 vai trò hệ thống |
| **Phòng ban** | ✅ | Chọn phòng ban trực thuộc |

3. Nhấn **"Lưu"** để tạo tài khoản.

> 📧 **Sau khi tạo xong**, hệ thống sẽ **tự động gửi mật khẩu đăng nhập** đến email đã đăng ký. Người dùng mới chỉ cần mở email để nhận mật khẩu và đăng nhập.

#### Sửa / Khóa / Xóa tài khoản

- **Sửa**: Nhấn nút `⋮` → chọn "Sửa" → Chỉnh sửa thông tin → Lưu.
- **Khóa**: Nhấn nút `⋮` → chọn "Khóa" → Tài khoản không thể đăng nhập.
- **Đặt lại mật khẩu**: Nhấn nút `⋮` → chọn "Đặt lại MK" → Mật khẩu được reset.
- **Xóa**: Nhấn nút `⋮` → chọn "Xóa" → Xác nhận xóa.

---

## 10 vai trò trong hệ thống

| Mã vai trò | Tên tiếng Việt | Nhóm |
|-----------|---------------|------|
| `admin` | Quản trị viên | 🟢 Kế toán TS |
| `asset_accountant` | Kế toán tài sản | 🟢 Kế toán TS |
| `director` | Giám đốc | 🔴 Giám đốc |
| `vice_director` | Phó giám đốc | 🔴 Giám đốc |
| `dept_manager` | Trưởng phòng | 🟡 Trưởng phòng |
| `vice_dept_manager` | Phó phòng | 🟡 Trưởng phòng |
| `supplies_manager` | Trưởng khoa | 🟡 Trưởng phòng |
| `vice_supplies_manager` | Phó khoa | 🟡 Trưởng phòng |
| `supplies_technician` | Kỹ thuật viên | 🔵 Nhân viên |
| `staff` | Nhân viên | 🔵 Nhân viên |

![Phân quyền theo vai trò](/img/screenshots/system/accounts-02-permissions.png)
