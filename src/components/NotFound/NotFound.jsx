import { useHistory } from "react-router-dom";

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

export default function NotFound() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <h1 className={classes.h1}>404</h1>
      <h2 className={classes.h2}>Not Found</h2>
      <Button
        size='medium'
        variant='contained'
        color='primary'
        style={{ margin: "1rem auto" }}
        onClick={() => history.push("/tasks")}
      >
        go to task log
      </Button>
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundImage:
      "linear-gradient( 135.9deg,  rgba(109,25,252,1) 16.4%, rgba(125,31,165,1) 56.1% )",
    color: "#e0e0e0",
    textShadow: "5px 0px 6px #101010e3",
  },
  h1: {
    margin: 0,
    lineHeight: 1,
    fontSize: 152,
  },
  h2: {
    margin: 0,
    fontSize: 50,
  },
}));
