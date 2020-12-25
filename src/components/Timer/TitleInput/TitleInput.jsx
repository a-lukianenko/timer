import { useState } from "react";
import { useDispatch } from "react-redux";

import Input from "@material-ui/core/Input";
import { makeStyles } from "@material-ui/core/styles";

import { setСurrentTaskName } from "../../../store/tasks";

export default function TaskNameInput() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [taskTitle, setTaskTitle] = useState("");

  function handleChange(event) {
    setTaskTitle(event.target.value);
  }

  function handleBlur(event) {
    dispatch(setСurrentTaskName(taskTitle));
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
    },
  },
}));
