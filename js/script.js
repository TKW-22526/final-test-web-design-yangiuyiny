// Lấy năm hiện tại
const namHienTai = document.getElementById("nam-hien-tai");
if (namHienTai) {
    namHienTai.textContent = new Date().getFullYear();
}
const cacLienKetChuaLam = document.querySelectorAll(".chua-lam");

cacLienKetChuaLam.forEach(function(lienKet) {
    lienKet.addEventListener("click", function(suKien) {
        suKien.preventDefault();
        alert("Chức năng này đang được xây dựng.");
    });
});

const oTimKiem = document.getElementById("o-tim-kiem");
const locTheLoai = document.getElementById("loc-the-loai");
const nutTimKiem = document.getElementById("nut-tim-kiem");
const nutThemSach = document.getElementById("nut-them-sach");
const danhSachSach = document.getElementById("danh-sach-sach");

//tìm kiếm sách
function timKiemSach() {
    const tuKhoa = oTimKiem.value.toLowerCase().trim();
    const theLoaiChon = locTheLoai.value.toLowerCase();
    const cacDong = danhSachSach.querySelectorAll("tr");

    cacDong.forEach(function(dong) {
        const tenSach = dong.cells[1].textContent.toLowerCase();
        const tacGia = dong.cells[2].textContent.toLowerCase();
        const theLoai = dong.cells[3].textContent.toLowerCase();

        const dungTuKhoa = tenSach.includes(tuKhoa) || tacGia.includes(tuKhoa);
        const dungTheLoai = theLoaiChon === "" || theLoai === theLoaiChon;

        if (dungTuKhoa && dungTheLoai) {
            dong.style.display = "";
        } else {
            dong.style.display = "none";
        }
    });
}

if (nutTimKiem && danhSachSach) {
    nutTimKiem.addEventListener("click", timKiemSach);
}

if (oTimKiem && danhSachSach) {
    oTimKiem.addEventListener("keyup", function(suKien) {
        if (suKien.key === "Enter") {
            timKiemSach();
        }
    });
}

if (locTheLoai && danhSachSach) {
    locTheLoai.addEventListener("change", timKiemSach);
}

if (nutThemSach && danhSachSach) {
    nutThemSach.addEventListener("click", function() {
        const maSach = prompt("Nhập mã sách:");
        if (maSach === null || maSach.trim() === "") {
            alert("Mã sách không được để trống.");
            return;
        }

        const cacDong = danhSachSach.querySelectorAll("tr");
        let maBiTrung = false;

        cacDong.forEach(function(dong) {
            const maHienTai = dong.cells[0].textContent.trim().toLowerCase();
            if (maHienTai === maSach.trim().toLowerCase()) {
                maBiTrung = true;
            }
        });

        if (maBiTrung) {
            alert("Mã sách đã tồn tại.");
            return;
        }

        const tenSach = prompt("Nhập tên sách:");
        if (tenSach === null || tenSach.trim() === "") {
            alert("Tên sách không được để trống.");
            return;
        }

        const tacGia = prompt("Nhập tên tác giả:");
        if (tacGia === null || tacGia.trim() === "") {
            alert("Tên tác giả không được để trống.");
            return;
        }

        const theLoai = prompt("Nhập thể loại:");
        if (theLoai === null || theLoai.trim() === "") {
            alert("Thể loại không được để trống.");
            return;
        }

        const soLuongNhap = prompt("Nhập số lượng sách:");
        const soLuong = Number(soLuongNhap);

        if (soLuongNhap === null || soLuongNhap.trim() === "" || !Number.isInteger(soLuong) || soLuong < 0) {
            alert("Số lượng phải là số nguyên không âm.");
            return;
        }

        let tenTrangThai;
        let lopTrangThai;

        if (soLuong > 0) {
            tenTrangThai = "Còn sách";
            lopTrangThai = "con-sach";
        } else {
            tenTrangThai = "Hết sách";
            lopTrangThai = "het-sach";
        }

        const dongMoi = document.createElement("tr");
        dongMoi.innerHTML = `
            <td>${maSach.trim()}</td>
            <td>${tenSach.trim()}</td>
            <td>${tacGia.trim()}</td>
            <td>${theLoai.trim()}</td>
            <td>${soLuong}</td>
            <td><span class="trang-thai ${lopTrangThai}">${tenTrangThai}</span></td>
            <td>
                <a href="chi-tiet-sach.html?ma=${maSach.trim()}" class="nut-xem">Xem</a>
                <button type="button" class="nut-sua">Sửa</button>
                <button type="button" class="nut-xoa">Xóa</button>
            </td>
        `;

        danhSachSach.appendChild(dongMoi);
        alert("Thêm sách thành công.");
    });
}

