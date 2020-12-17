let interval;
export function startTimer(task) {
  return dispatch => {
    !localStorage.getItem("taskInQueue") &&
      localStorage.setItem("taskInQueue", "true");
    dispatch(setButtonTextStop());
    dispatch(addTask(task));
    interval = setInterval(() => {
      dispatch({ type: "START_TIMER" });
    }, 1000);
  };
}

export function stopTimer(title) {
  return dispatch => {
    if (!interval) return;
    clearInterval(interval);
    dispatch(setTaskEndTime(Date.now(), title));
    dispatch(setCurrentTaskName(""));
    dispatch(setButtonTextStart());
    dispatch({ type: "STOP_TIMER" });
  };
}

export function addTask(task) {
  return dispatch => {
    dispatch({ type: "ADD_TASK", task });
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

export function setTaskEndTime(timestamp, title) {
  return {
    type: "SET_TASK_END_TIME",
    timestamp,
    title,
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
