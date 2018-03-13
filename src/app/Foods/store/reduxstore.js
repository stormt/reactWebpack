import {createStore,applyMiddleware} from 'redux';
import {rootreducer} from '../reducer/index.js';
import promiseMiddleware from 'redux-promise';
var store = createStore(rootreducer,applyMiddleware(promiseMiddleware));
export default store;
