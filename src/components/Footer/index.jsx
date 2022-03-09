import React from 'react';
import FooterBottom from './FooterBottom';
import FooterCenter from './FooterCenter';
import FooterTop from './FooterTop';
import './style.css';

function Footer(props) {
    return (
        <div className="footer">
            <FooterTop />
            <FooterCenter />
            <FooterBottom />
        </div>
    );
}

export default Footer;