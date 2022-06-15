import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import callApi from '../../utils/callApi';
import { formatDate, formatPrice } from '../../utils/format';
import './style.css';

function Bill(props) {

    const info = localStorage.getItem('infoPayment');

    const [preview, setPreview] = useState(null);

    let param = '';

    console.log("first", window.location.href);

    const queryParams = new URLSearchParams(window.location.href)
    for (const [key, value] of queryParams) {
        if (key === "vnp_TxnRef") {
            param = value;
        }
    }

    const getInfoPayment = async () => {
        const res = await callApi('/orders/preview', 'POST', {
            orderId: param,
            // orderId: param,

        });
        setPreview(res.data.result);
        console.log(res.data.result)
    }

    useEffect(() => {
        getInfoPayment();
    }, [])

    return (

        // <div>abc</div>
        <div className="d">
            <div className="bill__title">
                đơn hàng {preview?.orderId.slice(0, 8)}
                {/* {timeBill} */}
            </div>
            <div className="bill__border">
                <div className="bill__description">
                    <p> Xin chào {" "}
                        {preview?.address.name},
                    </p>
                    <p> Đơn hàng #{preview?.orderId.slice(0, 8)} đã được đặt thành công  {formatDate(preview?.expectedDeliveryTime)}{" "} và chúng tôi đang xử lý</p>
                    {/* <p> {typePayment} </p> */}
                </div>
                <div className="bill__id">
                    [Đơn hàng #{preview?.orderId.slice(0, 8)}] {" "}
                    {formatDate(preview?.expectedDeliveryTime)}
                </div>
                <div className="bill__table">
                    <table >
                        <thead>
                            <tr>
                                <th className="w-30 table-body__title">Tên</th>
                                <th className="w-20 table-body__title">S.Lượng</th>
                                <th className="w-20 table-body__title">Giá</th>
                            </tr>
                        </thead>
                        <tbody>
                            {preview?.products.map((item, index) => (
                                <tr key={index}>
                                    <td className="table-body__item-name w-30 table-body__item min-width ">{item.name}</td>
                                    <td className="w-20 table-body__item ">{item.quantity}</td>
                                    <td className="w-20 table-body__item ">{formatPrice(item.itemPrice)}đ</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <table style={{ width: '100%' }} >
                        <thead>
                            <tr>

                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <td className="table-body__item-name w-30 table-body__item">Tổng số phụ:</td>
                                <td className="w-20 table-body__item ">
                                    {formatPrice(+preview?.totalPrice)}
                                    đ
                                </td>
                            </tr>
                            <tr >
                                <td className="table-body__item-name w-30 table-body__item">Giao nhận hàng:</td>
                                <td className="w-20 table-body__item ">{formatPrice(+preview?.totalFee)}đ</td>
                            </tr>
                            {/* <tr >
                                <td className="table-body__item-name w-30 table-body__item"> Phương thức thanh toán:</td>
                                <td className="w-20 table-body__item ">

                                </td>
                            </tr> */}
                            <tr >
                                <td className="table-body__item-name w-30 table-body__item">Tổng cộng:</td>
                                <td className="w-20 table-body__item ">
                                    {formatPrice(+preview?.total)}
                                    đ</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="bill__addres">
                    <div>
                        <div className="bill__addres-title">
                            Địa chỉ gửi hàng
                        </div>
                        <div className="bill__addres-name">
                            {preview?.store?.name}

                        </div>
                        <div className="bill__addres-home-number">
                            {preview?.store?.detail}
                        </div>
                        <div className="bill__addres-home-ward">
                            {preview?.store?.wardName}

                        </div>
                        <div className="bill__addres-home-distric">
                            {preview?.store?.districtName}

                        </div>
                        <div className="bill__addres-home-province">
                            {preview?.store?.provinceName}

                        </div>
                        {/* <div className="bill__addres-home-phone">
                            <a href={`tel:${preview?.address?.phone}`}>
                                {preview?.address?.phone}
                            </a>
                        </div> */}
                    </div>
                    <div>
                        <div className="bill__addres-title">
                            Địa chỉ nhận hàng và thanh toán
                        </div>
                        <div className="bill__addres-name">
                            {preview?.address?.name}

                        </div>
                        <div className="bill__addres-home-number">
                            {preview?.address?.detail}

                        </div>
                        <div className="bill__addres-home-ward">
                            {preview?.address?.wardName}

                        </div>
                        <div className="bill__addres-home-distric">
                            {preview?.address?.districtName}

                        </div>
                        <div className="bill__addres-home-province">
                            {preview?.address?.provinceName}

                        </div>
                        <div className="bill__addres-home-phone">
                            <a href={`tel:${preview?.address?.phone}`}>
                                {preview?.address?.phone}
                            </a>
                        </div>
                    </div>
                </div>
                <div className="bill__thanks">
                    Cảm ơn quý khách <Link to="/"> Ottel.vn! </Link>
                </div>

            </div>
        </div >
    );
}

export default Bill;