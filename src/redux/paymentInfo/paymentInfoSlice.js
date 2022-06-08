import { createSlice } from "@reduxjs/toolkit";

const initPayment = {
    address:{},
    orderCode:"",
    orderId: "",
    expectedDeliveryTime: "",
    products:[],
    store: {},
    total:0,
    totalFee:0,
    totalPrice:0,
};

const paymentInfo = createSlice({
  name: "paymentInfo",
  initialState: initPayment,
  reducers: {
    setPaymentInfo: (state, action) => {
      return {
        ...state,
        address:action.payload.address,
        orderCode:action.payload.orderCode,
        orderId: action.payload.orderId,
        expectedDeliveryTime: action.payload.expectedDeliveryTime,
        products:action.payload.products,
        store: action.payload.store,
        total:action.payload.total,
        totalFee:action.payload.totalFee,
        totalPrice:action.payload.totalPrice,
      };
    },

  },
});

const { reducer, actions } = paymentInfo;
export const { setPaymentInfo, } = actions;
export default reducer;
