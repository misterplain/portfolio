import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import { ThemeContext } from "../../App.js";

import styles from "./styles";

const pills = ["React", "Redux", "Node", "Express", "MongoDB", "Mongoose"];

const AboutMe = () => {
  const theme = useTheme();
  const darkModeContext = useContext(ThemeContext);

  const isDarkMode = darkModeContext.isDarkMode;

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.borderLeft(theme, isDarkMode)} />
      <Box sx={styles.wrapperText}>
        {" "}
        <Typography variant="body1" marginBottom sx={{ fontWeight: 700 }}>
          About Me
        </Typography>
        <Typography variant="body2" marginBottom>
          Hi, I'm Patrick, a Barcelona-based web developer originally from the
          US. Although I'm currently a Customer Service and Sales Rep for the HP
          Online Store, I'm eager to transition to a Junior Developer role in
          the tech industry.{" "}
        </Typography>
        <Typography variant="body2" marginBottom>
          To achieve this goal, I'm working on several exciting projects which
          can be found below. Additionally, I'm actively learning about data
          structures and algorithms, my progress in this can be found
          <Link
            href="https://github.com/misterplain/DataStructuresAndAlgorithms"
            target="_blank"
            rel="noopener"
            sx={{ textDecoration: "none", marginLeft: "5px" }}
          >
            <Button
              size="small"
              variant="outlined"
              color="secondary"
              sx={{ padding: "0px" }}
            >
              here
            </Button>
          </Link>
          .
        </Typography>
        <Typography variant="body2" marginBottom>
          In order to stay competitive and increase my preparedness for a junior
          web developer position, I'm dedicated to continuous learning.
        </Typography>
        <Typography
          variant="button"
          sx={styles.experienceText(theme, isDarkMode)}
          marginBottom
        >
          Experience includes but not limited to
        </Typography>
        <Box sx={styles.pillsWrapper}>
          {pills.map((pill) => (
            <Typography key={pill} sx={styles.pill}>
              {pill}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default AboutMe;
