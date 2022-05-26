import React from 'react';
import ProductContainerFeature from '../../features/ProductContainerFeature';
import InfoStore from './InfoStore';
import ProductContainer from './ProductContainer';
import ProductPropose from './ProductPropose';
import Slider from './Slider';
import './style.css';

function Content(props) {
    return (
        <div className="content">
            <Slider />
            {/* <BannerProduct /> */}
            <ProductPropose />

            {/* main-product  */}
            <ProductContainerFeature />
            {/* <ProductContainer /> */}
            {/* <ProductContainer /> */}
            <InfoStore />
        </div>
    );
}

export default Content;