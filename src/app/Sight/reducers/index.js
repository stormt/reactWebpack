import { combineReducers } from 'redux'
import todos from './todos'
import counter from './counter'
import ressourcedata from './ressourcedata';
import status from './status';
export default combineReducers({
  todos,
  counter,
  ressourcedata,
  status
})