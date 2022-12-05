import { combineReducers, createStore } from "redux";
import loginReducer from "./reducers/loginReducer";
import signUpReducer from "./reducers/signUpReducer";
import orderReducer from './reducers/orderReducer';
import cardsReducer from "./reducers/cardsReducer";
import addressesReducer from "./reducers/addressesReducer";

let rootReducers = combineReducers({
    login: loginReducer,
    signup: signUpReducer,
    orders: orderReducer,
    cards: cardsReducer,
    addresses: addressesReducer,
});

const store = createStore(rootReducers);

export default store;
