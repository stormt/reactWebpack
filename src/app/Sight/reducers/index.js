import { combineReducers } from 'redux';
// import {combineReducers} from 'redux-immutable';
import ressourcedata from './ressourcedata';
import status from './status';
export default combineReducers({
  ressourcedata,
  status
})