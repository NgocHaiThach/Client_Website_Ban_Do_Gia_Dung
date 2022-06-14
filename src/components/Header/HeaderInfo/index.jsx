import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import cookies from 'react-cookies';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/infoUserLogin/infoUserLoginSlice';



function HeaderInfo(props) {
    const history = useHistory();
    const dispatch = useDispatch();

    // const listCart = useSelector(state => state.cartList.list);


    const accessToken = useSelector(state => state.infoUserLogin);

    // const accessToken = JSON.parse(localStorage.getItem('userToken')) || {};
    console.log('access', accessToken);

    const logOutUser = () => {

        cookies.remove('userToken');
        const action = logout();
        dispatch(action);
        // localStorage.removeItem('userToken');
        history.push('/login');
    }

    return (
        <div className="grid wide">
            <div id="top" className="header-info">
                <p className="header-info_phone">Hotline : 1800-6926</p>
                <div className="header-info_about">
                    {/* <a href="#" className="header-info_about-content header-location-js">Chọn điểm mua hàng <i
                        className="fas fa-chevron-down"></i>
                        </a> */}
                    <div className="header-info_about-content">
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