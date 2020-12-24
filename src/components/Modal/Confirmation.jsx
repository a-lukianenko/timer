import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Paper from "@material-ui/core/Paper";

import { hideConfirmation, deleteTask } from "../../store/actions";

export default function Confirmation() {
  const dispatch = useDispatch();
  const confirmation = useSelector(state => state.tasks.confirmation);
  const task = useSelector(state => state.tasks.taskToDelete);

  const handleClose = () => {
    dispatch(hideConfirmation());
  };

  const handleDelete = () => {
    dispatch(deleteTask());
    dispatch(hideConfirmation());
  };

  return (
    task && (
      <div>
        <Dialog
          open={confirmation}
          onClose={handleClose}
          PaperComponent={PaperComponent}
          aria-labelledby='draggable-dialog-title'
        >
          <DialogContent>
            <DialogContentText>
              {`Are you sure you want to delete "${task.title}"?`}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose} color='primary'>
              Cancel
            </Button>
            <Button onClick={handleDelete} color='primary'>
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  );
}

function PaperComponent(props) {
  return <Paper {...props} />;
}
