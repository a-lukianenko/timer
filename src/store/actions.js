import { createTaskData } from "../utils/createTaskData";
let interval;
export function startTimer() {
  return dispatch => {
    !localStorage.getItem("runningTask") &&
      localStorage.setItem("runningTask", "true");
    dispatch(setButtonTextStop());
    interval = setInterval(() => {
      dispatch({ type: "TIMER_TICK" });
    }, 1000);
  };
}

export function resetTimer() {
  return dispatch => {
    if (!interval) return;
    clearInterval(interval);
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
    type: "ACTIVATE_BUTTON",
  };
}

export function setButtonTextStart() {
  return {
    type: "DEACTIVATE_BUTTON",
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

export function showConfirmation(taskId) {
  return {
    type: "SHOW_CONFIRMATION",
    taskId,
  };
}

export function hideConfirmation() {
  return {
    type: "HIDE_CONFIRMATION",
  };
}

export function deleteTask() {
  return dispatch => {
    if (!interval) return dispatch({ type: "DELETE_TASK" });

    clearInterval(interval);
    dispatch(setButtonTextStart());
    dispatch({ type: "RESET_TIMER" });
    dispatch({ type: "DELETE_TASK" });
    localStorage.setItem("runningTask", "");
  };
}

export function generateTasks() {
  const taskData = createTaskData();
  return {
    type: "GENERATE_TASKS",
    taskData: taskData,
  };
}
