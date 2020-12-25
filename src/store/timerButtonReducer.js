const initialState = {
  isTimerActive: false,
};

export default function timerButtonReducer(state = initialState, action) {
  switch (action.type) {
    case "ACTIVATE_BUTTON":
      return { isTimerActive: true };
    case "DEACTIVATE_BUTTON":
      return { isTimerActive: false };
    default:
      return state;
  }
}
