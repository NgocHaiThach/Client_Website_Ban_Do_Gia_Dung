import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductDetail from '../../components/ProductDetail';

function ProductDetailFeature(props) {
    const style = {
        fontSize: 17
    }

    return (
        <div>
            <ProductDetail />
            <ToastContainer style={style} />
        </div>
    );
}

export default ProductDetailFeature;