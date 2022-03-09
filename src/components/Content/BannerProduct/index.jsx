import React from 'react';
import './style.css';

function BannerProduct(props) {
    return (
        <>
            {/* banerProduct  */}
            <div className="baner-product">
                <div className="grid wide">
                    <div className="row">
                        <div className="col l-4 m-4 c-12">
                            <img src="https://tokyolife.vn/media/wysiwyg/home-page-image/home-1/Thu_ng_2021-1.jpg"
                                alt="TOKYOLIFE" className="baner-product_img" />
                        </div>

                        <div className="col l-8 m-8 c-12">
                            <div className="row">
                                <div className="col l-6 m-6 c-6">
                                    <img src="https://tokyolife.vn/media/wysiwyg/home-page-image/home-1/Thu_ng_2021-2.jpg"
                                        alt="TOKYOLIFE" className="baner-product_img" />
                                </div>
                                <div className="col l-6 m-6 c-6">
                                    <img src="https://tokyolife.vn/media/wysiwyg/home-page-image/home-1/Thu_ng_2021-3.jpg"
                                        alt="TOKYOLIFE" className="baner-product_img" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col l-12 m-12 c-12">
                                    <img src="https://tokyolife.vn/media/wysiwyg/home-page-image/home-1/Thu_ng_2021-4.jpg"
                                        alt="TOKYOLIFE" className="baner-product_img" />
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </>
    );
}

export default BannerProduct;