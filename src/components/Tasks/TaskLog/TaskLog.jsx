import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import Confirmation from "../../Modal/Confirmation";
import { formatDate } from "../../../utils/formatDate";
import { deleteTask } from "../../../store/tasks";

export default function TaskLog() {
  const classes = useStyles();
  const tasks = useSelector(state => state.tasks.tasks);
  const dispatch = useDispatch();

  const [confirmation, setConfirmation] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState("");

  function showConfirmation(task) {
    setConfirmation(true);
    setTaskToDelete(task);
  }

  function cancelDelete() {
    setConfirmation(false);
    setTaskToDelete("");
  }

  function confirmDelete() {
    setConfirmation(false);
    dispatch(deleteTask(taskToDelete.startTime));
  }

  if (!tasks.length) return <h3 className={classes.h3}>No tasks yet!</h3>;
  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label='customized table'>
          <TableHead>
            <TableRow>
              <StyledTableCell>№</StyledTableCell>
              <StyledTableCell align='right'>Task</StyledTableCell>
              <StyledTableCell align='right'>Time start</StyledTableCell>
              <StyledTableCell align='right'>Time end</StyledTableCell>
              <StyledTableCell align='right'>Time spent</StyledTableCell>
              <StyledTableCell align='right'>Info</StyledTableCell>
              <StyledTableCell align='right'>Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map((task, i) => (
              <StyledTableRow key={task.startTime}>
                <StyledTableCell component='th' scope='row'>
                  {i + 1}
                </StyledTableCell>
                <StyledTableCell align='right'>{task.title}</StyledTableCell>
                <StyledTableCell align='right'>
                  {formatDate(task.startTime)}
                </StyledTableCell>
                <StyledTableCell align='right'>
                  {formatDate(task.endTime)}
                </StyledTableCell>
                <StyledTableCell align='right'>
                  {formatDate(task.timeSpent, true)}
                </StyledTableCell>
                <StyledTableCell align='right'>
                  <Button
                    variant='contained'
                    size='small'
                    component={Link}
                    to={`/tasks/${task.startTime}`}
                  >
                    INFO
                  </Button>
                </StyledTableCell>
                <StyledTableCell align='right'>
                  <Button
                    variant='contained'
                    size='small'
                    onClick={() => showConfirmation(task)}
                  >
                    DELETE
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Confirmation
        confirmation={confirmation}
        taskToDelete={taskToDelete}
        cancelDelete={cancelDelete}
        confirmDelete={confirmDelete}
      />
    </>
  );
}

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.grey[600],
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  body: {
    fontSize: 14,
    color: theme.palette.primary.main,
    backgroundColor: "#eaf6ff",
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 700,
  },
  h3: {
    marginTop: theme.spacing(4),
    textAlign: "center",
  },
}));
