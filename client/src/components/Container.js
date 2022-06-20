import React from "react";
import Navbar from "./NavBar/NavBar";
import Component1 from "./Component1/Component1";
import Component2 from "./Component2/Component2";
import Component3 from "./Component3/Component3";
import Component4 from "./Component4/Component4";

const Container = () => {
  return (
    <div className='app__container'>
      <Navbar />
      <Component1 id="component1" />
      <Component2 id="component2" />
      <Component3 id="component3" />
      <Component4 id="component4" />
    </div>
  );
};

export default Container;
