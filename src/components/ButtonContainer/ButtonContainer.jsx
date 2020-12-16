import Button from "@material-ui/core/Button";

export const ButtonContainer = ({ name, size }) => {
  return (
    <Button variant='contained' color='primary' size={size}>
      {name}
    </Button>
  );
};
