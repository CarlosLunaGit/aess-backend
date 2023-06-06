import React from "react";
import axios from 'axios';
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const handleSubmit = async (event) => {
  event.preventDefault();

  const name = event.target.formName.value;
  const email = event.target.formEmail.value;
  const message = event.target.formMessage.value;

  try {
    await axios.post('/send-email', { name, email, message });
    alert('Email sent successfully');
  } catch (error) {
    alert('Error sending email');
  }
};

const ContactPage = () => {
  return (
    <Container>
      <Row className="my-5">
        <Col>
          <h2>Contact Us</h2>
          <p>We'd love to hear from you! Get in touch using the form below:</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Your Name" />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Your Email" />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Your Message" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>
      <Row className="my-5">
        <Col>
          <h3>Other Ways to Reach Us</h3>
          <p>
            Email: aess.technologies@gmail.com <br />
            Phone: +46 (072) 208 37 56 <br />

          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Our Location</h3>
          <p>
            AESS Headquarters <br />
            Gamlestads Brygga 17, <br />
            415 12 Göteborg Sweden <br />
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d532.5861848436972!2d12.006003769703737!3d57.727587514444004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff4622d06bab5%3A0x18d255c4cfaf9169!2sGamlestads%20Brygga%2017%2C%20415%2012%20G%C3%B6teborg!5e0!3m2!1sen!2sse!4v1686072737149!5m2!1sen!2sse"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
