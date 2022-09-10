import React from "react";
import Navbar from "../components/NavBar";
import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";
import Portfolio from "../components/Portfolio";
import Component4 from "../components/Contact";

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
