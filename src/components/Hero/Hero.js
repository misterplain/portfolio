import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "../../components/Button/Button";
import { NavLink } from "react-router-dom";
import { Link } from "@mui/material";

import styles from "./styles";
import computer from "../../assets/computer.jpg";
import dev_computer from "../../assets/dev_computer.png";
import blankScreen from "../../assets/blankScreen.jpg";
import { ThemeContext } from "../../App.js";

const Hero = () => {
  const darkModeContext = useContext(ThemeContext);
  const isDarkMode = darkModeContext.isDarkMode;
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.textWrapper}>
        <Typography variant='h2' marginBottom>
          Patrick O'Brien
        </Typography>{" "}
        <Typography variant='body2' marginBottom>
          Developer
        </Typography>
        <Typography variant='body1' sx={styles.aboutMe} marginBottom>
          Hi, I'm Patrick, a Barcelona-based web developer and I'm passionate
          about creating engaging, user-friendly applications.
        </Typography>
        <Link
          component={NavLink}
          to='/contact'
          style={({ isActive }) =>
            isActive ? { color: "#777FEB" } : undefined
          }
          sx={{ textDecoration: "none" }}
        >
          <Button isDarkMode={isDarkMode} sx={styles.contact}>
            Contact Me
          </Button>
        </Link>
      </Box>
      <Box sx={styles.imageWrapper}>
        <Box
          component='img'
          src={isDarkMode ? dev_computer : computer}
          sx={styles.image}
          alt='computer'
        />
      </Box>
    </Box>
  );
};

export default Hero;
