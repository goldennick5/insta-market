import { combineReducers, createStore } from 'redux';
import authReducer from './reducers/authReducer';
import orderReducer from './reducers/orderReducer';

let reducers = combineReducers({
  auth: authReducer,
  orders: orderReducer,
  cards: {},
  addresses: {},
});

let store = createStore(reducers);

export default store;
