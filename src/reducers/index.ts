import { combineReducers } from 'redux';
import { user } from './login';
import { dashboard } from './dashboard';

export default combineReducers({
  user,
  dashboard,
});
