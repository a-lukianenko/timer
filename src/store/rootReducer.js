import { combineReducers } from "redux";
import tasksReducer from "./tasksReducer";
import timerButtonReducer from "./timerButtonReducer";

export const rootReducer = combineReducers({
  tasks: tasksReducer,
  timerButton: timerButtonReducer,
});
