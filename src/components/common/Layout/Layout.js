import Grid from "@mui/material/Grid";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

// Main layout wrapper that contains header, content, and footer
const Layout = ({ children, toggleDarkMode, isDarkMode }) => {
  return (
    <Grid
      container
      sx={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: isDarkMode ? "#10273d" : "white" }}
    >
      <Grid
        item
        xs={12}
        sm={11}
        md={10}
      >
        <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>
        <main>{children}</main>
        <Footer isDarkMode={isDarkMode} />
      </Grid>
    </Grid>
  );
};

export default Layout;
