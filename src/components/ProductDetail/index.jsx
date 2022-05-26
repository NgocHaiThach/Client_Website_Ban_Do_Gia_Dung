import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import callApi from '../../utils/callApi';
import { formatPrice } from '../../utils/format';
import SliderImage from '../Content/Slider/SliderImage';
import './style.css';
import cookies from 'react-cookies';
import { addProductToCartByUser } from '../../redux/cart/apiFunctionCart';



function ProductDetail(props) {

    const { id } = useParams();
    const [product, setProduct] = useState({});


    const getProductById = async () => {
        try {
            const res = await callApi(`/products/${id}`, 'GET', null)
            setProduct(res.data.result)
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

    const handleAddToCard = () => {
        addProductToCartByUser(dispatch, accessUser.userId, id, 1);
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
                                {/* {(product.highlights)?.map((item, index) => {
                                    <li><span>{item}</span></li>
                                })} */}
                                <li><span>Lòng nồi phủ chống dính cao cấp an toàn cho sức khỏe</span></li>
                                <li><span>Công nghệ nấu 3D (ủ ấm 3 chiều) giữ cơm ngon suốt 48 giờ</span></li>
                                <li><span>Thân nồi bằng nhựa PP cách nhiệt, siêu bền</span></li>
                                <li><span>Đường kính mâm nhiệt lớn, tỏa nhiệt đều, cơm ngon hơn</span></li>
                                <li><span>Kiểu dáng trẻ trung, có quai xách chống bỏng tiện dụng</span></li>
                            </ul>
                        </div>
                        đ
                        <div className="purchase-info">
                            <input type='number' min='0' defaultValue="1" />
                            <button type="button"
                                onClick={handleAddToCard}
                                className="btn-add-to-card">
                                Add to Cart <i className="fas fa-shopping-cart"></i>
                            </button>

                        </div>

                        <div className="social-links">
                            <p>Share At: </p>
                            <a href="#">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                            <a href="#">
                                <i className="fab fa-pinterest"></i>
                            </a>
                        </div>
                    </div>
                    <div className="">
                        <div className="product-params">
                            <div className="params-title">THÔNG SỐ KỸ THUẬT</div>
                            <table>
                                <tbody>


                                    <tr>
                                        <td>Dung tích nồi</td>
                                        <td>1.8 L</td>
                                    </tr>
                                    <tr>
                                        <td>Chế độ</td>
                                        <td>Nấu cơm, Giữ ấm</td>
                                    </tr>
                                    <tr>
                                        <td>Màu sắc</td>
                                        <td>Trắng – Xanh lá</td>
                                    </tr>
                                    <tr>
                                        <td>Loại nồi</td>
                                        <td>Nắp liền</td>
                                    </tr>
                                    <tr>
                                        <td>Chất liệu vỏ nồi</td>
                                        <td>Nhựa PP siêu bền</td>
                                    </tr>
                                    <tr>
                                        <td>Chất liệu lòng nồi</td>
                                        <td>Hợp kim nhôm phủ chống dính cao cấp</td>
                                    </tr>
                                    <tr>
                                        <td>Công suất</td>
                                        <td>700 W</td>
                                    </tr>
                                    <tr>
                                        <td>Điện áp</td>
                                        <td>220V/50HZ</td>
                                    </tr>
                                    <tr>
                                        <td>Thời gian giữ ấm</td>
                                        <td>48 giờ</td>
                                    </tr>
                                    <tr>
                                        <td>Hẹn giờ</td>
                                        <td>Không</td>
                                    </tr>
                                    <tr>
                                        <td>Màn hình</td>
                                        <td>Không</td>
                                    </tr>
                                    <tr>
                                        <td>Bảng điều khiển</td>
                                        <td>Nút gạt</td>
                                    </tr>
                                    <tr>
                                        <td>Dây điện</td>
                                        <td>Dây rời</td>
                                    </tr>
                                    <tr>
                                        <td>Phụ kiện</td>
                                        <td>Muỗng lấy cơm – Cốc đong gạo</td>
                                    </tr>
                                    <tr>
                                        <td>Đặc điểm khác</td>
                                        <td>- Giữ ấm lâu
                                            - Quai xách tiện dụng, chống bỏng</td>
                                    </tr>
                                    <tr>
                                        <td>Xuất xứ</td>
                                        <td>Việt Nam</td>
                                    </tr>
                                    <tr>
                                        <td>Trọng lượng</td>
                                        <td>4.3 kg</td>
                                    </tr>
                                    <tr>
                                        <td>Kích thước đóng hộp</td>
                                        <td>365 x 330 x 305 (mm)</td>
                                    </tr>
                                    <tr>
                                        <td>Bảo hành</td>
                                        <td>24 tháng</td>
                                    </tr>
                                    <tr>
                                        <td>Số người ăn</td>
                                        <td>4 - 6 người</td>
                                    </tr>
                                    <tr>
                                        <td>Công nghệ nấu</td>
                                        <td>3D (tỏa nhiệt từ 3 hướng)</td>
                                    </tr>
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