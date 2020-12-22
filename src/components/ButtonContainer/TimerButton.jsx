import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import ModalWarning from "../Modal/ModalWarning";

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
  const buttonText = useSelector(state => state.timerButton.buttonText);
  const currentTask = useSelector(state => state.tasks.currentTask);
  const taskTitle = useSelector(state =>
    state.tasks.tasks.length ? state.tasks.tasks.slice(-1)[0].title : null
  );

  useEffect(() => {
    dispatch(resetTimer());
    localStorage.getItem("runningTask") && dispatch(startTimer());
  }, [dispatch]);

  function handleClick() {
    if (buttonText === "START") {
      dispatch(startTimer());
      dispatch(addTask(currentTask));
    }
    if (buttonText === "STOP") {
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
        {buttonText}
      </Button>
      <ModalWarning />
    </>
  );
};

export default TimerButton;
