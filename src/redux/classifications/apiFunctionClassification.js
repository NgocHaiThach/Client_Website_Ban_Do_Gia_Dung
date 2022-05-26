import callApi from "../../utils/callApi"
import { getListClassificationFailure, getListClassificationStart, getListClassificationSuccess } from "./classificationSlice"


// GET: List classification
export const getListClassification = async (dispatch) => {
    dispatch(getListClassificationStart)
    try {
        const res = await callApi(`/admin/classifications/all`, 'GET', null)
        dispatch(getListClassificationSuccess(res.data.result))
    }
    catch (err) {
        dispatch(getListClassificationFailure(err))
    }
}

