import React from 'react';
import './style.css';

function HeaderBottom(props) {
    return (
        <div className="grid wide">
            <div className="header-bottom">
                <div className="header-bottom_logo">
                    {/* <img
                        src="https://tokyolife.vn/media/logo/stores/1/LOGO-TKL-01.png"
                        alt=""
                    /> */}
                    OTTEL
                </div>
                <div className="header-bottom_search">
                    <div className="header-bottom_menu">
                        <div className="header-bottom_menu-icon">
                            <i className="fas fa-bars"></i>
                        </div>
                        <div className="header-bottom_menu-list">
                            <ul className="nav-list_responsive">
                                <div className="nav-list_responsive-icon">
                                    <i className="fas fa-times"></i>
                                </div>
                                <li className="nav-itemRespponsive">TRANG CHỦ
                                </li>
                                <li className="nav-itemRespponsive">TRẺ EM
                                </li>
                                <li className="nav-itemRespponsive">NAM
                                </li>
                                <li className="nav-itemRespponsive">NỮ
                                </li>
                                <li className="nav-itemRespponsive">TIÊU DÙNG
                                </li>
                                <li className="nav-itemRespponsive">LÀM ĐẸP
                                </li>
                                <li className="nav-itemRespponsive">MADE BY ANGELS
                                </li>
                                <li className="nav-itemRespponsive">COMBO
                                </li>
                                <li className="nav-itemRespponsive">TIN TỨC
                                </li>
                            </ul>
                        </div>



                    </div>
                    <input
                        className="header-bottom_search-input"
                        type="text" placeholder="Tìm kiếm..."
                    />
                    <button className="header-bottom_search-btn"><i className="fas fa-search"></i></button>
                    <div className="header-bottom_cart reponsive">
                        <button className="header-bottom_cart-icon header-bottom_cart-icon2">
                            <i className="fas fa-shopping-cart"></i>
                            <div className="header-bottom_cart-select header-bottom_cart-select2">
                                Bạn không có sản phẩm nào trong giỏ hàng của bạn.
                            </div>
                        </button>
                        <p className="header-bottom_cart-info header-bottom_cart-info2">0 sản phẩm
                            <br /> <span>0 ₫</span>
                        </p>

                    </div>
                </div>

                <div className="header-bottom_cart pc">
                    <button className="header-bottom_cart-icon header-bottom_cart-icon1">
                        <i className="fas fa-shopping-cart"></i>
                        <div className="header-bottom_cart-select header-bottom_cart-select1">
                            Bạn không có sản phẩm nào trong giỏ hàng của bạn.
                        </div>
                    </button>
                    <p className="header-bottom_cart-info header-bottom_cart-info1">0 sản phẩm
                        <br /> <span>0 ₫</span>
                    </p>

                </div>

            </div>
        </div>
    );
}

export default HeaderBottom;