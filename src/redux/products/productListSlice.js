import { createSlice } from "@reduxjs/toolkit";

const listProduct = createSlice({
    name: 'products',
    initialState: {
        list: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        //get list
        getListProductStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        getListProductSuccess: (state, action) => {
            state.isFetching = false;
            state.list = action.payload;
        },
        getListProductFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },

    }
})

const { reducer, actions } = listProduct;
export const { getListProductStart, getListProductSuccess, getListProductFailure, } = actions;
export default reducer;