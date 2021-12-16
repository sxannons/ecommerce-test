import { combineReducers } from 'redux';

import userRecuder from './user/userRecuder';
import cartReducer from './cart/cartReducer';

export default combineReducers({
  user: userRecuder,
  cart: cartReducer,
});
