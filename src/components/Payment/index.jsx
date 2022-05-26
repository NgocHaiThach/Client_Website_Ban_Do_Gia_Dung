import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useRef, useState } from 'react';
import cookies from 'react-cookies';
import { useSelector } from 'react-redux';
import callApi from '../../utils/callApi';
import { formatPrice } from '../../utils/format';
import './style.css';
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import TextField from '../TextField';
import { Col, Container, Row, Accordion } from "react-bootstrap";




function Payment(props) {

    const schema = yup.object().shape({
        name: yup.string().required().max(50),
        phone: yup.string().required().min(10).max(10),
        email: yup.string().required(),
        province: yup.string().required(),
        district: yup.string().required(),
        ward: yup.string().required(),
        detail: yup.string().required(),
        note: yup.string()
    }).required();

    // use React hook form
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    // get info user from cookies
    const accessUser = cookies.load("userToken");

    //get listCart from store
    const listCart = useSelector(state => state.cartList.list);

    //total Price of list
    const totalPriceTemp = listCart.reduce(function (total, item) {
        return total + item.itemPrice;
    }, 0);

    //list address init
    const [listAddress, setListAddress] = useState([]);
    //state address current
    const [address, setAddress] = useState();

    // callApi get list Address
    const getListAddressUser = async () => {
        const res = await callApi(`/addresses/getaddresses`, 'POST', {
            customerId: accessUser.userId
        });
        setListAddress(res.data.result.addresses)
        setAddress(res.data.result.addresses[0])
    }


    useEffect(() => {
        getListAddressUser();
    }, []);

    //list addressRef to select
    const listAddressRef = useRef(null);
    //tonggle display list address
    const [displayAddresses, setDisplayAddresses] = useState(true);

    // xử lý click ra ngoài đóng list address?
    useEffect(() => {
        const checkIfClickedOutside = e => {
            // If the menu is open and the clicked target is not within the list, then close the list
            if (listAddressRef.current && !listAddressRef.current.contains(e.target)) {
                setDisplayAddresses(true);
            }
        };
        document.addEventListener("mousedown", checkIfClickedOutside);
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside);
        };
    }, [listAddressRef]);



    //handle Select
    const handleSelectAddress = (item) => {
        setAddress(item)
        setDisplayAddresses(true)
    }

    //handleSubmit
    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className="grid wide">
            <div className="">
                <div className="payment__title">
                    thanh toán
                </div>
                <div className="payment__wrapper">
                    <div className="payment__border">
                        <div className="payment__address">
                            <div className="payment__address-title">
                                thông tin thanh toán
                            </div>
                            {/* <div className="btn" onClick={() => setAddForm(!addForm)}>Thêm địa chỉ mới</div> */}

                            <div className="payment__select-address">
                                <div className="payment__note" onClick={() => setDisplayAddresses(!displayAddresses)}>
                                    Chọn địa chỉ giao hàng của bạn*
                                    {/* <i className="fa-solid fa-angle-down" style={{ color: 'red' }}></i> */}
                                </div>
                                <div ref={listAddressRef} className="footer__language">
                                    <div style={{ display: displayAddresses ? "none" : "block" }} className="footer__pseudo">
                                        <ul style={{ display: displayAddresses ? "none" : "block" }} className="language__list">
                                            {listAddress.map((item, index) => (
                                                <li onClick={() => handleSelectAddress(item)} key={index} className="language__item">
                                                    <span className="language__item-english">
                                                        {index + 1}.{" "}
                                                        {item.name}, {" "}
                                                        {item.phone}, {" "}
                                                        {item.detail}, {" "}
                                                        {item.detail}, {" "}
                                                        {item.ward}, {" "}
                                                        {item.district}, {" "}
                                                        {item.province}, {" "}
                                                        {item.note}
                                                    </span>
                                                    {/* <span className="language__item-other">{item.phone}</span> */}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="payment__list-form-add">
                                <div className='info'>
                                    <div className="info-user">
                                        <span>Họ tên:</span>
                                        <div>{address?.name}</div>
                                    </div>
                                    <div className="edit-info">Sửa</div>
                                </div>
                                <div>
                                    <div className="info-user">
                                        <span>Số điện thoại:</span>
                                        <div>{address?.phone}</div>
                                    </div>
                                </div>
                                <div>
                                    <div className="info-user">
                                        <span>Địa chỉ:</span>
                                        <div>
                                            {address?.detail},
                                            {" "} {address?.ward},
                                            {" "} {address?.district},
                                            {" "}{address?.province}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="info-user">
                                        <span>Ghi Chú:</span>
                                        <div>
                                            {address?.note}
                                        </div>
                                    </div>
                                </div>
                                <button className="btn-add-address">+Thêm địa chỉ mới</button>
                                {/* <div className="payment__address-name">
                                    <label className="payment__address-name__label">
                                        Họ và tên *
                                    </label>
                                    <br />
                                    <span className="payment__address-name__input">{address?.name || ""}</span>
                                </div>

                                <div className="payment__address-phone-and-mail">
                                    <div className="payment__address-phone">
                                        <label className="payment__address-phone__label">
                                            Số điện thoại *
                                        </label>
                                        <br />
                                        <span className="payment__address-name__input">{address?.phone || ""}</span>

                                    </div>

                                    <div className="payment__address-mail">
                                        <label className="payment__address-mail__label">
                                            Địa chỉ mail *
                                        </label>
                                        <br />
                                        <span className="payment__address-name__input">{address?.email || "ngchai2410@gmail.com"}</span>

                                    </div>
                                </div>
                                <div className="payment__address-province-and-district">
                                    <div className="payment__address-province">
                                        <label className="payment__address-province__label">
                                            Tỉnh / Thành phố *
                                        </label>
                                        <br />
                                        <span className="payment__address-name__input">{address?.province || ""}</span>
                                    </div>
                                    <div className="payment__address-district">
                                        <label className="payment__address-district__label">
                                            Quận / Huyện *
                                        </label>
                                        <br />
                                        <span className="payment__address-name__input">{address?.district || ""}</span>

                                    </div>
                                </div>

                                <div className="payment__address-ward-and-home">
                                    <div className="payment__address-ward">
                                        <label className="payment__address-ward__label">
                                            Xã / Phường *
                                        </label>
                                        <br />
                                        <span className="payment__address-name__input">{address?.ward || ""}</span>

                                    </div>
                                    <div className="payment__address-home">
                                        <label className="payment__address-home__label">
                                            Địa chỉ *
                                        </label>
                                        <br />
                                        <span className="payment__address-name__input">{address?.detail || ""}</span>

                                    </div>
                                </div>

                                <div className="payment__address-note">
                                    <label className="payment__address-note__label">
                                        Ghi Chú
                                    </label>
                                    <br />
                                    <span className="payment__address-name__input">{address?.note || ""}</span>

                                </div> */}
                            </div>
                        </div>
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
                                {/* {typepays.map(type => (
                                    <div key={type.id} className="payment__info-type__cash">
                                        <input
                                            onChange={() => setTypePay(type.id)}
                                            checked={typePay === type.id}
                                            type="radio" />
                                        <span>{type.name}</span>
                                    </div>
                                ))} */}
                                {/* <div className="payment__info-type__transfer">
                                <input type="radio" />
                                <span>Chuyển khoản ngân hàng </span>
                            </div> */}
                            </div>
                            <div
                                // onClick={handleSubmit(onSubmit)}
                                className="payment__info-button">
                                {/* to={`/bill/${idUser}`} */}
                                <button
                                    className="btn btn-payment"
                                >
                                    Đặt Hàng
                                </button>
                            </div>
                            <div className="payment__info-thanks">
                                Cảm ơn quý khách đã ủng hộ Ottel shop!
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
}

export default Payment;