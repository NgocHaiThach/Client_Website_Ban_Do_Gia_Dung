import React from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from '../../utils/format';
import './style.css';


function ListProduct({ listProduct }) {


    return (
        <div className="product-container">
            <div className="grid wide">
                <div className="product-title">
                    <h3>{listProduct.name} - Tất cả sản phẩm</h3>
                </div>
                <div className="product-content">
                    <div className="col l-12 m-12 c-12">
                        <div id="product1" className="product-content_about product-propose_new active">
                            <div className="row">
                                {listProduct.products?.map((item, index) => (
                                    <div key={index} className="col l-3 m-4 c-6">
                                        <div className="product-propose_new-item">
                                            <Link style={{ textDecoration: "none" }} to={`/product/${item.productId}`}>
                                                <img src={item.avatar}
                                                    alt="tokyolife" className="product-propose_new-item_img" />
                                                <img src="https://tokyolife.vn/media/wysiwyg/home/I-Online.svg" alt=""
                                                    className="product-propose_new-item_logo" />
                                                <p className="product-propose_new-item_info">{item.name}</p>
                                                <h4 className="product-propose_new-item_price">{formatPrice(item.price)}đ</h4>

                                                {/* <div className="product-propose_new-item_saleAll">
                                                    <p className="product-propose_new-item_sale">715.000 ₫</p>
                                                </div> */}
                                            </Link>
                                        </div>
                                    </div>
                                ))}

                                {/* <div className="col l-3 m-4 c-6">
                                    <div className="product-propose_new-item">
                                        <img src="https://sunhouse.com.vn/pic/thumb/compact/product/bo-noi-inox-sunhouse-shg2303msa.jpg"
                                            alt="tokyolife" className="product-propose_new-item_img" />
                                        <img src="https://tokyolife.vn/media/wysiwyg/home/I-Online.svg" alt=""
                                            className="product-propose_new-item_logo" />
                                        <p className="product-propose_new-item_info"> Bộ nồi Inox 3 đáy SHG2303MSA</p>
                                        <h4 className="product-propose_new-item_price">660.000 ₫</h4>
                                        <div className="product-propose_new-item_saleAll">
                                            <p className="product-propose_new-item_sale">715.000 ₫</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col l-3 m-4 c-6">
                                    <div className="product-propose_new-item">
                                        <img src="https://sunhouse.com.vn/pic/thumb/compact/product/bo-noi-inox-sunhouse-shg2303mra.jpg"
                                            alt="tokyolife" className="product-propose_new-item_img" />
                                        <img src="https://tokyolife.vn/media/wysiwyg/home/I-Online.svg" alt=""
                                            className="product-propose_new-item_logo" />
                                        <p className="product-propose_new-item_info"> Bộ nồi Inox 3 đáy SHG2303MRA</p>
                                        <h4 className="product-propose_new-item_price">300.000 ₫</h4>
                                        <div className="product-propose_new-item_saleAll">
                                            <p className="product-propose_new-item_sale">715.000 ₫</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col l-3 m-4 c-6">
                                    <div className="product-propose_new-item">
                                        <img src="https://sunhouse.com.vn/pic/thumb/compact/product/1(160).png"
                                            alt="tokyolife" className="product-propose_new-item_img" />
                                        <img src="https://tokyolife.vn/media/wysiwyg/home/I-Online.svg" alt=""
                                            className="product-propose_new-item_logo" />
                                        <p className="product-propose_new-item_info">Bộ nồi chảo inox 3 món Easy Cook SHG993E</p>
                                        <h4 className="product-propose_new-item_price">479.000 ₫</h4>
                                        <div className="product-propose_new-item_saleAll">
                                            <p className="product-propose_new-item_sale">690.000 ₫</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col l-3 m-4 c-6">
                                    <div className="product-propose_new-item">
                                        <img src="https://sunhouse.com.vn/pic/thumb/compact/product/Ava.png"
                                            alt="tokyolife" className="product-propose_new-item_img" />
                                        <img src="https://tokyolife.vn/media/wysiwyg/home/I-Online.svg" alt=""
                                            className="product-propose_new-item_logo" />
                                        <p className="product-propose_new-item_info"> Bộ nồi inox 3 đáy Dura Pro SHG306</p>
                                        <h4 className="product-propose_new-item_price">479.000 ₫</h4>
                                        <div className="product-propose_new-item_saleAll">
                                            <p className="product-propose_new-item_sale">690.000 ₫</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col l-3 m-4 c-6">
                                    <div className="product-propose_new-item">
                                        <img src="https://sunhouse.com.vn/pic/thumb/compact/product/Ava(1).png"
                                            alt="tokyolife" className="product-propose_new-item_img" />
                                        <img src="https://tokyolife.vn/media/wysiwyg/home/I-Online.svg" alt=""
                                            className="product-propose_new-item_logo" />
                                        <p className="product-propose_new-item_info"> Bộ nồi xửng inox 1 đáy Dura SHG104-28</p>
                                        <h4 className="product-propose_new-item_price">479.000 ₫</h4>
                                        <div className="product-propose_new-item_saleAll">
                                            <p className="product-propose_new-item_sale">690.000 ₫</p>
                                        </div>
                                    </div>
                                </div> */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default ListProduct;