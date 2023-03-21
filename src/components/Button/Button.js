import React, { useContext } from 'react';
import MuiButton from "@mui/material/Button";
import {ThemeContext} from "../../App.js";

const Button = ({ children }) => {
  const darkModeContext = useContext(ThemeContext);

  const styles = {
    btn: (theme) => (
      console.log(theme),{
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "20px",
      textTransform: "capitalize",
      color: "white",
      background: darkModeContext.isDarkMode
        ? theme.palette.cobalt.main
        : theme.palette.slateBlue.main,
      // background: "purple",
      padding: "12px 20px",
      gap: "10px",
      borderRadius: "8px",
      "&:hover": {
        background: "#646ab0",
      },
    }),
  };

  return <MuiButton sx={styles.btn}>{children}</MuiButton>;
};

export default Button;