if (danhSachSach) {
    danhSachSach.addEventListener("click", function(suKien) {
        if (suKien.target.classList.contains("nut-xoa")) {
            const dongCanXoa = suKien.target.closest("tr");
            const tenSach = dongCanXoa.cells[1].textContent;

            const dongY = confirm("Bạn có chắc muốn xóa sách \"" + tenSach + "\" không?");

            if (dongY) {
                dongCanXoa.remove();
                alert("Đã xóa sách.");
            }
        }
    });
}

const oTimNguoiDoc = document.getElementById("o-tim-nguoi-doc");
const locTrangThaiNguoiDoc = document.getElementById("loc-trang-thai-nguoi-doc");
const nutTimNguoiDoc = document.getElementById("nut-tim-nguoi-doc");
const nutThemNguoiDoc = document.getElementById("nut-them-nguoi-doc");
const danhSachNguoiDoc = document.getElementById("danh-sach-nguoi-doc");

function timKiemNguoiDoc() {
    const tuKhoa = oTimNguoiDoc.value.toLowerCase().trim();
    const trangThaiChon = locTrangThaiNguoiDoc.value.toLowerCase();
    const cacDong = danhSachNguoiDoc.querySelectorAll("tr");

    cacDong.forEach(function(dong) {
        const maNguoiDoc = dong.cells[0].textContent.toLowerCase();
        const hoTen = dong.cells[1].textContent.toLowerCase();
        const trangThai = dong.cells[6].textContent.toLowerCase();
        const dungTuKhoa = maNguoiDoc.includes(tuKhoa) || hoTen.includes(tuKhoa);
        const dungTrangThai = trangThaiChon === "" || trangThai === trangThaiChon;

        if (dungTuKhoa && dungTrangThai) {
            dong.style.display = "";
        } else {
            dong.style.display = "none";
        }
    });
}

if (nutTimNguoiDoc && danhSachNguoiDoc) {
    nutTimNguoiDoc.addEventListener("click", timKiemNguoiDoc);
}

if (oTimNguoiDoc && danhSachNguoiDoc) {
    oTimNguoiDoc.addEventListener("keyup", function(suKien) {
        if (suKien.key === "Enter") {
            timKiemNguoiDoc();
        }
    });
}

if (locTrangThaiNguoiDoc && danhSachNguoiDoc) {
    locTrangThaiNguoiDoc.addEventListener("change", timKiemNguoiDoc);
}

