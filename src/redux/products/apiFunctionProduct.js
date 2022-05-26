import callApi from "../../utils/callApi"
import { getListProductFailure, getListProductStart, getListProductSuccess } from "./productListSlice"

// GET: List product
export const getListProductByCategory = async (dispatch, id) => {
    dispatch(getListProductStart)
    try {
        const res = await callApi(`/categories/${id}`, 'GET', null)
        dispatch(getListProductSuccess(res.data.result))
    }
    catch (err) {
        dispatch(getListProductFailure(err))
    }
}





