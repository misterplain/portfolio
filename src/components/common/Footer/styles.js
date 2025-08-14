const styles = {
  wrapper: (theme) => ({
    display: "flex",
    flexDirection: "column",
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "center",
    alignItems: "center",
    width: "60%",
  }),
  iconsWrapper: (theme) => ({
    display: "flex",
    width: "70%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    margin: "20px 0px",
    // border: "1px solid white",
  }),
  iconWrapper: (theme) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: theme.palette.lightGreen.main,
    marginTop: "10px",
    // border: "1px solid white",
  }),
  icon: (theme, isDarkMode) => ({
    fontSize: "45px",
    // maxWidth: "80px",
    // borderRadius: "90px",
    padding: "5px",
    color: isDarkMode
      ? theme.palette.slateBlue.main
      : theme.palette.purple.main,
    // border: "1px solid white",
  }),
  linksWrapper: (theme) => ({
    display: "flex",
    flexDirection: "row",
    marginBottom: "20px",
  }),
  link: (theme, isDarkMode) => ({
    margin: "5px 20px",
    color: isDarkMode
      ? theme.palette.lightGreen.main
      : theme.palette.purple.main,
  }),
};

export default styles;
