import Button from "@material-ui/core/Button";

export default function TimerButton({
  startTime,
  taskName,
  dispatch,
  startTimer,
  deactivateTimer,
  addTask,
  showWarning
}) {
  function runTimer() {
    dispatch(startTimer());
  }

  function stopTimer() {
    if (!taskName) return dispatch(showWarning());

    dispatch(addTask(taskName, startTime));
    dispatch(deactivateTimer());
  }

  return (
    <>
      {startTime ? (
        <Button size='medium' variant='contained' onClick={stopTimer}>
          stop
        </Button>
      ) : (
        <Button size='medium' variant='contained' onClick={runTimer}>
          start
        </Button>
      )}
    </>
  );
}
