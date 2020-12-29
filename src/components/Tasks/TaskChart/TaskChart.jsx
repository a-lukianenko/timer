import React from "react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
} from "recharts";

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import { useSelector, useDispatch } from "react-redux";
import { taskToTimeData } from "../../../utils/taskToTimeData";
import { generateTasks } from "../../../store/tasks";

const TaskChart = () => {
  const classes = useStyles();
  const task = useSelector(
    state => state.tasks.tasks[state.tasks.tasks.length - 1]
  );
  const dispatch = useDispatch();
  const isRunning = localStorage.getItem("runningTask");

  return task && !isRunning ? (
    <>
      <BarChart
        width={800}
        height={300}
        margin={{ top: 20 }}
        data={taskToTimeData(task)}
      >
        <XAxis
          dataKey='hour'
          type='number'
          domain={[0, 23]}
          tickCount={24}
          padding={{ left: 20, right: 20 }}
        />
        <YAxis dataKey='minutes' type='number' domain={[0, 60]} />
        <CartesianGrid stroke='#ccc' />
        <Tooltip labelFormatter={label => `${label}. hour`} />
        <Legend
          payload={[
            {
              value: "Minutes in these hours",
              type: "square",
              color: "#8884d8",
            },
          ]}
        />
        <Bar barSize={20} type='monotone' dataKey='minutes' fill='#8884d8' />
      </BarChart>
      <Button
        variant='contained'
        size='small'
        color='secondary'
        onClick={() => dispatch(generateTasks())}
      >
        Generate tasks
      </Button>
    </>
  ) : (
    <>
      <h3 className={classes.h3}>No tasks yet!</h3>
      <Button
        variant='contained'
        size='small'
        color='secondary'
        onClick={() => dispatch(generateTasks())}
        className={classes.btn}
      >
        Generate tasks
      </Button>
    </>
  );
};

export default TaskChart;

const useStyles = makeStyles(theme => ({
  h3: {
    marginTop: theme.spacing(4),
    textAlign: "center",
  },
  btn: {
    left: "50%",
    transform: "translateX(-50%)",
  },
}));