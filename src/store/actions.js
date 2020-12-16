let interval;
export function startTimer() {
  return dispatch => {
    dispatch(setButtonTextStop());
    interval = setInterval(() => {
      dispatch({ type: "START_TIMER" });
    }, 1000);
  };
}

export function stopTimer() {
  return dispatch => {
    if (!interval) return;
    clearInterval(interval);
    dispatch(setButtonTextStart());
    dispatch(setTaskEndTime(new Date().getTime()));
    dispatch({ type: "STOP_TIMER" });
  };
}

export function addTask(payload) {
  return dispatch => {
    dispatch({ type: "ADD_TASK", payload });
    dispatch(setCurrentTaskName(""));
  };
}

export function setButtonTextStop() {
  return {
    type: "SET_TO_STOP",
  };
}

export function setButtonTextStart() {
  return {
    type: "SET_TO_START",
  };
}

export function setCurrentTaskName(name) {
  return {
    type: "SET_CURRENT_TASK",
    name,
  };
}

export function setTaskEndTime(timestamp) {
  return {
    type: "SET_TASK_END_TIME",
    timestamp,
  };
}

export function showWarning() {
  return {
    type: "SHOW_WARNING",
  };
}

export function hideWarning() {
  return {
    type: "HIDE_WARNING",
  };
}
