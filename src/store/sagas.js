import { all, call, select, takeEvery } from "redux-saga/effects";
import { ACTIVATE_TIMER, DEACTIVATE_TIMER } from "./timer";
import { DELETE_TASK, GENERATE_TASKS } from "./tasks";

// selectors
const getTasks = state => state.tasks.tasks;
const getStartTime = state => state.timer.startTime;

// write to localStorage
function* writeTasks(tasks) {
  yield localStorage.setItem("tasks", JSON.stringify(tasks));
}

function* writeStartTime(startTime) {
  yield localStorage.setItem("startTime", startTime);
}

// delete task
function* handleDelete() {
  const tasks = yield select(getTasks);
  yield call(writeTasks, tasks);
}

function* watchDelete() {
  yield takeEvery(DELETE_TASK, handleDelete);
}

// active timer
function* activeTimerWorker() {
  const startTime = yield select(getStartTime);
  yield call(writeStartTime, startTime);
}

function* activeTimerWatcher() {
  yield takeEvery(ACTIVATE_TIMER, activeTimerWorker);
}

// inactive timer
function* deactivateTimerWorker() {
  const tasks = yield select(getTasks);
  yield call(writeTasks, tasks);
  yield call(writeStartTime, null);
}

function* deactivateTimerWatcher() {
  yield takeEvery(DEACTIVATE_TIMER, deactivateTimerWorker);
}

// write example data to localStorage
function* generateTasksWorker(action) {
  console.log(action);
  yield call(writeTasks, action.exampleData);
}

function* generateTasksWatcher() {
  yield takeEvery(GENERATE_TASKS, generateTasksWorker);
}

// root saga
export default function* rootSaga() {
  yield all([
    watchDelete(),
    activeTimerWatcher(),
    deactivateTimerWatcher(),
    generateTasksWatcher(),
  ]);
}
