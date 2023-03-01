// const styles = (theme) => ({
//   wrapper: {
//     border: "1px solid green",
//   },
// });

const styles = {
  wrapper: (theme) => ({
    height: "60px",
    // border: "1px solid green",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  }),
  homeButton: (theme) => ({
    fontSize: "16px",
  }),
  rightWrapper: (theme) => ({
    display: "flex",
    alignItems: "center"
  }),
  project: (theme) => ({
    fontSize: "16px",
    marginRight: "20px",
  })
};

export default styles;
