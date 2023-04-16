import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ContactPage = () => {
  return (
    <Container>
      <Row className="my-5">
        <Col>
          <h2>Contact Us</h2>
          <p>
            Have a question or want to learn more about our services? Get in
            touch with us using the information below.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
