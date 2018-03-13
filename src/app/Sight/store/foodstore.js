import {createStore,applyMiddleware,combineReducers} from 'redux';
import reducer from "../reducers/index";
import promiseMiddleware from 'redux-promise';
var store = createStore(reducer,applyMiddleware(promiseMiddleware));
export default store;