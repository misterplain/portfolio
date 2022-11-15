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
    title: "Project Title",
    status: "Under Construction",
    description: "description of project",
    liveSite: "https://www.google.com",
    githubRepo: "https://www.google.com",
  },
  {
    id: 1,
    title: "Project Title 2",
    status: "Under Construction",
    description: "description of project 2",
    liveSite: "https://www.google.com",
    githubRepo: "https://www.google.com",
  },
];

const Projects = () => {
  return (
    <Grid container justifyContent='center' alignItems='center'>
      <Grid item xs={12} sm={11} flex style={{ border: "1px solid purple" }}>
        <Typography variant='h2' component='h2' gutterBottom>
          Projects
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
              <Button size='small'>Live Site</Button>
              <Button size='small'>GitHub Repo</Button>
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
