import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const HomePage = () => {
  return (
    <Container>
      <Row className="my-5">
        <Col>
          <h2>Welcome to AESS</h2>
          <p>
            We specialize in the design, development, and innovation of custom
            software applications and technological solutions.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
