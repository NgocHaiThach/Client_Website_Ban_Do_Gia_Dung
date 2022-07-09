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
        if (res === undefined) {
            alert("Giỏ hàng trống. Vui lòng thêm sản phẩm vào giỏ hàng");
        }
        console.log('fee', res);
        // if (res.data.result.length > 0) {

        setListFee(res.data.result);
        setFee(res.data.result?.fee);
        setStore(res.data.result);
        // }
        // else {
        //     alert("Sản phẩm đã hết hàng. Vui lòng chọn sản phẩm khác");
        // }

    }

    const listCart = useSelector(state => state.cartList.list);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (address?.addressId) {
            setIsLoading(true);
            getFeeAddress(address?.addressId);
            setIsLoading(false);
        }
    }, [address]);

    //handle Select
    const handleSelectAddress = (item) => {
        setStore(item)
        setDisplayAddresses(true);
        setFee(item.fee);
    }
    return (
        <>
            {/* {address !== null ? */}

            {address === null || listFee.length === 0 ?
                <span className="payment__list-form-add" style={{ padding: '15px 20px', fontSize: '20px', marginTop: '10px' }}>
                    {listFee.length > 0 && <div className="bill__loading">
                        <div className="spinner-container">
                            <div className="loading-spinner">
                            </div>
                        </div>
                    </div>}
                </span>
                :
                <>
                    <div className="payment__select-address">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div className="payment__note" style={{ textAlign: 'center', }}>
                                Thông tin giao hàng
                            </div>
                        </div>
                    </div>
                    <div className="payment__list-form-add">

                        <div className='info'>
                            <div className="info-user">
                                <span>Tên cửa hàng:</span>
                                <div>{store?.store.name}</div>
                            </div>

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
                </>

            }

        </>
    );
}

export default StoreInfo;