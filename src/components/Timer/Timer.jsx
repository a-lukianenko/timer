import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// MUI
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import StopWatch from "./StopWatch/StopWatch";
import TitleInput from "./TitleInput/TitleInput";
import TimerButton from "./TimerButton/TimerButton";
import Warning from "../Modal/Warning";

import { startTimer, deactivateTimer } from "../../store/timer";
import { showWarning, addTask, setTaskName } from "../../store/tasks";

export default function Timer() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const timer = useSelector(state => state.timer.timer);
  const startTime = useSelector(state => state.timer.startTime);
  const taskName = useSelector(state => state.tasks.taskName);

  useEffect(() => {
    startTime && dispatch(startTimer());
    return () => {
      dispatch(deactivateTimer());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid
      container
      className={classes.root}
      direction='column'
      alignItems='center'
      spacing={2}
    >
      <Grid item>
        <TitleInput dispatch={dispatch} setTaskName={setTaskName} />
      </Grid>
      <Grid item>
        <StopWatch timer={timer} />
      </Grid>
      <Grid item>
        <TimerButton
          startTime={startTime}
          taskName={taskName}
          dispatch={dispatch}
          startTimer={startTimer}
          deactivateTimer={deactivateTimer}
          addTask={addTask}
          showWarning={showWarning}
        />
      </Grid>
      <Warning />
    </Grid>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(4),
  },
}));
