import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import cakeReducer from '../Features/cake/cakeSlice';
import icecreamReducer from '../Features/icecream/icecreamSlice';
import flowerReducer from '../Features/Flower/FlowerSlice';
import chocolateReducer from "../Features/chocolate/chocolateSlice";
const store=configureStore({    
    reducer:{
        cake:cakeReducer,
        icecream:icecreamReducer,
        flower:flowerReducer,
        chocolate:chocolateReducer
        
    },
    middleware:getDefaultMiddleware=>getDefaultMiddleware().concat(logger)
    
})
export default store;