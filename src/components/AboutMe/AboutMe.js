import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import { ThemeContext } from "../../App.js";

import styles from "./styles";

const pills = ["HTML", "CSS", "Javascript", "React", "Redux", "Node.js", "Express", "MongoDB", "Mongoose"];

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
          I'm a driven developer with a solid foundation in the MERN stack. My
          coding journey began at NuCamp Full Stack Mobile and Web Development,
          where I mastered HTML, CSS, JavaScript, React, React Native, Node.js,
          Mongoose, and MongoDB.
        </Typography>
        <Typography variant="body2" marginBottom>
          To stay competitive and enhance my preparedness for a Web Developer
          position, I'm actively studying data structures and algorithms, along
          with fundamental JavaScript and JavaScript frameworks concepts.
        </Typography>
        <Typography variant="body2" marginBottom>
          I thrive on tackling real-world challenges. My most recent project is
          an e-commerce platform with full admin capabilities. I've brought my
          skills to life with projects like the HP Notepad, a dynamic template
          generator that streamlines email communication and boosts team
          productivity.
        </Typography>
        <Typography variant="body2" marginBottom>
          As a natural problem solver and an effective communicator, I excel in
          fast-paced, collaborative environments. My goal is to make a
          significant impact as a Web Developer, leveraging my skills and
          continuing my programming journey.
        </Typography>
        {/* , my progress in this can be found
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
          . */}
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
