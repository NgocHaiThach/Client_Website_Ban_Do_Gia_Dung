import React, { useEffect, useRef, useState } from 'react';
import { Toast } from 'react-bootstrap';
import cookies from 'react-cookies';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAddressByUser, getListAddress } from '../../redux/address/apiFunctionAddress';
import AddAddress from './AddAddress';
import EditAddress from './EditAddress';
import './style.css';
import SubBill from './SubBill';
import callApi from '../../utils/callApi';



function Payment(props) {

    const dispatch = useDispatch();
    const [show, setShow] = useState(false);


    // get info user from cookies
    const accessUser = cookies.load("userToken");

    //list address init
    const listAddress = useSelector(state => state.addressList.list);

    const addressDefault = (listAddress)?.find(item => item.default === true);

    //state address default
    const [address, setAddress] = useState(null);

    useEffect(() => {
        getListAddress(dispatch, accessUser.userId);
    }, [accessUser.userId]);

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


    //handle Select
    const handleSelectAddress = (item) => {
        getFeeAddress(item.addressId);

        setAddress(item)
        setDisplayAddresses(true);
        console.log('a')
    }

    const [tonggleAdd, setTonggleAdd] = useState(false);
    const [tonggleEdit, setTonggleEdit] = useState(false);

    //handle Delete address user by idAddress
    const handleDeleteAddressById = async (id) => {
        deleteAddressByUser(dispatch, id, accessUser.userId);
        setShow(true);
    }

    const handleDisplay = () => {
        setDisplayAddresses(!displayAddresses);
    }

    const [listFee, setListFee] = useState([]);

    const getFeeAddress = async (id) => {
        const res = await callApi("/stores/fee", "POST", {
            customerId: accessUser.userId,
            addressId: id
        });
        // console.log('fee', res);
        setListFee(res.data.result);
    }

    useEffect(() => {
        // getFeeAddress();
    }, []);

    return (
        <>

            <div className="grid wide">
                <div className="">
                    <div className="payment__title">
                        thanh toán
                    </div>
                    <div className="payment__wrapper">
                        <div className="payment__border">
                            <div className="payment__address">
                                <div className="payment__address-title">
                                    thông tin thanh toán
                                </div>

                                <div className="payment__select-address">
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <div className="payment__note" onClick={handleDisplay}>
                                            Chọn địa chỉ giao hàng của bạn*
                                            {/* <i className="fa-solid fa-angle-down" style={{ color: 'red' }}></i> */}
                                        </div>
                                        <button onClick={() => setTonggleAdd(!tonggleAdd)} className="btn-add-address">Thêm địa chỉ mới</button>
                                    </div>
                                    <div ref={listAddressRef} className="footer__language">
                                        <div style={{ display: displayAddresses ? "none" : "block" }} className="footer__pseudo">
                                            {listAddress.length > 0 ?
                                                <ul style={{ display: displayAddresses ? "none" : "block" }} className="language__list">
                                                    {listAddress?.map((item, index) => (
                                                        <div key={index} className="language__item-action">
                                                            <li onClick={() => handleSelectAddress(item)} className="language__item">
                                                                <span className="language__item-english">
                                                                    {index + 1}.{" "}
                                                                    {item.name}, {" "}
                                                                    {item.phone}, {" "}
                                                                    {item.detail}, {" "}
                                                                    {item.wardName}, {" "}
                                                                    {item.districtName}, {" "}
                                                                    {item.provinceName}, {" "}
                                                                    {item.note}
                                                                </span>
                                                            </li>
                                                            <span onClick={() => handleDeleteAddressById(item.addressId)} style={{ color: 'red', textDecoration: 'underline', cursor: 'pointer' }}>Xóa</span>
                                                        </div>
                                                    ))}
                                                </ul>
                                                :
                                                <div style={{ padding: '15px 20px' }}>
                                                    Danh  sách địa chỉ trống
                                                </div>
                                            }
                                        </div>
                                    </div>

                                </div>

                                <div className="payment__list-form-add">
                                    {address === null || listAddress.length === 0 ?
                                        <span style={{ padding: '15px 20px', fontSize: '20px', marginTop: '10px' }}>
                                            Vui lòng chọn hoặc thêm địa chỉ của bạn
                                        </span>
                                        :
                                        <>
                                            <div className='info'>
                                                <div className="info-user">
                                                    <span>Họ tên:</span>
                                                    <div>{address?.name}</div>
                                                </div>
                                                <div onClick={() => setTonggleEdit(!tonggleEdit)} className="edit-info">Sửa</div>
                                            </div>
                                            <div>
                                                <div className="info-user">
                                                    <span>Số điện thoại:</span>
                                                    <div>{address?.phone}</div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="info-user">
                                                    <span>Địa chỉ:</span>
                                                    <div>
                                                        {address?.detail},
                                                        {" "} {address?.wardName},
                                                        {" "} {address?.districtName},
                                                        {" "}{address?.provinceName}
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="info-user">
                                                    <span>Ghi Chú:</span>
                                                    <div>
                                                        {address?.note}
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    }
                                </div>
                                <select onChange={(e) => console.log('fee', e.target.value)}>
                                    {listFee.map((item, index) => (
                                        <option key={index} value={item.fee}>{item.store.name}</option>
                                    ))}
                                </select>
                            </div>
                            <SubBill />
                        </div>
                    </div>
                </div >
            </div>

            {tonggleAdd ?
                <>
                    <AddAddress
                        // getListAddressUser={getListAddressUser}
                        setTonggleAdd={setTonggleAdd}
                        tonggleAdd={tonggleAdd}
                    />
                </> : null
            }

            {tonggleEdit ?
                <EditAddress
                    setTonggleEdit={setTonggleEdit}
                    tonggleEdit={tonggleEdit}
                    address={address}
                /> : null
            }
            <Toast
                onClose={() => setShow(false)}
                show={show} delay={3000} autohide
                className="toast-address"
            >
                <Toast.Header>
                    <strong>Thông báo</strong>
                </Toast.Header>
                <Toast.Body className="text-white">
                    Xóa chỉ thành công!!
                </Toast.Body>
            </Toast>
        </>
    );
}

export default Payment;