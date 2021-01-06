import { useState } from "react";

import Button from "@material-ui/core/Button";
import Warning from "../../Modal/Warning";

export default function TimerButton({
  startTime,
  taskName,
  dispatch,
  activateTimer,
  deactivateTimer,
  addTask,
  setTaskName,
}) {
  function startTimer() {
    dispatch(activateTimer());
  }

  function stopTimer() {
    if (!taskName) return setWarning(true);

    dispatch(setTaskName(""));
    dispatch(addTask(taskName, startTime));
    dispatch(deactivateTimer());
  }

  const [warning, setWarning] = useState(false);

  function closeWarning() {
    setWarning(false);
  }

  return (
    <>
      {startTime ? (
        <Button size='medium' variant='contained' onClick={stopTimer}>
          stop
        </Button>
      ) : (
        <Button size='medium' variant='contained' onClick={startTimer}>
          start
        </Button>
      )}
      <Warning warning={warning} closeWarning={closeWarning} />
    </>
  );
}
