import { useState } from "react";
import { Switch, Route, Link, useHistory } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TaskLog from "./TaskLog/TaskLog";
import TaskChart from "./TaskChart/TaskChart";

export default function TaskTabs() {
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
    <div>
      <AppBar position='static'>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          aria-label='task details tabs'
        >
          <Tab label='TASKS LOG' component={Link} to='/tasks' />
          <Tab label='TASKS CHART' component={Link} to='/tasks-chart' />
        </Tabs>
      </AppBar>
      <Switch>
        <Route exact path='/tasks' component={TaskLog} />
        <Route exact path='/tasks-chart' component={TaskChart} />
      </Switch>
    </div>
  );
}
