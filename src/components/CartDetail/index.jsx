import React, { useState } from 'react';
import cookies from 'react-cookies';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addQuantityProductToCartByUser, deleteProductToCartByUser, minusQuantityProductToCartByUser } from '../../redux/cart/apiFunctionCart';
import { formatPrice } from '../../utils/format';
import './style.css';


function CartDetail(props) {

    //lấy gải hàng tư store 
    const listCart = useSelector(state => state.cartList.list);

    //tính tổng giỏ hàng
    const totalPrice = listCart.reduce(function (total, item) {
        return total + item.itemPrice;
    }, 0);

    // lấy thông tin user
    const accessUser = cookies.load("userToken");
    const dispatch = useDispatch();

    //set số lượng từng item
    let [quantity, setQuantity] = useState(1);

    //giảm số lượng
    let onDecreaseQuantity = (item) => {
        quantity -= 1;
        setQuantity(quantity)
        if (minusQuantityProductToCartByUser) minusQuantityProductToCartByUser(dispatch, accessUser.userId, item.productId, item.quantity)
    }

    //tăng số lượng
    const onAddQuantity = (item) => {
        quantity += 1;
        setQuantity(quantity)
        if (addQuantityProductToCartByUser) addQuantityProductToCartByUser(dispatch, accessUser.userId, item.productId, item.quantity)
    }

    //xử lý xóa item
    const handleDelete = (idProduct) => {
        deleteProductToCartByUser(dispatch, accessUser.userId, idProduct);
    }

    return (
        <>
            <div className="grid wide">
                <div className="shopping-cart">
                    <div className="row">
                        <div className="col l-12 m-12 c-12">
                            <div className="column-labels">
                                <label className="col l-3 m-3 c-3 column-labels__image hide-on-mobile">Giỏ hàng</label>
                                <label className="col l-3 m-3 c-3 column-labels__details">Sản phẩm</label>
                                <label className="col l-2 m-2 c-2 column-labels__price">Đơn giá</label>
                                <label className="col l-1 m-1 c-1 column-labels__quantity">Số lượng</label>
                                <label className="col l-1 m-1 c-1 column-labels__removal"></label>
                                <label className="col l-2 m-2 c-2 column-labels__line-price">Tổng</label>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col l-12 m-12 c-12">
                            {listCart.map((item, index) => (
                                <div key={index}>
                                    <div className="product-item">
                                        <div className="col l-3 product-item__image hide-on-mobile">
                                            <img src={item.avatar} alt="img-item" />
                                        </div>
                                        <div className="col l-3 product-details">
                                            <span className="product-item__title">{item.name}</span>
                                            {/* <p className="product-item__description">Size: M</p> */}
                                        </div>
                                        <div className="col l-2 product-item__price">{formatPrice(+item.price)}đ</div>
                                        <div className="col l-1 product-item__quantity">
                                            <div className="product-quantity__number">
                                                <button
                                                    className="product-quantity__number-minus"
                                                    onClick={() => { onDecreaseQuantity(item) }}

                                                >-
                                                </button>
                                                <input className="product-quantity__number-text" type="text" value={item.quantity} />

                                                <button
                                                    className="product-quantity__number-plus"
                                                    onClick={() => { onAddQuantity(item) }}

                                                > +
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col l-1 product-item__removal">
                                            <span
                                                className="remove__product-item"
                                                onClick={() => handleDelete(item.productId)}
                                            >
                                                Xoá
                                            </span>
                                        </div>
                                        <div className="col l-2 product-item__line-price">{formatPrice((+item.price) * (+item.quantity))}đ  </div>
                                    </div>

                                    <div className="border-product"></div>
                                </div>
                            ))}


                        </div>
                    </div>

                    <div className="row">
                        <div className="col l-12 m-12 c-12">
                            <div className="totals">
                                <div className="totals-item">
                                    <label>Tổng:</label>
                                    <div className="totals-value" >{formatPrice(totalPrice)}</div>
                                </div>

                                <div className="totals-item">
                                    <label>Giao Hàng:</label>
                                    <div className="totals-value" >50.000đ</div>
                                </div>
                                <div className="totals-item totals-item-total">
                                    <label>Tổng Cộng:</label>
                                    <div className="totals-value total-grand">{formatPrice(totalPrice)}</div>
                                </div>
                                <button className="btn col l-12 checkout">
                                    <Link to={`/payment/${accessUser.userId}`} style={{ textDecoration: 'none', color: 'white' }}>
                                        Thanh Toán
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default CartDetail;