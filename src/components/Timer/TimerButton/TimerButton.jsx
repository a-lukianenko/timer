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
    // dispatch({ type: "UPDATE_LOCAL_STORAGE" });
    // alert("Yo");
    return () => {
      // localStorage.setItem("num", 1);
      alert("unmiunt");
    };
  });

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
      <Button variant='contained' color='primary' onClick={handleClick}>
        {startTime ? "STOP" : "START"}
      </Button>
      <Warning />
    </>
  );
};

export default TimerButton;
