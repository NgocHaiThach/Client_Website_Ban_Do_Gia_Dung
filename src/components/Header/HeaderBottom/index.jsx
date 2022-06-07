import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteProductToCartByUser, getListCartByIdUser } from '../../../redux/cart/apiFunctionCart';
import './style.css';
import cookies from 'react-cookies';
import { useDispatch, useSelector } from 'react-redux';
import { formatPrice } from '../../../utils/format';
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";


function HeaderBottom(props) {
    const accessUser = cookies.load("userToken");
    // const [listCart, setListCart] = useState([]);

    const listCart = useSelector(state => state.cartList.list);

    const dispatch = useDispatch();

    useEffect(() => {
        getListCartByIdUser(dispatch, accessUser?.userId);
    }, []);

    const handleDelete = (idProduct) => {
        deleteProductToCartByUser(dispatch, accessUser?.userId, idProduct);
    }

    console.log(listCart)
    return (
        <div className="grid wide">
            <div className="header-bottom">
                <div className="header-bottom_logo">
                    {/* <img
                        src="https://tokyolife.vn/media/logo/stores/1/LOGO-TKL-01.png"
                        alt=""
                    /> */}
                    <Link className="header-bottom__logo-link" to="/">
                        OTTEL
                    </Link>
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
                    <button className="header-bottom_search-btn"> <AiOutlineSearch /></button>
                    {/* <div className="header-bottom_cart reponsive">
                        <button className="header-bottom_cart-icon header-bottom_cart-icon2">
                            <i className="fas fa-shopping-cart"></i>
                            <div className="header-bottom_cart-select header-bottom_cart-select2">
                                Bạn không có sản phẩm nào trong giỏ hàng của bạn.
                            </div>
                        </button>
                        <p className="header-bottom_cart-info header-bottom_cart-info2">0 sản phẩm
                            <br /><span>0 ₫</span>
                        </p>

                    </div> */}
                    <div className="header__cart">
                        <div className="header__cart-wrap icon-cart">
                            <FaShoppingCart className="header__cart-icon" />
                            {/* <i className="header__cart-icon fas fa-shopping-cart icon-cart"></i> */}
                            <span className="header__cart-notice">{listCart.length}</span>
                            {/* No cart: header__cart-list--no-cart */}
                            <div className="header__cart-list">
                                {/* <img src="./assets/img/no-cart.png" alt="" className="header__cart-no-cart-img" />
                                <span className="header__cart-list-no-cart-msg">
                                    Chưa có sản phẩm
                                </span> */}

                                <h4 className="header__cart-heading">Sản phẩm đã thêm</h4>
                                <ul className="header__cart-list-item">
                                    {/* CART ITEM */}
                                    {listCart.map((item, index) => (
                                        <li key={index} className="header__cart-item">
                                            <img src={item.avatar}
                                                alt="" className="header__cart-img" />
                                            <div className="header__cart-item-info">
                                                <div className="header__cart-item-head">
                                                    <h5 className="header__cart-item-name">{item.name}</h5>
                                                    <div className="header__cart-item-price-wrap">
                                                        <span className="header__cart-item-price">{formatPrice(+item.price)}</span>
                                                        <span className="header__cart-item-multiply">x</span>
                                                        <span className="header__cart-item-qnt">{item.quantity}</span>
                                                    </div>
                                                </div>
                                                <div className="header__cart-body">
                                                    <span className="header__cart-description">
                                                        {/* Phân loại hàng: Bạc */}
                                                    </span>
                                                    <span onClick={() => handleDelete(item.productId)} className="header__cart-item-remove">Xóa</span>
                                                </div>
                                            </div>
                                        </li>
                                    ))}

                                </ul>

                                <Link to="/cart" className="header__cart-view-cart  btn--primary btn__view-cart">
                                    Xem giỏ hàng
                                </Link>
                            </div>
                        </div>

                    </div>

                </div>

                {/* <div className="header-bottom_cart pc">
                    <button className="header-bottom_cart-icon header-bottom_cart-icon1">
                        <Link to='/cart'>
                            <i className="fas fa-shopping-cart icon-cart"></i>
                            <div className="header-bottom_cart-select header-bottom_cart-select1">
                                Bạn không có sản phẩm nào trong giỏ hàng của bạn.
                            </div>
                        </Link>
                    </button>
                    <p className="header-bottom_cart-info header-bottom_cart-info1">2 sản phẩm
                        <br /> <span>1.100.000 ₫</span>
                    </p>

                </div> */}
                {/* --------------------------------------------------- */}

            </div>
        </div>
    );
}

export default HeaderBottom;