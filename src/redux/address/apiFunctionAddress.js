import callApi from "../../utils/callApi"
import { getListAddressFailure, getListAddressStart, getListAddressSuccess } from "./addressSlice"

export const getListAddress = async (dispatch, idUser) => {
    dispatch(getListAddressStart)
    try {
        const res = await callApi(`/addresses/getaddresses`, 'POST', {
            customerId: idUser
        });
        dispatch(getListAddressSuccess(res.data.result));
    }
    catch (err) {
        dispatch(getListAddressFailure(err))
    }
}

// ADD: List product
export const addAddressByUser = async (dispatch,
    id, name, phone, 
    provinceName, districtName, wardName, 
    note, detail, 
    provinceId, districId, wardId,defaultAddress) => {
    try {
        const res = await callApi("/addresses/addaddress", "POST", {
            customerId: id,
            name: name,
            company: "",
            phone: phone,
            provinceId:provinceId,
            provinceName: provinceName,
            districtId: districId,
            districtName: districtName,
            wardId: wardId,
            wardName: wardName,
            detail: detail,
            note: note,
            type: true,
            default: defaultAddress
        })
        getListAddress(dispatch,id)
    }
    catch (err) {
        console.log(err)
    }
}

// ADD: List product
export const editAddressByUser = async (dispatch,
    addressId, userId, name, phone, 
    provinceName, districtName, wardName, 
    note, detail,
    provinceId, districId, wardId, defaultAddress
    ) => {
    try {
        const res = await callApi("/addresses/updateaddress", "PUT", {
            addressId: addressId,
            customerId: userId,
            name: name,
            company: "",
            phone: phone,
            provinceId: provinceId,
            provinceName: provinceName,
            districtId: districId,
            districtName: districtName,
            wardId: wardId,
            wardName: wardName,
            detail: detail,
            note: note,
            type: true,
            default: defaultAddress
        })
        getListAddress(dispatch,userId);
    }
    catch (err) {
        console.log(err)
    }
}

// ADD: List product
export const deleteAddressByUser = async (dispatch,addressId, userId) => {
    try {
        const res = await callApi("/addresses/deleteaddress", "POST", {
            addressId:addressId,        
        })
        getListAddress(dispatch,userId);
    }
    catch (err) {
        console.log(err)
    }
}
