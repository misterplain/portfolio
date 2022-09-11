import React from "react";
import NavbarComponent from "../components/NavBarComponent";
import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import { Container, Row, Col } from "react-bootstrap";

const ContainerPage = () => {
  return (
    <Container>
      <Row>
        <Col xs={12}>
        <NavbarComponent />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <AboutMe id='about' />
          <Experience id='experience' />
          <Portfolio id='portfolio' />
          <Contact id='contact' />
        </Col>
      </Row>
    </Container>
  );
};

export default ContainerPage;
