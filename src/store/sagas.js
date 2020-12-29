import {
  all,
  take,
  put,
  call,
  fork,
  cancel,
  cancelled,
  delay,
  select,
  takeEvery,
} from "redux-saga/effects";
import { ACTIVATE_TIMER, DEACTIVATE_TIMER, TIMER_TICK } from "./timer";
import { DELETE_TASK } from "./tasks";

// selectors
const getTasks = state => state.tasks.tasks;
const getStartTime = state => state.timer.startTime;

function* writeTasks(tasks) {
  yield localStorage.setItem("tasks", JSON.stringify(tasks));
}

function* writeStartTime(startTime) {
  yield localStorage.setItem("startTime", JSON.stringify(startTime));
}

function* timerTick() {
  try {
    while (true) {
      yield delay(1000);
      yield put({ type: TIMER_TICK });
    }
  } finally {
    if (yield cancelled()) {
      const tasks = yield select(getTasks);
      yield call(writeTasks, tasks);
      yield call(writeStartTime, null);
    }
  }
}

function* watchTimer() {
  while (yield take(ACTIVATE_TIMER)) {
    const startTime = yield select(getStartTime);
    const st = JSON.parse(localStorage.getItem("startTime"));
    if (!st) yield call(writeStartTime, startTime);

    // starts the task in the background
    const timerTickTask = yield fork(timerTick);

    // wait for the user stop action
    yield take(DEACTIVATE_TIMER);
    // user clicked stop. cancel the background task
    // the forked timerTick task jumps into its finally block
    yield cancel(timerTickTask);
  }
}

function* handleDelete() {
  const tasks = yield select(getTasks);
  yield call(writeTasks, tasks);
}

function* watchDelete() {
  yield takeEvery(DELETE_TASK, handleDelete);
}

export default function* rootSaga() {
  yield all([watchDelete(), watchTimer()]);
}
