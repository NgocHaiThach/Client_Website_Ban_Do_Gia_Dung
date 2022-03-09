import React from 'react';
import './style.css';

function ProductContainer(props) {
    return (
        <>
            {/* product-comtainer2  */}
            <div className="product-container">
                <div className="grid wide">
                    <div className="product-title">
                        <h3>MỸ PHẨM</h3>
                        <div className="product-change">
                            <p id="title2" className="product-change-title active">HÀNG MỚI VỀ</p>
                            <p id="title2" className="product-change-title ">BÁN CHẠY NHẤT</p>
                            <div className="product-change-arrow">
                                <i className="fas fa-angle-left"></i>
                                <i className="fas fa-angle-right"></i>
                            </div>
                        </div>
                    </div>

                    <div className="product-content">
                        <div className="row">
                            <div className="col l-2 m-2 c-12">
                                <ul className="product-content_list">
                                    <li className="product-content_item">Trang điểm</li>
                                    <li className="product-content_item">Chăm sóc cơ thể</li>
                                    <li className="product-content_item">Chăm sóc da mặt</li>
                                    <li className="product-content_item">Thực phẩm chức năng</li>
                                </ul>
                            </div>

                            <div className="col l-4 m-0 c-0">
                                <img className="product-content_baner-img"
                                    src="https://tokyolife.vn/media/wysiwyg/categories-image/Thu_ng_2021-8.jpg"
                                    alt="tokyolife" />
                            </div>

                            <div className="col l-6 m-10 c-12">
                                <div id="product2" className="product-content_about product-propose_new active">
                                    <div className="row">
                                        <div className="col l-4 m-6 c-6">
                                            <div className="product-propose_new-item">
                                                <img src="https://tokyolife.vn/media/catalog/product/cache/7a08107443ea0e40aee3357a52df61d8/x/_/x_t_ch_ng_n_ng_n_c_hoa_fresh_garden_tokyolife_-_100g_-_250k.jpg"
                                                    alt="tokyolife"
                                                    className="product-propose_new-item_img" />
                                                <img src="https://tokyolife.vn/media/wysiwyg/home/I-Online.svg" alt=""
                                                    className="product-propose_new-item_logo" />
                                                <p className="product-propose_new-item_info">Xịt chống nắng nước hoa ...</p>
                                                <h4 className="product-propose_new-item_price">250.000 ₫</h4>
                                            </div>
                                        </div>

                                        <div className="col l-4 m-6 c-6">
                                            <div className="product-propose_new-item">
                                                <img src="https://tokyolife.vn/media/catalog/product/cache/7a08107443ea0e40aee3357a52df61d8/5/s/5s0a7105.jpg"
                                                    alt="tokyolife"
                                                    className="product-propose_new-item_img" />
                                                <img src="https://tokyolife.vn/media/wysiwyg/home/I-Online.svg" alt=""
                                                    className="product-propose_new-item_logo" />
                                                <p className="product-propose_new-item_info"> Kem chống nắng dưỡng ẩm ...
                                                </p>
                                                <h4 className="product-propose_new-item_price">300.000 ₫</h4>
                                            </div>
                                        </div>

                                        <div className="col l-4 m-6 c-6">
                                            <div className="product-propose_new-item">
                                                <img src="https://tokyolife.vn/media/catalog/product/cache/7a08107443ea0e40aee3357a52df61d8/x/_/x_t_ch_ng_n_ng_d_ng_m_kh_ng_h_ng_tokyolife-_200g_-_290.000_.jpg"
                                                    alt="tokyolife"
                                                    className="product-propose_new-item_img" />
                                                <img src="https://tokyolife.vn/media/wysiwyg/home/I-Online.svg" alt=""
                                                    className="product-propose_new-item_logo" />
                                                <p className="product-propose_new-item_info"> Xịt chống nắng dưỡng ẩm ...
                                                </p>
                                                <h4 className="product-propose_new-item_price">290.000 ₫</h4>
                                            </div>
                                        </div>

                                        <div className="col l-4 m-6 c-6">
                                            <div className="product-propose_new-item">
                                                <img src="https://tokyolife.vn/media/catalog/product/cache/7a08107443ea0e40aee3357a52df61d8/5/s/5s0a6215.jpg"
                                                    alt="tokyolife"
                                                    className="product-propose_new-item_img" />
                                                <img src="https://tokyolife.vn/media/wysiwyg/home/I-Online.svg" alt=""
                                                    className="product-propose_new-item_logo" />
                                                <p className="product-propose_new-item_info"> Dầu gội phục hồi hư tổn ...
                                                </p>
                                                <h4 className="product-propose_new-item_price">250.000 ₫</h4>
                                            </div>
                                        </div>

                                        <div className="col l-4 m-6 c-6">
                                            <div className="product-propose_new-item">
                                                <img src="https://tokyolife.vn/media/catalog/product/cache/7a08107443ea0e40aee3357a52df61d8/1/_/1_10.jpg"
                                                    alt="tokyolife"
                                                    className="product-propose_new-item_img" />
                                                <img src="https://tokyolife.vn/media/wysiwyg/home/I-Online.svg" alt=""
                                                    className="product-propose_new-item_logo" />
                                                <p className="product-propose_new-item_info"> Nước hoa Pháp Once upon ...
                                                </p>
                                                <h4 className="product-propose_new-item_price">250.000 ₫</h4>
                                            </div>
                                        </div>

                                        <div className="col l-4 m-6 c-6">
                                            <div className="product-propose_new-item">
                                                <img src="https://tokyolife.vn/media/catalog/product/cache/7a08107443ea0e40aee3357a52df61d8/d/_/d_u_g_i_resort_spa_green_tea-150.000__1.jpg"
                                                    alt="tokyolife"
                                                    className="product-propose_new-item_img" />
                                                <img src="https://tokyolife.vn/media/wysiwyg/home/I-Online.svg" alt=""
                                                    className="product-propose_new-item_logo" />
                                                <p className="product-propose_new-item_info"> Dầu gội RESORT & SPA ...</p>
                                                <h4 className="product-propose_new-item_price">160.000 ₫</h4>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div id="product2" className="product-content_about product-propose_new">
                                    <div className="row">
                                        <div className="col l-4 m-6 c-6">
                                            <div className="product-propose_new-item">
                                                <img src="https://tokyolife.vn/media/catalog/product/cache/7a08107443ea0e40aee3357a52df61d8/m/_/m_t_n_5_chi_c.jpg"
                                                    alt="tokyolife"
                                                    className="product-propose_new-item_img" />
                                                <img src="https://tokyolife.vn/media/wysiwyg/home/I-Online.svg" alt=""
                                                    className="product-propose_new-item_logo" />
                                                <p className="product-propose_new-item_info"> Mặt nạ dưỡng chất ...</p>
                                                <h4 className="product-propose_new-item_price">30.000 ₫</h4>
                                            </div>
                                        </div>

                                        <div className="col l-4 m-6 c-6">
                                            <div className="product-propose_new-item">
                                                <img src="https://tokyolife.vn/media/catalog/product/cache/7a08107443ea0e40aee3357a52df61d8/x/_/x_t_ch_ng_n_ng_tokyolife_uv_spray_sun_protect_spf_50_kh_ng_h_ng_4550084844381_gi_350k_5_.jpg"
                                                    alt="tokyolife"
                                                    className="product-propose_new-item_img" />
                                                <img src="https://tokyolife.vn/media/wysiwyg/home/I-Online.svg" alt=""
                                                    className="product-propose_new-item_logo" />
                                                <p className="product-propose_new-item_info"> Xịt chống nắng dưỡng ẩm ...
                                                </p>
                                                <h4 className="product-propose_new-item_price">290.000 ₫</h4>
                                            </div>
                                        </div>

                                        <div className="col l-4 m-6 c-6">
                                            <div className="product-propose_new-item">
                                                <img src="https://tokyolife.vn/media/catalog/product/cache/7a08107443ea0e40aee3357a52df61d8/x/_/x_t_ch_ng_n_ng_tokyolife_uv_spray_sun_protect_spf_50_h_ng_th_o_m_c_4550084844398_gi_ny_350k_1_.jpg"
                                                    alt="tokyolife"
                                                    className="product-propose_new-item_img" />
                                                <img src="https://tokyolife.vn/media/wysiwyg/home/I-Online.svg" alt=""
                                                    className="product-propose_new-item_logo" />
                                                <p className="product-propose_new-item_info"> Xịt chống nắng dưỡng ẩm ...
                                                </p>
                                                <h4 className="product-propose_new-item_price">290.000 ₫</h4>
                                            </div>
                                        </div>

                                        <div className="col l-4 m-6 c-6">
                                            <div className="product-propose_new-item">
                                                <img src="https://tokyolife.vn/media/catalog/product/cache/7a08107443ea0e40aee3357a52df61d8/s/_/s_a_r_a_m_t_j_white_tinh_ch_t_tr_xanh_160g_165k.jpg"
                                                    alt="tokyolife"
                                                    className="product-propose_new-item_img" />
                                                <img src="https://tokyolife.vn/media/wysiwyg/home/I-Online.svg" alt=""
                                                    className="product-propose_new-item_logo" />
                                                <p className="product-propose_new-item_info"> Sữa rửa mặt J’White Trà ...
                                                </p>
                                                <h4 className="product-propose_new-item_price">165.000 ₫</h4>
                                            </div>
                                        </div>

                                        <div className="col l-4 m-6 c-6">
                                            <div className="product-propose_new-item">
                                                <img src="https://tokyolife.vn/media/catalog/product/cache/7a08107443ea0e40aee3357a52df61d8/s/_/s_a_r_a_m_t_j_white_tinh_ch_t_l_h_i_160g_165k.jpg"
                                                    alt="tokyolife"
                                                    className="product-propose_new-item_img" />
                                                <img src="https://tokyolife.vn/media/wysiwyg/home/I-Online.svg" alt=""
                                                    className="product-propose_new-item_logo" />
                                                <p className="product-propose_new-item_info"> Sữa rửa mặt J’White Trà ...
                                                </p>
                                                <h4 className="product-propose_new-item_price">165.000 ₫</h4>
                                            </div>
                                        </div>

                                        <div className="col l-4 m-6 c-6">
                                            <div className="product-propose_new-item">
                                                <img src="https://tokyolife.vn/media/catalog/product/cache/7a08107443ea0e40aee3357a52df61d8/s/_/s_a_r_a_m_t_j_white_tinh_ch_t_g_o_160g_165k.jpg"
                                                    alt="tokyolife"
                                                    className="product-propose_new-item_img" />
                                                <img src="https://tokyolife.vn/media/wysiwyg/home/I-Online.svg" alt=""
                                                    className="product-propose_new-item_logo" />
                                                <p className="product-propose_new-item_info"> Sữa rửa mặt J’White Trà ...
                                                </p>
                                                <h4 className="product-propose_new-item_price">165.000 ₫</h4>
                                            </div>
                                        </div>

                                    </div>
                                </div>





                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductContainer;