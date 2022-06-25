import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import cookies from 'react-cookies';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/infoUserLogin/infoUserLoginSlice';
import callApi from '../../../utils/callApi';
import { getInfoSuccess } from '../../../redux/personalInfo/personalInfoSlice';
import { getListCartByIdUser } from '../../../redux/cart/apiFunctionCart';
import { getPersonalInfoById } from '../../../redux/personalInfo/apiFunctionPersonal';
import { getListCartSuccess } from '../../../redux/cart/cartSlice';



function HeaderInfo(props) {

    // const [infoUser, setInfoUser] = useState();

    const infoUser = useSelector(state => state.personalInfo.info);
    console.log("info", infoUser);

    const history = useHistory();
    const dispatch = useDispatch();

    const accessToken = useSelector(state => state.infoUserLogin);

    const logOutUser = () => {
        cookies.remove('userToken');
        const action = logout();
        dispatch(action);
        // localStorage.removeItem('userToken');
        dispatch(getInfoSuccess({}))
        // getListCartByIdUser(dispatch, accessToken.userId);
        dispatch(getListCartSuccess([]));
        history.push('/login');
    };
    useEffect(() => {
        getPersonalInfoById(dispatch, accessToken.userId);
    }, [infoUser.picture])

    // const getInfoUserById = async () => {
    //     const res = await callApi("/customers/get", "POST", {
    //         customerId: accessToken.userId,
    //     });
    //     setInfoUser(res.data.result);
    // }

    // useEffect(() => {
    //     getInfoUserById();
    // }, []);


    return (
        <div className="grid wide">
            <div id="top" className="header-info">
                <p className="header-info_phone">Hotline : 1800-6926</p>
                <div className="header-info_about">
                    {/* <a href="#" className="header-info_about-content header-location-js">Chọn điểm mua hàng <i
                    className="fas fa-chevron-down"></i>
                    </a> */}
                    <div className="header-info_about-content">
                        {infoUser.picture ? <div className="form-avatar-header">
                            <div className="form-avatar-styles-header">
                                <div>
                                    <div className="form-avatar-view-header">
                                        <img className="avatar-default-header" src={infoUser.picture !== null ? infoUser.picture : "https://frontend.tikicdn.com/_desktop-next/static/img/account/edit.png"} alt="avatar" />
                                    </div>
                                </div>
                            </div>
                        </div> : null}
                        {/* {accessToken.userId === "" ? accessToken.userId : "Đăng nhập tài khoản"}  */}
                        {accessToken.userPhone}

                        <i className="fas fa-chevron-down"></i>

                        <ul className="header-info_about-list">
                            <li className="header-info_about-item">
                                <Link to={`/personal-info/${accessToken.userId}`}>Tài khoản của tôi</Link>
                            </li>
                            <li className="header-info_about-item">
                                <Link to='/cart'>Giỏ hàng của tôi</Link>
                            </li>
                            {/* <li className="header-info_about-item">
                            <Link to={`/payment/${accessToken.userId}`}>Thanh toán</Link>
                        </li> */}

                            {accessToken.userId === null || accessToken.userId === "" ?
                                <li className="header-info_about-item">
                                    <Link to='/login'>
                                        Đăng nhập
                                    </Link>
                                </li>
                                :
                                <li className="header-info_about-item">
                                    <a onClick={logOutUser}>
                                        Đăng xuất
                                    </a>
                                </li>
                            }
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default HeaderInfo;