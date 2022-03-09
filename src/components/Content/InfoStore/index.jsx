import React from 'react';
import './style.css';

function InfoStore(props) {
    return (
        <>
            {/* infoStore  */}
            <div className="info-store">
                <div className="grid wide">
                    <div className="product-title">
                        <h3>THÔNG TIN CỬA HÀNG</h3>
                    </div>

                    <div className="row">
                        <div className="col l-4 m-6 c-12">
                            <div className="info-store_about">
                                <img src="https://tokyolife.vn/media/wysiwyg/blog/tokyolife-tao-viec-lam-cho-nguoi-khuyet-tat.jpg"
                                    alt="tokyolife" className="info-store_about-img" />
                                <h3 className="info-store_about-sub">TIN TỨC</h3>
                            </div>
                        </div>
                        <div className="col l-4 m-6 c-0">
                            <div className="info-store_about">
                                <img src="https://tokyolife.vn/media/wysiwyg/blog/CH.jpg" alt="tokyolife"
                                    className="info-store_about-img" />
                                <h3 className="info-store_about-sub">HỆ THỐNG CỬA HÀNG</h3>
                            </div>
                        </div>
                        <div className="col l-4 m-0 c-0">
                            <div className="info-store_about">
                                <img src="https://tokyolife.vn/media/wysiwyg/blog/370x270.2.jpg" alt="tokyolife"
                                    className="info-store_about-img" />
                                <h3 className="info-store_about-sub">CHỨNG NHẬN CHÍNH HẢNG</h3>
                                <p className="info-store_about-text">Giấy chứng nhận nhập khẩu chính hãng từ các thương hiệu
                                    nổi tiếng Nhật Bản...</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col l-3 m-4 c-6">
                            <div className="info-store_logo">
                                <img src="https://tokyolife.vn/media/wysiwyg/brand/Rohtologo.png" alt=""
                                    className="info-store_logo-img" />

                            </div>
                        </div>

                        <div className="col l-3 m-4 c-6">
                            <div className="info-store_logo">
                                <img src="https://tokyolife.vn/media/wysiwyg/brand/EBISUlogo.png" alt=""
                                    className="info-store_logo-img" />

                            </div>
                        </div>

                        <div className="col l-3 m-4 c-6">
                            <div className="info-store_logo">
                                <img src="https://tokyolife.vn/media/wysiwyg/brand/Kracie.png" alt=""
                                    className="info-store_logo-img" />

                            </div>
                        </div>

                        <div className="col l-3 m-4 c-6">
                            <div className="info-store_logo">
                                <img src="https://tokyolife.vn/media/wysiwyg/brand/b4.jpg" alt=""
                                    className="info-store_logo-img" />

                            </div>
                        </div>

                        <div className="col l-3 m-4 c-6">
                            <div className="info-store_logo">
                                <img src="https://tokyolife.vn/media/wysiwyg/brand/b6.jpg" alt=""
                                    className="info-store_logo-img" />

                            </div>
                        </div>

                        <div className="col l-3 m-4 c-6">
                            <div className="info-store_logo">
                                <img src="https://tokyolife.vn/media/wysiwyg/brand/b7.jpg" alt=""
                                    className="info-store_logo-img" />

                            </div>
                        </div>

                        <div className="col l-3 m-4 c-6">
                            <div className="info-store_logo">
                                <img src="https://tokyolife.vn/media/wysiwyg/brand/sh.jpg" alt=""
                                    className="info-store_logo-img" />

                            </div>
                        </div>

                        <div className="col l-3 m-4 c-6">
                            <div className="info-store_logo">
                                <img src="https://tokyolife.vn/media/wysiwyg/brand/b9.jpg" alt=""
                                    className="info-store_logo-img" />

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}

export default InfoStore;