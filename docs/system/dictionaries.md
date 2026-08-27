---
title: "Quản lý Danh mục"
sidebar_label: "Quản lý danh mục"
sidebar_position: 3
---
# 📚 Quản lý Danh mục

> **Đường dẫn:** Menu bên trái → Hệ thống → Quản lý danh mục
>
> **Quyền truy cập:** Yêu cầu quyền `dictionary:readAll`

---

## Màn hình chính

![Quản lý danh mục](/img/screenshots/system/dictionaries-01-overview.png)

Giúp bạn quản lý các danh mục dùng chung trong toàn hệ thống. Danh mục cung cấp các giá trị lựa chọn (dropdown) cho các trường dữ liệu trên các form nghiệp vụ.

---

## Các nhóm danh mục

| Nhóm danh mục | Mô tả | Ví dụ |
|---------------|-------|-------|
| **Nguồn hình thành** | Nguồn gốc tài sản | *Ngân sách nhà nước, Viện trợ, Tự mua* |
| **Đơn vị tính** | Đơn vị đo lường | *Cái, Bộ, Chiếc, Hộp* |
| **Phương pháp khấu hao** | Cách tính khấu hao | *Đường thẳng, Số dư giảm dần* |
| **Loại sửa chữa** | Phân loại sửa chữa | *Sửa chữa nhỏ, Sửa chữa lớn, Bảo trì định kỳ* |
| **Lý do điều chuyển** | Lý do chuyển tài sản | *Sắp xếp lại, Hư hỏng phòng cũ, Nhu cầu phòng mới* |
| **Tình trạng thiết bị** | Trạng thái vật lý | *Tốt, Khá, Trung bình, Kém, Hỏng* |

---

## Bảng dữ liệu

| Cột | Mô tả |
|-----|-------|
| **Mã danh mục** | Mã định danh duy nhất |
| **Tên danh mục** | Tên hiển thị |
| **Nhóm** | Nhóm phân loại danh mục |
| **Mô tả** | Mô tả chi tiết (nếu có) |
| **Trạng thái** | *Hoạt động* / *Ngừng sử dụng* |

---

## Thao tác

### Thêm mới danh mục

1. Nhấn **"➕ Thêm"** trên thanh công cụ.
2. Điền thông tin trong form:

| Trường | Bắt buộc | Mô tả |
|--------|:--------:|-------|
| **Mã danh mục** | ✅ | Mã định danh, duy nhất trong nhóm |
| **Tên danh mục** | ✅ | Tên hiển thị cho danh mục |
| **Nhóm** | ✅ | Chọn nhóm phân loại |
| **Mô tả** | ❌ | Mô tả chi tiết |
| **Trạng thái** | ✅ | Mặc định: *Hoạt động* |

3. Nhấn **"Thêm mới"** để hoàn tất.

![Form thêm danh mục](/img/screenshots/system/dictionaries-02-create-form.png)

### Sửa danh mục

1. Tại dòng cần sửa, nhấn `⋮` → chọn **"Sửa"**.
2. Chỉnh sửa thông tin.
3. Nhấn **"Cập nhật"** để lưu thay đổi.

### Xóa / Ngừng sử dụng

1. Tại dòng cần xóa, nhấn `⋮` → chọn **"Xóa"**.
2. Nếu danh mục đang được sử dụng, chuyển trạng thái sang **"Ngừng sử dụng"** thay vì xóa.

:::warning
Danh mục đã được tham chiếu trong dữ liệu (tài sản, đơn,...) sẽ **không thể xóa cứng**. Hệ thống sẽ chuyển sang trạng thái "Ngừng sử dụng" và ẩn khỏi dropdown.
:::


---

## Ai được làm gì?

| Thao tác | 🟢 Kế toán TS | 🔴 Giám đốc | 🟡 Trưởng phòng | 🔵 Nhân viên |
|----------|:--------------:|:-----------:|:---------------:|:------------:|
| Xem danh sách danh mục | ✅ | ✅ | ✅ | ✅ |
| Thêm mới danh mục | ✅ | ❌ | ❌ | ❌ |
| Sửa danh mục | ✅ | ❌ | ❌ | ❌ |
| Xóa / Ngừng sử dụng | ✅ | ❌ | ❌ | ❌ |
