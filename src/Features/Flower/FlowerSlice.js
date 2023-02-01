import { createSlice } from "@reduxjs/toolkit";
const initialState={
    numOfFlowers:90,
    orderedFlowers:0,
    flowerList:{
        qty:0,
        name:null,
        price:null,
        discountedPrice:null,
    },
};
const flowerSlice=createSlice({
    name:'flower',
    initialState,
    reducers:{
        ordered:(state,action)=>{
            state.numOfFlowers-=action.payload;
            state.orderedFlowers+=parseInt(action.payload.qty);
            state.flowerList.qty=action.payload.qty;
            state.flowerList.price=action.payload.price
            state.flowerList.name=action.payload.title;
            state.flowerList.discountedPrice=action.payload.discountedPrice;
        },
        restocked:(state,action)=>{
            state.numOfFlowers+=action.payload
        }
    }
})
export default flowerSlice.reducer;
export const {ordered,restocked}=flowerSlice.actions;