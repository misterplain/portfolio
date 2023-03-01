import React from "react";
import MuiButton from "@mui/material/Button";

const styles = {
  btn: (theme) => ({
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "20px",
    textTransform: "capitalize",
    color: "white",
    background: theme.palette.purple.main,
    padding: "12px 20px",
    gap: "10px",
    borderRadius: "8px",
    "&:hover": {
      background: "#646ab0",
    },
  }),
};

const Button = ({ children }) => {
  return <MuiButton sx={styles.btn}>{children}</MuiButton>;
};

export default Button;
