import React from "react";
// import { Row, Col, Container, Card, Button } from "react-bootstrap";
import {
  Grid,
  Typography,
  Paper,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

const projects = [
  {
    id: 1,
    title: "bcnMinimalista",
    status: "Under Construction - task list in GitHub readme.md",
    description:
      "Full stack MERN app - A platform for Barcelona locals to engage with their community and learn about waste reduction. React-Bootstrap used for UI, Yup and Formik used for form validation, Nodemail used for contact forms, Redux used for state management, JWT user authentication",
    liveSite: "https://bcnminimalista.onrender.com/",
    githubRepo: "https://github.com/misterplain/bcnMin-v4",
  },
  {
    id: 2,
    title: "Portfolio",
    status: "Under Construction - task list in GitHub readme.md",
    description:
      "Full stack MERN app - Nodemailer and Node.js / Express used for Contact form",
    // liveSite: "https://patrickobrien.onrender.com/",
    githubRepo: "https://github.com/misterplain/portfolio",
  },
  {
    id: 3,
    title: "HP Notepad",
    status: "Under Construction - task list in GitHub readme.md",
    description:
      "A notepad tool for myself and my colleagues to dynamically create email templates on the fly",
    liveSite: "https://hpnotepad.onrender.com/",
    githubRepo: "https://github.com/misterplain/hpNotePad",
  },
  {
    id: 4,
    title: "Data Structures and Algorithms Notepad", 
    status: "Under Construction",
    description:
      "A notepad I'm keeping to track of my studies of data structures and algorithms",
    liveSite: "https://datastructuresandalgorithms.onrender.com",
    githubRepo: "https://github.com/misterplain/DataStructures-Algorithms",
  },
  {
    id: 5,
    title: "MERN-Boilerplate",
    status: "Under Construction - task list in GitHub readme.md",
    description:
      "A full stack MERN Boiler plate with built-in JWT authentication, Redux state management, Nodemailer contact functionality, and React-Bootstrap compatibility",
    liveSite: "https://mernboilerplate.onrender.com/",
    githubRepo: "https://github.com/misterplain/boilerPlate",
  },
];

const Projects = () => {
  return (
    <Grid
      container
      justifyContent='center'
      alignItems='center'
      id='projects'
      sx={{ marginTop: "50px" }}
    >
      <Grid item xs={12} sm={11} flex>
        <Typography variant='h2' component='h2'>
          Projects
        </Typography>
      </Grid>
      <Grid item xs={8} justifyContent='center' sx={{ textAlign: "center" }}>
        <Typography style={{ color: "purple" }}>
          The free tier of Render, where I'm hosting my servers, will shut a
          server down after 15 mintues of inactivity, so please give my project
          load times some wiggleroom until I find a faster alternative :)
        </Typography>
      </Grid>
      <Grid item xs={12} sm={9}>
        {projects.map((project) => (
          <Card key={project.id}>
            <CardContent>
              <Typography variant='h4' component='div'>
                {project.title}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                {project.status}
              </Typography>
              <Typography variant='body2'>{project.description}</Typography>
            </CardContent>
            <CardActions>
              {project.liveSite ? (
                <Button href={project.liveSite} target='__blank' size='small'>
                  Live Site
                </Button>
              ) : null}

              <Button href={project.githubRepo} target='__blank' size='small'>
                GitHub Repo
              </Button>
            </CardActions>
          </Card>
        ))}
      </Grid>
    </Grid>
  );
};

export default Projects;

//   <div className="component-container" id="portfolio">
//   <h1>Portfolio</h1>
//   <Card style={{ width: "100%", borderRadius: "50px" }}>
//   <Card.Body>
//     <Row className='justify-content-center'>
//       <Col xs={12} md={3} className='text-center'>
//         <Card.Img src='/assets/images/bcnMin.png' />
//       </Col>
//       <Col md={9}>
//         <Card.Title>barcelona minimalista v4</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up
//           the bulk of the card's content. Some quick example text to build
//           on the card title and make up the bulk of the card's content.
//           Some quick example text to build on the card title and make up
//           the bulk of the card's content. Some quick example text to build
//           on the card title and make up the bulk of the card's content.
//         </Card.Text>
//         <div
//           className='button-container'
//           style={{ display: "flex", justifyContent: "flex-end" }}
//         >
//           <Button variant='outline-success'>Live site</Button>
//           <Button
//             variant='outline-primary'
//             style={{ marginLeft: "10px" }}
//           >
//             Code
//           </Button>
//         </div>
//       </Col>
//     </Row>
//   </Card.Body>
// </Card>
// <Card style={{ width: "100%", borderRadius: "50px" }}>
//   <Card.Body>
//     <Row className='justify-content-center'>
//       <Col xs={12} md={3} className='text-center'>
//         <Card.Img src='/assets/images/bcnMin.png' />
//       </Col>
//       <Col md={9}>
//         <Card.Title>barcelona minimalista v4</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up
//           the bulk of the card's content. Some quick example text to build
//           on the card title and make up the bulk of the card's content.
//           Some quick example text to build on the card title and make up
//           the bulk of the card's content. Some quick example text to build
//           on the card title and make up the bulk of the card's content.
//         </Card.Text>
//         <div
//           className='button-container'
//           style={{ display: "flex", justifyContent: "flex-end" }}
//         >
//           <Button variant='outline-success'>Live site</Button>
//           <Button
//             variant='outline-primary'
//             style={{ marginLeft: "10px" }}
//           >
//             Code
//           </Button>
//         </div>
//       </Col>
//     </Row>
//   </Card.Body>
// </Card>
// <Card style={{ width: "100%", borderRadius: "50px" }}>
//   <Card.Body>
//     <Row className='justify-content-center'>
//       <Col xs={12} md={3} className='text-center'>
//         <Card.Img src='/assets/images/bcnMin.png' />
//       </Col>
//       <Col md={9}>
//         <Card.Title>barcelona minimalista v4</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up
//           the bulk of the card's content. Some quick example text to build
//           on the card title and make up the bulk of the card's content.
//           Some quick example text to build on the card title and make up
//           the bulk of the card's content. Some quick example text to build
//           on the card title and make up the bulk of the card's content.
//         </Card.Text>
//         <div
//           className='button-container'
//           style={{ display: "flex", justifyContent: "flex-end" }}
//         >
//           <Button variant='outline-success'>Live site</Button>
//           <Button
//             variant='outline-primary'
//             style={{ marginLeft: "10px" }}
//           >
//             Code
//           </Button>
//         </div>
//       </Col>
//     </Row>
//   </Card.Body>
// </Card>
// </div>
