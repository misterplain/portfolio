import React from "react";
import Navbar from "./NavBar/NavBar";
import AboutMe from "./AboutMe/AboutMe";
import Experience from "./Experience/Experience";
import Portfolio from "./Portfolio/Portfolio";
import Component4 from "./Contact/Contact";

const Container = () => {
  return (
    <div className='app__container'>
      <Navbar />
      <AboutMe id='about' />
      <Experience id='experience' />
      <Portfolio id='portfolio' />
      <Component4 id='component4' />
    </div>
  );
};

export default Container;
