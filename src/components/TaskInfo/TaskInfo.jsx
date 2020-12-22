import React from "react";
import { useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { prettyDate, prettyDateUTC } from "../../utils/prettyDate";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function TaskInfo() {
  const classes = useStyles();
  const { taskId } = useParams();
  const history = useHistory();
  const task = useSelector(state =>
    state.tasks.tasks.find(task => task.startTime === +taskId)
  );

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color='textSecondary'
          gutterBottom
        >
          Task ID {taskId}
        </Typography>
        <Typography variant='h5' component='h2'>
          Title: {task.title}
        </Typography>
        <Typography className={classes.pos} color='textSecondary'>
          Time spent: {prettyDateUTC(task.timeSpent)}
        </Typography>
        <Typography variant='body2' component='p'>
          From: {prettyDate(task.startTime)}
          <br />
          To: {prettyDate(task.endTime)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size='small'
          variant='contained'
          color='secondary'
          onClick={() => history.push("/tasks_log")}
        >
          Back to log
        </Button>
      </CardActions>
    </Card>
  );
}
