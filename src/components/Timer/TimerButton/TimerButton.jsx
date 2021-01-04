import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "@material-ui/core/Button";

import Warning from "../../Modal/Warning";
import { startTimer, deactivateTimer } from "../../../store/timer";
import { showWarning, addTask } from "../../../store/tasks";

const TimerButton = () => {
  const dispatch = useDispatch();
  const startTime = useSelector(state => state.timer.startTime);
  const currentTaskName = useSelector(state => state.tasks.currentTaskName);

  useEffect(() => {
    JSON.parse(localStorage.getItem("startTime")) && dispatch(startTimer());
    return () => {
      dispatch(deactivateTimer());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleClick() {
    if (!startTime) {
      dispatch(startTimer());
    }
    if (startTime) {
      if (!currentTaskName) return dispatch(showWarning());

      dispatch(addTask(currentTaskName, startTime));
      dispatch(deactivateTimer());
    }
  }

  return (
    <>
      <Button size='medium' variant='contained' onClick={handleClick}>
        {startTime ? "stop" : "start"}
      </Button>
      <Warning />
    </>
  );
};

export default TimerButton;
