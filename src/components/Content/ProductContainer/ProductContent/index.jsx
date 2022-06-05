import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getListClassification } from '../../../../redux/classifications/apiFunctionClassification';
import callApi from '../../../../utils/callApi';

function ProductContent({ classification }) {

    const [categories, setCategorise] = useState([]);

    const getListCategoryOfClassifi = async () => {
        try {
            const res = await callApi(`/classifications/${classification.classificationId}`, 'GET', null)
            setCategorise(res.data.result.categories)
        }
        catch (err) {
            console.log(err)
        }
    }

    const dispatch = useDispatch();

    useEffect(() => {
        getListCategoryOfClassifi();
        getListClassification(dispatch);
    }, [])

    return (
        <div className="product-content">
            <div className="row">
                <div className="col l-2 m-2 c-12">
                    <ul className="product-content_list">
                        {categories.map((item, index) => (
                            <li key={index} style={{ marginTop: '15px' }}>
                                <Link to={`/category/${item.categoryId}`}
                                    style={{ textDecoration: 'none', fontWeight: '500' }}
                                    key={index} className="product-content_item">
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                        {/* <li className="product-content_item">Nồi inox</li>
                        <li className="product-content_item">Nồi áp suất</li>
                        <li className="product-content_item">Nồi Anod</li>
                        <li className="product-content_item">Bộ nồi chảo</li>
                        <li className="product-content_item">Chảo chống dính</li> */}
                    </ul>
                </div>

                <div className="col l-4 m-0 c-0">

                    <img className="product-content_baner-img"
                        // src={item.imageMenu}
                        src={classification.imageMenu}
                        // src=""
                        alt="tokyolife" />
                </div>

                <div className="col l-6 m-10 c-12">
                    <div id="product2" className="product-content_about product-propose_new active">
                        <div className="row">
                            {categories.map((item, index) => (
                                <div key={index} className="col l-4 m-6 c-6">
                                    <div className="product-propose_new-item_contain">
                                        <Link style={{ textDecoration: "none" }} to={`/category/${item.categoryId}`}>
                                            <img src={`${item.image}`}
                                                alt="tokyolife"
                                                className="product-propose_new-item_img_contain" />
                                            <img src="https://tokyolife.vn/media/wysiwyg/home/I-Online.svg" alt=""
                                                className="product-propose_new-item_logo" />
                                            <p className="product-propose_new-item_info">
                                                {item.name}
                                            </p>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductContent;