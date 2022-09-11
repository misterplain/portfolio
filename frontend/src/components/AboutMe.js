import React, {useState} from "react";
import { Row, Col, Container } from "react-bootstrap";
import { TypeAnimation } from 'react-type-animation';

const AboutMe = () => {
  const [typingStatus, setTypingStatus] = useState('Initializing');
  return (
    <div
      className='component-container'
      id='about'
      style={{ marginTop: "50px" }}
    >
      <h1>Hello, I'm Patrick</h1>
      <TypeAnimation
    // Same String at the start will only be typed once, initially
    sequence={[
    'We produce food for Mice',
    1000,
    'We produce food for Hamsters',
    1000,
    'We produce food for Guinea Pigs',
    1000,
    'We produce food for Chinchillas',
    1000,
    ]}
    speed={50} // Custom Speed from 1-99 - Default Speed: 40
    style={{ fontSize: '2em' }}
    wrapper="span" // Animation will be rendered as a <span>
    repeat={Infinity} // Repeat this Animation Sequence infinitely
  />

<TypeAnimation
sequence={[
      1500,
      () => {
        setTypingStatus('Typing...');
      },
      'Use callback-functions to trigger events',
      () => {
       setTypingStatus('Done Typing');
      },
      1000,
      () => {
        setTypingStatus('Deleting...');
      },
      '',
      () => {
        setTypingStatus('Done Deleting');
      },
     ]}
    speed={70}
    wrapper="div"
    repeat={Infinity}
  />
    </div>
  );
};

export default AboutMe;
