// const styles = (theme) => ({
//   wrapper: {
//     border: "1px solid green",
//   },
// });

// import { makeStyles } from '@mui/styles';

const styles = {
  wrapper: (theme, isDarkMode) => ({
    height: "60px",

    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: "0 15px",
    [theme.breakpoints.down("sm")]: {
      padding: "0 5px",
    },
  }),
  test: (theme, isDarkMode) => ({
    color: isDarkMode ? theme.palette.black.main : theme.palette.purple.main,
  }),
  modeIcon: (theme, isDarkMode) => ({
    color: isDarkMode ? "white" : theme.palette.slateBlue.main,
    backgroundColor: isDarkMode
      ? theme.palette.cobalt.main
      : theme.palette.lightGreen.main,
    fontSize: "25px",
    height: "100%",
    width: "100%",
    marginTop: "8px",
    padding: "5px",
    borderRadius: "50%",
    // border: "1px solid purple",
  }),

  homeButton: (theme) => ({
    fontSize: "16px",
    marginLeft: "10px",
  }),
  rightWrapper: (theme, isDarkMode) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: isDarkMode
      ? theme.palette.background.main
      : theme.palette.background.main,
    // justifyContent: "flex-start"
    [theme.breakpoints.down("sm")]: {
      marginRight: "0px",
    },
  }),
  toggle: (theme) => ({
    marginRight: "5px",
    [theme.breakpoints.up("sm")]: {
      marginRight: "20px",
    },
  }),
  project: (theme) => ({
    fontSize: "16px",
    marginRight: "0px",
    [theme.breakpoints.up("sm")]: {
      marginRight: "20px",
    },
  }),
};

export default styles;
