import React, { Component } from "react";
import './NavBar.css';
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className='nav' id='navbar'>
        <div className='nav-content'>
          {/* <img
            src={logo}
            className='nav-logo'
            alt='Logo'
            onClick={this.scrollToTop}
          /> */}
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
  }
}
