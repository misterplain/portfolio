import React, { Component, useState, useEffect } from "react";

import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  // const navbarStyles = {
  //   position: 'fixed',
  //   height: '60px',
  //   width: '100%',
  //   backgroundColor: 'grey',
  //   textAlign: 'center'
  // }

  return (
    <nav className='nav' id='navbar'>
      <div className='nav-content'>
        <ul className='nav-items'>
          <li className='nav-item'>
            <Link
              activeClass='active'
              to='about'
              spy={true}
              smooth={true}
              offset={-120}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className='nav-item'>
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
          </li>
          <li className='nav-item'>
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
          </li>
          <li className='nav-item'>
            <Link
              activeClass='active'
              to='contact'
              spy={true}
              smooth={true}
              offset={-120}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar
