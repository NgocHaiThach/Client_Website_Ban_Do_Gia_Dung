import callApi from "../../utils/callApi"
import { getListCartFailure, getListCartStart, getListCartSuccess } from "./cartSlice"

// GET: List product
export const getListCartByIdUser = async (dispatch,id) => {
    dispatch(getListCartStart);
    try {
        const res = await callApi(`/carts/getcart`, 'POST', {
            customerId: id
        })
        dispatch(getListCartSuccess(res.data.result.product))
       
    }
    catch (err) {
        dispatch(getListCartFailure(err))
    }
}

// ADD: List product
export const addProductToCartByUser = async (dispatch,idUser, idProduct,quantity) => {
    try {
        const res = await callApi(`/carts/addcart`, 'POST', {
            customerId: idUser,
            productId: idProduct,
            quantity: 1,
        });
        getListCartByIdUser(dispatch,idUser)
    }
    catch (err) {
        console.log(err)
    }
}

// ADD: List product
export const deleteProductToCartByUser = async (dispatch,idUser, idProduct) => {
    try {
        const res = await callApi(`/carts/deletecart`, 'POST', {
            customerId: idUser,
            productId: idProduct,
        });
        getListCartByIdUser(dispatch,idUser)
    }
    catch (err) {
        console.log(err)
    }
}
// ADD: List product
export const addQuantityProductToCartByUser = async (dispatch,idUser, idProduct, quantity) => {
    try {
        const res = await callApi(`/carts/updatecart`, 'PUT', {
            customerId: idUser,
            productId: idProduct,
            quantity: quantity+1,
        });
        getListCartByIdUser(dispatch,idUser)
    }
    catch (err) {
        console.log(err)
    }
}

// MINUS: List product
export const minusQuantityProductToCartByUser = async (dispatch,idUser, idProduct, quantity) => {
    try {
        const res = await callApi(`/carts/updatecart`, 'PUT', {
            customerId: idUser,
            productId: idProduct,
            quantity: quantity-1,
        });
        getListCartByIdUser(dispatch,idUser)
    }
    catch (err) {
        console.log(err)
    }
}