import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "../Button/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { NavLink } from "react-router-dom";
import { Link } from "@mui/material";
import { RxMoon } from "react-icons/rx";
import { BsSun } from "react-icons/bs";
import styles from "./styles";
import { useTheme } from "@mui/material/styles";

// Navigation header with dark mode toggle and main nav links
const Header = ({ toggleDarkMode, isDarkMode }) => {
  const theme = useTheme();

  const handleChange = () => {
    toggleDarkMode();
  };

  return (
    <Box sx={styles.wrapper(theme, isDarkMode)}>
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
      <Box sx={styles.rightWrapper(theme, isDarkMode)}>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={isDarkMode}
                onChange={handleChange}
                color='secondary'
              />
            }
            label={
              !isDarkMode ? (
                <RxMoon style={styles.modeIcon(theme, isDarkMode)} />
              ) : (
                <BsSun style={styles.modeIcon(theme, isDarkMode)} />
              )
            }
            sx={styles.toggle(theme, isDarkMode)}
          />
        </FormGroup>
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
          <Button sx={styles.contact} isDarkMode={isDarkMode}>Contact</Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Header;
