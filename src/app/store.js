import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../createSlices/productSlice";
import categoryReducer from "../createSlices/categorySlice";
import cartReducer from "../createSlices/cartSlice";
import transactionReducer from "../createSlices/transactionSlice";
import orderReducer from "../createSlices/orderSlice";

const rootReducer = {
  products: productReducer,
  categories: categoryReducer,
  carts: cartReducer,
  transactions: transactionReducer,
  orders: orderReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
