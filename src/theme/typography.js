import createBreakpoints from "@mui/system/createTheme/createBreakpoints";

const breakpoints = createBreakpoints({});

// Common typography styles
export const getTypography = (mode) => ({
  h2: {
    fontFamily: "Montserrat",
    fontWeight: 600,
    fontSize: "40px",
    lineHeight: "55px",
    color: mode === "dark" ? "#d4f2e3" : "#5222D0",
    [breakpoints.up("md")]: {
      fontWeight: 500,
      fontSize: "55px",
      lineHeight: "70px",
    },
  },
  body1: {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "24px",
    color: mode === "dark" ? "#57dba4" : "#686868",
    [breakpoints.up("lg")]: {
      fontSize: "18px",
      lineHeight: "27px",
      fontWeight: 500,
    },
  },
  body2: {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "21px",
    color: mode === "dark" ? "#57dba4" : "#686868",
    [breakpoints.up("lg")]: {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: 500,
    },
  },
  someStyle: {
    fontFamily: "Montserrat,sans-serif",
    textTransform: "capitalize",
  },
});
