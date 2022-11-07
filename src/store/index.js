import { combineReducers, createStore } from "redux";
import loginReducer from "./reducers/loginReducer";
import signUpReducer from "./reducers/signUpReducer";

let rootReducers = combineReducers({
    login: loginReducer,
    signup: signUpReducer,
    orders: {},
    cards: {},
    addresses: {}
})

const store = createStore(rootReducers)

export default store;
