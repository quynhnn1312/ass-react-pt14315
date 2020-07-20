import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import categoryApi from "../../api/categoryApi";

export const apiCategoryList = createAsyncThunk(
  "categories/fetchCategoryStatus",
  async () => {
    try {
      const responseCategoryList = await categoryApi.getAll();
      return responseCategoryList;
    } catch (error) {
      console.log("Failed to fetch category list: ", error);
    }
  }
);
const category = createSlice({
  name: "categories",
  initialState: [],
  reducers: {},
  extraReducers: {
    [apiCategoryList.fulfilled]: (state, action) => {
      return action.payload;
    },
  },
});

const { reducer } = category;
export const selectCategory = (state) => state.categories;
export default reducer;
