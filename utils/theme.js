import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: '"Segoe UI"',
    fontSize: 16,
  },
  palette: {
    primary: {
      main: "#3f0000",
    },
    secondary: {
      main: "#f50057",
    },
    white: {
      main: "#ffffff",
    },

    background: {
      default: "#f1f2f3",
    },
  },
  transitions: {
    easing: {
      easeIn: "cubic-bezier(.17, .67, .83, .67)",
      sharp: "linear",
    },
  },
  components: {
    MuiFilledInput: {
      styleOverrides: {
        input: {
          "&:-webkit-autofill": {
            boxShadow: " inset 0 0 0 100px #fff!important",
          },
        },
      },
    },
  },
});
