import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { NavLink } from "react-router-dom";
import { Link } from "@mui/material";

import { BsGithub } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { RiLinkedinFill } from "react-icons/ri";

import styles from "./styles";

const Footer = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.iconsWrapper}>
        <Link
          href='https://www.google.com'
          target='_blank'
          rel='noopener'
          sx={{ textDecoration: "none" }}
        >
          <Box sx={styles.iconWrapper}>
            <Box sx={styles.icon}>
              {" "}
              <BsGithub />
            </Box>

            <Typography sx={styles.iconText}>Github</Typography>
          </Box>
        </Link>
        <Link
          href='https://www.google.com'
          target='_blank'
          rel='noopener'
          sx={{ textDecoration: "none" }}
        >
          <Box sx={styles.iconWrapper}>
            <Box sx={styles.icon}>
              <CgMail />
            </Box>

            <Typography sx={styles.iconText}>GMail</Typography>
          </Box>
        </Link>
        <Link
          href='https://www.google.com'
          target='_blank'
          rel='noopener'
          sx={{ textDecoration: "none" }}
        >
        <Box sx={styles.iconWrapper}>
          <Box sx={styles.icon}>
            {" "}
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
          <Box sx={styles.link}>Projects</Box>
        </Link>
        <Link component={NavLink} to='/contact' sx={{ textDecoration: "none" }}>
          {" "}
          <Box sx={styles.link}>Contact</Box>
        </Link>
      </Box>
      <Box sx={styles.captionText}>Web Developer 2023</Box>
    </Box>
  );
};

export default Footer;

{
  /* <BsGithub />
<CgMail />
<RiLinkedinFill /> */
}
