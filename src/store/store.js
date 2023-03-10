import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import cakeReducer from '../Features/cake/cakeSlice';
import icecreamReducer from '../Features/icecream/icecreamSlice';
import flowerReducer from '../Features/Flower/FlowerSlice';
import chocolateReducer from "../Features/chocolate/chocolateSlice";
import cartreducer from "../Features/cart/cartslice"
import UsersReducer from "../Features/Users/userSlice";
const store=configureStore({    
    reducer:{
        cake:cakeReducer,
        icecream:icecreamReducer,
        flower:flowerReducer,
        chocolate:chocolateReducer,
        cart:cartreducer,
        user:UsersReducer
        
    },
    middleware:getDefaultMiddleware=>getDefaultMiddleware().concat(logger)
    
})
export default store;