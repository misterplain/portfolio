import React, { useContext } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "../../components/common/Button/Button.js";
import Project from "./Project.js";
import { NavLink } from "react-router-dom";
import { Link } from "@mui/material";
import { ThemeContext } from "../../App.js";
import projects from "../../data/projects.js";
import styles from "./Projects.styles.js";

// Projects showcase section for homepage
const Projects = () => {
  const darkModeContext = useContext(ThemeContext);
  const isDarkMode = darkModeContext.isDarkMode;

  return (
    <Box sx={styles.wrapper}>
      <Typography sx={styles.title} variant="body1" marginBottom>
        Projects
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Project project={projects[0]} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Project project={projects[1]} />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{ display: { xs: "none", md: "block" } }}
        >
          <Project project={projects[2]} />
        </Grid>
      </Grid>

      <Box sx={styles.buttonWrapper}>
        <Link
          component={NavLink}
          to="/projects"
          style={({ isActive }) =>
            isActive ? { color: "#777FEB" } : undefined
          }
          sx={{ textDecoration: "none" }}
        >
          <Button isDarkMode={isDarkMode} sx={styles.button}>
            See All Projects
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Projects;
