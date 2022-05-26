import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ListProduct from '../../components/ListProduct';
import { getListProductByCategory } from '../../redux/products/apiFunctionProduct';

function ListProductByCategory(props) {

    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        getListProductByCategory(dispatch, id);
    }, [])

    const listProduct = useSelector(state => state.listProduct.list);

    return (
        <div>
            <ListProduct listProduct={listProduct} />
        </div>
    );
}

export default ListProductByCategory;