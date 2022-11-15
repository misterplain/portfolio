import React from "react";
import NavbarComponent from "../components/NavBarComponent";
import DrawerAppBar from "../components/NavBarComponent";
import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const ContainerPage = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <DrawerAppBar />
          {/* <NavbarComponent /> */}
          <AboutMe/>
          <Experience/>
          <Projects/>
          <Contact/>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContainerPage;
