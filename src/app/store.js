import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../createSlices/productSlice";
import categoryReducer from "../createSlices/categorySlice";
import cartReducer from "../createSlices/cartSlice";

const rootReducer = {
  products: productReducer,
  categories: categoryReducer,
  carts: cartReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
