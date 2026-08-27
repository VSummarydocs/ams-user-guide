---
title: "Quản lý Tài sản"
sidebar_label: "Quản lý tài sản"
sidebar_position: 1
---
# 📦 Quản lý Tài sản

> **Đường dẫn:** Menu bên trái → Tài sản cố định → Quản lý

---

## Màn hình chính

![Quản lý tài sản](/img/screenshots/asset/asset-manage-01-overview.png)

Đây là trang quản lý danh sách toàn bộ tài sản cố định trong đơn vị. Từ đây bạn có thể xem, thêm mới, tìm kiếm, sửa, xóa, báo hỏng và in mã QR cho tài sản.

### Thanh công cụ phía trên

| Nút | Dùng để làm gì? |
|-----|-----------------|
| **➕ Thêm tài sản** | Mở form để nhập tài sản mới vào hệ thống |
| **📥 Nhập Excel** | Nhập hàng loạt tài sản từ file Excel |
| **🔄 Tải lại** | Làm mới danh sách và xóa bộ lọc đang chọn |

### Tìm kiếm và lọc

| Cách tìm | Mô tả |
|----------|-------|
| **Tìm theo tên** | Gõ tên tài sản vào ô tìm kiếm, nhấn Enter |
| **Tìm theo mã** | Gõ mã tài sản (VD: `TS-2608-0001`) |
| **Lọc theo trạng thái** | Chọn: *Đang sử dụng / Sửa chữa / Hư hỏng / Đã thanh lý* |
| **🔍 Lọc nâng cao** | Lọc theo phòng ban, loại tài sản, nhà cung cấp |
| **📷 Quét QR** | Quét mã QR dán trên tài sản để tra cứu nhanh |

### Bảng danh sách tài sản

| Cột | Giải thích |
|-----|-----------|
| **Mã Tài sản** | Mã định danh duy nhất của tài sản |
| **Tên tài sản** | Tên đầy đủ |
| **Số lượng** | Số lượng |
| **Nguyên giá** | Giá trị ban đầu khi mua (VNĐ) |
| **Hao mòn lũy kế** | Tổng giá trị đã khấu hao |
| **Giá trị còn lại** | = Nguyên giá − Hao mòn lũy kế |
| **Phòng ban quản lý** | Phòng chịu trách nhiệm quản lý |
| **Phòng ban sử dụng** | Phòng đang trực tiếp sử dụng |
| **Trạng thái** | Tình trạng hiện tại (Đang dùng, Hư hỏng...) |
| **⋮** | Nút mở menu thao tác nhanh |

### Xem chi tiết tài sản

![Chi tiết tài sản](/img/screenshots/asset/asset-manage-03-detail.png)

Nhấn nút `⋮` → chọn **"Xem chi tiết"** để xem toàn bộ thông tin tài sản, bao gồm:
- Thông tin cơ bản: mã, tên, đơn vị tính, số lượng, trạng thái
- Phòng ban quản lý và phòng ban sử dụng
- Thông số kỹ thuật: hãng sản xuất, model, serial, năm sản xuất
- Thông tin hao mòn: số năm khấu hao, giá trị khấu hao, hao mòn lũy kế

:::tip[Mẹo]
Nhấn chọn 1 dòng tài sản trong bảng → phần bên dưới sẽ hiện **lịch sử thao tác** (ai đã làm gì với tài sản này).
:::


---

## Hướng dẫn các thao tác

### ➕ Thêm tài sản mới

![Form thêm tài sản](/img/screenshots/asset/asset-manage-02-create-form.png)

1. Nhấn nút **"➕ Thêm tài sản"** ở thanh công cụ phía trên.
2. Điền thông tin vào form — các ô có dấu **(\*)** là bắt buộc:

