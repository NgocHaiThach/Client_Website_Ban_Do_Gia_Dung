import callApi from "../../utils/callApi"
import { getInfoFailure, getInfoStart, getInfoSuccess } from "./personalInfoSlice"

// GET: List product
export const getPersonalInfoById = async (dispatch, id) => {
    dispatch(getInfoStart)
    try {
        const res = await callApi(`/customers/get`, 'POST', {
            customerId: id,
        })
        dispatch(getInfoSuccess(res.data.result))
    }
    catch (err) {
        dispatch(getInfoFailure(err))
    }
}

// GET: List product
export const updatePersonalInfoById = async ( id, fullName, contentPicture, isUrl, date, gender) => {
    try {
        const res = await callApi(`/customers/update`, 'POST', {
            customerId:id,
            fullName: fullName,
            picture: {
                content:contentPicture,
                isUrl: isUrl,
            },
            dateOfBirth: date,
            gender: gender,
        })
    }
    catch (err) {
       console.log(err);
    }
}