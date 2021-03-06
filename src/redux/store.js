import { configureStore } from "@reduxjs/toolkit";
import listProductReducer from './products/productListSlice';
import listClassificationReducer from './classifications/classificationSlice';
import cartListReducer from './cart/cartSlice';
import infoUserLoginReducer from './infoUserLogin/infoUserLoginSlice';
import addressReducer from './address/addressSlice';
import paymentInfoReducer from './paymentInfo/paymentInfoSlice';
import personalInfoReudcer from './personalInfo/personalInfoSlice';
import searchProductReducer from './searchProduct/searchProductSlice';


const rootReducer = {
    listProduct: listProductReducer,
    classification: listClassificationReducer,
    cartList: cartListReducer,
    infoUserLogin: infoUserLoginReducer,
    addressList: addressReducer,
    paymentInfo: paymentInfoReducer,
    personalInfo: personalInfoReudcer,
    searchProduct: searchProductReducer,
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;