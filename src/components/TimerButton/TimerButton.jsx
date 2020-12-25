import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import Warning from "../Modal/Warning";

import {
  startTimer,
  resetTimer,
  setCurrentTaskName,
  setTaskEndTime,
  showWarning,
  addTask,
} from "../../store/actions";

const TimerButton = () => {
  const dispatch = useDispatch();
  const isTimerActive = useSelector(state => state.timerButton.isTimerActive);
  const currentTask = useSelector(state => state.tasks.currentTask);
  const taskTitle = useSelector(state =>
    state.tasks.tasks.length ? state.tasks.tasks.slice(-1)[0].title : null
  );

  useEffect(() => {
    dispatch(resetTimer());
    localStorage.getItem("runningTask") && dispatch(startTimer());
  }, [dispatch]);

  function handleClick() {
    if (!isTimerActive) {
      dispatch(startTimer());
      dispatch(addTask(currentTask));
    }
    if (isTimerActive) {
      if (!taskTitle && !currentTask) return dispatch(showWarning());

      dispatch(setCurrentTaskName(""));
      dispatch(setTaskEndTime(Date.now(), currentTask));
      dispatch(resetTimer());
      localStorage.setItem("runningTask", "");
    }
  }

  return (
    <>
      <Button variant='contained' color='primary' onClick={handleClick}>
        {isTimerActive ? "STOP" : "START"}
      </Button>
      <Warning />
    </>
  );
};

export default TimerButton;
