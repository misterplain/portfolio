import React, { useContext } from "react";
import MuiButton from "@mui/material/Button";
import { ThemeContext } from "../../../App.js";

// Custom styled button component
const Button = ({ href, download, children }) => {
  const darkModeContext = useContext(ThemeContext);

  const styles = {
    btn: (theme) => ({
      [theme.breakpoints.up("xs")]: {
        fontFamily: "Montserrat, sans-serif",
        fontWeight: 500,
        fontSize: "14px",
        lineHeight: "14px",
        textTransform: "capitalize",
        color: "white",
        background: darkModeContext.isDarkMode
          ? theme.palette.cobalt.main
          : theme.palette.slateBlue.main,
        padding: "10px 15px",
        margin: "10px",
        gap: "10px",
        borderRadius: "8px",
        "&:hover": {
          background: darkModeContext.isDarkMode
            ? theme.palette.slateBlue.main
            : theme.palette.slateBlue.secondary,
        },
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "16px",
        lineHeight: "20px",
        padding: "12px 20px",
        gap: "10px",
      },
    }),
  };

  return <MuiButton sx={styles.btn} href={href} download>{children}</MuiButton>;
};

export default Button;
