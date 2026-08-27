---
title: "Cấu hình Hệ thống"
sidebar_label: "Cấu hình hệ thống"
sidebar_position: 7
---
# ⚙️ Cấu hình Hệ thống

> **Đường dẫn:** Menu bên trái → Hệ thống → Cấu hình hệ thống
>
> **Quyền truy cập:** 🟢 KTTS/Admin

---

## Màn hình chính

![Cấu hình hệ thống](/img/screenshots/system/config-01-overview.png)

Trang này cho phép quản trị viên tùy chỉnh các tham số hệ thống, thay đổi giao diện, và quản lý cập nhật ứng dụng.

---

## Các nhóm thiết lập

### 🎨 Giao diện

| Thiết lập | Mô tả |
|-----------|-------|
| **Chế độ hiển thị** | Chuyển đổi giữa **Sáng (Light)** và **Tối (Dark)** — áp dụng ngay lập tức |
| **Ngôn ngữ** | Chuyển đổi ngôn ngữ giao diện (nếu hỗ trợ) |

### 🏢 Thông tin đơn vị

| Thiết lập | Mô tả |
|-----------|-------|
| **Tên đơn vị** | Tên tổ chức/bệnh viện/công ty sử dụng phần mềm |
| **Địa chỉ** | Địa chỉ đơn vị — hiển thị trên các biểu mẫu, phiếu in |
| **Logo** | Upload logo đơn vị — hiển thị trên header và phiếu in |

### 🌐 Cấu hình API

| Thiết lập | Mô tả |
|-----------|-------|
| **Địa chỉ máy chủ** | URL server API (VD: `https://assets-mngmt.vfast.dev`) |

:::important
Sau khi thay đổi địa chỉ máy chủ, cần **khởi động lại ứng dụng** để áp dụng thay đổi.
:::


---

## Cập nhật ứng dụng

![Cấu hình hệ thống - phần cập nhật](/img/screenshots/system/config-02-scrolled.png)

Khi có bản cập nhật mới, hệ thống sẽ thông báo trên trang Cấu hình:

1. Hệ thống thông báo **phiên bản mới khả dụng** (VD: `v1.8.5`).
2. Nhấn **"Tải về"** để download bản cập nhật từ server.
3. Sau khi tải xong, nhấn **"Cài đặt và khởi động lại"** để áp dụng.

:::warning
Trong quá trình cập nhật, ứng dụng sẽ tự động khởi động lại. Hãy **lưu mọi công việc đang làm** trước khi nhấn cài đặt.
:::


---

## Ai được làm gì?

| Thao tác | 🟢 Kế toán TS | 🔴 Giám đốc | 🟡 Trưởng phòng | 🔵 Nhân viên |
|----------|:--------------:|:-----------:|:---------------:|:------------:|
| Xem trang cấu hình | ✅ | ❌ | ❌ | ❌ |
| Thay đổi giao diện (Sáng/Tối) | ✅ | ✅ (cá nhân) | ✅ (cá nhân) | ✅ (cá nhân) |
| Cập nhật thông tin đơn vị | ✅ | ❌ | ❌ | ❌ |
| Thay đổi địa chỉ API | ✅ | ❌ | ❌ | ❌ |
| Cập nhật ứng dụng | ✅ | ❌ | ❌ | ❌ |
