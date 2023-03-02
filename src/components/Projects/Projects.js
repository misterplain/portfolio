import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "../../components/Button/Button";
import Project from "../../components/Project/Project";

import styles from "./styles";

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
];

const Projects = () => {
  return (
    <Box sx={styles.wrapper}>
      <Typography sx={styles.title} variant='body1' marginBottom>
        Projects
      </Typography>
      <Grid container spacing={2}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Project project={project} />
          </Grid>
        ))}
      </Grid>
      <Box sx={styles.buttonWrapper}>
        {" "}
        <Button sx={styles.button}>See All Projects</Button>
      </Box>
    </Box>
  );
};

export default Projects;
