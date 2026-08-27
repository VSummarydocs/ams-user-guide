---
title: "Quản lý Phòng ban"
sidebar_label: "Quản lý phòng ban"
sidebar_position: 4
---
# 🏛️ Quản lý Phòng ban

> **Đường dẫn:** Menu bên trái → Hệ thống → Quản lý phòng ban
>
> **Quyền truy cập:** Yêu cầu quyền `department:readAll`

---

## Màn hình chính

![Quản lý phòng ban](/img/screenshots/system/departments-01-overview.png)

Giúp bạn quản lý danh sách phòng ban / khoa / bộ phận trong tổ chức. Thông tin phòng ban được sử dụng trong gán quyền, theo dõi tài sản theo đơn vị sử dụng, và xác định phạm vi duyệt đơn.

---

## Bảng dữ liệu

| Cột | Mô tả |
|-----|-------|
| **Mã phòng ban** | Mã định danh phòng ban (VD: `VT-TB`, `HCQT`, `CNTT`) |
| **Tên phòng ban** | Tên đầy đủ của phòng ban/khoa |
| **Mã viết tắt** | Ký hiệu viết tắt (dùng trong mã tài sản) |
| **Số nhân viên** | Số nhân viên thuộc phòng |
| **Mô tả** | Mô tả chức năng phòng ban |

---

## Thao tác

### Thêm mới phòng ban

1. Nhấn **"➕ Thêm"** trên thanh công cụ.
2. Điền thông tin trong form:

| Trường | Bắt buộc | Mô tả |
|--------|:--------:|-------|
| **Mã phòng ban** | ✅ | Mã định danh, duy nhất trong hệ thống |
| **Tên phòng ban** | ✅ | Tên đầy đủ |
| **Mã viết tắt** | ✅ | Ký hiệu viết tắt |
| **Mô tả** | ❌ | Mô tả chức năng phòng ban |

3. Nhấn **"Thêm mới"** để hoàn tất.

![Form thêm phòng ban](/img/screenshots/system/departments-02-create-form.png)

### Sửa phòng ban

1. Tại dòng cần sửa, nhấn `⋮` → chọn **"Sửa"**.
2. Chỉnh sửa thông tin cần thiết.
3. Nhấn **"Cập nhật"** để lưu thay đổi.

### Xóa phòng ban

1. Tại dòng cần xóa, nhấn `⋮` → chọn **"Xóa"**.
2. Một hộp thoại xác nhận sẽ hiện ra.
3. Nhấn **"Đồng ý"** để xác nhận xóa.

:::warning
Chỉ xóa được phòng ban **chưa có nhân viên hoặc tài sản** thuộc phòng này. Cần chuyển nhân viên/tài sản sang phòng khác trước khi xóa.
:::


---

## Phòng ban đặc thù

| Phòng ban | Mã | Vai trò đặc biệt |
|-----------|-----|-------------------|
| **Phòng Vật tư - Thiết bị** | `VT-TB` | Quản lý tài sản thiết bị y tế, duyệt đơn liên quan TBYT |
| **Phòng Hành chính - Quản trị** | `HCQT` | Quản lý tài sản nội thất, phương tiện, duyệt đơn liên quan |
| **Phòng Công nghệ Thông tin** | `CNTT` | Quản lý tài sản CNTT, phần mềm, duyệt đơn liên quan |

:::note
Trưởng phòng của các phòng đặc thù trên có quyền **phê duyệt** các đơn điều chuyển, sửa chữa, kiểm kê đối với tài sản thuộc lĩnh vực phụ trách của phòng mình.
:::


---

## Ai được làm gì?

| Thao tác | 🟢 Kế toán TS | 🔴 Giám đốc | 🟡 Trưởng phòng | 🔵 Nhân viên |
|----------|:--------------:|:-----------:|:---------------:|:------------:|
| Xem danh sách phòng ban | ✅ | ✅ | ✅ | ✅ |
| Thêm mới phòng ban | ✅ | ❌ | ❌ | ❌ |
| Sửa phòng ban | ✅ | ❌ | ❌ | ❌ |
| Xóa phòng ban | ✅ | ❌ | ❌ | ❌ |
