import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardMedia,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import SsidChartIcon from "@mui/icons-material/SsidChart";
import AddIcon from "@mui/icons-material/Add";
import SchoolIcon from "@mui/icons-material/School";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";

const AboutMe = () => {
  // const [typingStatus, setTypingStatus] = useState("Initializing");
  return (
    <Grid
      container
      alignItems='center'
      justifyContent='center'
      id='about'
      sx={{ marginTop: "50px" }}
    >
      <Grid item xs={12} sm={8} flex>
        {/* <Typography variant="h3" style={{color: 'red'}}>Site/Projects Under Construction</Typography> */}
        <Typography variant='h2' component='h2' gutterBottom>
          Hi, I'm Patrick
        </Typography>
        <Typography variant='h4' component='h2' gutterBottom>
          Barcelona based, originally from the US
        </Typography>
        <Typography variant='h5'>
          I am currently working as a Customer Service and Sales Rep for the HP
          Online Store, but I'm hoping to transition to tech in a Junior
          Developer role. My current plan of action is as follows:
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <SsidChartIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary='Complete current projects' />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary='Create one more full-stack MERN app (TriCount Clone)' />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <SchoolIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary='CS50 or alternative Data Structures and Algorithms course ' />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <SavedSearchIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary='Begin applying for jobs' />
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={0} sm={3} sx={{ display: { xs: "none", sm: "block" } }}>
        <Card sx={{ boxShadow: "none" }}>
          <CardMedia
            component='img'
            height='60%'
            image='/assets/images/me.jpg'
            alt='green iguana'
            sx={{ borderRadius: "50%" }}
          />
        </Card>
      </Grid>
      <Grid item xs={8} justifyContent="center" sx={{textAlign:'center'}} >
        <Typography style={{color: 'purple'}}>If you come accross my profile before I begin applying for jobs, and know of any internship, apprenticeship, or other learning opportunities that could help me on my journey, please share!</Typography>
      </Grid>
    </Grid>
  );
};

export default AboutMe;

