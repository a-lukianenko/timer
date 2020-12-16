const initialState = {
  timer: new Date(new Date().setHours(0, 0, 0)),
};

export default function timerReducer(state = initialState, action) {
  switch (action.type) {
    case "START_TIMER":
      return {
        ...state,
        timer: new Date(new Date(state.timer).getTime() + 1000),
      };
    case "STOP_TIMER":
      return initialState;
    default:
      return state;
  }
}
