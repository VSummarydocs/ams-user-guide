---
title: "Quy trình 4: Kiểm kê tài sản"
sidebar_label: "Kiểm kê tài sản"
sidebar_position: 4
---
# 📋 Quy trình 4: Kiểm kê tài sản

> **Mục đích:** Đối chiếu tài sản thực tế với dữ liệu đang được quản lý trên hệ thống và xử lý chênh lệch.
>
> **Tác nhân:** KTTS, Giám đốc, TCKT, Khoa/phòng.
>
> **Tài liệu gốc:** Mục 5.4.

---

## Sơ đồ quy trình

```mermaid
flowchart TD
    A["Bước 1: KTTS khởi tạo kỳ kiểm kê"] --> B{"Bước 2: Giám đốc phê duyệt"}
    B -->|Không duyệt| C["Trả lại / điều chỉnh kế hoạch"]
    B -->|Duyệt| D["TP TCKT duyệt & triển khai"]
    D --> E["Bước 3: Khoa/phòng thực hiện kiểm kê (quét QR)"]
    E --> F["Bước 4: Kiểm tra TS chưa ghi nhận"]
    F --> G["Bước 5: Khoa/phòng kết thúc kiểm kê"]
    G --> H["Bước 6: KTTS đối chiếu dữ liệu"]
    H --> I{"Kết quả đối chiếu?"}
    I -->|Khớp| J["Xác nhận hoàn thành"]
    I -->|Thừa/Thiếu/Chênh lệch| K["Khoa/phòng giải trình"]
    K --> L["Bước 7: KTTS xử lý chênh lệch"]

    style A fill:#e3f2fd
    style B fill:#fff3e0
    style E fill:#e8f5e9
    style J fill:#e8f5e9
    style K fill:#ffebee
```

---

## Chi tiết từng bước

### Bước 1 – Khởi tạo kỳ kiểm kê

Khi đến kỳ kiểm kê (theo tháng, quý hoặc kiểm kê đột xuất), KTTS tạo kỳ kiểm kê trên phần mềm.

**Thao tác trên phần mềm:**
- Vào mục **Kiểm kê** → **"➕ Tạo kỳ kiểm kê"**.
- Nhập tên, thời gian, phạm vi.
- Chọn thành viên tham gia kiểm kê.

### Bước 2 – Phê duyệt kỳ kiểm kê

Giám đốc xem xét:
- **Không duyệt** → Trả lại/điều chỉnh kế hoạch.
- **Duyệt** → Trưởng phòng TCKT duyệt và triển khai kiểm kê.

### Bước 3 – Thực hiện kiểm kê

Khoa/phòng thực hiện kiểm kê bằng cách:
1. Đăng nhập ứng dụng/phần mềm.
2. **Quét QR Code** gắn trên từng máy móc, trang thiết bị.
3. Ghi nhận tình trạng thực tế của tài sản.

### Bước 4 – Kiểm tra tài sản chưa ghi nhận

Trong quá trình kiểm kê, nếu phát hiện tài sản **chưa có mã máy/mã tài sản**, khoa/phòng cập nhật thông tin theo hướng dẫn của KTTS.

### Bước 5 – Xác nhận kết quả

Sau khi hoàn thành quét tất cả tài sản, khoa/phòng nhấn **"Kết thúc kiểm kê"**.

### Bước 6 – Đối chiếu dữ liệu

KTTS đối chiếu kết quả kiểm kê thực tế với dữ liệu quản lý tài sản:
- **Khớp** → Xác nhận hoàn thành.
- **Thừa/Thiếu/Chênh lệch** → Khoa/phòng thực hiện giải trình.

### Bước 7 – Xử lý chênh lệch

KTTS tổng hợp báo cáo kiểm kê và đề xuất phương án xử lý đối với tài sản thừa, thiếu hoặc sai lệch.

---

## Kết quả

Có kết quả kiểm kê chính thức và xác định được các chênh lệch giữa tài sản thực tế và dữ liệu quản lý.
