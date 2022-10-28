import { combineReducers, createStore } from "redux";
import authReducer from "./reducers/authReducer";

let reducers = combineReducers({
    auth: authReducer,
    orders: {},
    cards: {},
    addresses: {}
})

let store = createStore(reducers)

export default store;
