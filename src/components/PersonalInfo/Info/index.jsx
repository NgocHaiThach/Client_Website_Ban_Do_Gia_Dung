import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import * as Yup from "yup";
import { days, months, years } from '../../../utils/constances';
import SelectField from '../../Selectfield';
import TextField2 from '../../TextField2';
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
    return (
        <div className="personal__info">
            <div className="personal__info-header">
                Thông tin tài khoản
            </div>
            <div className="personal__info-container">
                <div className="personal__info-left">
                    {/* <span className="info__left-header">Thông tin cá nhân</span> */}
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
                                // console.log(
                                //     name,
                                //     province,
                                //     district,
                                //     ward,
                                //     detail,
                                //     note,
                                //     phone,
                                //     idProv, idDistrict, idWard
                                // );


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
                                                    {/* <div className="form-avatar-edit">
                                                    <img src="https://frontend.tikicdn.com/_desktop-next/static/img/account/edit.png" alt="" />
                                                </div> */}
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
                                            // label="Expiration Month"
                                            name="month"
                                            placeholder="Ngày"

                                        />
                                        <SelectField
                                            options={months}
                                            as="input"
                                            // label="Expiration Month"
                                            name="month"
                                            placeholder="Tháng"

                                        />
                                        <SelectField
                                            options={years}
                                            as="input"
                                            // label="Expiration Month"
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
                                                <span>{type.name}</span>
                                            </div>
                                        ))}
                                    </div>




                                    <div className="auth-form__controls">



                                        <button
                                            variant="primary"
                                            className="btn-save"
                                            type="submit"
                                        // onClick={() => handleShow()}
                                        >
                                            Lưu thay đổi

                                        </button>
                                    </div>

                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
                {/* <div className="personal__info-right">
                phải
            </div> */}
            </div>

        </div>
    );
}

export default Info;