import { createTheme } from "@mui/material/styles";
import createBreakpoints from "@mui/system/createTheme/createBreakpoints";

const breakpoints = createBreakpoints({});

const lightTheme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#686868",
    },
    secondary: {
      main: "#777FEB",
    },
    // background: {
    //   default: '#b30000',
    // },
    slateBlue: {
      main: "#777FEB",
    },
    purple: {
      main: "#5222D0",
    },
    greyGreen: {
      main: "#203239",
    },
    lightGreen: {
      main: "#d4f2e3",
    },
    turquoise: {
      main: "#57dba4",
    },
    black: {
      main: "#000000",
    }
  },
  typography: {
    h2: {
      fontFamily: "Montserrat",
      fontWeight: 600,
      fontSize: "40px",
      lineHeight: "55px",
      color: "#5222D0",
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
      color: "#686868",
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
      color: "#686868",
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
          color: "#000",
          fontSize: "16px",
          lineHeight: "20px",
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
    // MuiSwitch: {
    //   styleOverrides: {
    //     root: {
    //       color: "#777FEB",
    //       "&$checked": {
    //         color: "#777FEB",
    //       },
    //       "&$checked + $track": {
    //         backgroundColor: "#777FEB",
    //       },
    //     },
    //     track: {
    //       backgroundColor: "#777FEB",
    //     },
    //   },
    // },
  },
});

export default lightTheme;
