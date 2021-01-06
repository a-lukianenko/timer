import { exampleData } from "../utils/exampleData";

// Actions
const ADD_TASK = "app/tasks/ADD_TASK";
export const DELETE_TASK = "app/tasks/DELETE_TASK";
export const GENERATE_TASKS = "app/tasks/GENERATE_TASKS";

// initial state
const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks")) || [],
};

// Reducer
export default function tasks(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      const newTask = {
        title: action.task,
        startTime: action.startTime,
        endTime: Date.now(),
      };
      newTask.timeSpent = newTask.endTime - newTask.startTime;
      return {
        ...state,
        tasks: state.tasks.concat([newTask]),
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(
          task => task.startTime !== action.deleteTaskStartTime
        ),
      };
    case GENERATE_TASKS:
      return { ...state, tasks: action.exampleData };
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

export function deleteTask(deleteTaskStartTime) {
  return {
    type: DELETE_TASK,
    deleteTaskStartTime,
  };
}

export function generateTasks() {
  return {
    type: GENERATE_TASKS,
    exampleData,
  };
}
