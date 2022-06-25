import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
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

    const handleOnSubmit = async (data) => {

        // try {
        //     await callApi('/customers/register', 'POST', {
        //         phone: data.username,
        //         password: data.password,
        //     })
        //         .then(res => {
        //             // console.log('res', res)
        //             if (res.status === 200) {
        //                 console.log('success', res)

        //                 // cookies.save('userToken', {
        //                 //     userPhone: res.data.result.phone,
        //                 //     userId: res.data.result.customerId,
        //                 //     token: res.data.result.token,
        //                 // })
        //                 // localStorage.setItem('userToken', JSON.stringify({
        //                 //     userId: res.data.result.phone,
        //                 //     token: res.data.result.token
        //                 // }))
        //                 // const action = login(jwt_decode(res.data.token).UserName)
        //                 // dispath(action)
        //                 // getCarts(dispath, res.data.token, jwt_decode(res.data.token).UserId)
        //                 // history.push('/')
        //             }
        //             else if (res.status !== 200) {
        //                 console.log('dang nhap that bai')
        //                 // loginFaild = true
        //             }
        //         })
        //         .catch(err => {
        //             console.log(err)
        //             // setStatus('hai123462734567')
        //             // console.log('loginFail', status)
        //             alert('Tài khoản hoặc mật khẩu sai vui lòng kiểm tra lại')

        //         })
        //     // if (loginFaild === false) {
        //     //     history.push('/home/all')
        //     // }
        // }
        // catch (err) {
        //     alert('Tài khoản không tồn tại')
        // }
        console.log("confirm", data);
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