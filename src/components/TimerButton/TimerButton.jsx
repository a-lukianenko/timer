import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import Warning from "../Modal/Warning";

import { startTimer, resetTimer } from "../../store/timer";

import {
  setСurrentTaskName,
  setTaskEndTime,
  showWarning,
  addTask,
} from "../../store/tasks";

const TimerButton = () => {
  const dispatch = useDispatch();
  const isTimerActive = useSelector(state => state.timer.isTimerActive);
  const currentTaskName = useSelector(state => state.tasks.currentTaskName);
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
      dispatch(addTask(currentTaskName));
    }
    if (isTimerActive) {
      if (!taskTitle && !currentTaskName) return dispatch(showWarning());

      dispatch(setСurrentTaskName(""));
      dispatch(setTaskEndTime(Date.now(), currentTaskName));
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