if (nutThemNguoiDoc && danhSachNguoiDoc) {
    nutThemNguoiDoc.addEventListener("click", function() {
        const maNguoiDoc = prompt("Nhập mã người đọc:");
        if (maNguoiDoc === null || maNguoiDoc.trim() === "") {
            alert("Mã người đọc không được để trống.");
            return;
        }

        const cacDong = danhSachNguoiDoc.querySelectorAll("tr");
        let maBiTrung = false;

        cacDong.forEach(function(dong) {
            if (dong.cells[0].textContent.trim().toLowerCase() === maNguoiDoc.trim().toLowerCase()) {
                maBiTrung = true;
            }
        });

        if (maBiTrung) {
            alert("Mã người đọc đã tồn tại.");
            return;
        }

        const hoTen = prompt("Nhập họ và tên:");
        if (hoTen === null || hoTen.trim() === "") {
            alert("Họ tên không được để trống.");
            return;
        }

        const lop = prompt("Nhập lớp:");
        if (lop === null || lop.trim() === "") {
            alert("Lớp không được để trống.");
            return;
        }

        const soDienThoai = prompt("Nhập số điện thoại:");
        if (soDienThoai === null || soDienThoai.trim() === "") {
            alert("Số điện thoại không được để trống.");
            return;
        }

        const email = prompt("Nhập email:");
        if (email === null || email.trim() === "") {
            alert("Email không được để trống.");
            return;
        }

        const ngayDangKy = prompt("Nhập ngày đăng ký, ví dụ 14/07/2026:");
        if (ngayDangKy === null || ngayDangKy.trim() === "") {
            alert("Ngày đăng ký không được để trống.");
            return;
        }

        const trangThaiNhap = prompt("Nhập trạng thái: Hoạt động hoặc Bị khóa");
        if (trangThaiNhap === null || trangThaiNhap.trim() === "") {
            alert("Trạng thái không được để trống.");
            return;
        }

        let trangThai = "Hoạt động";
        let lopTrangThai = "hoat-dong";

        if (trangThaiNhap.trim().toLowerCase() === "bị khóa") {
            trangThai = "Bị khóa";
            lopTrangThai = "bi-khoa";
        }

        const dongMoi = document.createElement("tr");
        dongMoi.innerHTML = `
            <td>${maNguoiDoc.trim()}</td>
            <td>${hoTen.trim()}</td>
            <td>${lop.trim()}</td>
            <td>${soDienThoai.trim()}</td>
            <td>${email.trim()}</td>
            <td>${ngayDangKy.trim()}</td>
            <td><span class="trang-thai ${lopTrangThai}">${trangThai}</span></td>
            <td>
                <button type="button" class="nut-sua-nguoi-doc">Sửa</button>
                <button type="button" class="nut-xoa-nguoi-doc">Xóa</button>
            </td>
        `;

        danhSachNguoiDoc.appendChild(dongMoi);
        alert("Thêm người đọc thành công.");
    });
}

// Xử lý sự kiện xóa và sửa người đọc
if (danhSachNguoiDoc) {
    danhSachNguoiDoc.addEventListener("click", function(suKien) {
        if (suKien.target.classList.contains("nut-xoa-nguoi-doc")) {
            const dongCanXoa = suKien.target.closest("tr");
            const hoTen = dongCanXoa.cells[1].textContent;
            const dongY = confirm("Bạn có chắc muốn xóa người đọc \"" + hoTen + "\" không?");

            if (dongY) {
                dongCanXoa.remove();
                alert("Đã xóa người đọc.");
            }
        }

        if (suKien.target.classList.contains("nut-sua-nguoi-doc")) {
            const dongCanSua = suKien.target.closest("tr");
            const hoTenMoi = prompt("Nhập họ tên mới:", dongCanSua.cells[1].textContent);
            if (hoTenMoi === null || hoTenMoi.trim() === "") {
                return;
            }

            const lopMoi = prompt("Nhập lớp mới:", dongCanSua.cells[2].textContent);
            if (lopMoi === null || lopMoi.trim() === "") {
                return;
            }

            const soDienThoaiMoi = prompt("Nhập số điện thoại mới:", dongCanSua.cells[3].textContent);
            if (soDienThoaiMoi === null || soDienThoaiMoi.trim() === "") {
                return;
            }

            const emailMoi = prompt("Nhập email mới:", dongCanSua.cells[4].textContent);
            if (emailMoi === null || emailMoi.trim() === "") {
                return;
            }

            const trangThaiMoi = prompt("Nhập trạng thái: Hoạt động hoặc Bị khóa", dongCanSua.cells[6].textContent);
            if (trangThaiMoi === null || trangThaiMoi.trim() === "") {
                return;
            }

            dongCanSua.cells[1].textContent = hoTenMoi.trim();
            dongCanSua.cells[2].textContent = lopMoi.trim();
            dongCanSua.cells[3].textContent = soDienThoaiMoi.trim();
            dongCanSua.cells[4].textContent = emailMoi.trim();

            if (trangThaiMoi.trim().toLowerCase() === "bị khóa") {
                dongCanSua.cells[6].innerHTML = '<span class="trang-thai bi-khoa">Bị khóa</span>';
            } else {
                dongCanSua.cells[6].innerHTML = '<span class="trang-thai hoat-dong">Hoạt động</span>';
            }

            alert("Cập nhật người đọc thành công.");
        }
    });
}

