import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import * as Yup from "yup";
import { days, months, years } from '../../../utils/constances';
import SelectField from '../../Selectfield';
import TextField2 from '../../TextField2';
import { BsTelephone } from "react-icons/bs";
import { BiLockAlt } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import './style.css';

function Info(props) {
    const validate = Yup.object({
        name: Yup.string()
            .max(50, "Tên phải ngắn hơn 50 ký tự")
            .required("Trường này bắt buộc"),
        province: Yup.string()
            .required("Trường này bắt buộc"),
        district: Yup.string()
            .required("Trường này bắt buộc"),
        ward: Yup.string()
            .required("Trường này bắt buộc"),
        detail: Yup.string()
            .required("Trường này bắt buộc"),
        note: Yup.string()
            .required("Trường này bắt buộc"),
        phone: Yup.string()
            .required("Trường này bắt buộc"),
    });



    const [typeSex, setTypeSex] = useState(1);

    const typeSexs = [
        {
            id: 1,
            name: 'Nam'
        },
        {
            id: 2,
            name: 'Nữ'
        },
        {
            id: 3,
            name: 'Khác'
        },
    ];

    const [display, setDisplay] = useState(1);

    return (
        <>
            {display === 1 ?
                <div className="personal__info">
                    <div className="personal__info-header">
                        Thông tin tài khoản
                    </div>
                    <div className="personal__info-container">
                        <div className="personal__info-left">
                            <span className="info__left-header">Thông tin cá nhân</span>
                            <div className="info__left-container">
                                <Formik
                                    initialValues={
                                        {
                                            name: "",
                                            province: "",
                                            district: "",
                                            ward: "",
                                            detail: "",
                                            note: "",
                                            phone: "",
                                        }
                                    }
                                    validationSchema={validate}
                                    onSubmit={(values) => {
                                        const {
                                            name,
                                            province,
                                            district,
                                            ward,
                                            detail,
                                            note,
                                            phone
                                        } = values;



                                    }}
                                >
                                    {(formik) => (
                                        <Form>
                                            <div className="container__form-info">
                                                <div className="form-avatar">
                                                    <div className="form-avatar-styles">
                                                        <div>
                                                            <div className="form-avatar-view">
                                                                <img className="avatar-default" src="https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg" alt="avater" />
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div>

                                                    <TextField2
                                                        label="Họ & Tên"
                                                        name="name"
                                                        type="text"
                                                        classNameDiv="info__input-field"
                                                        placeholder="Họ tên..."
                                                        nameInput="info-input"
                                                        labelName="info-label"
                                                    />
                                                    <TextField2
                                                        label="Số điện thoại"
                                                        name="name"
                                                        type="text"
                                                        classNameDiv="info__input-field"
                                                        placeholder="Số điện thoại..."
                                                        nameInput="info-input"
                                                        labelName="info-label"
                                                    />
                                                    <TextField2
                                                        label="Email"
                                                        name="name"
                                                        type="text"
                                                        classNameDiv="info__input-field"
                                                        placeholder="Email..."
                                                        nameInput="info-input"
                                                        labelName="info-label"
                                                    />
                                                </div>
                                            </div>
                                            <div className="info__input-field">
                                                <span>Ngày sinh: </span>
                                                <SelectField
                                                    options={days}
                                                    as="input"
                                                    name="month"
                                                    placeholder="Ngày"

                                                />
                                                <SelectField
                                                    options={months}
                                                    as="input"
                                                    name="month"
                                                    placeholder="Tháng"

                                                />
                                                <SelectField
                                                    options={years}
                                                    as="input"
                                                    name="month"
                                                    placeholder="Năm"

                                                />
                                            </div>

                                            <div className="info__input-field">
                                                <span>Giới tính: </span>

                                                {typeSexs.map(type => (
                                                    <div key={type.id} className="payment__info-type__cash" style={{ padding: '10px 20px' }}>
                                                        <input
                                                            onChange={() => setTypeSex(type.id)}
                                                            checked={typeSex === type.id}
                                                            type="radio" />
                                                        <span style={{ marginLeft: '5px' }}>{type.name}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="auth-form__controls">
                                                <button
                                                    variant="primary"
                                                    className="btn-save"
                                                    type="submit"

                                                >
                                                    Lưu thay đổi

                                                </button>
                                            </div>

                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                        <div className="info__vertical"></div>
                        <div className="personal__info-right">
                            <span className="info__right-title">Số điện thoại và Email</span>
                            <div className="info__right-list">
                                <div className="info__item">
                                    <div className="info__content">
                                        <BsTelephone className="info__content-icon" />
                                        <div className="info__content-detail">
                                            <span>Số điện thoại</span>
                                            <span>0345751443</span>
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
                    </div>
                </div>
                : null}

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
                        <button className="button-update-tel"
                            onClick={() => setDisplay(1)}
                        >
                            Trở về
                        </button>
                        <button className="button-update-tel">Lưu thay đổi</button>
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
                        <button className="button-update-tel"
                            onClick={() => setDisplay(1)}
                        >
                            Trở về
                        </button>
                        <button className="button-update-tel">Lưu thay đổi</button>
                    </form>
                </div>
            </div> : null}

            {display === 4 ? <div className="update__tel">
                <div className="update__tel-title">Cập nhật mail</div>
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
                        <button className="button-update-tel"
                            onClick={() => setDisplay(1)}
                        >
                            Trở về
                        </button>
                        <button className="button-update-tel">Lưu thay đổi</button>
                    </form>
                </div>
            </div> : null}


        </>
    );
}

export default Info;