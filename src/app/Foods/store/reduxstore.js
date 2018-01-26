import {createStore,applyMiddleware} from 'redux';
import {rootreducer} from '../reducer/indexreducer.js';
import promiseMiddleware from 'redux-promise';
var store = createStore(rootreducer,applyMiddleware(promiseMiddleware));
export default store;
