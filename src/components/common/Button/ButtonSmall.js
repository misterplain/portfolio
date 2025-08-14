import React, { useContext } from 'react';
import MuiButton from "@mui/material/Button";
import {ThemeContext} from "../../../App.js";

// Smaller version of the custom button for project cards
const ButtonSmall = ({ children }) => {
  const darkModeContext = useContext(ThemeContext);
  const isDarkMode = darkModeContext.isDarkMode;

  const styles = {
    btn: (theme) => ({
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "20px",
      textTransform: "capitalize",
      color: isDarkMode ? theme.palette.lightGreen.main  : theme.palette.purple.main,
      background: isDarkMode ? theme.palette.cobalt.main : theme.palette.lightGreen.main,
      padding: "10px 10px",
      gap: "10px",
      borderRadius: "8px",
      "&:hover": {
        background: theme.palette.greyGreen.main,
        color: theme.palette.turquoise.main,
      },
    }),
  };

  return <MuiButton sx={styles.btn}>{children}</MuiButton>;
};

export default ButtonSmall;
