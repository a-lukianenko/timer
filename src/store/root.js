import { combineReducers } from "redux";
import tasks from "./tasks";
import timer from "./timer";

export const root = combineReducers({
  tasks,
  timer,
});
