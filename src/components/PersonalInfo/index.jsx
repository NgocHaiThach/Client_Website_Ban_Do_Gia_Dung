import React, { useState } from 'react';
import { AiOutlineUser, AiOutlinePlus, AiOutlineCheckCircle } from "react-icons/ai";
import { FaClipboardList } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { Link } from 'react-router-dom';
import BillList from './BillList';
import Location from './Location';
import Info from './Info';
import './style.css';

function PersonalInfo(props) {
    const [display, setDisplay] = useState(1);
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
                {display === 1 ? <Info /> : null}
                {display === 2 ? <BillList /> : null}
                {display === 3 ? <Location /> : null}
            </div>
        </div >
    );
}

export default PersonalInfo;