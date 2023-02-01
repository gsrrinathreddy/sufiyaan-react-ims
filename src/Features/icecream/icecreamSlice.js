import { createSlice } from "@reduxjs/toolkit";
const initialState={
    numOficecreams:90,
    orderedIcecreams:0,
    icecreamList:{
        qty:0,
        name:null,
        price:null,
        discountedPrice:null,
    },
};
const icecreamSlice=createSlice({
    name:'icecream',
    initialState,
    reducers:{
        ordered:(state,action)=>{
            state.numOficecreams-=action.payload;
            state.orderedIcecreams+=parseInt(action.payload.qty)
            state.icecreamList.qty=action.payload.qty;
            state.icecreamList.name=action.payload.title;
            state.icecreamList.price=action.payload.price;
            state.icecreamList.discountedPrice=action.payload.discountedPrice;
        },
        restocked:(state,action)=>{
            state.numOficecreams+=action.payload
        }
    }
})
export default icecreamSlice.reducer;
export const {ordered,restocked}=icecreamSlice.actions;