import { useState } from "react";

import Input from "@material-ui/core/Input";
import { makeStyles } from "@material-ui/core/styles";

export default function TaskNameInput({ dispatch, setTaskName }) {
  const classes = useStyles();

  const [taskTitle, setTaskTitle] = useState("");

  function handleChange({ target }) {
    setTaskTitle(target.value);
  }

  function handleBlur(_) {
    dispatch(setTaskName(taskTitle));
    setTaskTitle("");
  }

  return (
    <Input
      className={classes.root}
      placeholder='Name of your task'
      value={taskTitle}
      onChange={handleChange}
      onBlur={handleBlur}
      inputProps={{ "aria-label": "description" }}
    />
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    "& input::placeholder": {
      textAlign: "center",
      color: theme.palette.primary.main,
      opacity: 1,
      fontSize: 16,
      fontWeight: theme.typography.fontWeightRegular,
    },
  },
}));
