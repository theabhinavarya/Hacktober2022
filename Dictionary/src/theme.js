import { createTheme } from "@mui/material";

export default createTheme({
  palette: {
    background: {
      default: "#000000",
    },
    text: {
      primary: "#FFF",
    },
  },
  mixins: {
    alignInCenter: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
    },
  },
});
