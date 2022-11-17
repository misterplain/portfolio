import React from "react";
import {  Grid, Typography, Card, CardMedia } from "@mui/material";

const AboutMe = () => {
  // const [typingStatus, setTypingStatus] = useState("Initializing");
  return (
    <Grid container alignItems="center" justifyContent="center" id="about" sx={{marginTop: '50px'}}>
      <Grid item xs={12} sm={8} flex >
        <Typography variant="h3" style={{color: 'red'}}>Site/Projects Under Construction</Typography>
        <Typography variant='h2' component='h2' gutterBottom>
          Hi, I'm Patrick
        </Typography>
        <Typography variant='h5'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting.
        </Typography>
      </Grid>
      <Grid item xs={0} sm={3} sx={{display: {xs:'none', sm: 'block'}}}>
        <Card sx={{boxShadow: 'none'}}>
          <CardMedia
            component='img'
            height='60%'
            image='/assets/images/me.jpg'
            alt='green iguana'
            sx={{borderRadius: '50%'}}
          />
        </Card>
      </Grid>
    </Grid>
  );
};

export default AboutMe;

{
  /* <div
className='component-container'
id='about'
style={{ marginTop: "20px" }}
>
<Row>
  <Col xs={12} md={9}>
    <h1>Hello, I'm Patrick,</h1>
    <TypeAnimation
      // Same String at the start will only be typed once, initially
      sequence={[
        "I am from the US, based in Barcelona, Spain.",
        1000,
        "I am a recent Web Dev Bootcamp graduate.",
        1000,
        "I am seeking a junior developer or internship position.",
        1000,
        "I am eager to learn and grow as a developer.",
        1000,
      ]}
      speed={50} // Custom Speed from 1-99 - Default Speed: 40
      style={{ fontSize: "2em" }}
      wrapper='span' // Animation will be rendered as a <span>
      repeat={Infinity} // Repeat this Animation Sequence infinitely
    />
  </Col>
  <Col xs={12} md={3}>
    <Card.Img
      src='/assets/images/me.jpg'
      style={{ marginRight: "10px", borderRadius: "100px" }}
    />
  </Col>
</Row>
</div> */
}
