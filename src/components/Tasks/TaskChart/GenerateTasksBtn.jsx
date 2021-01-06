import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import { useDispatch } from "react-redux";
import { generateTasks } from "../../../store/tasks";

export default function GenerateTasksBtn({ className }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Button
      variant='contained'
      size='small'
      color='primary'
      onClick={() => dispatch(generateTasks())}
      className={classes[className]}
    >
      Generate tasks
    </Button>
  );
}

const useStyles = makeStyles(theme => ({
  btnCentered: {
    left: "50%",
    transform: "translateX(-50%)",
  },
  btnRight: {
    left: "100%",
    transform: "translateX(-100%)",
  },
}));
