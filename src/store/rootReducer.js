import { combineReducers } from 'redux';

import userRecuder from './user/userRecuder';

export default combineReducers({
  user: userRecuder,
});
