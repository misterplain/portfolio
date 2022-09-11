import React from "react";
import { Row, Col, Container, Card, Button } from "react-bootstrap";


const Portfolio = () => {
    return (
      <div className="component-container" id="portfolio">
        <h1>Portfolio</h1>
        <Card style={{ width: "100%", borderRadius: "50px" }}>
        <Card.Body>
          <Row className='justify-content-center'>
            <Col xs={12} md={3} className='text-center'>
              <Card.Img src='/assets/images/bcnMin.png' />
            </Col>
            <Col md={9}>
              <Card.Title>barcelona minimalista v4</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Some quick example text to build
                on the card title and make up the bulk of the card's content.
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Some quick example text to build
                on the card title and make up the bulk of the card's content.
              </Card.Text>
              <div
                className='button-container'
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                <Button variant='outline-success'>Live site</Button>
                <Button
                  variant='outline-primary'
                  style={{ marginLeft: "10px" }}
                >
                  Code
                </Button>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Card style={{ width: "100%", borderRadius: "50px" }}>
        <Card.Body>
          <Row className='justify-content-center'>
            <Col xs={12} md={3} className='text-center'>
              <Card.Img src='/assets/images/bcnMin.png' />
            </Col>
            <Col md={9}>
              <Card.Title>barcelona minimalista v4</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Some quick example text to build
                on the card title and make up the bulk of the card's content.
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Some quick example text to build
                on the card title and make up the bulk of the card's content.
              </Card.Text>
              <div
                className='button-container'
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                <Button variant='outline-success'>Live site</Button>
                <Button
                  variant='outline-primary'
                  style={{ marginLeft: "10px" }}
                >
                  Code
                </Button>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Card style={{ width: "100%", borderRadius: "50px" }}>
        <Card.Body>
          <Row className='justify-content-center'>
            <Col xs={12} md={3} className='text-center'>
              <Card.Img src='/assets/images/bcnMin.png' />
            </Col>
            <Col md={9}>
              <Card.Title>barcelona minimalista v4</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Some quick example text to build
                on the card title and make up the bulk of the card's content.
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Some quick example text to build
                on the card title and make up the bulk of the card's content.
              </Card.Text>
              <div
                className='button-container'
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                <Button variant='outline-success'>Live site</Button>
                <Button
                  variant='outline-primary'
                  style={{ marginLeft: "10px" }}
                >
                  Code
                </Button>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      </div>
    );
  };
  
  export default Portfolio;
  