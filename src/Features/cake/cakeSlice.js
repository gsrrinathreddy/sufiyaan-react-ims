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
            state.numOfCakes-=action.payload;
            state.orderedCakes+=parseInt(action.payload)
        },
        restocked:(state,action)=>{
            state.numOfCakes+=action.payload
        }
    }
})
export default cakeSlice.reducer;
export const {ordered,restocked}=cakeSlice.actions;