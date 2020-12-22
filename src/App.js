import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import TaskNameInput from "./components/TaskNameInput/TaskNameInput";
import TaskTabs from "./components/TaskTabs/TaskTabs";
import StopWatch from "./components/StopWatch/StopWatch";
import TimerButton from "./components/ButtonContainer/TimerButton";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Container maxWidth='md'>
      <Grid
        className={classes.root}
        container
        direction='column'
        alignItems='center'
      >
        <Grid item>
          <TaskNameInput />
        </Grid>

        <Grid item>
          <StopWatch />
        </Grid>

        <Grid item>
          <TimerButton />
        </Grid>
      </Grid>

      <Grid style={{ marginTop: "3rem" }}>
        <TaskTabs />
      </Grid>
    </Container>
  );
}

export default App;
