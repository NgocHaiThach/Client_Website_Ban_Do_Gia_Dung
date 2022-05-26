import React from 'react';
import { SliderData } from './SliderData';
import SliderImage from './SliderImage';
import './style.css';

function Slider(props) {
    return (
        <>
            {/* bar  */}
            <div className="introduce-container">
                <div className="grid wide">
                    <div className="row no-gutters">
                        <div className="col l-3 m-0 c-0">
                            <div className="bar-container">

                            </div>
                        </div>
                        {/* nav and slider  */}
                        <div className="col l-12 m-12 c-12">
                            <div className="nav-container">
                                <ul className="nav-list">
                                    <li className="nav-item">TRANG CHỦ
                                    </li>
                                    <li className="nav-item">ĐỒ GIA DỤNG
                                        <div className="bar-item_propose nav-item_propose">
                                            <ul className="bar-item_propose-list">
                                                <li className="bar-item_propose-item">NỒI NHÔM</li>

                                            </ul>
                                            <ul className="bar-item_propose-list">
                                                <li className="bar-item_propose-item">NỒI INOX</li>
                                            </ul>
                                            <ul className="bar-item_propose-list">
                                                <li className="bar-item_propose-item">NỒI ÁP SUẤT</li>
                                            </ul>
                                            <ul className="bar-item_propose-list">
                                                <li className="bar-item_propose-item">NỒI ANOD</li>
                                            </ul>
                                            <ul className="bar-item_propose-list">
                                                <li className="bar-item_propose-item">BỘ NỒI CHẢO</li>
                                            </ul>
                                            <ul className="bar-item_propose-list">
                                                <li className="bar-item_propose-item">CHẢO CHỐNG DÍNH</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="nav-item">ĐIỆN GIA DỤNG
                                        <div className="bar-item_propose nav-item_propose">
                                            <ul className="bar-item_propose-list">
                                                <li className="bar-item_propose-item">NỒI CƠM ĐIỆN</li>

                                            </ul>
                                            <ul className="bar-item_propose-list">
                                                <li className="bar-item_propose-item">NỒI CHIÊN KHÔNG DẦU</li>
                                            </ul>
                                            <ul className="bar-item_propose-list">
                                                <li className="bar-item_propose-item">BẾP HỒNG NGOẠI</li>
                                            </ul>
                                            <ul className="bar-item_propose-list">
                                                <li className="bar-item_propose-item">BẾP ĐIỆN TỬ</li>
                                            </ul>
                                            <ul className="bar-item_propose-list">
                                                <li className="bar-item_propose-item">ẤM SIÊU TỐC</li>
                                            </ul>
                                            <ul className="bar-item_propose-list">
                                                <li className="bar-item_propose-item">MÁY SẤY TÓC</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="nav-item">ĐIỆN TỬ ĐIỆN LẠNH
                                    </li>
                                    <li className="nav-item">THIẾT BỊ NHÀ BẾP


                                    </li>
                                    <li className="nav-item">ĐỒ DÙNG NHÀ BẾP

                                    </li>
                                    {/* <li className="nav-item">MADE BY ANGELS
                                    </li> */}
                                    <li className="nav-item">ĐIỆN DÂN DỤNG

                                    </li>
                                    <li className="nav-item">TIN TỨC
                                    </li>
                                </ul>
                            </div>

                            {/* <div className="slider-container">
                                <div className="slider-imgs">
                                    <img className="slider-img"
                                        src="https://sunhouse.com.vn/pic/product/doGiaDungBanner-1.png"
                                        alt="TOKYOLIFE" />
                                    <img className="slider-img active"
                                        src="https://cdn.brvn.vn/campaign/1280px/2019/305_Tet-nay-dung-ve-nha-an-Tet_1548824531.jpg"
                                        alt="TOKYOLIFE" />
                                    
                                </div>
                                <div className="slider-next"><i className="fas fa-chevron-right"></i></div>
                                <div className="slider-prev"><i className="fas fa-chevron-left"></i></div>
                            </div> */}
                            <SliderImage slides={SliderData} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Slider;