import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import './style.css';
import * as yup from 'yup';
import callApi from '../../utils/callApi';
import { useHistory } from 'react-router-dom';
import cookies from 'react-cookies';
import GoogleLogin from 'react-google-login';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/infoUserLogin/infoUserLoginSlice';
import { getListCartByIdUser } from '../../redux/cart/apiFunctionCart';
import { getPersonalInfoById } from '../../redux/personalInfo/apiFunctionPersonal';


const schema = yup.object().shape({
    username: yup.string().required().min(10),
    password: yup.string().required(),
}).required();

function Login(props) {

    // hook useForm
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const history = useHistory();
    const dispatch = useDispatch();

    const handleOnSubmit = async (data) => {

        try {
            await callApi('/customers/login', 'POST', {
                phone: data.username,
                password: data.password,
            })
                .then(res => {
                    // console.log('res', res)
                    if (res.status === 200) {
                        console.log('success', res)

                        cookies.save('userToken', {
                            userPhone: res.data.result.phone,
                            userId: res.data.result.customerId,
                            token: res.data.result.token,
                        });
                        const action = login({
                            userPhone: res.data.result.phone,
                            userId: res.data.result.customerId,
                            token: res.data.result.token,
                        })
                        dispatch(action);
                        // localStorage.setItem('userToken', JSON.stringify({
                        //     userId: res.data.result.phone,
                        //     token: res.data.result.token
                        // }))
                        // const action = login(jwt_decode(res.data.token).UserName)
                        // dispath(action)
                        // getCarts(dispath, res.data.token, jwt_decode(res.data.token).UserId)
                        getListCartByIdUser(dispatch, res.data.result.customerId);
                        getPersonalInfoById(dispatch, res.data.result.customerId);
                        history.push('/home');
                    }
                    else if (res.status !== 400) {
                        console.log('dang nhap that bai')
                        // loginFaild = true
                    }
                })
                .catch(err => {
                    console.log(err)
                    // setStatus('hai123462734567')
                    // console.log('loginFail', status)
                    alert('T??i kho???n ho???c m???t kh???u sai vui l??ng ki???m tra l???i')

                })
            // if (loginFaild === false) {
            //     history.push('/home/all')
            // }
        }
        catch (err) {
            alert('T??i kho???n kh??ng t???n t???i')
        }
    }

    const onSubmit = (data, e) => {
        e.preventDefault();
        if (handleOnSubmit) handleOnSubmit(data)
        console.log(data)
    }

    const passgg = async (googleData) => {
        const res = await callApi("/oauth/login", "GET", null);
        if (res.status === 200) {
            // history.push('/home');
            window.location.href = `${res.data.result}`;
        }
    }

    const queryParams = (window.location.href);

    console.log("current url", queryParams)

    const failgg = (result) => {
        console.log(result)
    }

    return (
        <div className="modal" >
            <div className="modal__overlay">
            </div>
            <div className="modal__body">
                <div className="auth-form">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="auth-form__container">
                        <div className="auth-form__header">
                            <h3 className="auth-form__heading">????ng Nh???p</h3>
                            <Link to="/register" className="auth-form__switch-btn">????ng K??</Link>
                        </div>
                        <div className="auth-form__form">
                            <p className="auth-form__group">
                                <input
                                    name="username"
                                    {...register("username")}
                                    type="text"
                                    placeholder="S??? ??i???n tho???i c???a b???n"
                                    className="auth-form__iput"

                                />
                            </p>
                            {errors?.username?.type === "required" && <p className="valid-form__message">Vui l??ng nh???p s??? ??i???n tho???i</p>}
                            {errors?.username?.type === "email" && <p className="valid-form__message">Vui l??ng nh???p ????ng s??? ??i???n tho???i</p>}
                            <p className="auth-form__group">
                                <input
                                    name="password"
                                    {...register("password")}
                                    type="password" placeholder="M???t kh???u c???a b???n"
                                    className="auth-form__iput" />
                            </p>
                            {errors?.password?.type === "required" && <p className="valid-form__message">Vui l??ng nh???p m???t kh???u</p>}
                            {errors?.password?.type === "min" && <p className="valid-form__message">M???t kh???u ph???i d??i h??n 5 k?? t???</p>}
                            {/* {status && <p className="valid-form__message">T??i kho???n ho???c m???t kh???u sai. Vui l??ng ki???m tra l???i</p>} */}
                        </div>
                        <div className="auth-form__aside">
                            <div className="auth-form__help">
                                <Link to='/forgot_pass'
                                    className="auth-form__help-link auth-form__help--forgot">
                                    Qu??n m???t kh???u
                                </Link>
                                {/* <span className="auth-form__help-sparate"></span>
                            <a href="" className="auth-form__help-link">
                                C???n tr??? gi??p?
                            </a> */}
                            </div>
                        </div>
                        <div className="auth-form__controls">
                            <Link
                                to="/"
                                className="btn auth-form__controls-back btn--normal"

                            >TR??? L???I
                            </Link>
                            <button
                                type="submit"
                                className="btn btn--primary auth-form__controls-login"
                            >
                                ????NG NH???P
                            </button>
                        </div>
                    </form>
                    <div className="auth-form__socials">
                        {/* <a href="" className="auth-form__socials--facebook">
                            <i className="auth-form__socials-icon fab fa-facebook-square"></i>
                            <span className="auth-form__socials-title">
                                K???t n???i v???i Facebook
                            </span>
                        </a>
                        <a onClick={passgg} className="auth-form__socials--google">
                            <i className="auth-form__socials-icon fab fa-google"></i>
                            <span className="auth-form__socials-title">
                                K???t n???i v???i Google
                            </span>
                        </a> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;