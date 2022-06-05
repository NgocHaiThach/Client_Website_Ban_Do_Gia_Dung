import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { formatPrice } from '../../../utils/format';
import { Toast } from 'react-bootstrap';


function SubBill(props) {
    //get listCart from store
    const [show, setShow] = useState(false);
    const listCart = useSelector(state => state.cartList.list);

    const [typePay, setTypePay] = useState(1);

    const typepays = [
        {
            id: 1,
            name: 'Trả tiền mặt khi nhận hàng'
        },
        {
            id: 2,
            name: 'Chuyển khoản ngân hàng'
        },
    ];

    //total Price of list
    const totalPriceTemp = listCart.reduce(function (total, item) {
        return total + item.itemPrice;
    }, 0);
    return (
        <>
            <div className="payment__info">
                <div className="payment__info-title">
                    Đơn hàng của bạn
                </div>
                <div className="payment__info-list">
                    <div className="payment__info-list__title">
                        <div className="payment__info-list__title-name">
                            Sản phẩm
                        </div>
                        <div className="payment__info-list__title-price">
                            Tạm tính
                        </div>
                    </div>
                    {listCart.map((item, index) => (
                        <div key={index} className="payment__info-list__item">
                            <div className="payment__info-list__item-name">
                                {item.name} x {item.quantity}
                            </div>
                            <div className="payment__info-list__item-price">
                                {formatPrice(item.itemPrice)}đ
                            </div>
                        </div>
                    ))}
                    <div className="payment__info-list__total">
                        <div className="payment__info-list__total-title">
                            Tạm tính
                        </div>
                        <div className="payment__info-list__total-price">
                            {formatPrice(totalPriceTemp)}đ
                        </div>
                    </div>

                    <div className="payment__info-list__ship">
                        <div className="payment__info-list__ship-title">
                            Giao hàng
                        </div>
                        <div className="payment__info-list__ship-price">
                            15.000đ
                        </div>
                    </div>

                    <div className="payment__info-list__total">
                        <div className="payment__info-list__total-title toltal__price">
                            Tổng
                        </div>
                        <div className="payment__info-list__ship-price toltal__price">
                            {/* {formatPrice(totalPrice)}đ */}
                        </div>
                    </div>
                </div>
                <div className="payment__info-type">
                    {typepays.map(type => (
                        <div key={type.id} className="payment__info-type__cash">
                            <input
                                onChange={() => setTypePay(type.id)}
                                checked={typePay === type.id}
                                type="radio" />
                            <span>{type.name}</span>
                        </div>
                    ))}

                </div>

                <div
                    // onClick={handleSubmit(onSubmit)}
                    className="payment__info-button">
                    {/* to={`/bill/${idUser}`} */}
                    <button
                        className="btn-confirm"
                        onClick={() => setShow(true)}
                    >
                        Đặt Hàng
                    </button>
                </div>
                <div className="payment__info-thanks">
                    Cảm ơn quý khách đã ủng hộ Ottel shop!
                </div>
            </div>
            <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                <Toast.Header>
                    <img
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt=""
                    />
                    <strong className="me-auto">Bootstrap</strong>
                    <small>11 mins ago</small>
                </Toast.Header>
                <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
            </Toast>
        </>
    );
}

export default SubBill;