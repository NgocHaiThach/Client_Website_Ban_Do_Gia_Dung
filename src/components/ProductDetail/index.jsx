import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import callApi from '../../utils/callApi';
import { formatPrice } from '../../utils/format';
import SliderImage from '../Content/Slider/SliderImage';
import './style.css';
import cookies from 'react-cookies';
import { addProductToCartByUser } from '../../redux/cart/apiFunctionCart';
import { Toast } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { FaShoppingCart } from "react-icons/fa";




function ProductDetail(props) {

    const { id } = useParams();
    const [product, setProduct] = useState({});


    const getProductById = async () => {
        try {
            const res = await callApi(`/products/${id}`, 'GET', null);
            setProduct(res.data.result);
        }
        catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getProductById()
    }, [])

    const accessUser = cookies.load("userToken");

    const [indexImg, setIndexImg] = useState(0);
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    // const [show, setShow] = useState(false);

    const handleAddToCard = () => {
        if (accessUser !== undefined) {
            addProductToCartByUser(dispatch, accessUser.userId, id, quantity);

            toast.info('Thêm vào giỏ hàng thành công!', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        else if (accessUser === undefined) {
            toast.warn('Vui lòng đăng nhập!', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    // let [quantity, setQuantity] = useState(1);


    return (
        <>
            <div className="card-wrapper">

                <div className="card">
                    {/* card left  */}
                    <div className="product-imgs">
                        <div className="img-display">
                            <div className="img-showcase">
                                {/* {product.images?.map((image, index) => ( */}
                                {product.images && <img src={product.images[indexImg]} alt="shoe image" />}
                                {/* ))} */}
                            </div>
                        </div>
                        <div className="img-select">
                            {product.images?.map((image, index) => (
                                <div key={index} src={image} alt="" className="img-item">
                                    <a href="#" data-id={index}>
                                        <img onClick={() => setIndexImg(index)} key={index} src={image} alt="shoe image" />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* <SliderImage slides={listIMG} /> */}

                    {/* card right  */}
                    <div className="product-content">
                        <h2 className="product-title">{product.name}</h2>

                        <div className="product-price">
                            <p className="new-price">Giá: <span>{formatPrice(+product.price)}đ</span></p>
                        </div>

                        <div className="product-detail">
                            <h2>Chi tiết sản phẩm: </h2>

                            <ul>
                                {product?.highlights?.map((item, index) => (
                                    <li key={index}><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                        <div className="purchase-info">
                            <input type='number'
                                min='0'
                                defaultValue={quantity}
                                onChange={(e) => setQuantity(e.target.value)} />
                            <button type="button"
                                onClick={handleAddToCard}
                                className="btn-add-to-card">
                                Thêm vào giỏ hàng
                                {/* <i style={{ marginLeft: '8px' }} className="fas fa-shopping-cart"></i> */}
                                <FaShoppingCart style={{ marginLeft: '8px' }} />
                            </button>

                        </div>

                    </div>
                    <div className="">
                        <div className="product-params">
                            <div className="params-title">THÔNG SỐ KỸ THUẬT</div>
                            <table style={{ width: '200%' }}>
                                <tbody>
                                    {product?.specifications?.map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.name}</td>
                                            <td>{item.value}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default ProductDetail;