// Actions
export const ACTIVATE_TIMER = "app/timer/ACTIVATE_TIMER";
export const DEACTIVATE_TIMER = "app/timer/DEACTIVATE_TIMER";
export const TIMER_TICK = "app/timer/TIMER_TICK";

// Initial state
const initialState = {
  startTime: +localStorage.getItem("startTime") || null,
  timer: +localStorage.getItem("startTime")
    ? new Date(Date.now() - +localStorage.getItem("startTime"))
    : new Date(0),
};

// Reducer
export default function timer(state = initialState, action) {
  switch (action.type) {
    case ACTIVATE_TIMER:
      return {
        ...state,
        startTime: state.startTime || Date.now(),
      };
    case DEACTIVATE_TIMER:
      return {
        ...state,
        startTime: null,
        timer: new Date(0),
      };
    case TIMER_TICK:
      return {
        ...state,
        timer: new Date(new Date(state.timer).getTime() + 1000),
      };
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

export function timerTick() {
  return {
    type: TIMER_TICK,
  };
}

export function startTimer() {
  return {
    type: ACTIVATE_TIMER,
  };
}

export function deactivateTimer() {
  return {
    type: DEACTIVATE_TIMER,
  };
}
