import React from 'react';
import { BsTelephone } from "react-icons/bs";
import { BiLockAlt } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";

function UpdateInfo({ display, setDisplay }) {
    return (
        <>
            {display === 2 ? <div className="update__tel">
                <div className="update__tel-title">Cập nhật số điện thoại</div>
                <div className="update__tel-conatiner">
                    <form className="update__tel-form">
                        <div className="tel__form-container">
                            <label className="update__tel-label">Số điện thoại</label>
                            <div>
                                <div className="tel__elements">
                                    <BsTelephone className="tel__icon" />
                                    <input className="tel__input" />
                                </div>
                            </div>
                        </div>
                        <div style={{ display: 'flex' }} >
                            <button className="button-update-tel"
                                onClick={() => setDisplay(1)}
                            >
                                Trở về
                            </button>
                            <button className="button-update-tel">Lưu thay đổi</button>
                        </div>
                    </form>
                </div>
            </div> : null}

            {display === 3 ? <div className="update__tel">
                <div className="update__tel-title">Cập nhật mail</div>
                <div className="update__tel-conatiner">
                    <form className="update__tel-form">
                        <div className="tel__form-container">
                            <label className="update__tel-label">Địa chỉ email</label>
                            <div>
                                <div className="tel__elements">
                                    <AiOutlineMail className="tel__icon" />
                                    <input className="tel__input" />
                                </div>
                            </div>
                        </div>
                        <div style={{ display: 'flex' }} >
                            <button className="button-update-tel"
                                onClick={() => setDisplay(1)}
                            >
                                Trở về
                            </button>
                            <button className="button-update-tel">Lưu thay đổi</button>
                        </div>
                    </form>
                </div>
            </div> : null}

            {display === 4 ? <div className="update__tel">
                <div className="update__tel-title">Đổi mật khẩu</div>
                <div className="update__tel-conatiner">
                    <form className="update__tel-form">
                        <div className="tel__form-container">
                            <label className="update__tel-label">Mật khẩu hiện tại</label>
                            <div>
                                <div className="tel__elements">
                                    <AiOutlineMail className="tel__icon" />
                                    <input className="tel__input" />
                                </div>
                            </div>
                        </div>
                        <div className="tel__form-container">
                            <label className="update__tel-label">Nhập lại mật khẩu mới</label>
                            <div>
                                <div className="tel__elements">
                                    <AiOutlineMail className="tel__icon" />
                                    <input className="tel__input" />
                                </div>
                            </div>
                        </div>
                        <div className="tel__form-container">
                            <label className="update__tel-label">Mật khẩu mới</label>
                            <div>
                                <div className="tel__elements">
                                    <AiOutlineMail className="tel__icon" />
                                    <input className="tel__input" />
                                </div>
                            </div>
                        </div>
                        <div style={{ display: 'flex' }} >

                            <button className="button-update-tel"
                                onClick={() => setDisplay(1)}
                            >
                                Trở về
                            </button>
                            <button className="button-update-tel">Lưu thay đổi</button>
                        </div>
                    </form>
                </div>
            </div> : null}
        </>
    );
}

export default UpdateInfo;