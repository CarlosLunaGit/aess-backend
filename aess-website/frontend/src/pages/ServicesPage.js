import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ServicesPage = () => {
  return (
    <Container>
      <Row className="my-5">
        <Col>
          <h2>Our Services</h2>
          <p>
            We offer a wide range of services, including custom software
            development, web development, mobile app development, and more.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default ServicesPage;
