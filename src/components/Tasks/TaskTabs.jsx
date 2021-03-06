import { useState } from "react";
import { Switch, Route, Link, useHistory } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TaskLog from "./TaskLog/TaskLog";
import TaskChart from "./TaskChart/TaskChart";

export default function TaskTabs() {
  const classes = useStyles();
  const {
    location: { pathname },
  } = useHistory();

  const paths = ["/tasks", "/tasks-chart"];

  const [selectedTab, setselectedTab] = useState(
    paths.indexOf(pathname) > -1 ? paths.indexOf(pathname) : false
  );

  const handleTabChange = (_, newValue) => {
    setselectedTab(newValue);
  };

  return (
    <Grid className={classes.tabs}>
      <AppBar position='static' className={classes.appBar}>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          aria-label='task details tabs'
          variant='fullWidth'
        >
          <Tab label='TASKS LOG' component={Link} to='/tasks' />
          <Tab label='TASKS CHART' component={Link} to='/tasks-chart' />
        </Tabs>
      </AppBar>
      <Switch>
        <Route exact path='/tasks' component={TaskLog} />
        <Route exact path='/tasks-chart' component={TaskChart} />
      </Switch>
    </Grid>
  );
}

const useStyles = makeStyles(theme => ({
  tabs: {
    marginBottom: theme.spacing(6),
  },
  appBar: {
    backgroundColor: "#01bcd5",
  },
}));
