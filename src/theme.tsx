import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#4d81f1",
    },
    secondary: {
      main: "#84d76b",
    },
    // error: {
    //   main: "#ffffff",
    // },
    // warning: {},
    // info: {
    //   main: red.A400,
    // },
    // success: {},
  },
});

export default theme;
