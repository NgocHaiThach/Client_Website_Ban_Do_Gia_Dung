import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate, formatPrice } from '../../utils/format';
import './style.css';

function Bill(props) {

    const info = JSON.parse(localStorage.getItem('infoPayment'))
    console.log('abc', info);


    return (
        <div className="d">
            <div className="bill__title">
                đơn hàng {info.orderCode}
                {/* {timeBill} */}
            </div>
            <div className="bill__border">
                <div className="bill__description">
                    <p> Xin chào {" "}
                        {info.address.name},
                    </p>
                    <p> Đơn hàng #{info.orderCode} đã được đặt thành công  {formatDate(info.expectedDeliveryTime)}{" "} và chúng tôi đang xử lý</p>
                    {/* <p> {typePayment} </p> */}
                </div>
                <div className="bill__id">
                    [Đơn hàng #{info.orderCode}]
                    {/* ({timeBill}) */}
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
                            {info.products.map((item, index) => (
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
                                    {formatPrice(info.totalPrice)}
                                    đ
                                </td>
                            </tr>
                            <tr >
                                <td className="table-body__item-name w-30 table-body__item">Giao nhận hàng:</td>
                                <td className="w-20 table-body__item ">{formatPrice(info.totalFee)}đ</td>
                            </tr>
                            {/* <tr >
                                <td className="table-body__item-name w-30 table-body__item"> Phương thức thanh toán:</td>
                                <td className="w-20 table-body__item ">
                                   
                                </td>
                            </tr> */}
                            <tr >
                                <td className="table-body__item-name w-30 table-body__item">Tổng cộng:</td>
                                <td className="w-20 table-body__item ">
                                    {formatPrice(info.total)}
                                    đ</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="bill__addres">
                    <div>
                        <div className="bill__addres-title">
                            Địa chỉ thanh toán
                        </div>
                        <div className="bill__addres-name">
                            {info.address.name}

                        </div>
                        <div className="bill__addres-home-number">
                            {info.address.detail}
                        </div>
                        <div className="bill__addres-home-ward">
                            {info.address.wardName}

                        </div>
                        <div className="bill__addres-home-distric">
                            {info.address.districtName}

                        </div>
                        <div className="bill__addres-home-province">
                            {info.address.provinceName}

                        </div>
                        <div className="bill__addres-home-phone">
                            <a href={`tel:${info.address.phone}`}>
                                {info.address.phone}
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className="bill__addres-title">
                            Địa chỉ giao hàng
                        </div>
                        <div className="bill__addres-name">
                            {info.address.name}

                        </div>
                        <div className="bill__addres-home-number">
                            {info.address.detail}

                        </div>
                        <div className="bill__addres-home-ward">
                            {info.address.wardName}

                        </div>
                        <div className="bill__addres-home-distric">
                            {info.address.districtName}

                        </div>
                        <div className="bill__addres-home-province">
                            {info.address.provinceName}

                        </div>
                        <div className="bill__addres-home-phone">
                            <a href={`tel:${info.address.phone}`}>
                                {info.address.phone}
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