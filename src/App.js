import { Switch, Route, Redirect } from "react-router-dom";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import TaskNameInput from "./components/TaskNameInput/TaskNameInput";
import TaskTabs from "./components/TaskTabs/TaskTabs";
import TaskInfo from "./components/TaskInfo/TaskInfo";
import StopWatch from "./components/StopWatch/StopWatch";
import TimerButton from "./components/TimerButton/TimerButton";

export default function App() {
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
        <Switch>
          <Redirect exact from='/' to='/tasks' />
          <Route exact path='/tasks' component={TaskTabs} />
          <Route exact path='/tasks-chart' component={TaskTabs} />
          <Route exact path='/tasks/:taskId' component={TaskInfo} />
          <Route path='*'>
            <h3> Resource Not Found </h3>
          </Route>
        </Switch>
      </Grid>
    </Container>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));
