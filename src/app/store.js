import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/Product/productSlice";
import categoryReducer from "../features/Category/categorySlice";

const rootReducer = {
  products: productReducer,
  categories: categoryReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
