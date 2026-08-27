---
title: "Quản lý Nhà cung cấp"
sidebar_label: "Quản lý nhà cung cấp"
sidebar_position: 1
---
# 🏢 Quản lý Nhà cung cấp

> **Đường dẫn:** Menu bên trái → Hệ thống → Quản lý nhà cung cấp
>
> **Quyền truy cập:** Yêu cầu quyền `supplier:readAll`

---

## Màn hình chính

![Quản lý nhà cung cấp](/img/screenshots/system/supplier-01-overview.png)

Giúp bạn quản lý danh sách nhà cung cấp tài sản, thiết bị, công cụ dụng cụ. Thông tin nhà cung cấp được tham chiếu khi tạo đề xuất mua sắm, ghi tăng tài sản, và lập phiếu sửa chữa.

---

## Bảng dữ liệu

| Cột | Mô tả |
|-----|-------|
| **Mã NCC** | Mã định danh nhà cung cấp (duy nhất) |
| **Tên NCC** | Tên đầy đủ nhà cung cấp |
| **Địa chỉ** | Địa chỉ trụ sở nhà cung cấp |
| **Số điện thoại** | Số điện thoại liên hệ |
| **Email** | Địa chỉ email |
| **Ghi chú** | Thông tin bổ sung (chuyên cung cấp thiết bị gì, điều kiện bảo hành...) |

---

## Thao tác

### Thêm mới nhà cung cấp

1. Nhấn **"➕ Thêm"** trên thanh công cụ.
2. Điền thông tin trong form:

| Trường | Bắt buộc | Mô tả |
|--------|:--------:|-------|
| **Mã NCC** | ✅ | Mã định danh, duy nhất |
| **Tên NCC** | ✅ | Tên đầy đủ nhà cung cấp |
| **Địa chỉ** | ❌ | Địa chỉ trụ sở |
| **Số điện thoại** | ❌ | Số điện thoại liên hệ |
| **Email** | ❌ | Email liên hệ |
| **Ghi chú** | ❌ | Ghi chú bổ sung |

3. Nhấn **"Thêm mới"** để hoàn tất.

![Form thêm nhà cung cấp](/img/screenshots/system/supplier-02-create-form.png)

### Sửa nhà cung cấp

1. Tại dòng cần sửa, nhấn `⋮` → chọn **"Sửa"**.
2. Chỉnh sửa thông tin.
3. Nhấn **"Cập nhật"** để lưu thay đổi.

### Xóa nhà cung cấp

1. Tại dòng cần xóa, nhấn `⋮` → chọn **"Xóa"**.
2. Một hộp thoại xác nhận sẽ hiện ra.
3. Nhấn **"Đồng ý"** để xác nhận xóa.

:::warning
Nếu nhà cung cấp đã được tham chiếu trong tài sản hoặc đơn đề xuất mua, hệ thống sẽ **không cho phép xóa**. Cần gỡ liên kết trước khi xóa.
:::


---

## Ai được làm gì?

| Thao tác | 🟢 Kế toán TS | 🔴 Giám đốc | 🟡 Trưởng phòng | 🔵 Nhân viên |
|----------|:--------------:|:-----------:|:---------------:|:------------:|
| Xem danh sách NCC | ✅ | ✅ | ✅ | ✅ |
| Thêm mới NCC | ✅ | ❌ | ❌ | ❌ |
| Sửa NCC | ✅ | ❌ | ❌ | ❌ |
| Xóa NCC | ✅ | ❌ | ❌ | ❌ |
