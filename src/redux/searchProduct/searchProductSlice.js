import { createSlice } from "@reduxjs/toolkit";

const listSearchProduct = createSlice({
    name: 'searchProduct',
    initialState: {
        list: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        //get list
        getListSearchProductStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        getListSearchProductSuccess: (state, action) => {
            state.isFetching = false;
            state.list = action.payload;
        },
        getListSearchProductFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },

    }
})

const { reducer, actions } = listSearchProduct;
export const { getListSearchProductStart, getListSearchProductSuccess, getListSearchProductFailure, } = actions;
export default reducer;