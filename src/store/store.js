// import {combineReducers} from 'redux';
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/product";

// const rootReducer = combineReducers({
// 	productReducer
// });

const store = configureStore({
    reducer: {
      productReducer
    }
  });

export default store;