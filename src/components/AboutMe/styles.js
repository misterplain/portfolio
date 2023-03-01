const styles = {
    wrapper: (theme) => ({
      display: "flex",
      flexDirection: "row",
      padding: "15px 15px",
        marginBottom: "50px",
    }),
    borderLeft: (theme) => ({
        background: theme.palette.purple.main,
        borderRadius: "25px",
        minWidth: "0.5%",
        minHeight: "80%",
        marginTop: "5%",
        marginBottom: "5%",
        top: "50%",
    }),
    wrapperText: (theme) => ({
        width: "99%",
        marginLeft: "20px",
    }),
    pillsWrapper: (theme) => ({
        display: "flex",
        flexWrap: "wrap",
    }),
    pill: (theme) => ({
        border: `1px solid ${theme.palette.purple.main}`,
        padding: "5px 10px",
        margin: "5px",
        borderRadius: "10px",
    })

  };
  
  export default styles;