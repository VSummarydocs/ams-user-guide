---
title: "Tổng quan (Dashboard)"
sidebar_label: "Dashboard"
sidebar_position: 1
---
# 📊 Tổng quan (Dashboard)

> **Đường dẫn:** Menu bên trái → Tổng quan
>
> **Ai xem được?** Giám đốc, Trưởng phòng và Kế toán tài sản.
>
> 📌 Nhân viên sẽ không thấy trang này — sau đăng nhập bạn sẽ vào thẳng trang **Hồ sơ cá nhân**.

---

## Màn hình Dashboard

![Dashboard](/img/screenshots/dashboard/dashboard-01-overview.png)

Đây là trang đầu tiên bạn thấy sau khi đăng nhập. Trang này cho bạn cái nhìn tổng quan về toàn bộ tài sản trong đơn vị, gồm:

---

## 1. Các thẻ thống kê nhanh

Phía trên cùng là 4 thẻ số liệu:

| Thẻ | Cho bạn biết gì? |
|-----|------------------|
| **Tổng TSCĐ** | Tổng số tài sản cố định đang quản lý |
| **Tổng CCDC** | Tổng số công cụ dụng cụ đang quản lý |
| **Tổng nguyên giá** | Tổng giá trị ban đầu của tất cả tài sản (VNĐ) |
| **Giá trị còn lại** | Giá trị thực tế hiện tại sau khi trừ hao mòn (VNĐ) |

> 💡 Các con số lớn sẽ được viết tắt cho dễ đọc (VD: 1.2 Tỷ, 500 Tr).

---

## 2. Biểu đồ tình trạng tài sản (Donut Chart)

Hai biểu đồ tròn phân tích trạng thái:

### Biểu đồ TSCĐ
| Trạng thái | Màu | Ý nghĩa |
|-----------|-----|---------|
| Đang sử dụng | 🔵 Xanh dương | Tài sản đang hoạt động bình thường |
| Đang sửa chữa | 🟡 Vàng | Tài sản đang trong quá trình bảo dưỡng/sửa chữa |
| Hư hỏng | 🔴 Đỏ | Tài sản bị hư hỏng chưa xử lý |
| Đã thanh lý | ⚪ Xám | Tài sản đã được thanh lý, loại bỏ |

### Biểu đồ CCDC
Cùng cấu trúc trạng thái như biểu đồ TSCĐ.

---

## 3. Biểu đồ so sánh giá trị

Biểu đồ cột so sánh **nguyên giá** giữa:
- Tài sản cố định (TSCĐ)
- Công cụ dụng cụ (CCDC)
- Giá trị còn lại tổng

---

## 4. Yêu cầu chờ duyệt

> **Chỉ hiển thị cho:** Giám đốc, Admin, KTTS, Trưởng phòng VT-TB/HCQT/CNTT.

![Tổng quan với sidebar](/img/screenshots/dashboard/dashboard-02-full.png)

Hiển thị số lượng yêu cầu đang chờ xử lý:

| Loại yêu cầu | Biểu tượng | Mô tả |
|--------------|-----------|-------|
| **Yêu cầu điều chuyển** | 🔄 | Số đơn điều chuyển tài sản chờ duyệt |
| **Đề nghị sửa chữa** | 🛡️ | Số đơn sửa chữa/bảo dưỡng chờ duyệt |
| **Yêu cầu kiểm định** | 📋✓ | Số yêu cầu kiểm định thiết bị chờ duyệt |
| **Yêu cầu kiểm kê** | 📋 | Số kỳ kiểm kê chờ duyệt |
| **Đề xuất mua thiết bị** | 🛒 | Số đề xuất mua chờ duyệt |

> **Nhấn vào từng mục** sẽ chuyển đến trang quản lý tương ứng để xem chi tiết và xử lý.

**Quy tắc màu cảnh báo:**
- **Xanh lá** (0 yêu cầu): Không có yêu cầu chờ xử lý
- **Vàng** (1–5 yêu cầu): Cần lưu ý xử lý sớm
- **Đỏ** (trên 5 yêu cầu): Cần xử lý gấp

---

## 5. Cảnh báo

### Cảnh báo khấu hao
Danh sách tài sản có tỷ lệ khấu hao cao, cần theo dõi hoặc đánh giá lại.

### Cảnh báo sửa chữa quá hạn
Danh sách tài sản đang sửa chữa vượt quá thời gian dự kiến.

---

## Phân quyền xem Dashboard

| Vai trò | Xem thẻ tổng quan | Xem biểu đồ | Xem chờ duyệt | Xem cảnh báo |
|---------|-------------------|-------------|---------------|-------------|
| 🔴 Giám đốc | ✅ | ✅ | ✅ | ✅ |
| 🟡 Trưởng phòng VT-TB/HCQT/CNTT | ✅ | ✅ | ✅ | ✅ |
| 🟡 Trưởng phòng khác | ✅ | ✅ | ❌ | ❌ |
| 🟢 Kế toán tài sản | ✅ | ✅ | ✅ | ✅ |
| 🔵 Nhân viên | ❌ Không truy cập Dashboard | — | — | — |

![Dashboard - phần dưới](/img/screenshots/dashboard/dashboard-03-scrolled.png)
