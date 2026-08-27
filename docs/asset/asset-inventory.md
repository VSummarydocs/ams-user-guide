---
title: "Kiểm kê Tài sản"
sidebar_label: "Kiểm kê tài sản"
sidebar_position: 5
---
# 📋 Kiểm kê Tài sản

> **Đường dẫn:** Menu bên trái → Tài sản cố định → Kiểm kê
>
> **Quyền truy cập:** Yêu cầu quyền `inventory-session:readAll`

---

## Màn hình chính

![Kiểm kê tài sản](/img/screenshots/asset/asset-inventory-01-overview.png)

### Thanh công cụ

| Nút | Chức năng |
|-----|----------|
| **➕ Tạo kỳ kiểm kê** | Khởi tạo kỳ kiểm kê mới |

![Form thêm đợt kiểm kê](/img/screenshots/asset/asset-inventory-02-create-form.png)

| **🔄 Tải lại** | Làm mới dữ liệu |

### Bảng danh sách

| Cột | Mô tả |
|-----|-------|
| **Mã kỳ kiểm kê** | Mã định danh kỳ kiểm kê |
| **Tên kỳ kiểm kê** | Tiêu đề / mô tả kỳ kiểm kê |
| **Ngày bắt đầu** | Ngày bắt đầu kiểm kê |
| **Ngày kết thúc** | Ngày kết thúc dự kiến |
| **Trạng thái** | Chờ duyệt / Đang kiểm kê / Hoàn thành / Từ chối |
| **Thành viên** | Số lượng thành viên tham gia |

---

## Hướng dẫn thao tác

### Tạo kỳ kiểm kê

1. Nhấn **"➕ Tạo kỳ kiểm kê"**.
2. Điền thông tin:

| Trường | Bắt buộc | Mô tả |
|--------|----------|-------|
| **Tên kỳ kiểm kê** | ✅ | Tiêu đề mô tả (VD: "Kiểm kê Q3/2026") |
| **Thời gian** | ✅ | Ngày bắt đầu và kết thúc dự kiến |
| **Phạm vi** | ✅ | Chọn phòng ban / toàn đơn vị |
| **Thành viên** | ✅ | Chọn người tham gia kiểm kê |

3. Nhấn **"Lưu"** để tạo kỳ kiểm kê.

### Phê duyệt kỳ kiểm kê

> **Quyền:** Giám đốc, KTTS/Admin.

1. Giám đốc xem xét và duyệt kế hoạch kiểm kê.
2. Sau khi duyệt, kỳ kiểm kê chuyển sang trạng thái **"Đang kiểm kê"**.

### Thực hiện kiểm kê

1. Khoa/phòng đăng nhập hệ thống.
2. **Quét QR Code** gắn trên từng tài sản để ghi nhận.
3. Nếu phát hiện tài sản chưa có mã, cập nhật thông tin theo hướng dẫn KTTS.

### Kết thúc kiểm kê

1. Sau khi quét hết, nhấn **"Kết thúc kiểm kê"**.
2. KTTS đối chiếu kết quả:
   - **Khớp** → Xác nhận hoàn thành
   - **Thừa/Thiếu/Chênh lệch** → Khoa/phòng giải trình
3. KTTS tổng hợp báo cáo và đề xuất phương án xử lý.

---

## Luồng phê duyệt

```
KTTS tạo kỳ kiểm kê → Giám đốc duyệt → Khoa/phòng thực hiện (quét QR) → Kết thúc → KTTS đối chiếu → Xử lý chênh lệch
```

---

## Ai được làm gì?

| Thao tác | 🟢 Kế toán TS | 🔴 Giám đốc | 🟡 Trưởng phòng | 🔵 Nhân viên |
|----------|--------------|-------------|----------------|-------------|
| Tạo kỳ kiểm kê | ✅ | ❌ | ❌ | ❌ |
| Phê duyệt | ✅ | ✅ | ❌ | ❌ |
| Thực hiện kiểm kê | ✅ | ❌ | ✅ (phòng mình) | ✅ (phòng mình) |
| Đối chiếu & xử lý | ✅ | ❌ | ❌ | ❌ |

![Menu thao tác kiểm kê](/img/screenshots/asset/asset-inventory-03-action-menu.png)
