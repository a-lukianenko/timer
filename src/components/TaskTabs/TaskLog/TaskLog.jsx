import React from "react";
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

import { showConfirmation } from "../../../store/actions";
import { formatDate } from "../../../utils/formatDate";
import Confirmation from "../../Modal/Confirmation";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function TaskLog() {
  const classes = useStyles();
  const tasks = useSelector(state => state.tasks.tasks);
  const dispatch = useDispatch();

  function handleClick(taskId) {
    dispatch(showConfirmation(taskId));
  }

  if (!tasks.length) return <h3>No tasks yet!</h3>;
  return (
    <>
      <TableContainer component={Paper}>
        {tasks[tasks.length - 1].title && (
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
              {tasks.map((task, i) =>
                task.title ? (
                  <StyledTableRow key={task.startTime}>
                    <StyledTableCell component='th' scope='row'>
                      {i + 1}
                    </StyledTableCell>
                    <StyledTableCell align='right'>
                      {task.title}
                    </StyledTableCell>
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
                        color='primary'
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
                        color='primary'
                        size='small'
                        onClick={() => handleClick(task.startTime)}
                      >
                        DELETE
                      </Button>
                    </StyledTableCell>
                  </StyledTableRow>
                ) : undefined
              )}
            </TableBody>
          </Table>
        )}
      </TableContainer>
      <Confirmation />
    </>
  );
}
