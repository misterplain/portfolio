const styles = {
  wrapper: (theme) => ({
    display: "flex",
    flexDirection: "column",
    padding: "15px 15px",
    boxShadow: "2px 2px 32px rgba(40, 38, 44, 0.15)",
    borderRadius: "10px",
  }),
  imageWrapper: (theme) => ({
    display: "flex",
    maxWidth: "100%",
  }),
  image: (theme) => ({
    width: "100%",
    height: "auto",
    borderRadius: "10px",
  }),
  title: (theme) => ({
    fontWeight: 600,
    textTransform: "uppercase",
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
  }),
  description: (theme) => ({
    marginTop: "10px",
  }),
  linksWrapper: (theme) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: "10px",
  }),
};

export default styles;
