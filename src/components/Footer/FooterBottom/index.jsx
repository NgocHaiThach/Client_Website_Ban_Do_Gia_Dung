import React from 'react';
import './style.css';

function FooterBottom(props) {
    return (
        <div className="footer-bottom">
            <div className="grid wide">
                <div className="footer-bottom_about">
                    <h3>© 2022 OTTEL.VN</h3>
                    <p>Powered by <a href="https://tokyolife.vn/">ottel.vn</a></p>
                    <div className="footer-bottom_about-pay">
                        <img src="https://tokyolife.vn/media/wysiwyg/payment/httt_2_.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterBottom;