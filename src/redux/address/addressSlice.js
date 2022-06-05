import { createSlice } from "@reduxjs/toolkit";

const listAddress = createSlice({
    name: 'address',
    initialState: {
        list: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        //get list
        getListAddressStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        getListAddressSuccess: (state, action) => {
            state.isFetching = false;
            state.list = action.payload;
        },
        getListAddressFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },

    }
})

const { reducer, actions } = listAddress;
export const { getListAddressStart, getListAddressSuccess, getListAddressFailure, } = actions;
export default reducer;