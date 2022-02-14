import { createStore } from "redux";
import messageReducer from "./messageReducer";

const store = createStore(messageReducer);

export default store;
