import { useSelector, useDispatch } from "react-redux";
import { hideWarning } from "../../store/actions";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function ModalWarning() {
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
        <DialogTitle id='alert-dialog-title'>{"Empty task name"}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            You are trying to close a task without title. Please, enter the task
            title and try again.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary' autoFocus>
            CLOSE
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
