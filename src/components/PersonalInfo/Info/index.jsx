import React, { useEffect, useRef, useState } from 'react';
import { days, months, years } from '../../../utils/constances';
import SelectField from '../../Selectfield';
import TextField2 from '../../TextField2';
import { BsTelephone } from "react-icons/bs";
import { BiLockAlt } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import './style.css';
import cookies from 'react-cookies';
import callApi from '../../../utils/callApi';
import RighInfo from './RighInfo';
import LeftInfo from './LeftInfo';
import UpdateInfo from './UpdateInfo';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getPersonalInfoById } from '../../../redux/personalInfo/apiFunctionPersonal';


function Info(props) {

    const accessUser = cookies.load("userToken");

    const [display, setDisplay] = useState(1);

    const [infoUser, setInfoUser] = useState(null);

    const getInfoUserById = async () => {
        const res = await callApi("/customers/get", "POST", {
            customerId: accessUser.userId,
        });
        setInfoUser(res.data.result);
    }

    useEffect(() => {
        getInfoUserById();
    }, []);


    return (
        <>
            {display === 1 ?
                <div className="personal__info">
                    <div className="personal__info-header">
                        Thông tin tài khoản
                    </div>
                    <div className="personal__info-container">
                        {infoUser && <LeftInfo infoUser={infoUser} />}
                        {/* {infoUser && <div>abc</div>} */}
                        <div className="info__vertical"></div>
                        {infoUser && <RighInfo
                            infoUser={infoUser}
                            display={display}
                            setDisplay={setDisplay}
                        />}

                    </div>
                </div>
                : null}
            <UpdateInfo display={display} setDisplay={setDisplay} />


        </>
    );
}

export default Info;