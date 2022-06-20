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
                to='component1'
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
              >
                Component 1
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                activeClass='active'
                to='component2'
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
              >
                Component 2
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                activeClass='active'
                to='component3'
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
              >
                Component 3
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                activeClass='active'
                to='component4'
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
              >
                Component 4
              </Link>
            </li>

          </ul>
        </div>
      </nav>
    );
  }
}
