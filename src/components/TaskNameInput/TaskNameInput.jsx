import { useDispatch, useSelector } from "react-redux";

import Input from "@material-ui/core/Input";
import { makeStyles } from "@material-ui/core/styles";

import { setCurrentTaskName } from "../../store/actions";

const useStyles = makeStyles(theme => ({
  root: {
    "& input::placeholder": {
      textAlign: "center",
    },
  },
}));

const TaskNameInput = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const currentTask = useSelector(state => state.tasks.currentTask);

  function handleChange(event) {
    dispatch(setCurrentTaskName(event.target.value));
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <Input
        className={classes.root}
        placeholder='Name of your task'
        value={currentTask}
        onChange={handleChange}
        inputProps={{ "aria-label": "description" }}
      />
    </form>
  );
};

export default TaskNameInput;
