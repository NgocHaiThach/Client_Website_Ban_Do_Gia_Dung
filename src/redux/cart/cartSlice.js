import { createSlice } from "@reduxjs/toolkit";

const cartList = createSlice({
    name: 'classifications',
    initialState: {
        list: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        //get list
        getListCartStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        getListCartSuccess: (state, action) => {
            state.isFetching = false;
            state.list = action.payload;
        },
        getListCartFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },

    }
})

const { reducer, actions } = cartList;
export const { getListCartStart, getListCartSuccess, getListCartFailure, } = actions;
export default reducer;