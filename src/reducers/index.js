import { combineReducers } from 'redux';
import {clienteReducers} from './user.reducers'
import {repositionReducers} from './reposition.reducers'
export default combineReducers({
  clienteReducers,
  repositionReducers
});