import React, { useEffect, useState } from 'react';
import callApi from '../../utils/callApi';
import HeaderBanner from './HeaderBanner';
import HeaderBottom from './HeaderBottom';
import HeaderInfo from './HeaderInfo';
import cookies from 'react-cookies';
import './style.css';

function Header(props) {
    // const [infoUser, setInfoUser] = useState();
    // const accessUser = cookies.load("userToken");


    // const getInfoUserById = async () => {
    //     const res = await callApi("/customers/get", "POST", {
    //         customerId: accessUser.userId,
    //     });
    //     setInfoUser(res.data.result);
    // }

    // useEffect(() => {
    //     getInfoUserById();
    // }, []);

    return (
        <div className="header">

            <HeaderInfo />
            <HeaderBanner />
            <HeaderBottom />

        </div>
    );
}

export default Header;