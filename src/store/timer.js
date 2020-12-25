// timer.js
// import { setСurrentTaskName } from "./tasks";

// Actions
const ACTIVATE_TIMER = "app/timer/ACTIVATE_TIMER";
const DEACTIVATE_TIMER = "app/timer/DEACTIVATE_TIMER";
const TIMER_TICK = "app/timer/TIMER_TICK";
const RESET_TIMER = "app/timer/RESET_TIMER";

// Initial state
const initialState = {
  isTimerActive: false,
  timer: localStorage.getItem("runningTask")
    ? new Date(
        Date.now() -
          JSON.parse(localStorage.getItem("tasks")).slice(-1)[0].startTime
      )
    : new Date(0),
};

// Reducer
export default function timer(state = initialState, action) {
  switch (action.type) {
    case ACTIVATE_TIMER:
      return { ...state, isTimerActive: true };
    case DEACTIVATE_TIMER:
      return { ...state, isTimerActive: false };
    case TIMER_TICK:
      return {
        ...state,
        timer: new Date(new Date(state.timer).getTime() + 1000),
      };
    case RESET_TIMER:
      return { ...state, timer: new Date(0) };
    default:
      return state;
  }
}

// Action creaters
export function activateTimer() {
  return {
    type: ACTIVATE_TIMER,
  };
}

export function deactivateTimer() {
  return {
    type: DEACTIVATE_TIMER,
  };
}

export function timerTick() {
  return {
    type: TIMER_TICK,
  };
}

export let interval;
export function startTimer() {
  return dispatch => {
    !localStorage.getItem("runningTask") &&
      localStorage.setItem("runningTask", "true");
    dispatch(activateTimer());
    interval = setInterval(() => {
      dispatch(timerTick());
    }, 1000);
  };
}

export function resetTimer() {
  return dispatch => {
    if (!interval) return;

    clearInterval(interval);
    // setСurrentTaskName("");
    dispatch(deactivateTimer());
    dispatch({ type: RESET_TIMER });
  };
}
