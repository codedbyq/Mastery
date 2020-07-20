import { UPDATE_TIMER, CLEAR_TIMER } from '../../actions/timer_actions';

export default function timerReducer(state = null, action) {
  switch (action.type) {
    case UPDATE_TIMER:
      return action.time;
    case CLEAR_TIMER:
      return null;
    default:
      return state;
  }
}