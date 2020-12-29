import { createTaskData } from "../utils/createTaskData";

// Actions
const SET_CURRENT_TASK_NAME = "app/tasks/SET_CURRENT_TASK_NAME";
const ADD_TASK = "app/tasks/ADD_TASK";
export const DELETE_TASK = "app/tasks/DELETE_TASK";
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
      const newTask = {
        title: action.task,
        startTime: action.startTime,
        endTime: Date.now(),
      };
      newTask.timeSpent = newTask.endTime - newTask.startTime;
      return {
        ...state,
        currentTaskName: "",
        tasks: state.tasks.concat([newTask]),
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(
          task => task.startTime !== state.taskToDelete.startTime
        ),
      };
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
    case GENERATE_TASKS:
      return { ...state, tasks: action.taskData };
    default:
      return state;
  }
}

// Action creators
export function addTask(task, startTime) {
  return {
    type: ADD_TASK,
    task,
    startTime,
  };
}

export function setСurrentTaskName(name) {
  return {
    type: SET_CURRENT_TASK_NAME,
    name,
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
  return {
    type: DELETE_TASK,
  };
}

export function generateTasks() {
  const taskData = createTaskData();
  return {
    type: GENERATE_TASKS,
    taskData,
  };
}
