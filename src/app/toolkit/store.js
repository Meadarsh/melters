import { configureStore } from "@reduxjs/toolkit";
import reducer from "./slice"
import { combineReducers } from "@reduxjs/toolkit";
import productCartReducer from './cartSlice';
const rootReducer = combineReducers({
     cart: productCartReducer,
     search:reducer,
     // Add other reducers here if you have them
   });
export const store=configureStore({
     reducer: rootReducer,
})