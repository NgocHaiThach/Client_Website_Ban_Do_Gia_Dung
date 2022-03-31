import React from 'react';
import './style.css';

function ProductContainer(props) {
    return (
        <>
            {/* product-comtainer2  */}
            <div className="product-container">
                <div className="grid wide">
                    <div className="product-title">
                        <h3>ĐỒ GIA DỤNG</h3>
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
                                    <li className="product-content_item">Nồi nhôm</li>
                                    <li className="product-content_item">Nồi inox</li>
                                    <li className="product-content_item">Nồi áp suất</li>
                                    <li className="product-content_item">Nồi Anod</li>
                                    <li className="product-content_item">Bộ nồi chảo</li>
                                    <li className="product-content_item">Chảo chống dính</li>
                                </ul>
                            </div>

                            <div className="col l-4 m-0 c-0">
                                <img className="product-content_baner-img"
                                    src="https://sunhouse.com.vn/pic/thumb/compact/product/bo-noi-ceramic-sunhouse-shg2003mca_005.png"
                                    alt="tokyolife" />
                            </div>

                            <div className="col l-6 m-10 c-12">
                                <div id="product2" className="product-content_about product-propose_new active">
                                    <div className="row">
                                        <div className="col l-4 m-6 c-6">
                                            <div className="product-propose_new-item_contain">
                                                <img src="https://sunhouse.com.vn/pic/thumb/large/product/_16A2515-1.png"
                                                    alt="tokyolife"
                                                    className="product-propose_new-item_img_contain" />
                                                <img src="https://tokyolife.vn/media/wysiwyg/home/I-Online.svg" alt=""
                                                    className="product-propose_new-item_logo" />
                                                <p className="product-propose_new-item_info">Nồi Inox</p>
                                                <h4 className="product-propose_new-item_price">250.000 ₫</h4>
                                            </div>
                                        </div>

                                        <div className="col l-4 m-6 c-6">
                                            <div className="product-propose_new-item_contain">
                                                <img src="https://sunhouse.com.vn/pic/thumb/compact/product/bo-noi-ceramic-sunhouse-shg2003mca_005.png"
                                                    alt="tokyolife"
                                                    className="product-propose_new-item_img_contain" />
                                                <img src="https://tokyolife.vn/media/wysiwyg/home/I-Online.svg" alt=""
                                                    className="product-propose_new-item_logo" />
                                                <p className="product-propose_new-item_info"> Nồi nhôm
                                                </p>
                                                <h4 className="product-propose_new-item_price">300.000 ₫</h4>
                                            </div>
                                        </div>

                                        <div className="col l-4 m-6 c-6">
                                            <div className="product-propose_new-item_contain">
                                                <img src="https://sunhouse.com.vn/pic/thumb/compact/product/chao-chong-dinh-sunhouse-swp2xMA_004(1).png"
                                                    alt="tokyolife"
                                                    className="product-propose_new-item_img_contain" />
                                                <img src="https://tokyolife.vn/media/wysiwyg/home/I-Online.svg" alt=""
                                                    className="product-propose_new-item_logo" />
                                                <p className="product-propose_new-item_info"> Chảo chống dính
                                                </p>
                                                <h4 className="product-propose_new-item_price">290.000 ₫</h4>
                                            </div>
                                        </div>

                                        <div className="col l-4 m-6 c-6">
                                            <div className="product-propose_new-item_contain">
                                                <img src="https://sunhouse.com.vn/pic/thumb/compact/product/noi-ap-suat-8534.png"
                                                    alt="tokyolife"
                                                    className="product-propose_new-item_img_contain" />
                                                <img src="https://tokyolife.vn/media/wysiwyg/home/I-Online.svg" alt=""
                                                    className="product-propose_new-item_logo" />
                                                <p className="product-propose_new-item_info"> Nồi áp suất
                                                </p>
                                                <h4 className="product-propose_new-item_price">250.000 ₫</h4>
                                            </div>
                                        </div>

                                        <div className="col l-4 m-6 c-6">
                                            <div className="product-propose_new-item_contain">
                                                <img src="https://sunhouse.com.vn/pic/thumb/large/product/noi-anod.png"
                                                    alt="tokyolife"
                                                    className="product-propose_new-item_img_contain" />
                                                <img src="https://tokyolife.vn/media/wysiwyg/home/I-Online.svg" alt=""
                                                    className="product-propose_new-item_logo" />
                                                <p className="product-propose_new-item_info">Nồi Anod</p>
                                                <h4 className="product-propose_new-item_price">160.000 ₫</h4>
                                            </div>
                                        </div>

                                        <div className="col l-4 m-6 c-6">
                                            <div className="product-propose_new-item_contain">
                                                <img src="https://sunhouse.com.vn/pic/thumb/large/product/cs88(2).png"
                                                    alt="tokyolife"
                                                    className="product-propose_new-item_img_contain" />
                                                <img src="https://tokyolife.vn/media/wysiwyg/home/I-Online.svg" alt=""
                                                    className="product-propose_new-item_logo" />
                                                <p className="product-propose_new-item_info"> Bộ nồi chảo
                                                </p>
                                                <h4 className="product-propose_new-item_price">250.000 ₫</h4>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                {/* <div id="product2" className="product-content_about product-propose_new">
                                    <div className="row">
                                        <div className="col l-4 m-6 c-6">
                                            <div className="product-propose_new-item_contain">
                                                <img src="https://tokyolife.vn/media/catalog/product/cache/7a08107443ea0e40aee3357a52df61d8/m/_/m_t_n_5_chi_c.jpg"
                                                    alt="tokyolife"
                                                    className="product-propose_new-item_img_contain" />
                                                <img src="https://tokyolife.vn/media/wysiwyg/home/I-Online.svg" alt=""
                                                    className="product-propose_new-item_logo" />
                                                <p className="product-propose_new-item_info"> Mặt nạ dưỡng chất ...</p>
                                                <h4 className="product-propose_new-item_price">30.000 ₫</h4>
                                            </div>
                                        </div>

                                        <div className="col l-4 m-6 c-6">
                                            <div className="product-propose_new-item_contain">
                                                <img src="https://tokyolife.vn/media/catalog/product/cache/7a08107443ea0e40aee3357a52df61d8/x/_/x_t_ch_ng_n_ng_tokyolife_uv_spray_sun_protect_spf_50_kh_ng_h_ng_4550084844381_gi_350k_5_.jpg"
                                                    alt="tokyolife"
                                                    className="product-propose_new-item_img_contain" />
                                                <img src="https://tokyolife.vn/media/wysiwyg/home/I-Online.svg" alt=""
                                                    className="product-propose_new-item_logo" />
                                                <p className="product-propose_new-item_info"> Xịt chống nắng dưỡng ẩm ...
                                                </p>
                                                <h4 className="product-propose_new-item_price">290.000 ₫</h4>
                                            </div>
                                        </div>

                                        <div className="col l-4 m-6 c-6">
                                            <div className="product-propose_new-item_contain">
                                                <img src="https://tokyolife.vn/media/catalog/product/cache/7a08107443ea0e40aee3357a52df61d8/x/_/x_t_ch_ng_n_ng_tokyolife_uv_spray_sun_protect_spf_50_h_ng_th_o_m_c_4550084844398_gi_ny_350k_1_.jpg"
                                                    alt="tokyolife"
                                                    className="product-propose_new-item_img_contain" />
                                                <img src="https://tokyolife.vn/media/wysiwyg/home/I-Online.svg" alt=""
                                                    className="product-propose_new-item_logo" />
                                                <p className="product-propose_new-item_info"> Xịt chống nắng dưỡng ẩm ...
                                                </p>
                                                <h4 className="product-propose_new-item_price">290.000 ₫</h4>
                                            </div>
                                        </div>

                                        <div className="col l-4 m-6 c-6">
                                            <div className="product-propose_new-item_contain">
                                                <img src="https://tokyolife.vn/media/catalog/product/cache/7a08107443ea0e40aee3357a52df61d8/s/_/s_a_r_a_m_t_j_white_tinh_ch_t_tr_xanh_160g_165k.jpg"
                                                    alt="tokyolife"
                                                    className="product-propose_new-item_img_contain" />
                                                <img src="https://tokyolife.vn/media/wysiwyg/home/I-Online.svg" alt=""
                                                    className="product-propose_new-item_logo" />
                                                <p className="product-propose_new-item_info"> Sữa rửa mặt J’White Trà ...
                                                </p>
                                                <h4 className="product-propose_new-item_price">165.000 ₫</h4>
                                            </div>
                                        </div>

                                        <div className="col l-4 m-6 c-6">
                                            <div className="product-propose_new-item_contain">
                                                <img src="https://tokyolife.vn/media/catalog/product/cache/7a08107443ea0e40aee3357a52df61d8/s/_/s_a_r_a_m_t_j_white_tinh_ch_t_l_h_i_160g_165k.jpg"
                                                    alt="tokyolife"
                                                    className="product-propose_new-item_img_contain" />
                                                <img src="https://tokyolife.vn/media/wysiwyg/home/I-Online.svg" alt=""
                                                    className="product-propose_new-item_logo" />
                                                <p className="product-propose_new-item_info"> Sữa rửa mặt J’White Trà ...
                                                </p>
                                                <h4 className="product-propose_new-item_price">165.000 ₫</h4>
                                            </div>
                                        </div>

                                        <div className="col l-4 m-6 c-6">
                                            <div className="product-propose_new-item_contain">
                                                <img src="https://tokyolife.vn/media/catalog/product/cache/7a08107443ea0e40aee3357a52df61d8/s/_/s_a_r_a_m_t_j_white_tinh_ch_t_g_o_160g_165k.jpg"
                                                    alt="tokyolife"
                                                    className="product-propose_new-item_img_contain" />
                                                <img src="https://tokyolife.vn/media/wysiwyg/home/I-Online.svg" alt=""
                                                    className="product-propose_new-item_logo" />
                                                <p className="product-propose_new-item_info"> Sữa rửa mặt J’White Trà ...
                                                </p>
                                                <h4 className="product-propose_new-item_price">165.000 ₫</h4>
                                            </div>
                                        </div>

                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductContainer;