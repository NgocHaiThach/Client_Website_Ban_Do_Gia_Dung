import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getListSearchProduct } from '../../redux/searchProduct/apiFunctionSearchProduct';
import { formatPrice } from '../../utils/format';
import './style.css';


function SearchProduct(props) {
    const { input } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        getListSearchProduct(dispatch, input);
    }, [])

    const listProduct = useSelector(state => state.searchProduct.list);
    console.log("search", listProduct);
    return (
        <div className="product-container">
            <div className="grid wide">

                <>
                    <div className="product-title">
                        <h3>Tất cả sản phẩm</h3>
                    </div>
                    {listProduct.length > 0 ?
                        <div className="product-content">
                            <div className="col l-12 m-12 c-12">
                                <div id="product1" className="product-content_about product-propose_new active">
                                    <div className="row">
                                        {listProduct?.map((item, index) => (
                                            <div key={index} className="col l-3 m-4 c-6">
                                                <div className="product-propose_new-item">
                                                    <Link style={{ textDecoration: "none" }} to={`/product/${item.product.productId}`}>
                                                        <img src={item.product.avatar}
                                                            alt="tokyolife" className="product-propose_new-item_img" />
                                                        <img src="https://tokyolife.vn/media/wysiwyg/home/I-Online.svg" alt=""
                                                            className="product-propose_new-item_logo" />
                                                        <p className="product-propose_new-item_info">{item.product.name}</p>
                                                        <h4 className="product-propose_new-item_price">{formatPrice(+item.product.price)}đ</h4>
                                                    </Link>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        <div style={{ marginTop: "50px" }}>Sản phẩm trống </div>}
                </>
            </div>
        </div>
    );
}

export default SearchProduct;