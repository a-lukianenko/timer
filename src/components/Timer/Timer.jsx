import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import StopWatch from "./StopWatch/StopWatch";
import TitleInput from "./TitleInput/TitleInput";
import TimerButton from "./TimerButton/TimerButton";

export default function Timer() {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.root}
      direction='column'
      alignItems='center'
      spacing={2}
    >
      <Grid item>
        <TitleInput />
      </Grid>
      <Grid item>
        <StopWatch />
      </Grid>
      <Grid item>
        <TimerButton />
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
