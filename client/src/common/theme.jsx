import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  typography: {
    fontFamily: '"OpenSans"',
    fontSize: 14,

    button: {
      fontFamily: '"OpenSans"',
      fontWeight: "semibold",
      backgroundColor: "#FFFFFF",
      "text-transform": "capitalize",
      padding: "200px",
      fontSize: "1rem",
      width: 140,
      height: 50,
    },
  },
  palette: {
    primary: { main: "#3A8DFF", contrastText: "#FFFFFF" },
    secondary: {
      main: "#FFFFFF",
      contrastText: "#3A8DFF",
      grad: "linear-gradient(0deg, #3A8DFF, #86B9FF)",
    },
  },
});
