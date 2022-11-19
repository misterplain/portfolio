// import React, { useState, useEffect } from "react";
// import { Container, Navbar, Nav } from "react-bootstrap";
// import { Link, animateScroll as scroll } from "react-scroll";
// import { Row, Col } from "react-bootstrap";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "font-awesome/css/font-awesome.css";
// import "bootstrap-social/bootstrap-social.css";
import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-scroll";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#80cbc4",
    },
    secondary: {
      main: "#689f38",
    },
  },
});

const drawerWidth = 240;
// const navItems = ["about", "experience", "projects", "contact"];
const navItems = [
  { id: 1, name: "about", link: "about" },
  // { id: 2, name: "experience", link: "experience" },
  { id: 3, name: "projects", link: "projects" },
  { id: 4, name: "contact", link: "contact" },
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Divider />
      <List>
        {navItems.map((item) => (
          <Link
            key={item.id}
            // activeClass='active'
            to={item.link}
            spy={true}
            smooth={true}
            duration={500}
            onClick={handleDrawerToggle}
          >
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component='nav' color='secondary'>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            PO
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item.id} sx={{ color: "white", textDecoration: " none" }}>
                <Link
                  // activeClass='active'
                  style={{ color: "white", textDecoration: " none" }}
                  to={item.link}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  
                >
                  <Typography sx={{ color: "white", textDecoration: " none" }}> {item.name}</Typography>
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component='nav'>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component='main' sx={{ p: 0 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;

// const NavbarComponent = (props) => {

//   return (
//     <>
//       <Navbar bg='light' expand='sm' className='nav' >
//         <Container className='nav-container'>
//           <Navbar.Brand href='#home'>p.o.</Navbar.Brand>
//           <Nav className='nav-items'>
//             <Nav.Link className='nav-item' href='#home'>
//               about
//             </Nav.Link>
//             <Nav.Link className='nav-item' href='#project'>
//               projects
//             </Nav.Link>
//             <Nav.Link className='nav-item' href='#contact'>
//               contact
//             </Nav.Link>
//           </Nav>
//           <i className='fa fa-envelope'></i>
//         </Container>
//       </Navbar> */}

//       {/* materiaul ui
//     </>
//   );
// };

// export default NavbarComponent;
