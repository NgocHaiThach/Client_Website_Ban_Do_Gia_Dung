import React, { useState, useEffect } from 'react';
import { AiOutlinePlus } from "react-icons/ai";
import AddAddress from '../../Payment/AddAddress';
import './style.css';
import cookies from 'react-cookies';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAddressByUser, getListAddress } from '../../../redux/address/apiFunctionAddress';
import EditAddress from '../../Payment/EditAddress';



function Location(props) {
    const [tonggleAdd, setTonggleAdd] = useState(false);
    const [tonggleEdit, setTonggleEdit] = useState(false);


    const listAddress = useSelector(state => state.addressList.list);

    // get info user from cookies
    const accessUser = cookies.load("userToken");

    //state address default
    const [address, setAddress] = useState(null);
    const dispatch = useDispatch();


    useEffect(() => {
        getListAddress(dispatch, accessUser.userId);
    }, [accessUser.userId]);

    const handleEdit = (item) => {
        setAddress(item);
        setTonggleEdit(!tonggleEdit);
    }

    function myFunction(item) {
        let text = "Bạn có chắc chắn xóa địa chỉ?";
        if (window.confirm(text) == true) {
            deleteAddressByUser(dispatch, item.addressId, accessUser.userId)
        } else {
            text = "You canceled!";
        }
    }
    return (
        <>
            <div className="location__info">
                <div className="location__info-header">
                    Địa chỉ của tôi
                </div>
                <div className="location__info-container">
                    <div className="location__info-new">
                        <div className="location__info-add"

                            onClick={() => setTonggleAdd(!tonggleAdd)}>
                            <AiOutlinePlus className="location__info-icon" />
                            <span>Thêm địa chỉ</span>
                        </div>
                    </div>
                    {listAddress.map((item, index) => (
                        <div key={index} className="location__info-item">
                            <div className="location__item-info">
                                <div className="location__item-name">
                                    {item.name}
                                    <span>
                                        {/* <AiOutlineCheckCircle /> */}
                                        {item.default && <span>Địa chỉ mặc định</span>}
                                    </span>
                                </div>
                                <div className="location__item-address">
                                    <span>Địa chỉ:</span> {" "}
                                    {item.detail}, {item.wardName}, {item.districtName}, {item.provinceName}
                                </div>
                                <div className="location__item-phone">
                                    <span>Điện thoại:</span> {" "}
                                    {item.phone}
                                </div>
                            </div>
                            <div className="location__info-actions">
                                <span
                                    onClick={() => handleEdit(item)}
                                    className="location__action-edit">
                                    Chỉnh sửa
                                </span>
                                <span
                                    onClick={() => myFunction(item)}
                                    className="location__action-edit"
                                    style={{ color: 'red' }}>
                                    Xóa
                                </span>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            {tonggleAdd ?
                <>
                    <AddAddress
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
        </>
    );
}

export default Location;