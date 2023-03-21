import React, { useContext } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ButtonSmall from "../Button/ButtonSmall";
import { Link } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ThemeContext } from "../../App.js";

import styles from "./styles";

const Project = ({ project }) => {
  const theme = useTheme();
  const darkModeContext = useContext(ThemeContext);
  console.log("darkModeContext", darkModeContext);
  const isDarkMode = darkModeContext.isDarkMode;
  console.log("isDarkMode", isDarkMode);
  return (
    <Box sx={styles.wrapper(theme, isDarkMode)}>
      <Box sx={styles.imageWrapper(theme, isDarkMode)}>
        <Box component={"img"} src={project.image} sx={styles.image} />
      </Box>
      <Typography sx={styles.title(theme, isDarkMode)} variant='body1'>
        {project.title}
      </Typography>
      <Box sx={styles.pillsWrapper(theme, isDarkMode)}>
        {project.tags.map((tag, index) => (
          <Typography sx={styles.pill(theme, isDarkMode)} key={index}>
            {tag}
          </Typography>
        ))}
      </Box>
      <Typography sx={styles.description(theme, isDarkMode)} variant='body2'>
        {project.description}
      </Typography>
      <Box sx={styles.linksWrapper(theme, isDarkMode)}>
        <Link
          href={project.link}
          target='_blank'
          rel='noopener'
          sx={{ textDecoration: "none" }}
        >
          <ButtonSmall isDarkMode={isDarkMode}>Live Site</ButtonSmall>
        </Link>
        <Link
          href={project.githubRepo}
          target='_blank'
          rel='noopener'
          sx={{ textDecoration: "none", marginLeft: "10px" }}
        >
          <ButtonSmall isDarkMode={isDarkMode}>Github</ButtonSmall>
        </Link>
      </Box>
    </Box>
  );
};

export default Project;
