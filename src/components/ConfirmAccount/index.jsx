import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useParams } from 'react-router-dom';
import './style.css';
import * as yup from 'yup';
import callApi from '../../utils/callApi';
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import cookies from 'react-cookies';


const schema = yup.object().shape({
    confirm: yup.string().required(),
}).required();

function ConfirmAccount(props) {

    // hook useForm
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const history = useHistory();

    const { phone } = useParams();

    const handleOnSubmit = async (data) => {

        try {
            await callApi('/customers/verify', 'POST', {
                phone: phone,
                code: data.confirm,
            })
                .then(res => {
                    // console.log('res', res)
                    if (res.status === 200) {
                        console.log('success', res);

                        history.push('/login');
                    }
                })
                .catch(err => {
                    console.log(err)
                    alert('Mã xác thực không hợp lệ. Vui lòng kiểm tra lại');

                })
        }
        catch (err) {
            alert('Mã xác thực không hợp lệ. Vui lòng kiểm tra lại');
        }
    }

    const onSubmit = (data, e) => {
        e.preventDefault();
        if (handleOnSubmit) handleOnSubmit(data);
    }
    return (
        <div className="modal" >
            <div className="modal__overlay">
            </div>
            <div className="modal__body">
                {/* <!-- Authen Form --> */}
                <div id="auth-form-register" style={{ paddingBottom: "20px" }} className="auth-form">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="auth-form__container">
                        <div className="auth-form__header">
                            <h3 className="auth-form__heading">Xác Nhận</h3>
                            <Link to='/login' className="auth-form__switch-btn">Đăng Nhập</Link>
                        </div>

                        <div className="auth-form__form">
                            <div className="auth-form__group">
                                <input
                                    name="repeatPassword"
                                    {...register("confirm")}
                                    type="text"
                                    placeholder="Nhập lại mã xác nhận"
                                    className="auth-form__iput" />
                            </div>
                            {errors?.confirm?.type === "required" && <p className="valid-form__message">Vui lòng nhập mã xác nhận</p>}
                        </div>

                        <div className="auth-form__controls">
                            <button
                                className="btn btn--primary auth-form__controls-login"
                                type="submit"
                            >
                                XÁC NHẬN
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ConfirmAccount;