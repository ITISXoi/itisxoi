import investorReducer from "../ducks/price/slice";
import { combineReducers } from "@reduxjs/toolkit";

const createRootReducer = () => {
  return combineReducers({
    investor: investorReducer,
  });
};

export default createRootReducer;
