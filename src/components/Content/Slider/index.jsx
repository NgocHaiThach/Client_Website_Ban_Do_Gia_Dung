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
                                        <div className="bar-item_propose nav-item_propose">
                                            <ul className="bar-item_propose-list">
                                                <li className="bar-item_propose-item">THỜI TRANG</li>
                                                <li className="bar-item_propose-item">SunStop</li>
                                                <li className="bar-item_propose-item">TokyoBasic</li>
                                                <li className="bar-item_propose-item">TokyoNow</li>
                                                <li className="bar-item_propose-item">Đồ mặc nhà</li>
                                                <li className="bar-item_propose-item">Đồ lót</li>
                                                <li className="bar-item_propose-item">Đồ tập</li>


                                            </ul>
                                            <ul className="bar-item_propose-list">
                                                <li className="bar-item_propose-item">PHỤ KIỆN</li>
                                                <li className="bar-item_propose-item">Giầy dép</li>
                                                <li className="bar-item_propose-item">túi ví Balo</li>
                                                <li className="bar-item_propose-item">Kính mắt</li>
                                                <li className="bar-item_propose-item">Đồ bơi</li>
                                                <li className="bar-item_propose-item">Mũ</li>
                                                <li className="bar-item_propose-item">Quần tất</li>
                                                <li className="bar-item_propose-item">Tất chân</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="nav-item">THIẾT BỊ NHÀ BẾP
                                        <div className="bar-item_propose nav-item_propose">
                                            <ul className="bar-item_propose-list">
                                                <li className="bar-item_propose-item">ĐỒ DÙNG GIA ĐÌNH</li>
                                                <li className="bar-item_propose-item">Gia dụng các thương hiệu</li>
                                                <li className="bar-item_propose-item">Hóa phẩm</li>
                                                <li className="bar-item_propose-item">Dao kiếm siêu sắc</li>
                                                <li className="bar-item_propose-item">Chăn ga gối</li>
                                                <li className="bar-item_propose-item">Đèn xông tinh dầu</li>
                                                <li className="bar-item_propose-item">Tinh dầu các loại</li>
                                                <li className="bar-item_propose-item">Đồ dùng khác</li>
                                            </ul>
                                            <ul className="bar-item_propose-list">
                                                <li className="bar-item_propose-item">ĐỒ DÙNG CÁ NHÂN</li>
                                                <li className="bar-item_propose-item">Vệ sinh cá nhân</li>
                                                <li className="bar-item_propose-item">Sản phẩm đi mưa</li>
                                                <li className="bar-item_propose-item">Trang sức</li>
                                                <li className="bar-item_propose-item">Phụ kiện khác</li>
                                                <li className="bar-item_propose-item">Sản phẩm phòng dịch</li>
                                            </ul>
                                            <ul className="bar-item_propose-list">
                                                <li className="bar-item_propose-item">THỰC PHẨM - ĐỒ UỐNG</li>
                                                <li className="bar-item_propose-item">Đặc sản TUYỂN CHỌN</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="nav-item">ĐỒ DÙNG NHÀ BẾP
                                        <div className="bar-item_propose nav-item_propose">
                                            <ul className="bar-item_propose-list">
                                                <li className="bar-item_propose-item">CHĂM SÓC DA MẶT</li>
                                                <li className="bar-item_propose-item">Mặt nạ</li>
                                                <li className="bar-item_propose-item">Sữa rửa mặt</li>
                                                <li className="bar-item_propose-item">Tẩy trang các loại</li>
                                                <li className="bar-item_propose-item">Dưỡng da</li>
                                                <li className="bar-item_propose-item">Son dưỡng</li>
                                                <li className="bar-item_propose-item">Nước hoa hồng</li>
                                            </ul>
                                            <ul className="bar-item_propose-list">
                                                <li className="bar-item_propose-item">CHĂM SÓC CƠ THỂ</li>
                                                <li className="bar-item_propose-item">Sữa tắm - Dưỡng thể</li>
                                                <li className="bar-item_propose-item">Dầu gội xả</li>
                                                <li className="bar-item_propose-item">Trang sức</li>
                                                <li className="bar-item_propose-item">Kem/ Xịt chống nắng</li>
                                                <li className="bar-item_propose-item">Nước hoa</li>
                                            </ul>
                                            <ul className="bar-item_propose-list">
                                                <li className="bar-item_propose-item">THỰC PHẨM CHỨC NĂNG</li>
                                                <li className="bar-item_propose-item">Chăm sóc sức khỏe</li>
                                                <li className="bar-item_propose-item">Chăm sóc sắc đẹp</li>
                                            </ul>
                                        </div>
                                    </li>
                                    {/* <li className="nav-item">MADE BY ANGELS
                                    </li> */}
                                    <li className="nav-item">ĐIỆN DÂN DỤNG
                                        <div className="bar-item_propose nav-item_propose">
                                            <ul className="bar-item_propose-list">
                                                <li className="bar-item_propose-item">COMBO KEM/ XỊT CHỐNG NẮNG</li>
                                                <li className="bar-item_propose-item">Combo 250k 1 Kem chống nắng 50g + 1
                                                    Xịt chống nắng Nhật Bản</li>
                                                <li className="bar-item_propose-item">Combo 290k 1 Kem chống nắng 90g + 1
                                                    Xịt chống nắng</li>
                                                <li className="bar-item_propose-item">Tẩy trang các loại</li>
                                                <li className="bar-item_propose-item">Combo 290k 2 Xịt chống nắng</li>
                                                <li className="bar-item_propose-item">Combo 500k 1 Sữa chống nắng 200ml + 1
                                                    Xịt chống nắng</li>
                                            </ul>
                                        </div>
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