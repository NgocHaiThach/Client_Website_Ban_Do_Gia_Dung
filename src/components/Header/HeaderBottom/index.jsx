import React, { useEffect, useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { deleteProductToCartByUser, getListCartByIdUser } from '../../../redux/cart/apiFunctionCart';
import './style.css';
import cookies from 'react-cookies';
import { useDispatch, useSelector } from 'react-redux';
import { FormatInput, formatPrice } from '../../../utils/format';
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import callApi from '../../../utils/callApi';
import { getListSearchProduct } from '../../../redux/searchProduct/apiFunctionSearchProduct';



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

    const [listToSearch, setListToSearch] = useState([]);
    const [search, setSearch] = useState('');
    const [input, setInput] = useState('');
    const typingTimoutRef = useRef(null);

    const onSearch = (e) => {
        const input = e.target.value
        setSearch(input)

        if (typingTimoutRef.current) {
            clearTimeout(typingTimoutRef.current)
        }

        typingTimoutRef.current = setTimeout(() => {
            const formvalues = {
                search: input,
            }
            if (handleSearch) {
                handleSearch(formvalues)
            }
        }, 300)

    }

    const history = useHistory();

    //xu ly search product
    const handleSearch = (input) => {
        const val = (input.search)
        // const res = await callApi("/products/search", "POST", {
        //     content: val
        // })
        if (val !== '') {
            getListSearchProduct(dispatch, val);
            setInput(input);
            history.push(`/search/${val}`);
        }
    }
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
                    <input
                        className="header-bottom_search-input"
                        type="text" placeholder="T??m ki???m..."
                        value={search}
                        onChange={onSearch}

                    />
                    <button className="header-bottom_search-btn"> <AiOutlineSearch /></button>

                    <div className="header__cart">
                        <div className="header__cart-wrap icon-cart">
                            <FaShoppingCart className="header__cart-icon" />

                            {listCart.length <= 0 ? null : <span className="header__cart-notice">{listCart.length}</span>}

                            {/* No cart: header__cart-list--no-cart */}

                            <div className="header__cart-list">
                                {listCart.length <= 0 ?
                                    <>
                                        <img src="https://thumbs.dreamstime.com/b/shopping-cart-isolated-white-background%C3%AF%C2%BC%C5%93there-no-data-shopping-cart%C3%AF%C2%BC%C5%93small-bee-shopping-cart-empty-vector-122894182.jpg" alt="" className="header__cart-no-cart-img" />
                                        {/* <span className="header__cart-list-no-cart-msg">
                                            Ch??a c?? s???n ph???m
                                        </span> */}
                                    </>
                                    :
                                    <>
                                        <h4 className="header__cart-heading">S???n ph???m ???? th??m</h4>
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
                                                                {/* Ph??n lo???i h??ng: B???c */}
                                                            </span>
                                                            <span onClick={() => handleDelete(item.productId)} className="header__cart-item-remove">X??a</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>

                                        <Link to="/cart" className="header__cart-view-cart  btn--primary btn__view-cart">
                                            Xem gi??? h??ng
                                        </Link>
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderBottom;