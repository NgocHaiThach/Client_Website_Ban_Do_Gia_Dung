import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { formatPrice } from '../../utils/format';
import './style.css';

function Bill(props) {
    const listCart = useSelector(state => state.cartList.list);
    const paymentInfo = useSelector(state => state.paymentInfo);
    console.log(paymentInfo.fee)
    console.log(paymentInfo.addressInfo)

    //total Price of list
    const totalPriceTemp = listCart.reduce(function (total, item) {
        return total + item.itemPrice;
    }, 0);

    return (
        <div className="d">
            <div className="bill__title">
                đơn hàng 100319
                {/* {timeBill} */}
            </div>
            <div className="bill__border">
                <div className="bill__description">
                    <p> Xin chào
                        {/* {infoPayment.name} */}
                    </p>
                    <p> Đơn hàng #100319 đã được đặt thành công và chúng tôi đang xử lý</p>
                    {/* <p> {typePayment} </p> */}
                </div>
                <div className="bill__id">
                    [Đơn hàng #100319]
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
                            {listCart.map((item, index) => (
                                <tr key={index}>
                                    <td className="table-body__item-name w-30 table-body__item min-width ">{item.name}</td>
                                    <td className="w-20 table-body__item ">{item.quantity}</td>
                                    <td className="w-20 table-body__item ">{formatPrice(item.itemPrice)}đ</td>


                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <table >
                        <thead>
                            <tr>

                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <td className="table-body__item-name w-30 table-body__item">Tổng số phụ:</td>
                                <td className="w-20 table-body__item ">
                                    {formatPrice(totalPriceTemp)}
                                    đ
                                </td>
                            </tr>
                            <tr >
                                <td className="table-body__item-name w-30 table-body__item">Giao nhận hàng:</td>
                                <td className="w-20 table-body__item ">{formatPrice(paymentInfo.fee)}đ</td>
                            </tr>
                            <tr >
                                <td className="table-body__item-name w-30 table-body__item"> Phương thức thanh toán:</td>
                                <td className="w-20 table-body__item ">
                                    {/* {typePayment} */}
                                </td>
                            </tr>
                            <tr >
                                <td className="table-body__item-name w-30 table-body__item">Tổng cộng:</td>
                                <td className="w-20 table-body__item ">
                                    {formatPrice(totalPriceTemp + paymentInfo.fee)}
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
                            {/* {infoPayment.name} */}
                            NgocHai
                        </div>
                        <div className="bill__addres-home-number">
                            {/* {infoPayment.home} */}
                            Số 25,tổ 8, Trà Cú B,
                        </div>
                        <div className="bill__addres-home-ward">
                            {/* {infoPayment.ward} */}
                            Kim Sơn
                        </div>
                        <div className="bill__addres-home-distric">
                            {/* {infoPayment.district} */}
                            Trà Cú
                        </div>
                        <div className="bill__addres-home-province">
                            {/* {infoPayment.province} */}
                            Trà Vinh
                        </div>
                        <div className="bill__addres-home-phone">
                            <a href="tel:0971018920">
                                {/* {infoPayment.phone} */}
                                0345751443
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className="bill__addres-title">
                            Địa chỉ giao hàng
                        </div>
                        <div className="bill__addres-name">
                            {/* {infoPayment.name} */}
                            NgcHai
                        </div>
                        <div className="bill__addres-home-number">
                            {/* {infoPayment.home} */}
                            Số 25,tổ 8, Trà Cú B,
                        </div>
                        <div className="bill__addres-home-ward">
                            {/* {infoPayment.ward} */}
                            Kim Sơn
                        </div>
                        <div className="bill__addres-home-distric">
                            {/* {infoPayment.district} */}
                            Trà Cú
                        </div>
                        <div className="bill__addres-home-province">
                            {/* {infoPayment.province} */}
                            Trà Vinh
                        </div>
                        <div className="bill__addres-home-phone">
                            <a href="tel:0971018920">
                                {/* {infoPayment.phone} */}
                                0345751443
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