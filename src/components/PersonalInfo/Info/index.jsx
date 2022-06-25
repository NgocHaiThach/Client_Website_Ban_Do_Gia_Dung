import { useEffect, useState } from 'react';
import cookies from 'react-cookies';
import callApi from '../../../utils/callApi';
import LeftInfo from './LeftInfo';
import RighInfo from './RighInfo';
import './style.css';
import UpdateInfo from './UpdateInfo';


function Info({ infoUser }) {

    // const accessUser = cookies.load("userToken");

    const [display, setDisplay] = useState(1);

    // const [infoUser, setInfoUser] = useState(null);

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