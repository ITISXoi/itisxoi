import productReducer from "./product/slice";
import { combineReducers } from "@reduxjs/toolkit";

const createRootReducer = () => {
  return combineReducers({
    product: productReducer,
  });
};

export default createRootReducer;