// Xử lý mượn trả sách
const formMuonSach = document.getElementById("form-muon-sach");
const maPhieu = document.getElementById("ma-phieu");
const chonNguoiDoc = document.getElementById("chon-nguoi-doc");
const chonSach = document.getElementById("chon-sach");
const ngayMuon = document.getElementById("ngay-muon");
const hanTra = document.getElementById("han-tra");
const danhSachMuonTra = document.getElementById("danh-sach-muon-tra");

function dinhDangNgayVietNam(ngay) {
    const ngaySo = String(ngay.getDate()).padStart(2, "0");
    const thang = String(ngay.getMonth() + 1).padStart(2, "0");
    const nam = ngay.getFullYear();
    return ngaySo + "/" + thang + "/" + nam;
}

function chuyenChuoiThanhNgay(chuoiNgay) {
    const cacPhan = chuoiNgay.split("/");
    if (cacPhan.length !== 3) return null;

    const ngay = Number(cacPhan[0]);
    const thang = Number(cacPhan[1]);
    const nam = Number(cacPhan[2]);
    const ngayKetQua = new Date(nam, thang - 1, ngay);

    if (ngayKetQua.getDate() !== ngay || ngayKetQua.getMonth() !== thang - 1 || ngayKetQua.getFullYear() !== nam) {
        return null;
    }
    return ngayKetQua;
}

function ngayHopLe(chuoiNgay) {
    const mauNgay = /^\d{2}\/\d{2}\/\d{4}$/;
    return mauNgay.test(chuoiNgay) && chuyenChuoiThanhNgay(chuoiNgay) !== null;
}

function taoNgayMacDinh() {
    if (!ngayMuon || !hanTra) return;

    const homNay = new Date();
    const ngayHetHan = new Date();
    ngayHetHan.setDate(homNay.getDate() + 30);

    ngayMuon.value = dinhDangNgayVietNam(homNay);
    hanTra.value = dinhDangNgayVietNam(ngayHetHan);
}

function layNoiDungLuaChon(theSelect) {
    return theSelect.options[theSelect.selectedIndex].textContent;
}

taoNgayMacDinh();

if (formMuonSach && danhSachMuonTra) {
    formMuonSach.addEventListener("submit", function(suKien) {
        suKien.preventDefault();

        const maPhieuMoi = maPhieu.value.trim().toUpperCase();
        const ngayMuonNhap = ngayMuon.value.trim();
        const hanTraNhap = hanTra.value.trim();

        if (maPhieuMoi === "") {
            alert("Vui lòng nhập mã phiếu.");
            maPhieu.focus();
            return;
        }

        if (chonNguoiDoc.value === "") {
            alert("Vui lòng chọn người đọc.");
            chonNguoiDoc.focus();
            return;
        }

        if (chonSach.value === "") {
            alert("Vui lòng chọn sách.");
            chonSach.focus();
            return;
        }

        if (!ngayHopLe(ngayMuonNhap)) {
            alert("Ngày mượn phải đúng dạng dd/mm/yyyy.");
            ngayMuon.focus();
            return;
        }

        if (!ngayHopLe(hanTraNhap)) {
            alert("Hạn trả phải đúng dạng dd/mm/yyyy.");
            hanTra.focus();
            return;
        }

        const ngayMuonDate = chuyenChuoiThanhNgay(ngayMuonNhap);
        const hanTraDate = chuyenChuoiThanhNgay(hanTraNhap);

        if (hanTraDate < ngayMuonDate) {
            alert("Hạn trả phải bằng hoặc sau ngày mượn.");
            hanTra.focus();
            return;
        }

        const cacDong = danhSachMuonTra.querySelectorAll("tr");
        let maPhieuBiTrung = false;

        cacDong.forEach(function(dong) {
            const maHienTai = dong.cells[0].textContent.trim().toUpperCase();
            if (maHienTai === maPhieuMoi) maPhieuBiTrung = true;
        });

        if (maPhieuBiTrung) {
            alert("Mã phiếu đã tồn tại.");
            return;
        }

        const homNay = new Date();
        homNay.setHours(0, 0, 0, 0);

        let tenTrangThai = "Đang mượn";
        let lopTrangThai = "dang-muon";

        if (hanTraDate < homNay) {
            tenTrangThai = "Quá hạn";
            lopTrangThai = "qua-han";
        }

        const dongMoi = document.createElement("tr");
        dongMoi.innerHTML = `
            <td>${maPhieuMoi}</td>
            <td>${layNoiDungLuaChon(chonNguoiDoc)}</td>
            <td>${layNoiDungLuaChon(chonSach)}</td>
            <td>${ngayMuonNhap}</td>
            <td>${hanTraNhap}</td>
            <td>-</td>
            <td><span class="trang-thai-muon ${lopTrangThai}">${tenTrangThai}</span></td>
            <td><button type="button" class="nut-tra-sach">Trả sách</button></td>
        `;

        danhSachMuonTra.appendChild(dongMoi);
        alert("Lập phiếu mượn thành công.");

        maPhieu.value = "";
        chonNguoiDoc.value = "";
        chonSach.value = "";
        taoNgayMacDinh();
    });
}

