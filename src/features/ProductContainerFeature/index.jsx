import React, { useEffect } from 'react';
import ProductContainer from '../../components/Content/ProductContainer';
import { getListClassification } from '../../redux/classifications/apiFunctionClassification';
import { useDispatch, useSelector } from 'react-redux';

function ProductContainerFeature(props) {

    const dispatch = useDispatch();

    useEffect(() => {
        getListClassification(dispatch);
    }, [])

    const listClassification = useSelector(state => state.classification.list);

    return (
        <div>
            {listClassification && <ProductContainer
                listClassification={listClassification}
            />}
        </div>
    );
}

export default ProductContainerFeature;