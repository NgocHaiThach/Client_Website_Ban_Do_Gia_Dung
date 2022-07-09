import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
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
                    alert('Tài khoản hoặc mật khẩu sai vui lòng kiểm tra lại')

                })
            // if (loginFaild === false) {
            //     history.push('/home/all')
            // }
        }
        catch (err) {
            alert('Tài khoản không tồn tại')
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
        console.log("resgg", res);
    }

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
                            <h3 className="auth-form__heading">Đăng Nhập</h3>
                            <Link to="/register" className="auth-form__switch-btn">Đăng Ký</Link>
                        </div>
                        <div className="auth-form__form">
                            <p className="auth-form__group">
                                <input
                                    name="username"
                                    {...register("username")}
                                    type="text"
                                    placeholder="Số điện thoại của bạn"
                                    className="auth-form__iput"

                                />
                            </p>
                            {errors?.username?.type === "required" && <p className="valid-form__message">Vui lòng nhập số điện thoại</p>}
                            {errors?.username?.type === "email" && <p className="valid-form__message">Vui lòng nhập đúng số điện thoại</p>}
                            <p className="auth-form__group">
                                <input
                                    name="password"
                                    {...register("password")}
                                    type="password" placeholder="Mật khẩu của bạn"
                                    className="auth-form__iput" />
                            </p>
                            {errors?.password?.type === "required" && <p className="valid-form__message">Vui lòng nhập mật khẩu</p>}
                            {errors?.password?.type === "min" && <p className="valid-form__message">Mật khẩu phải dài hơn 5 ký tự</p>}
                            {/* {status && <p className="valid-form__message">Tài khoản hoặc mật khẩu sai. Vui lòng kiểm tra lại</p>} */}
                        </div>
                        <div className="auth-form__aside">
                            <div className="auth-form__help">
                                <Link to='/forgot_pass'
                                    className="auth-form__help-link auth-form__help--forgot">
                                    Quên mật khẩu
                                </Link>
                                {/* <span className="auth-form__help-sparate"></span>
                            <a href="" className="auth-form__help-link">
                                Cần trợ giúp?
                            </a> */}
                            </div>
                        </div>
                        <div className="auth-form__controls">
                            <Link
                                to="/"
                                className="btn auth-form__controls-back btn--normal"

                            >TRỞ LẠI
                            </Link>
                            <button
                                type="submit"
                                className="btn btn--primary auth-form__controls-login"
                            >
                                ĐĂNG NHẬP
                            </button>
                        </div>
                    </form>
                    <div className="auth-form__socials">
                        <a href="" className="auth-form__socials--facebook">
                            <i className="auth-form__socials-icon fab fa-facebook-square"></i>
                            <span className="auth-form__socials-title">
                                Kết nối với Facebook
                            </span>
                        </a>
                        {/* <a href="" className="auth-form__socials--google ">
                            <i className="auth-form__socials-icon fab fa-google"></i>
                            <span className="auth-form__socials-title">
                                Kết nối với Google
                            </span>
                        </a> */}
                        <button onClick={passgg}>abc</button>
                        {/* 
                        <GoogleLogin
                            clientId="255711495560-p9lgiqee38atf9vd3krv0n74qpa2h2b1.apps.googleusercontent.com"
                            buttonText="Google Login"
                            onSuccess={passgg}
                            onFailure={failgg}
                            cookiePolicy={'single_host_origin'}
                        /> */}

                        {/* <GoogleLogin
                            clientId={googleApi}
                            buttonText="Login with Google"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={"single_host_origin"}
                            className="google-button mt-16"
                        /> */}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;