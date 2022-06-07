import React from 'react';
import { AiOutlineUser } from "react-icons/ai";
import { FaClipboardList } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { Link } from 'react-router-dom';
import BillList from './BillList';
import './style.css';

function PersonalInfo(props) {
    return (
        <div className="grid wide">
            <div className="personal-container">
                <div className="personal__sidebar">
                    <div className="sidebar__header">
                        <img className="sidebar__header-img" src="https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg"
                            alt='avt-user' />
                        <div className="sidebar__header-info">
                            <span>Tài khoản của</span>
                            <strong>Thach Ngoc Hai</strong>
                        </div>
                    </div>
                    <ul className="sidebar__list-link">
                        <li className="sidebar__item-link">
                            <Link to="/">
                                <AiOutlineUser className='sidebar__icon' />
                                <span>
                                    Thông tin tài khoản
                                </span>
                            </Link>
                        </li>
                        <li className="sidebar__item-link">
                            <Link to="/">
                                <FaClipboardList className='sidebar__icon' />
                                <span>
                                    Quản lý đơn hàng
                                </span>
                            </Link>
                        </li>
                        <li className="sidebar__item-link">
                            <Link to="/">
                                <MdLocationOn className='sidebar__icon' />
                                <span>
                                    Địa chỉ
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* <Info /> */}
                <BillList />


            </div>
        </div >
    );
}

export default PersonalInfo;