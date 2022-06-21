import React from 'react';
import { BsTelephone } from "react-icons/bs";
import { BiLockAlt } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";

function RighInfo({ infoUser, display, setDisplay }) {
    return (
        <div className="personal__info-right">
            <span className="info__right-title">Số điện thoại và Email</span>
            <div className="info__right-list">
                <div className="info__item">
                    <div className="info__content">
                        <BsTelephone className="info__content-icon" />
                        <div className="info__content-detail">
                            <span>Số điện thoại</span>
                            <span>{infoUser?.phone}</span>
                        </div>
                    </div>
                    <div className="info__status">
                        <span></span>
                        <button
                            onClick={() => setDisplay(2)}
                            className="button__personal-right">
                            Cập nhật
                        </button>
                    </div>
                </div>
                <div className="info__item">
                    <div className="info__content">
                        <AiOutlineMail className="info__content-icon" />
                        <div className="info__content-detail">
                            <span>Địa chỉ Email</span>
                            <span>Thêm địa chỉ email</span>
                        </div>
                    </div>
                    <div className="info__status">
                        <span></span>
                        <button className="button__personal-right"
                            onClick={() => setDisplay(3)}
                        >
                            Cập nhật
                        </button>
                    </div>
                </div>
            </div>

            <span className="info__right-title">Bảo mật</span>
            <div className="info__right-list">
                <div className="info__item">
                    <div className="info__content">
                        <BiLockAlt className="info__content-icon" />
                        <div className="info__content-detail">
                            <span>Đổi mật khẩu </span>

                        </div>
                    </div>
                    <div className="info__status">
                        <span></span>
                        <button className="button__personal-right"
                            onClick={() => setDisplay(4)}
                        >
                            Cập nhật
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default RighInfo;