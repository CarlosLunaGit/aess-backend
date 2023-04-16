import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutPage = () => {
  return (
    <Container>
      <Row className="my-5">
        <Col>
          <h2>About Us</h2>
          <p>
            We are a team of experienced developers dedicated to providing
            high-quality custom software solutions to businesses of all sizes.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;
