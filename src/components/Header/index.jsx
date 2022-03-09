import React from 'react';
import HeaderBanner from './HeaderBanner';
import HeaderBottom from './HeaderBottom';
import HeaderInfo from './HeaderInfo';
import './style.css';

function Header(props) {
    return (
        <div className="header">

            <HeaderInfo />
            <HeaderBanner />
            <HeaderBottom />

        </div>
    );
}

export default Header;