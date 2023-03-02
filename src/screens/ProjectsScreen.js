import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "../components/Button/Button";
import Project from "../components/Project/Project";
import { NavLink } from "react-router-dom";
import { Link } from "@mui/material";

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


const projects = [
  {
    title: "HP Notepad",
    description:
      "Loremipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image:
      "https://images.unsplash.com/photo-1677461404789-1faafbd934e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    alt: "HP Notepad",
    link: "https://www.google.com",
    githubRepo: "https://www.google.com",
    tags: ["React", "Node", "MongoDB"],
  },
  {
    title: "bcnMinimalista",
    description:
      "Loremipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image:
      "https://images.unsplash.com/photo-1677461404789-1faafbd934e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    alt: "bcnMinimalista",
    link: "https://www.google.com",
    githubRepo: "https://www.google.com",
    tags: ["React", "Node", "MongoDB"],
  },
  {
    title: "boilerPlate",
    description:
      "Loremipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image:
      "https://images.unsplash.com/photo-1677461404789-1faafbd934e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    alt: "bcnMinimalista",
    link: "https://www.google.com",
    githubRepo: "https://www.google.com",
    tags: ["React", "Node", "MongoDB"],
  },
];

const ProjectsScreen = () => {
  return (
    <Box sx={styles.wrapper}>
      <Typography sx={styles.title} variant='body1' marginBottom>
        Projects
      </Typography>
      <Grid container spacing={2}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Project project={project} />
          </Grid>
        ))}
      </Grid>

    </Box>
  );
};

export default ProjectsScreen;
