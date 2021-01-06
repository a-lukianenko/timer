// Actions
export const ACTIVATE_TIMER = "app/timer/ACTIVATE_TIMER";
export const DEACTIVATE_TIMER = "app/timer/DEACTIVATE_TIMER";
const SET_TASK_NAME = "app/tasks/SET_TASK_NAME";

// Initial state
const initialState = {
  startTime: +localStorage.getItem("startTime") || null,
  taskName: "",
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
      };
    case SET_TASK_NAME:
      return { ...state, taskName: action.name };
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

export function setTaskName(name) {
  return {
    type: SET_TASK_NAME,
    name,
  };
}
