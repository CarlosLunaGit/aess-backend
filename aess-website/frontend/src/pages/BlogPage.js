import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const BlogPage = () => {
  return (
    <Container>
      <Row className="my-5">
        <Col>
          <h2>Our Blog</h2>
          <p>
            Stay up-to-date with the latest trends and insights in the tech
            industry by reading our blog.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogPage;