if (danhSachMuonTra) {
    danhSachMuonTra.addEventListener("click", function(suKien) {
        if (suKien.target.classList.contains("nut-tra-sach")) {
            const dongCanTra = suKien.target.closest("tr");
            const tenSach = dongCanTra.cells[2].textContent;
            const dongY = confirm("Xác nhận trả sách \"" + tenSach + "\"?");

            if (dongY) {
                dongCanTra.cells[5].textContent = dinhDangNgayVietNam(new Date());
                dongCanTra.cells[6].innerHTML = '<span class="trang-thai-muon da-tra">Đã trả</span>';
                suKien.target.textContent = "Đã trả";
                suKien.target.className = "nut-da-tra";
                suKien.target.disabled = true;
                alert("Trả sách thành công.");
            }
        }
    });
}

//lịch sử
const oTimLichSu = document.getElementById("o-tim-lich-su");
const locTrangThaiLichSu = document.getElementById("loc-trang-thai-lich-su");
const nutTimLichSu = document.getElementById("nut-tim-lich-su");
const nutLamMoiLichSu = document.getElementById("nut-lam-moi-lich-su");
const danhSachLichSu = document.getElementById("danh-sach-lich-su");
const soLuongKetQua = document.getElementById("so-luong-ket-qua");
const khongCoLichSu = document.getElementById("khong-co-lich-su");

function timKiemLichSu() {
    const tuKhoa = oTimLichSu.value.toLowerCase().trim();
    const trangThaiChon = locTrangThaiLichSu.value.toLowerCase();
    const cacDong = danhSachLichSu.querySelectorAll("tr");
    let soDongHienThi = 0;

    cacDong.forEach(function(dong) {
        const maPhieu = dong.cells[0].textContent.toLowerCase();
        const nguoiDoc = dong.cells[1].textContent.toLowerCase();
        const tenSach = dong.cells[2].textContent.toLowerCase();
        const trangThai = dong.cells[6].textContent.toLowerCase();

        const dungTuKhoa =
            maPhieu.includes(tuKhoa) ||
            nguoiDoc.includes(tuKhoa) ||
            tenSach.includes(tuKhoa);

        const dungTrangThai =
            trangThaiChon === "" ||
            trangThai === trangThaiChon;

        if (dungTuKhoa && dungTrangThai) {
            dong.style.display = "";
            soDongHienThi++;
        } else {
            dong.style.display = "none";
        }
    });

    soLuongKetQua.textContent = soDongHienThi;

    if (soDongHienThi === 0) {
        khongCoLichSu.style.display = "block";
    } else {
        khongCoLichSu.style.display = "none";
    }
}

if (nutTimLichSu && danhSachLichSu) {
    nutTimLichSu.addEventListener("click", timKiemLichSu);
}

