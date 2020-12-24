// import { call, put, takeEvery } from "redux-saga/effects";

// let interval;

// function* startTimerWorker({ timer }) {
//   let newTimer = yield timer;
//   interval = setInterval(() => {
//     newTimer += 1000;
//   }, 1000);
// }
// const delay = ms => new Promise(res => setTimeout(res, ms));

// function* timerWorker({ timer }) {
//   yield delay(1000);
//   yield put({ type: "INCREMENT_TIMER" });
// }

// function* saga() {
//   yield takeEvery("TIMER_TICK", timerWorker);
// }

// export default saga;
