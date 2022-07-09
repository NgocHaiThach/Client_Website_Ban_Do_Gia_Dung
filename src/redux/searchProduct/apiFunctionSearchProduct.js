import callApi from "../../utils/callApi";
import { getListSearchProductFailure, getListSearchProductStart, getListSearchProductSuccess } from "./searchProductSlice";

// GET: List product
export const getListSearchProduct = async (dispatch, input) => {
    dispatch(getListSearchProductStart);
    try {
        const res = await callApi("/products/search", "POST", {
            content: input,
        })
        dispatch(getListSearchProductSuccess(res.data.result));
        // console.log("res search", res.data.result);
    }
    catch (err) {
        dispatch(getListSearchProductFailure(err))
    }
}