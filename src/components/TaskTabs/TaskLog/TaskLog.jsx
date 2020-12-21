import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import { ButtonContainer } from "../../ButtonContainer/ButtonContainer";
import { deleteTask } from "../../../store/actions";

import { prettyDate, prettyDateUTC } from "../../../utils/prettyDate";

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

  function handleClick(task) {
    dispatch(deleteTask(task));
  }

  return tasks.length ? (
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
          {tasks.map((task, i) =>
            task.title ? (
              <StyledTableRow key={task.startTime}>
                <StyledTableCell component='th' scope='row'>
                  {i + 1}
                </StyledTableCell>
                <StyledTableCell align='right'>{task.title}</StyledTableCell>
                <StyledTableCell align='right'>
                  {prettyDate(task.startTime)}
                </StyledTableCell>
                <StyledTableCell align='right'>
                  {prettyDate(task.endTime)}
                </StyledTableCell>
                <StyledTableCell align='right'>
                  {prettyDateUTC(task.timeSpent)}
                </StyledTableCell>
                <StyledTableCell align='right'>
                  <ButtonContainer name='INFO' size='small' />
                </StyledTableCell>
                <StyledTableCell align='right'>
                  {/* <ButtonContainer
                    name='DELETE'
                    size='small'
                    taskId={task.startTime}
                  /> */}
                  <Button
                    variant='contained'
                    color='primary'
                    size='small'
                    onClick={() => handleClick(task)}
                  >
                    DELETE
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ) : undefined
          )}
        </TableBody>
      </Table>
    </TableContainer>
  ) : (
    <h3>No tasks yet!</h3>
  );
}