| Nhóm thông tin | Các trường cần nhập |
|----------------|-------------------|
| **Thông tin cơ bản** | Tên tài sản\*, Mã tài sản\*, Số lượng\*, Mô tả |
| **Giá trị & Thời gian** | Nguyên giá\*, Số năm sử dụng\*, Năm theo dõi |
| **Phân loại** | Loại tài sản\*, Phân loại sổ\*, Nhà cung cấp |
| **Đơn vị quản lý** | Phòng ban quản lý\*, Phòng ban sử dụng\* |
| **Bảo hành & Kiểm định** | Ngày hết bảo hành, Ngày kiểm định |
| **Đính kèm** | Ảnh tài sản, Tài liệu liên quan |

3. Nhấn **"Lưu"** để hoàn tất, hoặc **"Hủy"** nếu muốn bỏ qua.

### ✏️ Sửa thông tin tài sản

1. Nhấn nút `⋮` trên dòng tài sản cần sửa → chọn **"Sửa"**.
2. Cập nhật thông tin cần thay đổi.
3. Nhấn **"Lưu"** để lưu lại.

### 🗑️ Xóa tài sản

1. Nhấn nút `⋮` → chọn **"Xóa"**.
2. Nhấn **"Đồng ý"** khi hộp thoại xác nhận hiện ra.

:::warning[Lưu ý]
Không thể xóa tài sản đang có phiếu điều chuyển, sửa chữa hoặc kiểm kê liên quan. Cần hoàn thành hoặc hủy các phiếu đó trước.
:::


### 🔧 Báo hỏng tài sản

Khi phát hiện tài sản bị hỏng:

1. Nhấn nút `⋮` → chọn **"Báo hỏng"**.
2. Mô tả tình trạng hỏng hóc và lý do.
3. Nhấn **"Gửi"** — tài sản sẽ chuyển sang trạng thái **"Hư hỏng"** và tự động tạo yêu cầu sửa chữa.

### 📱 In mã QR

1. Nhấn nút `⋮` → chọn **"QR Code"**.
2. Mã QR hiện ra trên màn hình — nhấn **"In"** để in tem dán lên tài sản.

### 📷 Quét mã QR

1. Nhấn nút **"📷 Quét QR"** trên thanh công cụ.
2. Đưa mã QR trước camera → hệ thống sẽ tìm và hiển thị thông tin tài sản.

### 📥 Nhập tài sản từ Excel

![Nhập từ Excel](/img/screenshots/asset/asset-manage-06-import-excel.png)

1. Nhấn nút **"📥 Nhập Excel"** trên thanh công cụ.
2. Tải file mẫu Excel do hệ thống cung cấp, điền dữ liệu theo mẫu.
3. Kéo thả file hoặc nhấn chọn file để tải lên → nhấn **"Xác nhận"**.
4. Nếu có lỗi dữ liệu, hệ thống sẽ thông báo dòng nào bị lỗi để bạn sửa lại.

---

## Menu thao tác nhanh

![Menu thao tác](/img/screenshots/asset/asset-manage-04-action-menu.png)

Mỗi dòng tài sản đều có nút `⋮` (ba chấm). Nhấn vào sẽ hiện ra menu với các lựa chọn: Xem chi tiết, Sửa, Xóa, Báo hỏng, In QR...

## Lọc nâng cao

![Bộ lọc nâng cao](/img/screenshots/asset/asset-manage-05-advanced-filter.png)

Ngoài tìm kiếm cơ bản, bạn có thể nhấn **"🔍 Lọc nâng cao"** để lọc theo nhiều tiêu chí cùng lúc: phòng ban, loại tài sản, nhà cung cấp...

---

## Ai được làm gì?

| Thao tác | 🟢 Kế toán TS | 🔴 Giám đốc | 🟡 Trưởng phòng | 🔵 Nhân viên |
|----------|:-------------:|:-----------:|:---------------:|:------------:|
| Xem danh sách | ✅ Toàn bộ | ✅ Toàn bộ | ✅ Phòng phụ trách | ✅ Phòng mình |
| Thêm mới | ✅ | ❌ | ❌ | ❌ |
| Sửa thông tin | ✅ | ❌ | ❌ | ❌ |
| Xóa | ✅ | ❌ | ❌ | ❌ |
| Báo hỏng | ✅ | ✅ | ✅ | ✅ |
| Nhập Excel | ✅ | ❌ | ❌ | ❌ |
