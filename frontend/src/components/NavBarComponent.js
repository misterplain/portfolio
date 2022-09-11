import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link, animateScroll as scroll } from "react-scroll";
import { Row, Col } from "react-bootstrap";

const NavbarComponent = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const navbarStyles = {
    position: "fixed",
    height: "50px",
    width: "100%",
    backgroundColor: "rgba(248, 248, 7, 0.129);",
    textAlign: "center",
    transition: "top 0.6s",
    fontSize: "1.5em",
  };

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 700) ||
        currentScrollPos < 10
    );
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <Navbar
      id='navbar'
      style={{ ...navbarStyles, top: visible ? "0" : "-60px" }}
    >
      <Container
        style={{
          display: "flex",
          marginLeft: "0px",
          textAlign: "center",
          justifyContent: "space-around",
        }}
      >
        <Nav>
          <Nav.Link>
            <Link
              activeClass='active'
              to='about'
              spy={true}
              smooth={true}
              offset={-120}
              duration={500}
              style={{ textDecoration: "none", color: "black" }}
            >
              About
            </Link>
          </Nav.Link>

          <Nav.Link>
            <Link
              activeClass='active'
              to='experience'
              spy={true}
              smooth={true}
              offset={-120}
              duration={500}
            >
              Experience
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              activeClass='active'
              to='portfolio'
              spy={true}
              smooth={true}
              offset={-120}
              duration={500}
            >
              Portfolio
            </Link>
          </Nav.Link>

          <Nav.Link>
            <Link
              activeClass='active'
              to='contact'
              spy={true}
              smooth={true}
              offset={-120}
              duration={500}
            >
              Contact
            </Link>{" "}
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
