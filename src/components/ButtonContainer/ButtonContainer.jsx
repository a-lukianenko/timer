import Button from "@material-ui/core/Button";
// import { useDispatch } from "react-redux";
// import { deleteTask } from "../../store/actions";

export const ButtonContainer = ({ name, size }) => {
  // const dispatch = useDispatch();

  // console.log("taskID", taskId);
  // function handleClick() {
  //   dispatch(deleteTask(taskId));
  // }

  return (
    <Button
      variant='contained'
      color='primary'
      size={size}
      // onClick={handleClick}
    >
      {name}
    </Button>
  );
};
