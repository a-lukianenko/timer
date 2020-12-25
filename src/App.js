import { Switch, Route, Redirect } from "react-router-dom";

import Container from "@material-ui/core/Container";

import TaskTabs from "./components/Tasks/TaskTabs";
import TaskInfo from "./components/Tasks/TaskInfo";
import Timer from "./components/Timer/Timer";
import NotFound from "./components/NotFound/NotFound";

export default function App() {
  return (
    <Container maxWidth='lg'>
      <Switch>
        <Redirect exact from='/' to='/tasks' />
        <Route exact path='/tasks'>
          <Timer />
          <TaskTabs />
        </Route>
        <Route exact path='/tasks-chart'>
          <Timer />
          <TaskTabs />
        </Route>
        <Route exact path='/tasks/:taskId' component={TaskInfo} />
        <Route path='*' component={NotFound} />
      </Switch>
    </Container>
  );
}
