import React, { useState } from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";

const AboutMe = () => {
  const [typingStatus, setTypingStatus] = useState("Initializing");
  return (
    <div
      className='component-container'
      id='about'
      style={{ marginTop: "50px" }}
    >
      <Row>
        <Col xs={12} md={9}>
          <h1>Hello, I'm Patrick,</h1>
          <TypeAnimation
            // Same String at the start will only be typed once, initially
            sequence={[
              "I am from the US, based in Barcelona, Spain.",
              1000,
              "I am a recent Web Dev Bootcamp graduate.",
              1000,
              "I am seeking a junior developer or internship position.",
              1000,
              "I am eager to learn and grow as a developer.",
              1000,
            ]}
            speed={50} // Custom Speed from 1-99 - Default Speed: 40
            style={{ fontSize: "2em" }}
            wrapper='span' // Animation will be rendered as a <span>
            repeat={Infinity} // Repeat this Animation Sequence infinitely
          />
        </Col>
        <Col xs={12} md={3}>
          <Card.Img
            src='/assets/images/me.jpg'
            style={{ marginRight: "10px", borderRadius: "100px" }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default AboutMe;
