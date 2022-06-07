import { configureStore } from "@reduxjs/toolkit";
import listProductReducer from './products/productListSlice';
import listClassificationReducer from './classifications/classificationSlice';
import cartListReducer from './cart/cartSlice';
import infoUserLoginReducer from './infoUserLogin/infoUserLoginSlice';
import addressReducer from './address/addressSlice';
import paymentInfoReducer from './paymentInfo/paymentInfoSlice';


const rootReducer = {
    listProduct: listProductReducer,
    classification: listClassificationReducer,
    cartList: cartListReducer,
    infoUserLogin: infoUserLoginReducer,
    addressList: addressReducer,
    paymentInfo: paymentInfoReducer,
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;