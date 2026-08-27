---
title: "Đề xuất mua thiết bị"
sidebar_label: "Đề xuất mua"
sidebar_position: 1
---
# 🛒 Đề xuất mua thiết bị

> **Đường dẫn:** Menu bên trái → Đề xuất mua thiết bị
>
> **Quyền truy cập:** Tất cả vai trò

---

## Màn hình chính

![Đề xuất mua](/img/screenshots/acquisition/acquisition-01-overview.png)

### Thanh công cụ

| Nút | Chức năng |
|-----|----------|
| **➕ Tạo đề xuất** | Mở form tạo đề xuất mua thiết bị mới |
| **🔄 Tải lại** | Làm mới dữ liệu và đặt lại bộ lọc |

### Tìm kiếm và lọc

| Ô lọc | Mô tả |
|-------|-------|
| **Tên đề xuất** | Tìm theo tên/tiêu đề đề xuất |
| **Mã đề xuất** | Tìm theo mã đề xuất |
| **Trạng thái** | Lọc theo trạng thái: Tất cả / Chờ duyệt / Đang xử lý / Đã duyệt / Từ chối / Hoàn thành |
| **🔍 Lọc nâng cao** | Lọc theo khoảng thời gian, phòng ban sử dụng |

### Bảng danh sách

| Cột | Mô tả |
|-----|-------|
| **STT** | Số thứ tự |
| **Mã đề xuất** | Mã định danh phiếu đề xuất |
| **Tên đề xuất** | Tiêu đề mô tả nội dung đề xuất |
| **Người đề xuất** | Tên người tạo đề xuất |
| **Phòng ban** | Phòng ban sử dụng dự kiến |
| **Ngày tạo** | Ngày giờ tạo đề xuất |
| **Trạng thái** | Trạng thái phê duyệt hiện tại |

### Panel chi tiết

Khi chọn một đề xuất, phần dưới hiển thị **danh sách thiết bị** trong đề xuất đó gồm: Tên thiết bị, Số lượng, Đơn giá dự kiến, Thành tiền, Ghi chú.

---

## Hướng dẫn thao tác

### Tạo đề xuất mua mới

![Form tạo đề xuất](/img/screenshots/acquisition/acquisition-02-create.png)

1. Nhấn nút **"➕ Tạo đề xuất"**.
2. Điền thông tin:

| Trường | Bắt buộc | Mô tả |
|--------|----------|-------|
| **Tên đề xuất** | ✅ | Tiêu đề ngắn gọn mô tả nội dung |
| **Phòng ban sử dụng** | ✅ | Phòng ban dự kiến nhận thiết bị |
| **Nội dung / Lý do** | | Mô tả chi tiết lý do đề xuất |
| **Danh sách thiết bị** | ✅ | Thêm từng thiết bị: Tên, Số lượng, Đơn giá dự kiến, Ghi chú |

3. Nhấn **"Lưu"** để gửi đề xuất.

### Xem chi tiết đề xuất

1. Nhấn nút **⋮** → **"Xem chi tiết"**.
2. Màn hình hiển thị đầy đủ thông tin đề xuất, danh sách thiết bị, và lịch sử phê duyệt.

### Phê duyệt đề xuất

> **Quyền:** Chỉ Giám đốc, KTTS, Trưởng phòng VT-TB/HCQT/CNTT.

1. Nhấn nút **⋮** → **"Phê duyệt"**.
2. Xem nội dung đề xuất và danh sách thiết bị.
3. Chọn:
   - **✅ Duyệt** → Đề xuất chuyển sang trạng thái **"Đã duyệt"**
   - **❌ Từ chối** → Nhập lý do từ chối, đề xuất chuyển sang **"Từ chối"**

### Xuất biên bản

Nhấn nút **⋮** → có thể xuất:
- **Phiếu đề xuất** (Word/DOCX)
- **Quyết định mua** (Word/DOCX)
- **Biên bản bàn giao** (Word/DOCX)

---

## Luồng phê duyệt

```
Nhân viên tạo đề xuất → Trưởng phòng VT-TB/HCQT/CNTT xét duyệt → Giám đốc phê duyệt → Hoàn thành
```

> **Lưu ý:** Khi **KTTS/Admin** tạo đề xuất, đề xuất sẽ **tự động được duyệt** mà không cần qua các bước phê duyệt.

---

## Ai được làm gì?

| Thao tác | 🟢 Kế toán TS | 🔴 Giám đốc | 🟡 Trưởng phòng | 🔵 Nhân viên |
|----------|--------------|-------------|----------------|-------------|
| Xem danh sách | ✅ Toàn bộ | ✅ Toàn bộ | ✅ Phòng phụ trách | ✅ Phòng mình |
| Tạo đề xuất | ✅ (tự duyệt) | ✅ | ✅ | ✅ |
| Phê duyệt | ✅ | ✅ | ✅ (phạm vi phòng) | ❌ |
| Xuất biên bản | ✅ | ✅ | ✅ | ❌ |
| Xóa đề xuất | ✅ | ❌ | ❌ (chỉ đề xuất chưa duyệt) | ❌ (chỉ đề xuất mình tạo) |

---

## Chi tiết đề xuất

Khi click vào một phiếu đề xuất, hệ thống hiển thị chi tiết bao gồm danh sách tài sản đề xuất.

![Chi tiết đề xuất mua sắm](/img/screenshots/acquisition/acquisition-03-detail.png)

![Menu thao tác đề xuất](/img/screenshots/acquisition/acquisition-04-action-menu.png)
