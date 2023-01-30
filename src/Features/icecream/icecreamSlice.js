import { createSlice } from "@reduxjs/toolkit";
const initialState={
    numOficecreams:90,
    orderedIcecreams:0
}
const icecreamSlice=createSlice({
    name:'icecream',
    initialState,
    reducers:{
        ordered:(state,action)=>{
            state.numOficecreams-=action.payload;
            state.orderedIcecreams+=parseInt(action.payload)
        },
        restocked:(state,action)=>{
            state.numOficecreams+=action.payload
        }
    }
})
export default icecreamSlice.reducer;
export const {ordered,restocked}=icecreamSlice.actions;