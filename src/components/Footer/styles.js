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
  }),
  iconWrapper: (theme) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10px",
  }),
  icon: (theme) => ({
    fontSize: "40px",
    color: theme.palette.purple.main,
    backgroundColor: theme.palette.lightGreen.main,
    borderRadius: "50%",
    padding: "10px",
  }),
  linksWrapper:(theme) => ({
    display: "flex",
    flexDirection: "row",
    marginBottom: "20px",
  }),
    link: (theme) => ({
        margin: "0px 20px",
    })
};

export default styles;
