import React, { useState } from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import './style.css';

function BillList(props) {
    const image = 'https://salt.tikicdn.com/cache/200x200/ts/product/8d/ce/08/ede7a5fbd0130f25cb42fac00c65eaa7.jpg'
    const [listActive, setListActive] = useState(0)
    return (
        <div className="bill__info">
            <div className="bill__info-header">
                Đơn hàng của tôi
            </div>
            <div className="bill__info-container">
                <div className="info__title-list">
                    <div
                        onClick={() => setListActive(0)}
                        className={listActive === 0 ? "info__title-item-active" : "info__title-item"}
                    >
                        Tất cả đơn
                    </div>
                    <div onClick={() => setListActive(1)}
                        className={listActive === 1 ? "info__title-item-active" : "info__title-item"}
                    >
                        Chờ thanh toán
                    </div>
                    <div
                        onClick={() => setListActive(2)}
                        className={listActive === 2 ? "info__title-item-active" : "info__title-item"}
                    >
                        Đang xử lý
                    </div>
                    <div
                        onClick={() => setListActive(3)}
                        className={listActive === 3 ? "info__title-item-active" : "info__title-item"}
                    >
                        Đang vận chuyển
                    </div>
                    <div
                        onClick={() => setListActive(4)}
                        className={listActive === 4 ? "info__title-item-active" : "info__title-item"}
                    >
                        Đã giao
                    </div>
                    <div
                        onClick={() => setListActive(5)}
                        className={listActive === 5 ? "info__title-item-active" : "info__title-item"}
                    >
                        Đã hủy
                    </div>
                </div>
                <div className="info__search">
                    <AiOutlineSearch className="info__search-icon" />
                    <input className="info__search-input" placeholder="Tìm đơn hàng..." />
                </div>
                <div className="info__bill-list">
                    <div className="info__bill-item">
                        <div className="bill__item-title">
                            Bill Id: abcks
                        </div>
                        <div className="bill__item-content">
                            <div>
                                <div className="bill__item-product">
                                    <div className="bill__item-detail">
                                        <div className="bill__item-img"
                                            style={{
                                                backgroundImage: `url(${image})`,
                                            }}>
                                        </div>
                                        <div className="bill__item-info">
                                            <p className="bill__item-name">Cây massage đầu thư giản xả stress-Màu ngẫu nhiên</p>
                                            <div className="bill__item-store">
                                                <span>Quafa</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bill__item-price">
                                        <span>199.00đ</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bill__item-content">
                            <div>
                                <div className="bill__item-product">
                                    <div className="bill__item-detail">
                                        <div className="bill__item-img"
                                            style={{
                                                backgroundImage: `url(${image})`,
                                            }}>
                                        </div>
                                        <div className="bill__item-info">
                                            <p className="bill__item-name">Cây massage đầu thư giản xả stress-Màu ngẫu nhiên</p>
                                            <div className="bill__item-store">
                                                <span>Quafa</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bill__item-price">
                                        <span>199.00đ</span>
                                    </div>
                                </div>
                            </div>
                            <div className="info__bill-footer">
                                <div className="info__bill-money">
                                    <div className="money-title">
                                        Tổng tiền:
                                    </div>
                                    <div className="money-total">
                                        199.00đ
                                    </div>
                                </div>
                                <div className="info__bill-group">
                                    <button className="btn-buy-again">Mua lại</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="info__bill-item">
                        <div className="bill__item-title">
                            Bill Id: abcks
                        </div>
                        <div className="bill__item-content">
                            <div>
                                <div className="bill__item-product">
                                    <div className="bill__item-detail">
                                        <div className="bill__item-img"
                                            style={{
                                                backgroundImage: `url(${image})`,
                                            }}>
                                        </div>
                                        <div className="bill__item-info">
                                            <p className="bill__item-name">Cây massage đầu thư giản xả stress-Màu ngẫu nhiên</p>
                                            <div className="bill__item-store">
                                                <span>Quafa</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bill__item-price">
                                        <span>199.00đ</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bill__item-content">
                            <div>
                                <div className="bill__item-product">
                                    <div className="bill__item-detail">
                                        <div className="bill__item-img"
                                            style={{
                                                backgroundImage: `url(${image})`,
                                            }}>
                                        </div>
                                        <div className="bill__item-info">
                                            <p className="bill__item-name">Cây massage đầu thư giản xả stress-Màu ngẫu nhiên</p>
                                            <div className="bill__item-store">
                                                <span>Quafa</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bill__item-price">
                                        <span>199.00đ</span>
                                    </div>
                                </div>
                            </div>
                            <div className="info__bill-footer">
                                <div className="info__bill-money">
                                    <div className="money-title">
                                        Tổng tiền:
                                    </div>
                                    <div className="money-total">
                                        199.00đ
                                    </div>
                                </div>
                                <div className="info__bill-group">
                                    <button className="btn-buy-again">Mua lại</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default BillList;