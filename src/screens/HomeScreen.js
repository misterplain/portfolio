import React from "react";
import Hero from "../components/Hero/Hero";
import AboutMe from "../components/AboutMe/AboutMe";
import Projects from "../components/Projects/Projects";

const HomeScreen = ({isDarkMode}) => {
  return (
    <>
      <Hero isDarkMode={isDarkMode}/>
      <AboutMe isDarkMode={isDarkMode}/>
      <Projects isDarkMode={isDarkMode}/>
    </>
  );
};

export default HomeScreen;
