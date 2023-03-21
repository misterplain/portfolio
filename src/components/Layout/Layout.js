import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ComponentsTest from "../../componentstest"

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
        sx={{
          // border: "1px solid blue",
          
        }}
      >
        <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>
        <main>{children}</main>
        <Footer isDarkMode={isDarkMode} />
        {/* <ComponentsTest /> */}
      </Grid>
    </Grid>
  );
};

export default Layout;
