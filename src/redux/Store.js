import MyReducer from "./reducer/RootReducer";
import { createStore } from "redux";

const store = createStore(MyReducer);

export default store;
