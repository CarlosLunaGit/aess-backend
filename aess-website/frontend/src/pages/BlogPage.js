import React from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

const BlogPage = () => {
  const blogPosts = [
    // Add your blog posts here as objects with 'title', 'description', 'date', and 'imageUrl' properties
  ];

  return (
    <Container>
      <Row className="my-5">
        <Col>
          <h2>Blog</h2>
          <p>Stay up-to-date with our latest news and insights:</p>
        </Col>
      </Row>
      <Row>
        {blogPosts.map((post, index) => (
          <Col md={4} key={index}>
            <Card className="mb-4">
              <Card.Img variant="top" src={post.imageUrl} />
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.description}</Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">{post.date}</small>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="my-5">
        <Col>
          <h3>Subscribe to Our Newsletter</h3>
          <Form>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Button variant="primary" type="submit">Subscribe</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogPage;
