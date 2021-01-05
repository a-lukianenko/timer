// Actions
export const ACTIVATE_TIMER = "app/timer/ACTIVATE_TIMER";
export const DEACTIVATE_TIMER = "app/timer/DEACTIVATE_TIMER";

// Initial state
const initialState = {
  startTime: +localStorage.getItem("startTime") || null,
};

// Reducer
export default function timer(state = initialState, action) {
  switch (action.type) {
    case ACTIVATE_TIMER:
      return {
        startTime: state.startTime || Date.now(),
      };
    case DEACTIVATE_TIMER:
      return {
        startTime: null,
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

export function deactivateTimer() {
  return {
    type: DEACTIVATE_TIMER,
  };
}
