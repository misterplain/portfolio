import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "../components/Button/Button";
import Project from "../components/Project/Project";
import { NavLink } from "react-router-dom";
import { Link } from "@mui/material";
import projects from "../assets/projects";
const styles = {
  wrapper: (theme) => ({
      display: "flex",
      flexDirection: "column",
      padding: "15px 15px",
  }),
  title: (theme) => ({
      fontWeight: 700,
  }),
  buttonWrapper: (theme) => ({
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      marginTop: "20px",
  })
}


const ProjectsScreen = ({isDarkTheme}) => {
  return (
    <Box sx={styles.wrapper}>
      <Typography sx={styles.title} variant='body1' marginBottom>
        Projects
      </Typography>
      <Grid container spacing={2}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Project project={project} isDarkTheme={isDarkTheme} />
          </Grid>
        ))}
      </Grid>

    </Box>
  );
};

export default ProjectsScreen;
