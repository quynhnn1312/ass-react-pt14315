import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../createSlices/productSlice";
import categoryReducer from "../createSlices/categorySlice";

const rootReducer = {
  products: productReducer,
  categories: categoryReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
