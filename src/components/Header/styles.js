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
  }),
  rightWrapper: (theme, isDarkMode) => ({
    display: "flex",
    alignItems: "center",
    backgroundColor: isDarkMode ? theme.palette.background.main : theme.palette.background.main,
    // justifyContent: "flex-start"
  }),
  project: (theme) => ({
    fontSize: "16px",
    marginRight: "20px",
  }),
};

export default styles;
