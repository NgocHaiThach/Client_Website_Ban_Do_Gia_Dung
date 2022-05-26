import { createSlice } from "@reduxjs/toolkit";
import cookies from "react-cookies";

const accessUser = cookies.load("userToken");
console.log(accessUser);

const initUser = {
  userPhone: accessUser?.userPhone || "",
  userId: accessUser?.userId || "",
  userToken: accessUser?.token || "",
};

const infoUserLogin = createSlice({
  name: "user",
  initialState: initUser,
  reducers: {
    login: (state, action) => {
      return {
        ...state,
        userPhone: action.payload.userPhone,
        userId: action.payload.userId,
        userToken: action.payload.token,
      };
    },
    logout: (state) => {
      return {
        ...state,
        userPhone: null,
        userId: null,
        userToken: null,
      };
    },
  },
});

const { reducer, actions } = infoUserLogin;
export const { login, logout } = actions;
export default reducer;
