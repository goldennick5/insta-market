import { combineReducers, createStore } from "redux";
import loginReducer from "./reducers/loginReducer";

let rootReducers = combineReducers({
    login: loginReducer,
    orders: {},
    cards: {},
    addresses: {}
})

const store = createStore(rootReducers)

export default store;
