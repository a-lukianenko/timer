import React from "react";
import { useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

export default function StopWatch() {
  const classes = useStyles();
  const timer = useSelector(state => state.timer.timer);

  return (
    <Paper className={classes.root} elevation={3}>
      <span className={classes.timer}>
        {timer.toUTCString().slice(-12, -4)}
      </span>
    </Paper>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    margin: theme.spacing(3),
    width: theme.spacing(21),
    height: theme.spacing(21),
  },
  timer: {
    fontSize: theme.spacing(4),
    color: theme.palette.primary.main,
  },
}));
