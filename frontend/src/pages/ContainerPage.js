import React from "react";
import NavbarComponent from "../components/NavBarComponent";
import DrawerAppBar from "../components/NavBarComponent";
import AboutMe from "../components/AboutMe";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import { Container, Row, Col } from "react-bootstrap";

const ContainerPage = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} sm={12} md={12}>
          <DrawerAppBar />
          <NavbarComponent />
          <AboutMe id='about' />
          <Portfolio id='portfolio' />
          <Contact id='contact' />
        </Col>
      </Row>
    </Container>
  );
};

export default ContainerPage;
