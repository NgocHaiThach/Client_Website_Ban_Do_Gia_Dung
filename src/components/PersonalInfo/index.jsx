import React, { useEffect, useState } from 'react';
import { AiOutlineUser, AiOutlinePlus, AiOutlineCheckCircle } from "react-icons/ai";
import { FaClipboardList } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { Link } from 'react-router-dom';
import BillList from './BillList';
import Location from './Location';
import Info from './Info';
import './style.css';
import callApi from '../../utils/callApi';
import cookies from 'react-cookies';
import { useDispatch, useSelector } from 'react-redux';
import { getPersonalInfoById } from '../../redux/personalInfo/apiFunctionPersonal';

function PersonalInfo(props) {
    const accessUser = cookies.load("userToken");
    const [display, setDisplay] = useState(1);
    const [infoUser, setInfoUser] = useState(null);

    const getInfoUserById = async () => {
        const res = await callApi("/customers/get", "POST", {
            customerId: accessUser.userId,
        });
        setInfoUser(res.data.result);
    }
    // const dispatch = useDispatch();
    // const infoUser = useSelector(state => state.personalInfo.info);

    useEffect(() => {
        getInfoUserById();
    }, []);


    return (
        infoUser &&
        <div className="grid wide">
            <div className="personal-container">
                <div className="personal__sidebar">
                    <div className="sidebar__header">
                        {/* <img className="sidebar__header-img" src={infoUser.picture === null ? "https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg" : infoUser.picture}
                            alt='avt-user' /> */}
                        <div className="sidebar__header-info">
                            <span>Tài khoản của</span>
                            <strong>{infoUser.fullName}</strong>
                        </div>
                    </div>
                    <ul className="sidebar__list-link">
                        <li className={display === 1 ? `sidebar__item-link active-link` : `sidebar__item-link`}
                            onClick={() => setDisplay(1)}
                        >
                            <AiOutlineUser className='sidebar__icon' />
                            <span>
                                Thông tin tài khoản
                            </span>

                        </li>
                        <li className={display === 2 ? `sidebar__item-link active-link` : `sidebar__item-link`}
                            onClick={() => setDisplay(2)}
                        >
                            <FaClipboardList className='sidebar__icon' />
                            <span>
                                Quản lý đơn hàng
                            </span>

                        </li>
                        <li className={display === 3 ? `sidebar__item-link active-link` : `sidebar__item-link`}
                            onClick={() => setDisplay(3)}
                        >
                            <MdLocationOn className='sidebar__icon' />
                            <span>
                                Địa chỉ
                            </span>

                        </li>
                    </ul>
                </div>
                {display === 1 ? infoUser && <Info infoUser={infoUser} /> : null}
                {display === 2 ? <BillList /> : null}
                {display === 3 ? <Location /> : null}
            </div>
        </div >

    );
}

export default PersonalInfo;