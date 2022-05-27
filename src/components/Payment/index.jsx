import React, { useEffect, useRef, useState } from 'react';
import cookies from 'react-cookies';
import callApi from '../../utils/callApi';
import AddAddress from './AddAddress';
import EditAddress from './EditAddress';
import './style.css';
import SubBill from './SubBill';


function Payment(props) {

    // get info user from cookies
    const accessUser = cookies.load("userToken");

    //list address init
    const [listAddress, setListAddress] = useState([]);
    //state address current
    const [address, setAddress] = useState();

    // callApi get list Address
    const getListAddressUser = async () => {
        const res = await callApi(`/addresses/getaddresses`, 'POST', {
            customerId: accessUser.userId
        });
        setListAddress(res.data.result.addresses)
        setAddress(res.data.result.addresses[0])
    }

    useEffect(() => {
        getListAddressUser();
        // getApiProvinces();
    }, []);

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
        setAddress(item)
        setDisplayAddresses(true)
    }

    const [tonggleAdd, setTonggleAdd] = useState(false);
    const [tonggleEdit, setTonggleEdit] = useState(false);
    // const [valueProvince, setValueProvince] = useState('');
    // const [valueDistrict, setValueDistrict] = useState('');
    // const [valueWard, setValueWard] = useState('');
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
                                    <div className="payment__note" onClick={() => setDisplayAddresses(!displayAddresses)}>
                                        Chọn địa chỉ giao hàng của bạn*
                                        {/* <i className="fa-solid fa-angle-down" style={{ color: 'red' }}></i> */}
                                    </div>
                                    <div ref={listAddressRef} className="footer__language">
                                        <div style={{ display: displayAddresses ? "none" : "block" }} className="footer__pseudo">
                                            <ul style={{ display: displayAddresses ? "none" : "block" }} className="language__list">
                                                {listAddress.map((item, index) => (
                                                    <li onClick={() => handleSelectAddress(item)} key={index} className="language__item">
                                                        <span className="language__item-english">
                                                            {index + 1}.{" "}
                                                            {item.name}, {" "}
                                                            {item.phone}, {" "}
                                                            {item.detail}, {" "}
                                                            {item.detail}, {" "}
                                                            {item.ward}, {" "}
                                                            {item.district}, {" "}
                                                            {item.province}, {" "}
                                                            {item.note}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="payment__list-form-add">
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
                                                {" "} {address?.ward},
                                                {" "} {address?.district},
                                                {" "}{address?.province}
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
                                    <button onClick={() => setTonggleAdd(!tonggleAdd)} className="btn-add-address">Thêm địa chỉ mới</button>

                                </div>
                            </div>
                            <SubBill />
                        </div>
                    </div>
                </div >
            </div>

            {tonggleAdd ?
                <AddAddress
                    setTonggleAdd={setTonggleAdd}
                    tonggleAdd={tonggleAdd}
                // valueProvince={valueProvince}
                // setValueProvince={setValueProvince}
                // valueDistrict={valueDistrict}
                // setValueDistrict={setValueDistrict}
                // valueWard={valueWard}
                // setValueWard={setValueWard}
                /> : null
            }
            {tonggleEdit ?
                <EditAddress
                    setTonggleEdit={setTonggleEdit}
                    tonggleEdit={tonggleEdit}
                    // valueProvince={valueProvince}
                    // setValueProvince={setValueProvince}
                    // valueDistrict={valueDistrict}
                    // setValueDistrict={setValueDistrict}
                    // valueWard={valueWard}
                    // setValueWard={setValueWard}
                    address={address}
                /> : null
            }
        </>
    );
}

export default Payment;