import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup, faRankingStar, faArrowTrendUp, faBrain } from "@fortawesome/free-solid-svg-icons";

const AboutPage = () => {
  return (
    <Container>
      <Row className="my-5">
        <Col>
          <h2>About AESS</h2>
          <p>
            Advanced Engineering for Software Solutions (AESS) is a software
            development and technology solutions company specializing in custom
            software applications and digital transformation. Founded in
            Gothenburg, Sweden, our mission is to provide comprehensive and
            high-quality software solutions that enable our clients to improve
            their efficiency, profitability, and competitiveness in the market.
          </p>
          <p>
            Our core values include responsibility, respect, integrity, passion,
            and the spirit of inquiry. These values guide our relationships with
            clients and partners, helping us build a reputation for excellence
            in our field.
          </p>
        </Col>
      </Row>
      <Row xs={1} md={2} className="g-4">
        <Col key={0}>
          <Card className="text-center">
            <Card.Header>
              <FontAwesomeIcon icon={faPeopleGroup} beat size="2xl" />
            </Card.Header>

            <Card.Body>
              <Card.Title>Our Team</Card.Title>
              <Card.Text>
                AESS boasts a highly skilled team of engineers, designers,
                developers, and consultants. With diverse backgrounds and
                experience across various development platforms, our team is
                well-equipped to solve complex problems and adapt to the unique
                needs of each client.
              </Card.Text>
              <Button variant="primary">See profiles</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col key={1}>
          <Card className="text-center">
            <Card.Header>
              <FontAwesomeIcon icon={faRankingStar} beat size="2xl"  />
            </Card.Header>
            <Card.Body>
              <Card.Title>Competition and Market Position</Card.Title>
              <Card.Text>
                While we face competition from established companies such as
                IBM, Accenture, TCS, Infosys, and Cognizant, AESS differentiates
                itself through a focus on personalized solutions, commitment to
                quality, constant innovation, and dedication to work-life
                balance for our employees.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col key={2}>
          <Card className="text-center">
            <Card.Header>
            <FontAwesomeIcon icon={faArrowTrendUp} beat size="2xl"   />
            </Card.Header>
            <Card.Body>
              <Card.Title>Industry Trends and Opportunities</Card.Title>
              <Card.Text>
                At AESS, we stay ahead of key industry trends such as artificial
                intelligence, machine learning, the Internet of Things (IoT),
                cybersecurity, mobile application development, and Software as a
                Service (SaaS). By incorporating these technologies into our
                solutions and constantly staying up-to-date with the latest
                advances, we're able to provide cutting-edge services to our
                clients.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col key={3}>
          <Card className="text-center">
            <Card.Header>
              <FontAwesomeIcon icon={faBrain} beat size="2xl"   />
            </Card.Header>
            <Card.Body>
              <Card.Title>Name Origin and Significance</Card.Title>
              <Card.Text>
                <p>
                  The name "AESS" is an acronym for "Advanced Engineering for
                  Software Solutions" and is pronounced as "ace." This
                  pronunciation can be considered a planned coincidence that
                  reinforces the company's values of commitment, uniqueness, and
                  excellence in providing high-quality software solutions and
                  engineering expertise.
                </p>
                <p>
                  The term "ace" is often associated with being the best or
                  excelling in a particular field, as in the phrase "ace in the
                  hole," which refers to a hidden advantage or resource. This
                  association aligns well with AESS's commitment to deliver
                  top-notch solutions and services to its clients.
                </p>
                <p>
                  Furthermore, "ace" signifies a singular, exceptional
                  individual or entity, often used to describe someone who
                  excels in a specific area. This connotation mirrors AESS's
                  focus on standing out in the market by providing unique and
                  tailored solutions for its clients.
                </p>
                <p>
                  By embracing the "AESS" acronym and its "ace" pronunciation,
                  the company can leverage these positive associations to
                  emphasize its dedication to delivering exceptional, unique
                  solutions and services, thereby strengthening its brand
                  identity and positioning in the market.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;
