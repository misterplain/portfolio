import { createTheme } from "@mui/material/styles";
import createBreakpoints from "@mui/system/createTheme/createBreakpoints";

const breakpoints = createBreakpoints({});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    // backgroundColor: {
    //   default: "#10273d",
    // },
    primary: {
      main: "#686868",
    },
    secondary: {
      main: "#777FEB",
    },
    slateBlue: {
      main: "#777FEB",
    },
    purple: {
      main: "#5222D0",
      secondary: "#3d1027",
    },
    greyGreen: {
      main: "#203239",
    },
    lightGreen: {
      main: "#d4f2e3",
    },
    turquoise: {
      main: "#57dba4",
      secondary: "#27b783",
    },
    cobalt: {
      main: "#0f728c",
    },
    darkBlue: {
      main: "#10273d",
      secondary: "#1b4165",

    },
    background: {
      default: "#10273d",
    },
    black: {
      main: "#000000",
    },
  },
  typography: {
    h2: {
      fontFamily: "Montserrat",
      fontWeight: 600,
      fontSize: "40px",
      lineHeight: "55px",
      color: "#d4f2e3",
      [breakpoints.up("md")]: {
        fontWeight: 500,
        fontSize: "55px",
        lineHeight: "70px",
      },
    },
    // h3: {
    //   fontFamily: 'Montserrat',
    //   fontWeight: 700,
    //   fontSize: '24px',
    //   lineHeight: '29px',
    //   textTransform: 'capitalize',
    //   color: '#000000',
    // },
    body1: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "24px",
      color: "#57dba4",
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
      color: "#57dba4",
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
  },
  components: {
    // Name of the component
    // MuiOutlinedInput: {
    //   styleOverrides: {
    //     notchedOutline: {
    //       border: "0.5px solid #777FEB",
    //     },
    //     root: {
    //       borderRadius: "8px",
    //       color: "#000",
    //       fontSize: "16px",
    //       lineHeight: "20px",
    //       fontWeight: 500,
    //       "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    //         border: "2px solid #777FEB",
    //       },
    //       "&:hover .MuiOutlinedInput-notchedOutline": {
    //         border: "2px solid #777FEB",
    //       },
    //     },
    //   },
    // },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          border: "0.5px solid #777FEB",
        },
        root: {
          borderRadius: "8px",
          color: "#d4f2e3",
          fontSize: "16px",
          lineHeight: "30px",
          fontWeight: 500,
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "2px solid #777FEB",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            border: "2px solid #777FEB",
          },
        },
      },
    },
  },
});

export default darkTheme;
