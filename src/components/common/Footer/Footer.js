import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import { Link } from "@mui/material";
import { BsGithub } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { RiLinkedinFill } from "react-icons/ri";
import styles from "./styles";

// Footer with social links and navigation
const Footer = ({isDarkMode}) => {
  const theme = useTheme();
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.iconsWrapper}>
        <Link
          href='https://github.com/misterplain'
          target='_blank'
          rel='noopener'
          sx={{ textDecoration: "none" }}
        >
          <Box sx={styles.iconWrapper}>
            <Box sx={styles.icon(theme, isDarkMode)}>
              <BsGithub />
            </Box>
            <Typography sx={styles.iconText}>Github</Typography>
          </Box>
        </Link>
        <Link
          href='mailto:obrienp2321@gmail.com'
          target='_blank'
          rel='noopener'
          sx={{ textDecoration: "none" }}
        >
          <Box sx={styles.iconWrapper}>
            <Box sx={styles.icon(theme, isDarkMode)}>
              <CgMail />
            </Box>
            <Typography sx={styles.iconText}>GMail</Typography>
          </Box>
        </Link>
        <Link
          href='https://www.linkedin.com/in/patrick-o-brien-6743b044/'
          target='_blank'
          rel='noopener'
          sx={{ textDecoration: "none" }}
        >
        <Box sx={styles.iconWrapper}>
          <Box sx={styles.icon(theme, isDarkMode)}>
            <RiLinkedinFill />
          </Box>
          <Typography sx={styles.iconText}>LinkedIn</Typography>
        </Box></Link>
      </Box>
      <Box sx={styles.linksWrapper}>
        <Link
          component={NavLink}
          to='/projects'
          sx={{ textDecoration: "none" }}
        >
          <Box sx={styles.link(theme, isDarkMode)}>Projects</Box>
        </Link>
        <Link component={NavLink} to='/contact' sx={{ textDecoration: "none" }}>
          <Box sx={styles.link(theme, isDarkMode)}>Contact</Box>
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
