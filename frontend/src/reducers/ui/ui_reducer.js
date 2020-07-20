import { combineReducers } from 'redux';

import modal from './modal_reducer';
import timer from './timer_reducer';

export default combineReducers({
  modal,
  timer
});