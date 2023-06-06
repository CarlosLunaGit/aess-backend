import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import customSoftwareImg from '../assets/customSoftware.jpg';
import webdevImg from '../assets/webdev.jpg';
import mobiledevImg from '../assets/mobiledev.jpg';
import platformImg from '../assets/platform.jpg';


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
      <Row>
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={customSoftwareImg}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Custom Software Development</h3>
              <p>We provide tailored solutions for your unique business needs. Let us help you overcome your domain-specific challenges with our custom software solutions.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={webdevImg}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Web Development</h3>
              <p>We create engaging, user-friendly websites that effectively communicate your brand message. Stand out in the digital landscape with our web development service.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={mobiledevImg}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Mobile App Development</h3>
              <p>
              We create intuitive, feature-rich mobile applications for iOS, Android, or both. Enhance your customer engagement with our mobile app development service.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={platformImg}
              alt="Forth slide"
            />
            <Carousel.Caption>
              <h3>Platform Engineering</h3>
              <p>
              We design reliable, efficient platforms that can handle high volumes of data and traffic. Support your business growth with our platform engineering service.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Row>
    </Container>
  );
};

export default HomePage;
