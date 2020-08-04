import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../createSlices/productSlice";
import categoryReducer from "../createSlices/categorySlice";
import cartReducer from "../createSlices/cartSlice";
import TransactionReducer from "../createSlices/transactionSlice";

const rootReducer = {
  products: productReducer,
  categories: categoryReducer,
  carts: cartReducer,
  transactions: TransactionReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
