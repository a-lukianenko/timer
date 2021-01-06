import React from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Paper from "@material-ui/core/Paper";

export default function Confirmation({
  confirmation,
  cancelDelete,
  taskToDelete,
  confirmDelete,
}) {
  return (
    <div>
      <Dialog
        open={confirmation}
        onClose={cancelDelete}
        PaperComponent={PaperComponent}
        aria-labelledby='draggable-dialog-title'
      >
        <DialogContent>
          <DialogContentText>
            {`Are you sure you want to delete "${taskToDelete.title}"?`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={cancelDelete} color='primary'>
            Cancel
          </Button>
          <Button onClick={confirmDelete} color='primary'>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

function PaperComponent(props) {
  return <Paper {...props} />;
}
