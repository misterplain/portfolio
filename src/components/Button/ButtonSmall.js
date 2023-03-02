import React from "react";
import MuiButton from "@mui/material/Button";

const styles = {
  btn: (theme) => ({
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "20px",
    textTransform: "capitalize",
    color: theme.palette.purple.main,
    background: theme.palette.lightGreen.main,
    padding: "10px 10px",
    gap: "10px",
    borderRadius: "8px",
    "&:hover": {
      background: theme.palette.greyGreen.main,
      color: theme.palette.turquoise.main,
    },
  }),
};

const ButtonSmall = ({ children }) => {
  return <MuiButton sx={styles.btn}>{children}</MuiButton>;
};

export default ButtonSmall;
