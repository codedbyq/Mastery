export const UPDATE_TIMER = "UPDATE_TIMER";
export const CLEAR_TIMER = "CLEAR_TIMER";

export const updateTimer = time => {
  return {
    type: UPDATE_TIMER,
    time
  };
};

export const clearTimer = () => {
  return {
    type: CLEAR_TIMER
  };
};