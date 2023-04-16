import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const PortfolioPage = () => {
  const projects = [
    // Add your projects here as objects with 'title', 'description', and 'imageUrl' properties
  ];

  return (
    <Container>
      <Row className="my-5">
        <Col>
          <h2>Portfolio</h2>
          <p>Check out some of our successful projects:</p>
        </Col>
      </Row>
      <Row>
        {projects.map((project, index) => (
          <Col md={4} key={index}>
            <Card className="mb-4">
              <Card.Img variant="top" src={project.imageUrl} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button variant="primary">View Case Study</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PortfolioPage;
