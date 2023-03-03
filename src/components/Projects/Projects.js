import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "../../components/Button/Button";
import Project from "../../components/Project/Project";
import { NavLink } from "react-router-dom";
import { Link } from "@mui/material";
import projects from "../../assets/projects";

import styles from "./styles";

const Projects = () => {
  return (
    <Box sx={styles.wrapper}>
      <Typography sx={styles.title} variant='body1' marginBottom>
        Projects
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
      
            {" "}
            <Project project={projects[0]} />
      
        </Grid>
        <Grid item xs={12} md={6}>
   
            <Project project={projects[1]} />
   
        </Grid>
      </Grid>
      <Box sx={styles.buttonWrapper}>
        <Link
          component={NavLink}
          to='/projects'
          style={({ isActive }) =>
            isActive ? { color: "#777FEB" } : undefined
          }
          sx={{ textDecoration: "none" }}
        >
          <Button sx={styles.button}>See All Projects</Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Projects;
