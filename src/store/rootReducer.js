import { combineReducers } from "redux";
import tasksReducer from "./tasksReducer";
import timerReducer from "./timerReducer";
import timerButtonReducer from "./timerButtonReducer";

export const rootReducer = combineReducers({
  tasks: tasksReducer,
  timer: timerReducer,
  timerButton: timerButtonReducer,
});
