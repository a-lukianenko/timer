import { createTaskData } from "../utils/createTaskData";
let interval;
export function startTimer() {
  return dispatch => {
    !localStorage.getItem("runningTask") &&
      localStorage.setItem("runningTask", "true");
    dispatch(setButtonTextStop());
    interval = setInterval(() => {
      dispatch({ type: "START_TIMER" });
    }, 1000);
  };
}

export function resetTimer(title) {
  return dispatch => {
    if (!interval) return;
    clearInterval(interval);
    // dispatch(setTaskEndTime(Date.now(), title));
    dispatch(setCurrentTaskName(""));
    dispatch(setButtonTextStart());
    dispatch({ type: "RESET_TIMER" });
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

export function deleteTask(task) {
  return dispatch => {
    if (!interval)
      return dispatch({ type: "DELETE_TASK", taskId: task.startTime });

    if (interval) {
      clearInterval(interval);
      dispatch(setButtonTextStart());
      dispatch({ type: "RESET_TIMER" });
      dispatch({ type: "DELETE_TASK", taskId: task.startTime });
      localStorage.setItem("runningTask", "");
    }
  };
}

export function generateTasks() {
  const taskData = createTaskData();
  return {
    type: "GENERATE_TASKS",
    taskData: taskData,
  };
}
