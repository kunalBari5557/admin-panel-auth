import { configureStore } from "@reduxjs/toolkit";
import  authSlice from './fetures/Auth/Auth'
import  productsSlice  from "./fetures/Products/Products";

const store = configureStore({
  reducer: {
    auth: authSlice,
    productsState: productsSlice
  },
});

export default store;
