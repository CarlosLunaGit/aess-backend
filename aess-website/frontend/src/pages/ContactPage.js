import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

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
          <Form>
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
Email: info@aess.com <br />
Phone: +1 (123) 456-7890 <br />
Follow us on <a href="https://twitter.com/aess">Twitter</a>, <a href="https://linkedin.com/company/aess">LinkedIn</a>, and <a href="https://facebook.com/aess">Facebook</a>.
</p>
</Col>
</Row>
<Row>
<Col>
<h3>Our Location</h3>
<p>
AESS Headquarters <br />
123 Main St, Suite 456 <br />
City, State, Country <br />
Postal Code
</p>
</Col>
</Row>
</Container>
);
};

export default ContactPage;
