import { useEffect, useRef, useState } from 'react';
import cookies from 'react-cookies';
import { FaChevronDown } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import callApi from '../../../utils/callApi';
import { formatPrice } from '../../../utils/format';

function StoreInfo({
    address,
    setFee,
    store,
    setStore
}) {
    const accessUser = cookies.load("userToken");

    const dispatch = useDispatch();

    //list addressRef to select
    const listAddressRef = useRef(null);

    //tonggle display list address
    const [displayAddresses, setDisplayAddresses] = useState(true);

    // xử lý click ra ngoài đóng list address?
    useEffect(() => {
        const checkIfClickedOutside = e => {
            // If the menu is open and the clicked target is not within the list, then close the list
            if (listAddressRef.current && !listAddressRef.current.contains(e.target)) {
                setDisplayAddresses(true);
            }
        };
        document.addEventListener("mousedown", checkIfClickedOutside);
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside);
        };
    }, [listAddressRef]);

    const handleDisplay = () => {
        setDisplayAddresses(!displayAddresses);
    };

    //ds store
    const [listFee, setListFee] = useState([]);

    //gia store mac dinh
    // const [store, setStore] = useState(null);

    const getFeeAddress = async (id) => {
        const res = await callApi("/stores/fee", "POST", {
            customerId: accessUser.userId,
            addressId: id
        });
        // console.log('fee', res);
        setListFee(res.data.result);
        setFee(res.data.result[0]?.fee);
        setStore(res.data.result[0]);

    }

    const listCart = useSelector(state => state.cartList.list);

    useEffect(() => {
        if (address?.addressId) {
            getFeeAddress(address?.addressId);
            console.log('a');
        }
    }, [address])
    //handle Select
    const handleSelectAddress = (item) => {
        // getFeeAddress(item.addressId);
        setStore(item)
        setDisplayAddresses(true);
        setFee(item.fee);

        // const action = setPaymentInfo({
        //     addressInfo: address,
        //     fee: item.fee ? item.fee : store.fee,
        //     storeInfo: item,
        // })
        // dispatch(action);
    }
    return (
        <>
            {/* {address !== null ? */}
            <div className="payment__select-address">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className="payment__note" onClick={handleDisplay}>
                        Chọn cửa hàng bạn muốn mua* <FaChevronDown style={{ paddingTop: '4px', paddingLeft: '3px' }} />
                        {/* <i className="fa-solid fa-angle-down" style={{ color: 'red' }}></i> */}
                    </div>
                    {/* <button onClick={() => setTonggleAdd(!tonggleAdd)} className="btn-add-address">Thêm địa chỉ mới</button> */}
                </div>
                <div ref={listAddressRef} className="footer__language">
                    <div style={{ display: displayAddresses ? "none" : "block" }} className="footer__pseudo">
                        {listFee.length > 0 ?
                            <ul style={{ display: displayAddresses ? "none" : "block" }} className="language__list">
                                {listFee?.map((item, index) => (
                                    <div key={index} className="language__item-action">
                                        <li onClick={() => handleSelectAddress(item)} className="language__item">
                                            {/* <span className="language__item-english">
                                                {index + 1}.{" "}
                                                {item.store.name}, {" "}                                           
                                                {item.store.wardName}, {" "}
                                                {item.store.districtName}, {" "}
                                                {item.store.provinceName}, {" "}
                                            </span> */}
                                            <div className="location__item-info">
                                                <div className="location__item-name">
                                                    {item.store.name}
                                                    <span>
                                                        {/* <AiOutlineCheckCircle /> */}
                                                        {item.default && <span>Địa chỉ mặc định</span>}
                                                    </span>
                                                </div>
                                                <div className="location__item-address">
                                                    <span>Địa chỉ:</span> {" "}
                                                    {item.store.wardName}, {item.store.districtName}, {item.store.provinceName}
                                                </div>
                                                <div className="location__item-phone" style={{ color: 'red' }}>
                                                    <span>Phí giao hàng:</span> {" "}
                                                    {formatPrice(item.fee)}đ
                                                </div>

                                            </div>
                                        </li>
                                        {/* <span style={{ color: 'red', cursor: 'pointer' }}>{formatPrice(item.fee)}đ</span> */}
                                    </div>
                                ))}
                            </ul>
                            :
                            <>
                                <div className="address__loading" style={{ top: "50%" }}>
                                    <div className="spinner-container">
                                        <div className="loading-spinner">
                                        </div>
                                    </div>
                                </div>
                                {listCart.length <= 0 ?
                                    <div style={{ fontSize: "18px", textAlign: "center", paddingBottom: "12px" }}>
                                        Giỏ hàng trống. Vui lòng chọn mua sản phẩm
                                    </div>
                                    : <div style={{ fontSize: "18px", textAlign: "center", paddingBottom: "12px" }}>
                                        Vui lòng chọn địa chỉ trước khi chọn cửa hàng!
                                    </div>}
                            </>
                        }
                    </div>
                </div>

            </div>
            {/* : null} */}

            {address === null || listFee.length === 0 ?
                <span className="payment__list-form-add" style={{ padding: '15px 20px', fontSize: '20px', marginTop: '10px' }}>
                    {/* Vui lòng chọn cửa hàng bạn muốn mua */}
                </span>
                :
                <div className="payment__list-form-add">

                    <div className='info'>
                        <div className="info-user">
                            <span>Tên cửa hàng:</span>
                            <div>{store?.store.name}</div>
                        </div>
                        {/* <div onClick={() => setTonggleEdit(!tonggleEdit)} className="edit-info">Sửa</div> */}
                    </div>

                    <div>
                        <div className="info-user">
                            <span>Đ/chỉ:</span>
                            <div>
                                {store?.store.wardName},
                                {" "} {store?.store.districtName},
                                {" "}{store?.store.provinceName}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="info-user">
                            <span>Giá giao hàng:</span>
                            <div>
                                {formatPrice(+store?.fee)}đ
                            </div>
                        </div>
                    </div>
                </div>

            }

        </>
    );
}

export default StoreInfo;