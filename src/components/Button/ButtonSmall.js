import React, { useContext } from 'react';
import MuiButton from "@mui/material/Button";
import {ThemeContext} from "../../App.js";



const ButtonSmall = ({ children }) => {
  const darkModeContext = useContext(ThemeContext);

  console.log(darkModeContext)

  const styles = {
    btn: (theme, ) => (
      console.log(theme),
      {
        fontFamily: "Montserrat, sans-serif",
        fontWeight: 500,
        fontSize: "16px",
        lineHeight: "20px",
        textTransform: "capitalize",
        // color:  theme.palette.purple.main,
        // background: theme.palette.purple.main,
        padding: "10px 10px",
        gap: "10px",
        borderRadius: "8px",
        // "&:hover": {
        //   background: theme.palette.greyGreen.main,
        //   color: theme.palette.turquoise.main,
        // },
      }
    ),
  };

  return <MuiButton sx={styles.btn}>{children}</MuiButton>;
};

export default ButtonSmall;
