const duLieuChiTietSach = {
    S001: {
        ma: "S001",
        ten: "Cấu trúc dữ liệu và thuật toán: Phân tích và cài đặt trên C/C++ (Tập 1)",
        tacGia: "Trần Thông Quế",
        theLoai: "Công nghệ thông tin",
        nhaXuatBan: "Nhà xuất bản Thông tin và Truyền thông",
        namXuatBan: 2023,
        soLuong: 6,
        viTri: "A01",
        bia: "../assets/images/cntt001.jpg",
        moTa: "Cấu trúc dữ liệu và Thuật toán là môn học bắt buộc đối với sinh viên ngành Công nghệ thông tin."
    },

    S002: {
        ma: "S002",
        ten: "Lập trình Python cơ bản, cho người mới bắt đầu",
        tacGia: "Nguyễn Ngọc Tân",
        theLoai: "Công nghệ thông tin",
        nhaXuatBan: "NXB Dân trí",
        namXuatBan: 2023,
        soLuong: 3,
        viTri: "A02",
        bia: "../assets/images/cntt002.jpg",
        moTa: "Sách giới thiệu những kiến thức cơ bản về Python, cách lập trình và áp dụng vào các bài toán thực tế."
    },

    S003: {
        ma: "S003",
        ten: "Sách Chat GPT - Ứng Dụng Trí Tuệ Nhân Tạo Trong Công Việc",
        tacGia: "Dr. Gleb Tsipursky",
        theLoai: "Công nghệ thông tin",
        nhaXuatBan: "Nhà xuất bản Thế Giới",
        namXuatBan: 2025,
        soLuong: 4,
        viTri: "B01",
        bia: "../assets/images/de-men-phieu-luu-ky.jpg",
        moTa: "Sách hướng dẫn cách sử dụng Chat GPT và các công cụ trí tuệ nhân tạo khác để nâng cao hiệu suất làm việc và sáng tạo."
    },

    S004: {
        ma: "S004",
        ten: "Sách IELTS 4 Kỹ Năng Lộ Trình Cho Người Mới Bắt Đầu Đến Band 5.0 (Tập 1)",
        tacGia: "IELTS Fighter",
        theLoai: "Tiếng Anh",
        nhaXuatBan: "Nhà xuất bản Khoa học",
        namXuatBan: 2023,
        soLuong: 0,
        viTri: "A03",
        bia: "../assets/images/eng001.jpg",
        moTa: "Sách hướng dẫn người học IELTS cải thiện kỹ năng tiếng Anh và chuẩn bị cho kỳ thi."
    },
    S005: {
        ma: "S005",
        ten: "Sách IELTS 4 Kỹ Năng Lộ Trình Cho Người Mới Bắt Đầu Đến Band 5.0 (Tập 2)",
        tacGia: "IELTS Fighter",
        theLoai: "Tiếng Anh",
        nhaXuatBan: "Nhà xuất bản Khoa học",
        namXuatBan: 2023,
        soLuong: 2,
        viTri: "A04",
        bia: "../assets/images/eng002.jpg",
        moTa: "Sách hướng dẫn người học IELTS cải thiện kỹ năng tiếng Anh và chuẩn bị cho kỳ thi."
    },
    S006: {
        ma: "S006",
        ten: "Sách Hai Đứa Trẻ",
        tacGia: "Thạch Lam",
        theLoai: "Văn học",
        nhaXuatBan: "Nhà Xuất Bản Văn Học",
        namXuatBan: 2026,
        soLuong: 5,
        viTri: "A05",
        bia: "../assets/images/vh001.jpg",
        moTa: "Tác phẩm kể về cuộc sống của hai đứa trẻ trong một làng quê Việt Nam, phản ánh những khó khăn và niềm vui trong cuộc sống hàng ngày."
    },

    S007: {
        ma: "S007",
        ten: "Lão Hạc",
        tacGia: "Nam Cao",
        theLoai: "Văn học",
        nhaXuatBan: "Nhà Xuất Bản Văn Học",
        namXuatBan: 2022,
        soLuong: 4,
        viTri: "A05",
        bia: "../assets/images/vh002.jpg",
        moTa: "Tác phẩm kể về cuộc sống của Lão Hạc, một người nông dân nghèo, và những khó khăn mà ông phải đối mặt trong xã hội."
    },
    S008: {
        ma: "S008",
        ten: "Vợ Nhặt",
        tacGia: "Kim Lân",
        theLoai: "Văn học",
        nhaXuatBan: "Nhà Xuất Bản Văn Học",
        namXuatBan: 2022,
        soLuong: 8,
        viTri: "A05",
        bia: "../assets/images/vh003.jpg",
        moTa: "Tập truyện ngắn “Vợ nhặt” tập hợp những truyện ngắn đặc sắc nhất của Kim Lân – một cây bút truyện ngắn vững vàng, viết về cuộc sống và con người ở nông thôn bằng tình cảm, tâm hồn của một người vốn là con đẻ của đồng ruộng."
    }
};

const thamSoDuongDan = new URLSearchParams(window.location.search);
const maSachCanXem = (thamSoDuongDan.get("ma") || "S001").toUpperCase();
const sachChiTiet = duLieuChiTietSach[maSachCanXem];

if (sachChiTiet) {
    document.getElementById("ma-sach-chi-tiet").textContent = sachChiTiet.ma;
    document.getElementById("ten-sach-chi-tiet").textContent = sachChiTiet.ten;
    document.getElementById("tac-gia-chi-tiet").textContent = sachChiTiet.tacGia;
    document.getElementById("the-loai-chi-tiet").textContent = sachChiTiet.theLoai;
    document.getElementById("nha-xuat-ban-chi-tiet").textContent = sachChiTiet.nhaXuatBan;
    document.getElementById("nam-xuat-ban-chi-tiet").textContent = sachChiTiet.namXuatBan;
    document.getElementById("so-luong-chi-tiet").textContent = sachChiTiet.soLuong;
    document.getElementById("vi-tri-chi-tiet").textContent = sachChiTiet.viTri;
    document.getElementById("mo-ta-sach-chi-tiet").textContent = sachChiTiet.moTa;

    const biaSach = document.getElementById("bia-sach-chi-tiet");
    biaSach.src = sachChiTiet.bia;
    biaSach.alt = sachChiTiet.ten;

    const trangThaiChiTiet = document.getElementById("trang-thai-chi-tiet");
    const nutMuonSach = document.getElementById("nut-muon-sach");

    if (sachChiTiet.soLuong > 0) {
        trangThaiChiTiet.textContent = "Còn sách";
        trangThaiChiTiet.className = "trang-thai-chi-tiet con-sach";
        nutMuonSach.href = "muon-tra.html?sach=" + sachChiTiet.ma;
    } else {
        trangThaiChiTiet.textContent = "Hết sách";
        trangThaiChiTiet.className = "trang-thai-chi-tiet het-sach";
        nutMuonSach.textContent = "Không thể mượn";
        nutMuonSach.classList.add("nut-khong-muon");
        nutMuonSach.removeAttribute("href");
    }
} else {
    alert("Không tìm thấy sách có mã " + maSachCanXem);
    window.location.href = "quan-ly-sach.html";
}