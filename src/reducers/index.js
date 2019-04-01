import { combineReducers } from 'redux';
import auth from './auth';
import experiences from './experiences';
import theme from './theme';
import menu from './menu';
import user from './user';

export default combineReducers({
  auth,
  experiences,
  theme,
  menu,
  user,
});
