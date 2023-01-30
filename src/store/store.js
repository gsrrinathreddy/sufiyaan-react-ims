import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import cakeReducer from '../Features/cake/cakeSlice';
import ChocolateReducer from "../Features/chocolate/chocolateSlice";

const store=configureStore({    
    reducer:{
        cake:cakeReducer,
        chocolate:ChocolateReducer
    },
    middleware:getDefaultMiddleware=>getDefaultMiddleware().concat(logger)
    
})
export default store;
