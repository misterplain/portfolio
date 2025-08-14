import React from "react";
import Hero from "../features/hero/Hero";
import AboutMe from "../features/about-me/AboutMe";
import Projects from "../features/projects/Projects";

// Main homepage that combines all sections
const HomeScreen = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <Projects />
    </>
  );
};

export default HomeScreen;
