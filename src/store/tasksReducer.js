const initialState = {
  currentTask: "",
  taskToDelete: null,
  tasks: JSON.parse(localStorage.getItem("tasks")) || [],
  warning: false,
  confirmation: false,
  timer: localStorage.getItem("runningTask")
    ? new Date(
        Date.now() -
          JSON.parse(localStorage.getItem("tasks")).slice(-1)[0].startTime
      )
    : new Date(0),
};

export default function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case "TIMER_TICK":
      return {
        ...state,
        timer: new Date(new Date(state.timer).getTime() + 1000),
      };
    case "RESET_TIMER":
      return { ...state, timer: new Date(0) };
    case "SET_CURRENT_TASK":
      return { ...state, currentTask: action.name };
    case "ADD_TASK":
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
        currentTask: "",
        tasks: updatedTasks,
      };
    case "SET_TASK_END_TIME":
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
    case "DELETE_TASK":
      const filteredTasks = state.tasks.filter(
        task => task.startTime !== state.taskToDelete.startTime
      );
      localStorage.setItem("tasks", JSON.stringify(filteredTasks));
      return {
        ...state,
        tasks: filteredTasks,
      };
    case "GENERATE_TASKS":
      localStorage.setItem("runningTask", "");
      localStorage.setItem("tasks", JSON.stringify(action.taskData));
      return { ...state, tasks: action.taskData };
    case "SHOW_WARNING":
      return { ...state, warning: true };
    case "HIDE_WARNING":
      return { ...state, warning: false };
    case "SHOW_CONFIRMATION":
      return {
        ...state,
        confirmation: true,
        taskToDelete: state.tasks.find(
          task => task.startTime === action.taskId
        ),
      };
    case "HIDE_CONFIRMATION":
      return { ...state, confirmation: false };
    default:
      return state;
  }
}
