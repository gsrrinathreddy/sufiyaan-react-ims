import { createSlice } from "@reduxjs/toolkit";
const initialState={
    numOfChocolates:90,
    orderedChocolates:0
}
const chocolateSlice=createSlice({
    name:'chocolate',
    initialState,
    reducers:{
        ordered:(state,action)=>{
            state.numOfChocolates-=action.payload.qty;
            state.orderedChocolates+=parseInt(action.payload.qty)
        },
        restocked:(state,action)=>{
            state.numOfChocolates+=action.payload.qty
        }
    }
})
export default chocolateSlice.reducer;
export const {ordered,restocked}=chocolateSlice.actions;