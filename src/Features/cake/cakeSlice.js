import { createSlice } from "@reduxjs/toolkit";
const initialState={
    numOfCakes:90,
    orderedCakes:0
}
const cakeSlice=createSlice({
    name:'cake',
    initialState,
    reducers:{
        ordered:(state,action)=>{
            state.numOfCakes-=action.payload.qty;
            state.orderedCakes+=parseInt(action.payload.qty)
        },
        restocked:(state,action)=>{
            state.numOfCakes+=action.payload.qty
        }
    }
})
export default cakeSlice.reducer;
export const {ordered,restocked}=cakeSlice.actions;