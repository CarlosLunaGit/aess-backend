import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const PortfolioPage = () => {
  return (
    <Container>
      <Row className="my-5">
        <Col>
          <h2>Our Portfolio</h2>
          <p>
            Check out some of the projects we've worked on in the past to get
            an idea of what we can do for you.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default PortfolioPage;
