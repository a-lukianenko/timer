import React from "react";
import { Switch, Route, Redirect, Link, useHistory } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TaskLog from "./TaskLog/TaskLog";
import TaskChart from "./TaskChart/TaskChart";

export default function TaskTabs() {
  const {
    push,
    location: { pathname },
  } = useHistory();

  const pathToIndex = {
    "/tasks_log": 0,
    "/tasks_chart": 1,
  };

  const indexToPath = {
    0: "/tasks_log",
    1: "/tasks_chart",
  };

  const [selectedTab, setselectedTab] = React.useState(
    pathname in pathToIndex ? pathToIndex[pathname] : false
  );

  const handleTabChange = (_, newValue) => {
    push(indexToPath[newValue]);
    setselectedTab(newValue);
  };

  return (
    <div>
      <AppBar position='static'>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          aria-label='task details tabs'
        >
          <Tab label='TASKS LOG' component={Link} to='/tasks_log' />
          <Tab label='TASKS CHART' component={Link} to='/tasks_chart' />
        </Tabs>
      </AppBar>
      <Switch>
        <Redirect exact from='/' to='/tasks_log' />
        <Route exact path='/tasks_log' component={TaskLog} />
        <Route exact path='/tasks_chart' component={TaskChart} />
      </Switch>
    </div>
  );
}
