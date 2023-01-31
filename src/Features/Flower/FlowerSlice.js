import { createSlice } from "@reduxjs/toolkit";
const initialState={
    numOfFlowers:90,
    orderedFlowers:0
}
const flowerSlice=createSlice({
    name:'flower',
    initialState,
    reducers:{
        ordered:(state,action)=>{
            state.numOfFlowers-=action.payload;
            state.orderedFlowers+=parseInt(action.payload.qty)
        },
        restocked:(state,action)=>{
            state.numOfFlowers+=action.payload
        }
    }
})
export default flowerSlice.reducer;
export const {ordered,restocked}=flowerSlice.actions;