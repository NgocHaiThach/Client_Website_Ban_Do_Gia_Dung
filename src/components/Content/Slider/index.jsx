import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getListClassification } from '../../../redux/classifications/apiFunctionClassification';
import callApi from '../../../utils/callApi';
import { SliderData } from './SliderData';
import SliderImage from './SliderImage';
import './style.css';

function Slider(props) {
    const listClassification = useSelector(state => state.classification.list);

    const dispatch = useDispatch();

    useEffect(() => {
        // getListCategoryOfClassifi();
        getListClassification(dispatch);
    }, [])
    return (
        <>
            {/* bar  */}
            <div className="introduce-container">
                <div className="grid wide">
                    <div className="row no-gutters">
                        <div className="col l-3 m-0 c-0">
                            <div className="bar-container">

                            </div>
                        </div>
                        {/* nav and slider  */}
                        <div className="col l-12 m-12 c-12">
                            <div className="nav-container">
                                <ul className="nav-list">
                                    <li className="nav-item">TRANG CHỦ
                                    </li>
                                    {listClassification.map((item, index) => (
                                        <li key={index} className="nav-item">
                                            {(item.name).toUpperCase()}
                                            <div className="bar-item_propose nav-item_propose">
                                                <ul className="bar-item_propose-list">
                                                    {(item.categories).map((category, i) => (
                                                        <li key={i} className="bar-item_propose-item">
                                                            <Link style={{ textDecoration: "none", color: 'black' }} to={`/category/${category.categoryId}`}>
                                                                {category.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </li>
                                    ))}

                                    <li className="nav-item">TIN TỨC
                                    </li>
                                </ul>
                            </div>
                            <SliderImage slides={SliderData} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Slider;