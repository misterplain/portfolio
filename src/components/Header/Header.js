import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "../../components/Button/Button";
//routing
import { NavLink } from "react-router-dom";
import { Link } from "@mui/material";

import styles from "./styles";

const Header = () => {
  return (
    <Box sx={styles.wrapper}>
      <Link
        component={NavLink}
        to='/'
        style={({ isActive }) => (isActive ? { color: "#777FEB" } : undefined)}
        sx={{ textDecoration: "none" }}
      >
        <Typography variant='body2' sx={styles.homeButton}>
          Home
        </Typography>
      </Link>
      <Box sx={styles.rightWrapper}>
        <Link
          component={NavLink}
          to='/projects'
          style={({ isActive }) =>
            isActive ? { color: "#777FEB" } : undefined
          }
          sx={{ textDecoration: "none" }}
        >
          <Typography variant='body2' sx={styles.project}>
            Projects
          </Typography>
        </Link>

        <Link
          component={NavLink}
          to='/contact'
          style={({ isActive }) =>
            isActive ? { color: "#777FEB" } : undefined
          }
          sx={{ textDecoration: "none" }}
        >
          <Button sx={styles.contact}>Contact</Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Header;
