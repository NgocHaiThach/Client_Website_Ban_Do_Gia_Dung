import React from 'react';
import './style.css';

function FooterTop(props) {
    return (
        <div className="footer-top">
            <div className="grid wide">
                <a href="#top" className="btn btn-footer"><i className="fas fa-chevron-up"></i></a>
                <img src="https://tokyolife.vn/media/wysiwyg/footer/logo_166x21.png" alt="tokyolife"
                    className="footer-top_logo" />
                <p className="footer-top_sub">TokyoLife là cửa hàng bán lẻ đồ gia dụng, hóa mỹ phẩm, phụ kiện chính hãng
                    các thương hiệu Nhật Bản: KAI, Inomata, Ebisu, Lec, ORP Tokyo, Momotani, Naturie, Rohto, DHC,
                    Orihiro, Naive, Aprica, Kose (Dòng Softymo), Shiseido (Dòng Senka,
                    Anessa), KAO, Rosette, Naive, Ebisu, Unicharm, Tsubaki, Himawari, Rocket, Gunze-Sabrina, Regart…
                    Nước hoa TokyoLife sản xuất tại Pháp. Hóa phẩm lành tính TokyoLife sản xuất tại Nhật Bản. Phụ
                    kiện giày, túi, ví, balo và thời trang
                    hiệu TokyoNow, TokyoBasic, TokyoSmart, TokyoSecret, In The Now và nhiều thương hiệu thời trang,
                    phụ kiện khác sản xuất tại Việt Nam, Trung Quốc, Thái Lan…</p>
            </div>
        </div>
    );
}

export default FooterTop;