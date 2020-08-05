import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import transactionApi from "../api/transactionApi";
import orderApi from "../api/orderApi";

var date = new Date().toJSON().slice(0,10);
var time = new Date().toJSON().slice(11,19)
var dateTime = date+' '+time;

export const apiTransactionList = createAsyncThunk(
  "transactions/fetchTransactionStatus",
  async () => {
    try {
      const responseTransactionList = await transactionApi.getAll();
      return responseTransactionList;
    } catch (error) {
      console.log("Failed to fetch transaction list: ", error);
    }
  }
);

export const apiAddTransaction = createAsyncThunk(
  "transactions/fetchAddTransactionStatus",
  async (request) => {
    try {
      const dataCart = JSON.parse(localStorage.getItem('CART'));
      const responseAddTransaction = await transactionApi.post(request);
      await Promise.all(dataCart.map(async(cart)=>{
        const data = {
          "transactionId": responseAddTransaction.id,
          "productId": cart.product.id,
          "quantity": cart.quantity,
          "price": cart.product.price,
          "image": cart.product.avatar,
          "name": cart.product.name,
          "discount": cart.product.discount,
          "created_at": dateTime,
          "updated_at": dateTime
        }
        return await orderApi.post(data);
      }));
      return responseAddTransaction;
    } catch (error) {
      console.log("Failed to fetch transaction list: ", error);
    }
  }
)

const transaction = createSlice({
  name: "transactions",
  initialState: [],
  reducers: {},
  extraReducers: {
    [apiTransactionList.fulfilled]: (state, action) => {
      return action.payload;
    },
    [apiAddTransaction.fulfilled]: (state, action) => {
      state.push(action.payload);
    }
  },
});

const { reducer } = transaction;
export const selectTransaction = (state) => state.transactions;
export default reducer;
