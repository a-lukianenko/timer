const initialState = {
  currentTask: "",
  tasks: JSON.parse(localStorage.getItem("tasks")) || [],
  warning: false,
};

export default function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_CURRENT_TASK":
      return { ...state, currentTask: action.name };
    case "ADD_TASK":
      const updatedTasks = state.tasks.concat([
        {
          title: action.payload,
          startTime: Date.now(),
          endTime: "--:--:--",
          timeSpent: "--:--:--",
        },
      ]);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return {
        ...state,
        currentTask: action.payload,
        tasks: updatedTasks,
      };
    case "SET_TASK_END_TIME":
      const completedTasks = state.tasks
        .slice(0, state.tasks.length - 1)
        .concat([
          {
            ...state.tasks.slice(-1)[0],
            endTime: action.timestamp,
            timeSpent:
              action.timestamp - state.tasks[state.tasks.length - 1].startTime,
          },
        ]);
      localStorage.setItem("tasks", JSON.stringify(completedTasks));
      return {
        ...state,
        tasks: completedTasks,
      };
    case "SHOW_WARNING":
      return { ...state, warning: true };
    case "HIDE_WARNING":
      return { ...state, warning: false };
    default:
      return state;
  }
}
