const initialState = {
  buttonText: "START",
};

export default function timerButtonReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_TO_STOP":
      return { buttonText: "STOP" };
    case "SET_TO_START":
      return { buttonText: "START" };
    default:
      return state;
  }
}