if (oTimLichSu && danhSachLichSu) {
    oTimLichSu.addEventListener("keyup", function(suKien) {
        if (suKien.key === "Enter") {
            timKiemLichSu();
        }
    });
}

if (locTrangThaiLichSu && danhSachLichSu) {
    locTrangThaiLichSu.addEventListener("change", timKiemLichSu);
}

if (nutLamMoiLichSu && danhSachLichSu) {
    nutLamMoiLichSu.addEventListener("click", function() {
        oTimLichSu.value = "";
        locTrangThaiLichSu.value = "";
        timKiemLichSu();
    });
}

//
const formLienHe = document.getElementById("form-lien-he");
const hoTenLienHe = document.getElementById("ho-ten-lien-he");
const emailLienHe = document.getElementById("email-lien-he");
const soDienThoaiLienHe = document.getElementById("so-dien-thoai-lien-he");
const chuDeLienHe = document.getElementById("chu-de-lien-he");
const noiDungLienHe = document.getElementById("noi-dung-lien-he");

if (formLienHe) {
    formLienHe.addEventListener("submit", function(suKien) {
        suKien.preventDefault();

        if (hoTenLienHe.value.trim() === "") {
            alert("Vui lòng nhập họ và tên.");
            hoTenLienHe.focus();
            return;
        }

        if (emailLienHe.value.trim() === "") {
            alert("Vui lòng nhập email.");
            emailLienHe.focus();
            return;
        }

        if (!emailLienHe.value.includes("@") || !emailLienHe.value.includes(".")) {
            alert("Email không hợp lệ.");
            emailLienHe.focus();
            return;
        }

        if (soDienThoaiLienHe.value.trim() === "") {
            alert("Vui lòng nhập số điện thoại.");
            soDienThoaiLienHe.focus();
            return;
        }

        if (chuDeLienHe.value === "") {
            alert("Vui lòng chọn chủ đề.");
            chuDeLienHe.focus();
            return;
        }

        if (noiDungLienHe.value.trim() === "") {
            alert("Vui lòng nhập nội dung liên hệ.");
            noiDungLienHe.focus();
            return;
        }

        alert("Thông tin liên hệ đã được ghi nhận.");
        formLienHe.reset();
    });
}

if (danhSachSach) {
    danhSachSach.addEventListener("click", function(suKien) {
        if (suKien.target.classList.contains("nut-sua")) {
            const dongCanSua = suKien.target.closest("tr");

            const tenSachMoi = prompt("Nhập tên sách:", dongCanSua.cells[1].textContent);
            if (tenSachMoi === null || tenSachMoi.trim() === "") {
                return;
            }

            const tacGiaMoi = prompt("Nhập tác giả:", dongCanSua.cells[2].textContent);
            if (tacGiaMoi === null || tacGiaMoi.trim() === "") {
                return;
            }

            const theLoaiMoi = prompt("Nhập thể loại:", dongCanSua.cells[3].textContent);
            if (theLoaiMoi === null || theLoaiMoi.trim() === "") {
                return;
            }

            const soLuongNhap = prompt("Nhập số lượng:", dongCanSua.cells[4].textContent);
            if (soLuongNhap === null) {
                return;
            }

            const soLuongMoi = Number(soLuongNhap);

            if (!Number.isInteger(soLuongMoi) || soLuongMoi < 0) {
                alert("Số lượng phải là số nguyên không âm.");
                return;
            }

            dongCanSua.cells[1].textContent = tenSachMoi.trim();
            dongCanSua.cells[2].textContent = tacGiaMoi.trim();
            dongCanSua.cells[3].textContent = theLoaiMoi.trim();
            dongCanSua.cells[4].textContent = soLuongMoi;

            if (soLuongMoi > 0) {
                dongCanSua.cells[5].innerHTML =
                    '<span class="trang-thai con-sach">Còn sách</span>';
            } else {
                dongCanSua.cells[5].innerHTML =
                    '<span class="trang-thai het-sach">Hết sách</span>';
            }

            alert("Cập nhật thông tin sách thành công.");
        }
    });
}