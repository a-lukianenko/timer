import React from "react";
import { useSelector } from "react-redux";

import Chart from "./Chart";
import GenerateTasksBtn from "./GenerateTasksBtn";

import { makeStyles } from "@material-ui/core/styles";

import { convertForRecharts } from "../../../utils/convertForRecharts";
import getRandomColor from "../../../utils/getRandomColor";

export default function TaskChart() {
  const classes = useStyles();
  const tasks = useSelector(state => state.tasks.tasks);

  const data = convertForRecharts(tasks);
  const labels = tasks.map(t => t.title);

  if (!tasks.length)
    return (
      <>
        <h3 className={classes.h3}>No tasks yet!</h3>
        <GenerateTasksBtn className={"btnCentered"} />
      </>
    );

  return (
    <>
      <Chart data={data} labels={labels} getRandomColor={getRandomColor} />;
      <GenerateTasksBtn className={"btnRight"} />
    </>
  );
}

const useStyles = makeStyles(theme => ({
  h3: {
    marginTop: theme.spacing(4),
    textAlign: "center",
  },
}));
