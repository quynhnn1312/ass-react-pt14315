import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productApi from "../../api/productApi";
import categoryApi from "../../api/categoryApi";

export const apiProductList = createAsyncThunk(
  "products/fetchProductsStatus",
  async () => {
    try {
      const responseCategoryList = await categoryApi.getAll();
      let responseProductList = await Promise.all(
        responseCategoryList.map(async (cate) => {
          let filmResponse = await productApi.getAll(cate.id);
          return [...filmResponse];
        })
      );
      return [].concat(...responseProductList);
    } catch (error) {
      console.log("Failed to fetch product list: ", error);
    }
  }
);
const product = createSlice({
  name: "products",
  initialState: [],
  reducers: {},
  extraReducers: {
    [apiProductList.fulfilled]: (state, action) => {
      const newState = [...state];
      return newState.concat(action.payload);
    },
  },
});

const { reducer } = product;
export const selectProduct = (state) => state.products;
export default reducer;
