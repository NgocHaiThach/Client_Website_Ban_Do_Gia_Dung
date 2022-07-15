import React from 'react';
import './style.css';

function FooterCenter(props) {
    return (
        <div className="footer-center">
            <div className="grid wide">
                <div className="row">
                    <div className="col l-3 m-6 c-12">
                        <div className="footer-center_about">
                            <h3 className="footer-center_title">INTELLIFE JOINT STOCK COMPANY</h3>
                            <div className="footer-center_line"></div>
                            <p className="footer-center_text">Địa chỉ: Tầng 6, số 49 Thái Hà Phường Trung Liệt, Quận
                                Đống Đa, Thành phố Hà Nội, Việt Nam. Người đại diện: Nguyễn Văn Tiến Mã số thuế:
                                0108120341, ngày cấp ĐKKD 5/1/2018. Nơi cấp: Sở kế hoạch và đầu tư Hà Nội. Điện
                                thoại:
                                1800-6926 Email: cskh@ottel.vn</p>
                            <a href="http://online.gov.vn/Home/WebDetails/57002">
                                <img
                                    src="	https://tokyolife.vn/media/wysiwyg/home-page-image/20150827110756-dathongbao.png"
                                    alt="" className="footer-center_logo" />
                            </a>
                        </div>
                    </div>

                    <div className="col l-3 m-6 c-12">
                        <div className="footer-center_about">
                            <h3 className="footer-center_title">TÀI KHOẢN CỦA TÔI</h3>
                            <div className="footer-center_line"></div>
                            <ul className="footer-center_list">
                                <li className="footer-center_item">Tài khoản của tôi</li>
                                <li className="footer-center_item">Đăng nhập</li>
                                <li className="footer-center_item">Giỏ hàng của tôi</li>
                                <li className="footer-center_item">Sản phẩm yêu thích</li>

                            </ul>
                        </div>
                    </div>

                    <div className="col l-3 m-6 c-12">
                        <div className="footer-center_about">
                            <h3 className="footer-center_title">HỖ TRỢ</h3>
                            <div className="footer-center_line"></div>
                            <ul className="footer-center_list">
                                <li className="footer-center_item">Chính sách vận chuyển</li>
                                <li className="footer-center_item">Quy định đổi hàng</li>
                                <li className="footer-center_item">Hình thức thanh toán</li>
                                <li className="footer-center_item">Chính sách tích và tiêu điểm</li>
                                <li className="footer-center_item">Hướng dẫn chọn size</li>

                            </ul>
                        </div>
                    </div>

                    <div className="col l-3 m-6 c-12">
                        <div className="footer-center_about">
                            <h3 className="footer-center_title">KẾT NỐI</h3>
                            <div className="footer-center_line"></div>
                            <div className="footer-center_down">
                                <div className="footer-center_down-connect">
                                    <a href="https://apps.apple.com/vn/app/tokyolife/id1255809177?l=vi">
                                        <img
                                            src="https://tokyolife.vn/media/wysiwyg/home-page-image/icon/ios_2019.png"
                                            alt="" />
                                    </a>
                                    <a href="https://play.google.com/store/apps/details?id=com.format.tokyolife">
                                        <img
                                            src="https://tokyolife.vn/media/wysiwyg/home-page-image/icon/android_2019.png"
                                            alt="" />
                                    </a>
                                </div>
                                <img src="https://tokyolife.vn/media/wysiwyg/footer/iphone2020.png" alt=""
                                    className="footer-center_down-phone" />
                            </div>
                            <div className="footer-center_social">
                                <a href="https://www.facebook.com/TokyoLifeNow/"><img
                                    src="https://tokyolife.vn/media/wysiwyg/home-page-image/icon/fb-01.png"
                                    alt="fb" />
                                </a>
                                <a
                                    href="https://www.youtube.com/channel/UCEoTu7uvB7wVgM1xP9uHe7g?view_as=subscriber"><img
                                        src="https://tokyolife.vn/media/wysiwyg/home-page-image/icon/ytb-01.png"
                                        alt="yb" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterCenter;