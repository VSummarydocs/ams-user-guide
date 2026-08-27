---
title: "Sửa chữa & Bảo dưỡng Tài sản"
sidebar_label: "Sửa chữa & Bảo dưỡng"
sidebar_position: 4
---
# 🔧 Sửa chữa & Bảo dưỡng Tài sản

> **Đường dẫn:** Menu bên trái → Tài sản cố định → Sửa chữa & Bảo dưỡng
>
> **Quyền truy cập:** Yêu cầu quyền `asset:readAll`

---

## Màn hình chính

![Sửa chữa bảo dưỡng](/img/screenshots/asset/asset-maintenance-01-overview.png)

### Thanh công cụ

| Nút | Chức năng |
|-----|----------|
| **➕ Tạo yêu cầu** | Tạo yêu cầu sửa chữa/bảo dưỡng mới |
| **🔄 Tải lại** | Làm mới dữ liệu |

![Form lập phiếu sửa chữa bảo dưỡng](/img/screenshots/asset/asset-maintenance-02-create-form.png)

### Bộ lọc

| Ô lọc | Mô tả |
|-------|-------|
| **Mã phiếu** | Tìm theo mã phiếu sửa chữa |
| **Trạng thái** | Chờ duyệt / Đang thực hiện / Hoàn thành / Từ chối |
| **Từ ngày – Đến ngày** | Lọc theo khoảng thời gian |

### Bảng danh sách

| Cột | Mô tả |
|-----|-------|
| **Mã phiếu** | Mã phiếu sửa chữa/bảo dưỡng |
| **Tên tài sản** | Tên tài sản cần sửa chữa |
| **Tình trạng** | Mô tả tình trạng hỏng |
| **Người yêu cầu** | Người tạo yêu cầu |
| **Người thực hiện** | Cán bộ được phân công |
| **Ngày tạo** | Ngày tạo phiếu |
| **Trạng thái** | Trạng thái phê duyệt & xử lý |

---

## Hướng dẫn thao tác

### Tạo yêu cầu sửa chữa

1. Nhấn **"➕ Tạo yêu cầu"**.
2. Điền thông tin:

| Trường | Bắt buộc | Mô tả |
|--------|----------|-------|
| **Tài sản** | ✅ | Chọn tài sản cần sửa chữa (hoặc quét QR) |
| **Tình trạng hỏng** | ✅ | Mô tả chi tiết tình trạng |
| **Lý do** | | Lý do phát sinh sửa chữa |
| **Mức độ ưu tiên** | | Thường / Cấp thiết |

3. Nhấn **"Lưu"** để gửi yêu cầu.

### Phê duyệt & Phân công

> **Quyền:** Trưởng phòng VT-TB/HCQT/CNTT, Giám đốc, KTTS/Admin.

1. Nhấn **⋮** → **"Phê duyệt"**.
2. Chọn người thực hiện sửa chữa.
3. **Duyệt** hoặc **Từ chối** (kèm lý do).

### Cập nhật kết quả

Sau khi sửa chữa xong:
1. Nhấn **⋮** → **"Cập nhật kết quả"**.
2. Ghi nhận kết quả:
   - **Đã sửa xong** → Trạng thái tài sản chuyển về **"Đang hoạt động"**
   - **Không sửa được** → Đề xuất phương án xử lý (thanh lý, chuyển đổi...)

---

## Luồng phê duyệt

```
Khoa/phòng tạo yêu cầu → Trưởng phòng VT-TB/HCQT/CNTT duyệt & phân công → Giám đốc duyệt → Thực hiện → Cập nhật kết quả
```

> **KTTS/Admin** tạo yêu cầu → **Tự động duyệt** → Thực hiện → Cập nhật kết quả

---

## Ai được làm gì?

| Thao tác | 🟢 Kế toán TS | 🔴 Giám đốc | 🟡 Trưởng phòng | 🔵 Nhân viên |
|----------|--------------|-------------|----------------|-------------|
| Xem danh sách | ✅ Toàn bộ | ✅ Toàn bộ | ✅ Phòng phụ trách | ✅ Phòng mình |
| Tạo yêu cầu | ✅ (tự duyệt) | ✅ | ✅ | ✅ |
| Phê duyệt / Phân công | ✅ | ✅ | ✅ (phạm vi phụ trách) | ❌ |
| Cập nhật kết quả | ✅ | ❌ | ✅ | ❌ |

![Menu thao tác sửa chữa](/img/screenshots/asset/asset-maintenance-03-action-menu.png)
