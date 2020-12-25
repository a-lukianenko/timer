// tasks.js
import { createTaskData } from "../utils/createTaskData";
import { deactivateTimer, resetTimer, interval } from "./timer";

// Actions
const SET_CURRENT_TASK_NAME = "app/tasks/SET_CURRENT_TASK_NAME";
const ADD_TASK = "app/tasks/ADD_TASK";
const SET_TASK_END_TIME = "app/tasks/SET_TASK_END_TIME";
const DELETE_TASK = "app/tasks/DELETE_TASK";
const GENERATE_TASKS = "app/tasks/GENERATE_TASKS";
const SHOW_WARNING = "app/tasks/SHOW_WARNING";
const HIDE_WARNING = "app/tasks/HIDE_WARNING";
const SHOW_CONFIRMATION = "app/tasks/SHOW_CONFIRMATION";
const HIDE_CONFIRMATION = "app/tasks/HIDE_CONFIRMATION";

// initial state
const initialState = {
  currentTaskName: "",
  taskToDelete: null,
  tasks: JSON.parse(localStorage.getItem("tasks")) || [],
  warning: false,
  confirmation: false,
};

// Reducer
export default function tasks(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_TASK_NAME:
      return { ...state, currentTaskName: action.name };
    case ADD_TASK:
      const updatedTasks = state.tasks.concat([
        {
          title: action.task,
          startTime: Date.now(),
          endTime: null,
          timeSpent: null,
        },
      ]);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return {
        ...state,
        currentTaskName: "",
        tasks: updatedTasks,
      };
    case SET_TASK_END_TIME:
      const completedTasks = state.tasks
        .slice(0, state.tasks.length - 1)
        .concat([
          {
            ...state.tasks.slice(-1)[0],
            endTime: action.timestamp,
            title: action.title ? action.title : state.tasks.slice(-1)[0].title,
            timeSpent:
              action.timestamp - state.tasks[state.tasks.length - 1].startTime,
          },
        ]);
      localStorage.setItem("tasks", JSON.stringify(completedTasks));
      return {
        ...state,
        tasks: completedTasks,
      };
    case DELETE_TASK:
      const filteredTasks = state.tasks.filter(
        task => task.startTime !== state.taskToDelete.startTime
      );
      localStorage.setItem("tasks", JSON.stringify(filteredTasks));
      return {
        ...state,
        tasks: filteredTasks,
      };
    case GENERATE_TASKS:
      localStorage.setItem("runningTask", "");
      localStorage.setItem("tasks", JSON.stringify(action.taskData));
      return { ...state, tasks: action.taskData };
    case SHOW_WARNING:
      return { ...state, warning: true };
    case HIDE_WARNING:
      return { ...state, warning: false };
    case SHOW_CONFIRMATION:
      return {
        ...state,
        confirmation: true,
        taskToDelete: state.tasks.find(
          task => task.startTime === action.taskId
        ),
      };
    case HIDE_CONFIRMATION:
      return { ...state, confirmation: false };
    default:
      return state;
  }
}

// Action creators
export function addTask(task) {
  return {
    type: ADD_TASK,
    task,
  };
}

export function setСurrentTaskName(name) {
  return {
    type: SET_CURRENT_TASK_NAME,
    name,
  };
}

export function setTaskEndTime(timestamp, title) {
  return {
    type: SET_TASK_END_TIME,
    timestamp,
    title,
  };
}

export function showWarning() {
  return {
    type: SHOW_WARNING,
  };
}

export function hideWarning() {
  return {
    type: HIDE_WARNING,
  };
}

export function showConfirmation(taskId) {
  return {
    type: SHOW_CONFIRMATION,
    taskId,
  };
}

export function hideConfirmation() {
  return {
    type: HIDE_CONFIRMATION,
  };
}

export function deleteTask() {
  return dispatch => {
    if (!interval) return { type: DELETE_TASK };

    clearInterval(interval);
    dispatch(deactivateTimer());
    dispatch(resetTimer());
    dispatch({ type: DELETE_TASK });
    localStorage.setItem("runningTask", "");
  };
}

export function generateTasks() {
  const taskData = createTaskData();
  return {
    type: GENERATE_TASKS,
    taskData,
  };
}
