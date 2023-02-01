import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartList: [],
  totalItems: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  extraReducers: {
    ["cake/ordered"]: (state, action) => {
      console.log("cart", action.payload);
      state.cartList.push(action.payload);
      state.totalItems += parseInt(action.payload.qty);
    },
    ["chocolate/ordered"]: (state, action) => {
      console.log("cart", action.payload);
      state.cartList.push(action.payload);
      state.totalItems += parseInt(action.payload.qty);
    },
    ["flower/ordered"]: (state, action) => {
      console.log("cart", action.payload);
      state.cartList.push(action.payload);
      state.totalItems += parseInt(action.payload.qty);
    },
    ["gift/ordered"]: (state, action) => {
      console.log("cart", action.payload);
      state.cartList.push(action.payload);
      state.totalItems += parseInt(action.payload.qty);
    },
    ["ice/ordered"]: (state, action) => {
      console.log("cart", action.payload);
      state.cartList.push(action.payload);
      state.totalItems += parseInt(action.payload.qty);
    },
  },
});
export default cartSlice.reducer;
