---
title: "Quản lý Loại tài sản"
sidebar_label: "Quản lý loại tài sản"
sidebar_position: 2
---
# 📂 Quản lý Loại tài sản

> **Đường dẫn:** Menu bên trái → Hệ thống → Quản lý loại tài sản
>
> **Quyền truy cập:** Yêu cầu quyền `asset-category:readAll`

---

## Màn hình chính

![Quản lý loại tài sản](/img/screenshots/system/categories-01-overview.png)

Quản lý phân loại tài sản theo nhóm (VD: Máy tính, Thiết bị y tế, Nội thất, Phương tiện vận tải...). Mỗi tài sản khi được thêm vào hệ thống đều phải thuộc một loại tài sản cụ thể.

---

## Bảng dữ liệu

| Cột | Mô tả |
|-----|-------|
| **Mã loại** | Mã định danh loại tài sản (VD: `MT`, `TBYT`, `NT`) |
| **Tên loại** | Tên đầy đủ của loại tài sản |
| **Mô tả** | Mô tả chi tiết (nếu có) |
| **Số tài sản** | Số lượng tài sản thuộc loại này trong hệ thống |

---

## Thao tác

### Thêm mới loại tài sản

1. Nhấn **"➕ Thêm"** trên thanh công cụ.
2. Điền thông tin trong form:

| Trường | Bắt buộc | Mô tả |
|--------|:--------:|-------|
| **Mã loại** | ✅ | Mã định danh, không trùng lặp |
| **Tên loại** | ✅ | Tên loại tài sản |
| **Mô tả** | ❌ | Mô tả chi tiết |

3. Nhấn **"Thêm mới"** để hoàn tất.

![Form thêm loại tài sản](/img/screenshots/system/categories-02-create-form.png)

### Sửa loại tài sản

1. Tại dòng cần sửa, nhấn `⋮` → chọn **"Sửa"**.
2. Chỉnh sửa thông tin cần thiết.
3. Nhấn **"Cập nhật"** để lưu thay đổi.

### Xóa loại tài sản

1. Tại dòng cần xóa, nhấn `⋮` → chọn **"Xóa"**.
2. Một hộp thoại xác nhận sẽ hiện ra.
3. Nhấn **"Đồng ý"** để xác nhận xóa.

:::warning
Chỉ xóa được loại tài sản **chưa có tài sản nào** thuộc loại này. Nếu đã có tài sản, cần chuyển tài sản sang loại khác trước khi xóa.
:::


---

## Ai được làm gì?

| Thao tác | 🟢 Kế toán TS | 🔴 Giám đốc | 🟡 Trưởng phòng | 🔵 Nhân viên |
|----------|:--------------:|:-----------:|:---------------:|:------------:|
| Xem danh sách loại tài sản | ✅ | ✅ | ✅ | ✅ |
| Thêm mới loại tài sản | ✅ | ❌ | ❌ | ❌ |
| Sửa loại tài sản | ✅ | ❌ | ❌ | ❌ |
| Xóa loại tài sản | ✅ | ❌ | ❌ | ❌ |
