import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      light: "#666666",
      main: "#242424",
    },
    secondary: {
      light: "#919191",
      main: "#6D6D6D",
    },
  },
});

export default theme;
