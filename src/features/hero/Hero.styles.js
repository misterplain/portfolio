const styles = {
  wrapper: (theme) => ({
    display: "flex",
    flexDirection: "column-reverse",
    alignItems: "center",
    position: "relative",
    padding: "15px 15px",
    marginBottom: "30px",
    [theme.breakpoints.up("sm")]: {
      marginTop: "70px",
      display: "flex",
      flexDirection: "row",
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: "100px",
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: "110px",
      marginBottom: "70px",
    },
    [theme.breakpoints.up("xl")]: {
      marginTop: "120px",
    },
  }),
  textWrapper: (theme, isDarkMode) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      width: "60%",
      zIndex: 3,
    },
  }),
  aboutMe: (theme) => ({
    width: "90%",
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      textAlign: "left",
    },
  }),
  buttonsWrapper: (theme) => ({
    marginTop: "30px",
    display: "flex",
    justifyContent: "center",

    [theme.breakpoints.up("sm")]: {
      justifyContent: "flex-start",
    },
    [theme.breakpoints.up("md")]: {

    },

  }),



  imageWrapper: (theme) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "40%",
    maxHeight: "100%",
    [theme.breakpoints.up("sm")]: {
      maxHeight: "100%",
      zIndex: 1,
      position: "absolute",
      top: "50%",
      right: "-15%",

      transform: "translate(-50%, -50%)",
    },
  }),
  image: (theme) => ({
    width: "100%",
    height: "auto",
  }),
};

export default styles;
