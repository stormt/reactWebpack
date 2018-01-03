import reducer from './reducer.js';
import {createStore} from 'redux';
let store = createStore(reducer);
export default store;
