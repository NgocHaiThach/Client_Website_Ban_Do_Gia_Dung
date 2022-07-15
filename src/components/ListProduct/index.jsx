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
                                            </Link>
                                        </div>
                                        {/* <div className="product-item__detail">
                                            <div className="product-wrapper">
                                                <div className="product-frame">
                                                    <Link className='product-frame__link' style={{ textDecoration: "none" }} to={`/product/${item.productId}`}>
                                                        <img src={item.avatar}
                                                            alt="tokyolife" className="product-frame-item_img" />
                                                    </Link>
                                                </div>
                                                <div className="product-outer">
                                                    <h3 className="product-reset">
                                                        <Link className="product-reset__name" style={{ textDecoration: "none" }} to={`/product/${item.productId}`}>
                                                            {item.name}
                                                        </Link>
                                                    </h3>
                                                    <div className="product-model">
                                                        Mã: {item.productId}
                                                    </div>
                                                    <div className="product-price">
                                                        {item.price}đ
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListProduct;