const styles = {
  wrapper: (theme) => ({
    display: "flex",
    flexDirection: "column",
    padding: "15px 15px",
  }),
  title: (theme) => ({
    fontWeight: 700,
  }),

  noticeWrapper: (theme) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: "50px",
  }),
  inProgressWrapper: (theme) => ({
    minHeight: "180px",
    borderRadius: "5px",
    backgroundImage:
      "linear-gradient(45deg, #000000 25%, #f5d105 25%, #f5d105 50%, #000000 50%, #000000 75%, #f5d105 75%, #f5d105 100%)",
    backgroundSize: "20.00px 20.00px",
    position: "relative",
    [theme.breakpoints.up("md")]: {
        minHeight: "140px",
    }
  }),
  inProgressItem: (theme, isDarkMode) => ({
    // minHeight: "100%",
    borderRadius: "5px",
    background: "white",
    position: "absolute",
    top: 5,
    left: 5,
    right: 5,
    bottom: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: isDarkMode ? theme.palette.darkBlue.main : "white",
  }),
  inProgressItemWrapper: (theme) => ({
    display: "inline-block",
  //  flexDirection: "row",
  //   justifyContent: "center",
  //   alignItems: "center",
    textAlign: "center",
    // backgroundColor: "red"
    
  }),
  bodyText: (theme) => ({
    // margin: "5px 10px",
    // display: "inline-block",
  }),
  activeServerWrapper: (theme) => ({
    minHeight: "180px",
    borderRadius: "5px",
    backgroundImage:
      "linear-gradient(45deg, #dfe3df 25%, #777feb 25%, #777feb 50%, #dfe3df 50%, #dfe3df 75%, #777feb 75%, #777feb 100%)",
    backgroundSize: "20.00px 20.00px",
    position: "relative",
    [theme.breakpoints.up("md")]: {
        minHeight: "140px",
    }
  }),
  activeServerItem: (theme, isDarkMode) => ({
    // minHeight: "100%",
    borderRadius: "5px",
    background: "white",
    position: "absolute",
    top: 5,
    left: 5,
    right: 5,
    bottom: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: isDarkMode ? theme.palette.darkBlue.main : "white",
  }),
  activeServerItemWrapper: (theme) => ({
    // borderRadius: "5px",
    // background: "white",
    // position: "absolute",
    // top: 5,
    // left: 5,
    // right: 5,
    // bottom: 5,
    display: "flex",
    flexDirection: "column",
     justifyContent: "center",
     alignItems: "center",
        textAlign: "center",
  }),
  buttonWrapper: (theme) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "20px",
  }),
};

export default styles;
