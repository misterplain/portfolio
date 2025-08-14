import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "../../components/common/Button/Button";
import { NavLink } from "react-router-dom";
import { Link } from "@mui/material";
import styles from "./Hero.styles";
import { ThemeContext } from "../../App.js";
import { useTheme } from "@mui/material/styles";

// Main hero section with intro text and action buttons
const Hero = () => {
  const theme = useTheme();
  const darkModeContext = useContext(ThemeContext);
  const isDarkMode = darkModeContext.isDarkMode;

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.textWrapper}>
        <Typography variant="h2" marginBottom>
          Patrick O'Brien
        </Typography>
        <Typography variant="body2" marginBottom>
          Developer
        </Typography>
        <Typography variant="body1" sx={styles.aboutMe} marginBottom>
          Hi, I'm Patrick, a Barcelona-based Web Developer and I'm passionate
          about creating engaging, user-friendly applications.
        </Typography>
        <Box sx={styles.buttonsWrapper}>
          <Link
            component={NavLink}
            to="/contact"
            style={({ isActive }) =>
              isActive ? { color: "#777FEB" } : undefined
            }
            sx={{ textDecoration: "none" }}
          >
            <Button isDarkMode={isDarkMode}>Contact Me</Button>
          </Link>
          <Button
            href="./assets/OBrienPatrickCV.pdf"
            isDarkMode={isDarkMode}
            download
          >
            Download CV
          </Button>
        </Box>
      </Box>
      <Box sx={styles.imageWrapper}>
        <Box
          component="img"
          src={theme.images.computer}
          sx={styles.image}
          alt="computer"
        />
      </Box>
    </Box>
  );
};

export default Hero;
