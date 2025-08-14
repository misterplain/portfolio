const styles = {
  wrapper: (theme, isDarkMode) => ({
    display: "flex",
    flexDirection: "column",
    padding: "15px 15px",
    boxShadow: isDarkMode
      ? "2px 2px 32px rgba(79,176,148, 0.25)"
      : "2px 2px 32px rgba(40, 38, 44, 0.25)",
    borderRadius: "10px",
    height: "100%",
    position: "relative",
    backgroundColor: isDarkMode ? theme.palette.darkBlue.secondary : "white",
  }),
  imageWrapper: (theme) => ({
    display: "flex",
    maxWidth: "100%",
  }),
  image: (theme) => ({
    width: "100%",
    height: "auto",
    borderRadius: "10px",
    [theme.breakpoints.up("xs")]: {
      minHeight: "235px",
    },
    [theme.breakpoints.up("md")]: {
      minHeight: "185px",
    },
    // [theme.breakpoints.up("md")]: {
    //   minHeight: "500px",
    // },
    // [theme.breakpoints.up("sm")]: {
    //   minHeight: "140px",
    // },
  }),
  title: (theme) => ({
    fontWeight: 600,
    textTransform: "uppercase",
    margin: "10px",
  }),
  pillsWrapper: (theme) => ({
    display: "flex",
    flexWrap: "wrap",
  }),
  pill: (theme) => ({
    border: `1px solid ${theme.palette.purple.main}`,
    padding: "2px 6px",
    margin: "5px",
    borderRadius: "10px",
    fontSize: "13px",
  }),
  description: (theme) => ({
    marginTop: "10px",
    marginBottom: "40px",
  }),
  linksWrapper: (theme) => ({
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    bottom: 10,
    right: 10,
    justifyContent: "flex-end",
    marginTop: "10px",
  }),
};

export default styles;
