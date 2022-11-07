import { combineReducers, createStore } from "redux";
import loginReducer from "./reducers/loginReducer";
import signUpReducer from "./reducers/signUpReducer";
import orderReducer from './reducers/orderReducer';

let rootReducers = combineReducers({
    login: loginReducer,
    signup: signUpReducer,
    orders: orderReducer,
    cards: {},
    addresses: {}
})

const store = createStore(rootReducers)

export default store;
