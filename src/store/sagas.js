import { select, call, put, takeEvery } from "redux-saga/effects";
import { ACTIVATE_TIMER, DEACTIVATE_TIMER, TIMER_TICK } from "./timer";
import * as selectors from "./selectors";

function* updateLocalStorage() {
  const startTime = yield select(selectors.startTime);
  const tasks = yield select(selectors.tasks);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  localStorage.setItem("startTime", startTime);
}

function* watchLocalStorage() {
  yield takeEvery(DEACTIVATE_TIMER, updateLocalStorage);
}

export default watchLocalStorage;
