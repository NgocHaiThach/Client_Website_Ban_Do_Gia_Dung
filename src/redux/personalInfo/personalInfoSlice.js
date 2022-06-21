import { createSlice } from "@reduxjs/toolkit";

const personalInfoSlice = createSlice({
    name: 'personal',
    initialState: {
        info: {},
        isFetching: false,
        error: false,
    },
    reducers: {
        //get list
        getInfoStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        getInfoSuccess: (state, action) => {
            state.isFetching = false;
            state.info = action.payload;
        },
        getInfoFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },

    }
})

const { reducer, actions } = personalInfoSlice;
export const { getInfoStart, getInfoSuccess, getInfoFailure, } = actions;
export default reducer;