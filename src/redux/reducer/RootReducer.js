import { combineReducers } from "redux";
import ProductReducer from "../reducer/ProductReducer";
import AuthenticationReducer from "../reducer/AuthenticationReducer";

const myReducer = combineReducers({ ProductReducer, AuthenticationReducer });

export default myReducer;
