import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  numOfCakes: 90,
  orderedCakes: 0,
  cakeList: {
    qty: 0,
    name: null,
    discountedPrice: null,
  },
};
const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.numOfCakes -= action.payload.qty;
      state.orderedCakes += parseInt(action.payload.qty);

      state.cakeList.qty = action.payload;
      state.cakeList.name = action.payload.title;
      state.cakeList.price = action.payload.price;
      state.cakeList.discountedPrice = action.payload.discountedPrice;
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload.qty;
    },
  },
});
export default cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions;
