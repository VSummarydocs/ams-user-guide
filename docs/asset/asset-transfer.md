---
title: "Điều chuyển Tài sản"
sidebar_label: "Điều chuyển tài sản"
sidebar_position: 3
---
# 🔄 Điều chuyển Tài sản

> **Đường dẫn:** Menu bên trái → Tài sản cố định → Điều chuyển
>
> **Quyền truy cập:** Yêu cầu quyền `transfer:readAll`

---

## Màn hình chính

![Điều chuyển tài sản](/img/screenshots/asset/asset-transfer-01-overview.png)

### Thanh công cụ

| Nút | Chức năng |
|-----|----------|
| **➕ Tạo phiếu điều chuyển** | Mở form tạo phiếu điều chuyển mới |

![Form tạo phiếu điều chuyển](/img/screenshots/asset/asset-transfer-02-create-form.png)

| **🔄 Tải lại** | Làm mới dữ liệu |

### Tìm kiếm và lọc

| Ô lọc | Mô tả |
|-------|-------|
| **Mã phiếu** | Tìm theo mã phiếu điều chuyển |
| **Trạng thái** | Lọc: Tất cả / Chờ duyệt / Đang thực hiện / Hoàn thành / Từ chối |
| **Từ ngày – Đến ngày** | Lọc theo khoảng thời gian tạo phiếu |

### Bảng danh sách chính

| Cột | Mô tả |
|-----|-------|
| **STT** | Số thứ tự |
| **Mã phiếu** | Mã định danh phiếu điều chuyển |
| **Phòng giao** | Phòng ban đang giữ tài sản |
| **Phòng nhận** | Phòng ban sẽ nhận tài sản |
| **Ngày tạo** | Ngày tạo phiếu |
| **Trạng thái** | Trạng thái phê duyệt |

### Panel chi tiết

Khi chọn phiếu, phần dưới hiển thị **danh sách tài sản** trong phiếu gồm: Mã TS, Tên, Số lượng, Nguyên giá.

---

## Hướng dẫn thao tác

### Tạo phiếu điều chuyển

1. Nhấn **"➕ Tạo phiếu điều chuyển"**.
2. Điền thông tin:

| Trường | Bắt buộc | Mô tả |
|--------|----------|-------|
| **Phòng ban giao** | ✅ | Phòng đang quản lý tài sản |
| **Phòng ban nhận** | ✅ | Phòng sẽ nhận tài sản |
| **Nội dung / Lý do** | | Lý do điều chuyển |
| **Danh sách tài sản** | ✅ | Chọn tài sản cần điều chuyển |

3. Nhấn **"Lưu"** để tạo phiếu.

### Phê duyệt phiếu

> **Quyền:** Giám đốc, KTTS/Admin, Trưởng phòng VT-TB/HCQT/CNTT.

1. Nhấn **⋮** → **"Phê duyệt"**.
2. Xem chi tiết phiếu và danh sách tài sản.
3. Chọn **Duyệt** hoặc **Từ chối** (kèm lý do).

### Xuất biên bản

Nhấn **⋮** → **"Xuất biên bản"** để tạo file Word biên bản điều chuyển tài sản (BM.05.TC.05.01).

---

## Luồng phê duyệt

```
Tạo phiếu → Trưởng phòng VT-TB/HCQT/CNTT duyệt → Giám đốc duyệt → Thực hiện điều chuyển → Hoàn thành
```

> **KTTS/Admin** tạo phiếu → **Tự động duyệt** → Thực hiện điều chuyển → Hoàn thành

---

## Ai được làm gì?

| Thao tác | 🟢 Kế toán TS | 🔴 Giám đốc | 🟡 Trưởng phòng | 🔵 Nhân viên |
|----------|--------------|-------------|----------------|-------------|
| Xem danh sách | ✅ Toàn bộ | ✅ Toàn bộ | ✅ Phòng phụ trách | ✅ Phòng mình |
| Tạo phiếu | ✅ (tự duyệt) | ✅ | ✅ | ✅ |
| Phê duyệt | ✅ | ✅ | ✅ (phạm vi phụ trách) | ❌ |
| Xuất biên bản | ✅ | ✅ | ✅ | ❌ |

![Menu thao tác phiếu điều chuyển](/img/screenshots/asset/asset-transfer-03-action-menu.png)
