import React, { useEffect, useState } from 'react';
import cookies from 'react-cookies';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getListAddress } from '../../redux/address/apiFunctionAddress';
import AddAddress from './AddAddress';
import AddressInfo from './AddressInfo';
import EditAddress from './EditAddress';
import StoreInfo from './StoreInfo';
import './style.css';
import SubBill from './SubBill';



function Payment(props) {

    const dispatch = useDispatch();

    // get info user from cookies
    const accessUser = cookies.load("userToken");

    //state address default
    const [address, setAddress] = useState(null);

    useEffect(() => {
        getListAddress(dispatch, accessUser.userId);
    }, [accessUser.userId]);

    const [tonggleAdd, setTonggleAdd] = useState(false);
    const [tonggleEdit, setTonggleEdit] = useState(false);

    const [fee, setFee] = useState(0);
    const [store, setStore] = useState(null);

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

                                <AddressInfo
                                    address={address}
                                    setAddress={setAddress}
                                />
                                <StoreInfo
                                    address={address}
                                    setFee={setFee}
                                    store={store}
                                    setStore={setStore}
                                />
                            </div>

                            <SubBill
                                address={address}
                                fee={fee}
                                store={store}
                            />
                        </div>
                    </div>
                </div >
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

export default Payment;