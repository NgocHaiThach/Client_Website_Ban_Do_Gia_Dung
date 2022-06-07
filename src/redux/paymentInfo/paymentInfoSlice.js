import { createSlice } from "@reduxjs/toolkit";

const initPayment = {
    addressInfo:[],
    fee:0,
    storeInfo: [],
};

const paymentInfo = createSlice({
  name: "paymentInfo",
  initialState: initPayment,
  reducers: {
    setPaymentInfo: (state, action) => {
      return {
        ...state,
        addressInfo: action.payload.addressInfo,
        fee: action.payload.fee,
        storeInfo: action.payload.storeInfo,
      };
    },

  },
});

const { reducer, actions } = paymentInfo;
export const { setPaymentInfo, } = actions;
export default reducer;
