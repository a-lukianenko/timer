import { useSelector, useDispatch } from "react-redux";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";

import { hideWarning } from "../../store/tasks";

export default function Warning() {
  const classes = useStyles();
  const warning = useSelector(state => state.tasks.warning);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(hideWarning());
  };

  return (
    <div>
      <Dialog
        open={warning}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title' style={{ color: "#c02f5f" }}>
          {"Empty task name"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            You are trying to close a task without title. Please, enter the task
            title and try again.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} className={classes.root} autoFocus>
            CLOSE
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    color: "#2fc8dc",
  },
}));
