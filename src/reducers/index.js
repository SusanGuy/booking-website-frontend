import { combineReducers } from 'redux';
import auth from './auth';
import theme from './theme';
import menu from './menu';

export default combineReducers({
  auth,
  theme,
  menu,
});
