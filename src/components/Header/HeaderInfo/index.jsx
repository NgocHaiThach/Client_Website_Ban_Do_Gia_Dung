import React from 'react';
import './style.css';

function HeaderInfo(props) {
    return (
        <div className="grid wide">
            <div id="top" className="header-info">
                <p className="header-info_phone">Hotline : 1800-6926</p>
                <div className="header-info_about">
                    <a href="#" className="header-info_about-content header-location-js">Chọn điểm mua hàng <i
                        className="fas fa-chevron-down"></i></a>
                    <div className="header-info_about-content">Đăng nhập tài khoản <i className="fas fa-chevron-down"></i>

                        <ul className="header-info_about-list">
                            <li className="header-info_about-item">
                                <a href="#">Tài khoản của tôi</a>
                            </li>
                            <li className="header-info_about-item">
                                <a href="#">Đơn hàng của tôi</a>
                            </li>
                            <li className="header-info_about-item">
                                <a href="#">Thanh toán</a>
                            </li>
                            <li className="header-info_about-item">
                                <a href="#">Thanh toán</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default HeaderInfo;