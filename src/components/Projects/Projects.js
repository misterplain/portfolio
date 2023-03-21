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

const Projects = ({isDarkMode}) => {
  return (
    <Box sx={styles.wrapper}>
      <Typography sx={styles.title} variant='body1' marginBottom>
        Projects
      </Typography>
      <Grid container sx={styles.noticeWrapper}>
        <Grid item xs={8} md={6} sx={styles.inProgressWrapper}>
          <Box sx={styles.inProgressItem}>
            <Box sx={styles.inProgressItemWrapper}>
              {" "}
              <Typography variant='body1' sx={styles.bodyText}>
                My first paid freelance project is to make an ECommerce site for
                my clients stained glass company. The site is 
                <Link
                  href='https://brackets-kz4n.onrender.com/'
                  target='_blank'
                  rel='noopener'
                  style={{ textDecoration: "none", color: "#777FEB" }}
                >
                  {" "}deployed{" "}
                </Link>
                with the ongoing task list in
                <Link
                  href='https://github.com/misterplain/brackets'
                  target='_blank'
                  rel='noopener'
                  style={{ textDecoration: "none", color: "#777FEB" }}
                >
                  {" "}README.md{" "}
                </Link>
                for easy collaboration
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={8} md={6} sx={styles.activeServerWrapper}>
          <Box sx={styles.activeServerItem}>
            {" "}
            <Box sx={styles.activeServerItemWrapper}>
              <Typography sx={styles.bodyText}>
                To get around the usage limits of the free-tier of render.com,
                where I am hosting these apps, I've created one active backend
                server for all projects which can be found                 <Link
                  href='https://github.com/misterplain/activeServer'
                  target='_blank'
                  rel='noopener'
                  style={{ textDecoration: "none", color: "#777FEB" }}
                >here</Link>
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
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
          <Button isDarkMode={isDarkMode} sx={styles.button}>See All Projects</Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Projects;
