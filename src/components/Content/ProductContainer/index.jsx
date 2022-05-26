import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import callApi from '../../../utils/callApi';
import ProductContent from './ProductContent';
import './style.css';

function ProductContainer({ listClassification }) {

    const data = [...listClassification]

    // const Content = ({ classificationId }) => {


    // }
    return (
        <>
            {/* product-comtainer2  */}
            <div className="product-container">
                <div className="grid wide">
                    {data.map((classification, index) => (
                        <div key={index}>
                            <div className="product-title">
                                <h3>{classification.name}</h3>
                                <div className="product-change">
                                    <p id="title2" className="product-change-title active">HÀNG MỚI VỀ</p>
                                    <p id="title2" className="product-change-title ">BÁN CHẠY NHẤT</p>
                                    <div className="product-change-arrow">
                                        <i className="fas fa-angle-left"></i>
                                        <i className="fas fa-angle-right"></i>
                                    </div>
                                </div>
                            </div>
                            {/* {classification && <Content classificationId={classification.classificationId} />} */}
                            {classification.classificationId && <ProductContent classificationId={classification.classificationId} />}
                        </div>
                    ))}

                </div>
            </div>
        </>
    );
}

export default ProductContainer;