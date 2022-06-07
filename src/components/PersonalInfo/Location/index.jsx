import React from 'react';
import { AiOutlineUser, AiOutlinePlus, AiOutlineCheckCircle } from "react-icons/ai";
import './style.css';


function Location(props) {
    return (
        <div className="location__info">
            <div className="location__info-header">
                Địa chỉ của tôi
            </div>
            <div className="location__info-container">
                <div className="location__info-new">
                    <div className="location__info-add">
                        <AiOutlinePlus className="location__info-icon" />
                        <span>Thêm địa chỉ</span>
                    </div>
                </div>
                <div className="location__info-item">
                    <div className="location__item-info">
                        <div className="location__item-name">
                            Thach Ngoc Hai
                            <span>
                                {/* <AiOutlineCheckCircle /> */}
                                <span>Địa chỉ mặc định</span>
                            </span>
                        </div>
                        <div className="location__item-address">
                            <span>Địa chỉ:</span> {" "}
                            Số 1, Võ Văn Ngân, Linh Chiểu, Thủ Đức, TP.HCM
                        </div>
                        <div className="location__item-phone">
                            <span>Điện thoại:</span> {" "}
                            0345751443
                        </div>
                    </div>
                    <div className="location__info-actions">
                        <span className="location__action-edit">Chỉnh sửa</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Location;