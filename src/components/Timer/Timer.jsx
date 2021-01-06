import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// MUI
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import StopWatch from "./StopWatch/StopWatch";
import TitleInput from "./TitleInput/TitleInput";
import TimerButton from "./TimerButton/TimerButton";
// import Warning from "../Modal/Warning";

import { activateTimer, deactivateTimer, setTaskName } from "../../store/timer";
import { addTask } from "../../store/tasks";

export default function Timer() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const startTime = useSelector(state => state.timer.startTime);
  const taskName = useSelector(state => state.timer.taskName);

  const [timer, setTimer] = useState(
    startTime ? new Date(Date.now() - startTime) : new Date(0)
  );

  // start timer
  useEffect(() => {
    let id;
    if (startTime) {
      id = setInterval(() => {
        setTimer(new Date(new Date(timer).getTime() + 1000));
      }, 1000);
    }
    return () => {
      clearInterval(id);
    };
  }, [timer, startTime]);

  // stop timer
  useEffect(() => {
    !startTime && setTimer(new Date(0));
  }, [startTime]);

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
          activateTimer={activateTimer}
          deactivateTimer={deactivateTimer}
          addTask={addTask}
          setTaskName={setTaskName}
        />
      </Grid>
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
