import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import ModalWarning from "../Modal/ModalWarning";

import {
  startTimer,
  stopTimer,
  setCurrentTaskName,
  addTask,
  showWarning,
} from "../../store/actions";

let flag = false;

const TimerButton = () => {
  const dispatch = useDispatch();
  const buttonText = useSelector(state => state.timerButton.buttonText);
  const currentTask = useSelector(state => state.tasks.currentTask);

  function handleClick() {
    if (buttonText === "START") {
      dispatch(startTimer());
      if (!currentTask.trim()) {
        flag = false;
        return;
      }
      dispatch(addTask(currentTask));
      flag = true;
    }
    if (buttonText === "STOP") {
      if (!flag && !currentTask) {
        dispatch(showWarning());
        return;
      }
      if (currentTask) {
        dispatch(addTask(currentTask));
        dispatch(stopTimer());
        return;
      }
      dispatch(stopTimer());
      dispatch(setCurrentTaskName(""));
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
