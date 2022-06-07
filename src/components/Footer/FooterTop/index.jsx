import React from 'react';
import './style.css';
import { FaChevronUp } from "react-icons/fa";

function FooterTop(props) {
    return (
        <div className="footer-top">
            <div className="grid wide">
                <a href="#top" className="btn btn-footer"><FaChevronUp /></a>
                {/* <img src="https://tokyolife.vn/media/wysiwyg/footer/logo_166x21.png" alt="tokyolife"
                    className="footer-top_logo" /> */}
                <p className="footer-top_sub">Ottel là cửa hàng bán lẻ đồ gia dụng chính hãng
                    các thương hiệu Nhật Bản: KAI, Inomata, Ebisu, Lec, ORP Tokyo, Momotani, Naturie, Rohto, DHC,
                    Orihiro, Naive, Aprica, Kose (Dòng Softymo), Shiseido (Dòng Senka,
                    Anessa), KAO, Rosette, Naive, Ebisu, Unicharm, Tsubaki, Himawari, Rocket, Gunze-Sabrina, Regart…
                </p>
            </div>
        </div>
    );
}

export default FooterTop;