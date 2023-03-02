import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ButtonSmall from "../Button/ButtonSmall";
import { Link } from "@mui/material";

import styles from "./styles";

const Project = ({ project }) => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.imageWrapper}>
        <Box component={"img"} src={project.image} sx={styles.image} />
      </Box>
      <Typography sx={styles.title} variant='body1'>
        {project.title}
      </Typography>
      <Box sx={styles.pillsWrapper}>
        {project.tags.map((tag, index) => (
          <Typography sx={styles.pill} key={index}>
            {tag}
          </Typography>
        ))}
      </Box>
      <Typography sx={styles.description} variant='body2'>
        {project.description}
      </Typography>
      <Box sx={styles.linksWrapper}>
        <Link
          href={project.link}
          target='_blank'
          rel='noopener'
          sx={{ textDecoration: "none" }}
        >
          <ButtonSmall>Live Site</ButtonSmall>
        </Link>
        <Link
          href={project.githubRepo}
          target='_blank'
          rel='noopener'
          sx={{ textDecoration: "none", marginLeft: "10px" }}
        >
          <ButtonSmall>Github</ButtonSmall>
        </Link>
      </Box>
    </Box>
  );
};

export default Project;
