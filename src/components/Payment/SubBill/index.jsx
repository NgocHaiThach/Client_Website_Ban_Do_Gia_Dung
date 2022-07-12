import { useState } from 'react';
import cookies from 'react-cookies';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { getListCartByIdUser } from '../../../redux/cart/apiFunctionCart';
import callApi from '../../../utils/callApi';
import { formatPrice } from '../../../utils/format';
import IMG_VNPAY from '../../../assets/images/icon-payment-vnpay.png';
import IMG_COD from '../../../assets/images/icon-payment-method-cod.svg';
import IMG_BANK_1 from '../../../assets/images/pyicon-1.svg';
import IMG_BANK_2 from '../../../assets/images/pyicon-2.svg';
import IMG_BANK_3 from '../../../assets/images/pyicon-3.svg';
import IMG_BANK_4 from '../../../assets/images/pyicon-4.svg';
import IMG_BANK_5 from '../../../assets/images/pyicon-5.svg';



function SubBill({ fee, address, store, noteBill }) {

    const style = {
        fontSize: 17
    };

    //get listCart from store
    const listCart = useSelector(state => state.cartList.list);
    const accessUser = cookies.load("userToken");

    const history = useHistory();
    const dispatch = useDispatch();

    const [typePay, setTypePay] = useState(1);

    const typepays = [
        {
            id: 1,
            name: 'Thanh toán tiền mặt khi nhận hàng',
            img: [],
            icon: IMG_COD,
        },
        {
            id: 2,
            name: 'Thanh toán bằng VNPay hoặc thẻ ngân hàng, thẻ quốc tế',
            img: [IMG_BANK_1, IMG_BANK_2, IMG_BANK_3, IMG_BANK_4, IMG_BANK_5],
            icon: IMG_VNPAY,
        },
    ];

    //total Price of list
    const totalPriceTemp = listCart.reduce(function (total, item) {
        return total + item.itemPrice;
    }, 0);

    const handleOrder = async () => {
        if (address !== null) {
            if (typePay === 1) {
                if (noteBill !== '') {
                    const res = await callApi('/orders/create/cod', 'POST', {
                        customerId: accessUser.userId,
                        addressId: address.addressId,
                        storeId: store.store.storeId,
                        note: noteBill,
                    });

                    localStorage.setItem('infoPayment', (res.data.result.orderId));


                    history.push(`/bill/${accessUser.userId}`);
                    getListCartByIdUser(dispatch, accessUser.userId);
                    toast.info('Đặt hàng thành công', {
                        position: "bottom-right",
                        autoClose: 3000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
                else {
                    alert("Vui lòng nhập ghi chú");
                }

            }
            else {
                if (noteBill !== "") {
                    await callApi('/orders/create/onl', 'POST', {
                        customerId: accessUser.userId,
                        addressId: address.addressId,
                        storeId: store.store.storeId,
                        note: noteBill,
                        returnUrl: `http://localhost:3000/bill/${accessUser.userId}`,
                    })
                        .then(res => {
                            // console.log('res', res)
                            if (res.status === 200) {
                                window.location.href = `${res.data.result}`;
                            }
                            else if (res.status === 400) {
                                alert('thanh toan that bai')
                                // loginFaild = true
                            }
                        })
                        .catch(err => { console.log(err) })

                    // localStorage.setItem('infoPayment', (res.data.result.orderId));

                    toast.info('Đặt hàng thành công', {
                        position: "bottom-right",
                        autoClose: 3000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    getListCartByIdUser(dispatch, accessUser.userId);
                    // history.push(`/bill/${accessUser.userId}`);
                }
                else {
                    alert("Vui lòng nhập ghi chú");
                }

            }

        }
        else if (address === null) {
            toast.error('Vui lòng chọn địa chỉ giao hàng', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            // console.log('info')
        }
        if (store === null) {
            toast.error('Giỏ hàng trống, hãy thêm sản phẩm vào giỏ', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        // console.log("first", accessUser.userId, address.addressId, store.store.storeId)
        console.log("first", typePay)
    }

    return (
        <>
            <div className="payment__info">
                <div className="payment__info-title">
                    Đơn hàng của bạn
                </div>
                <div className="payment__info-list">
                    <div className="payment__info-list__title">
                        <div className="payment__info-list__title-name">
                            Sản phẩm
                        </div>
                        <div className="payment__info-list__title-price">
                            Tạm tính
                        </div>
                    </div>
                    {listCart.map((item, index) => (
                        <div key={index} className="payment__info-list__item">
                            <div className="payment__info-list__item-name">
                                {item.name} x {item.quantity}
                            </div>
                            <div className="payment__info-list__item-price">
                                {formatPrice(item.itemPrice)}đ
                            </div>
                        </div>
                    ))}
                    <div className="payment__info-list__total">
                        <div className="payment__info-list__total-title">
                            Tạm tính
                        </div>
                        <div className="payment__info-list__total-price">
                            {formatPrice(+totalPriceTemp)}đ
                        </div>
                    </div>

                    <div className="payment__info-list__ship">
                        <div className="payment__info-list__ship-title">
                            Giao hàng
                        </div>
                        <div className="payment__info-list__ship-price">
                            {formatPrice(+fee)}đ
                        </div>
                    </div>

                    <div className="payment__info-list__total">
                        <div className="payment__info-list__total-title toltal__price">
                            Tổng
                        </div>
                        <div className="payment__info-list__ship-price toltal__price">
                            {formatPrice((totalPriceTemp) + (fee))}đ
                        </div>
                    </div>
                </div>
                <div className="payment__info-type">
                    {typepays.map(type => (
                        <div key={type.id} className="payment__info-type__cash">

                            <input
                                onChange={() => setTypePay(type.id)}
                                checked={typePay === type.id}
                                type="radio"
                                style={{ fontSize: "18px" }}
                            />
                            <img style={{ width: "50px", height: "50px", padding: "0 4px", marginBottom: '16px' }} src={type.icon} alt="" />


                            <div>
                                <span>{type.name}</span>
                                <ul style={{ display: 'flex', listStyle: 'none', paddingLeft: '5px' }}>
                                    {type.img.map((img, index) => (
                                        <li key={index}>
                                            <img style={{ width: "50px", height: "50px", padding: "0 4px" }} src={img} alt="" />
                                        </li>
                                    ))}
                                </ul>

                            </div>



                        </div>
                    ))}

                </div>

                <div
                    // onClick={handleSubmit(onSubmit)}
                    className="payment__info-button">
                    {/* to={`/bill/${idUser}`} */}
                    <button
                        className="btn-confirm"
                        onClick={handleOrder}
                    >
                        {/* <Link style={{ textDecoration: 'none', color: 'white' }} to={`/bill/${accessUser.userId}`}> */}
                        Đặt Hàng
                        {/* </Link> */}
                    </button>
                </div>
                {/* <div className="payment__info-thanks">
                    Cảm ơn quý khách đã ủng hộ Ottel shop!
                </div> */}
            </div>
            <ToastContainer style={style} />

        </>
    );
}

export default SubBill;