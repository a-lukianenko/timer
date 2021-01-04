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
import getUpperTimeBound from "../../../utils/getUpperTimeBound";
import { generateTasks } from "../../../store/tasks";

function TaskChart() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.tasks);
  const data = tasks.map(taskToTimeData);

  const bars = [];

  for (let i = 0; i <= getUpperTimeBound(data); i++) {
    bars.push(
      <Bar
        barSize={20}
        dataKey={i.toString()}
        type='monotone'
        key={i.toString()}
      />
    );
  }

  if (!tasks.length)
    return (
      <>
        <h3 className={classes.h3}>No tasks yet!</h3>
        <Button
          variant='contained'
          size='small'
          color='primary'
          onClick={() => dispatch(generateTasks())}
          className={classes.btnCentered}
        >
          Generate tasks
        </Button>
      </>
    );

  return (
    <>
      <BarChart width={800} height={250} data={data}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis
          dataKey='title'
          type='category'
          padding={{ left: 20, right: 20 }}
        />
        <YAxis />
        <Tooltip
          formatter={(value, name, props) => [
            `${value} minutes`,
            `in ${name < 9 ? "0" + name : name} hour`,
          ]}
        />
        <Legend
          payload={[
            {
              value: "Tasks by hours and minutes",
              color: "transparent",
            },
          ]}
        />
        {bars}
      </BarChart>
      <Button
        variant='contained'
        size='small'
        color='primary'
        onClick={() => dispatch(generateTasks())}
        className={classes.btnRight}
      >
        Generate tasks
      </Button>
    </>
  );
}

export default TaskChart;

const useStyles = makeStyles(theme => ({
  h3: {
    marginTop: theme.spacing(4),
    textAlign: "center",
  },
  btnCentered: {
    left: "50%",
    transform: "translateX(-50%)",
  },
  btnRight: {
    left: "100%",
    transform: "translateX(-100%)",
  },
}));
