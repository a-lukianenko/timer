import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#374bc7",
    },
  },
});

theme.overrides = {
  MuiButton: {
    contained: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.primary.main,
      fontSize: 14,
      fontWeight: theme.typography.fontWeightMedium,
    },
  },
};
