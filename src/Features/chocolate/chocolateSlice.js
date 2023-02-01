import { createSlice } from "@reduxjs/toolkit";
const initialState={
    numOfChocolates:90,
    orderedChocolates:0,
    chocolateList:{
        qty:0,
        name:null,
        price:null,
        discountedPrice:null,
    },
};
const chocolateSlice=createSlice({
    name:'chocolate',
    initialState,
    reducers:{
        ordered:(state,action)=>{
            state.numOfChocolates-=action.payload.qty;
            state.orderedChocolates+=parseInt(action.payload.qty);
            state.chocolateList.qty=action.payload.qty;
            state.chocolateList.name=action.payload.title;
            state.chocolateList.price=action.payload.price;
            state.chocolateList.discountedPrice=action.payload.discountedPrice;

        },
        restocked:(state,action)=>{
            state.numOfChocolates+=action.payload.qty
        }
    }
})
export default chocolateSlice.reducer;
export const {ordered,restocked}=chocolateSlice.actions;