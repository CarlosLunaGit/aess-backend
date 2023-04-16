import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

const columns = [
    {
      name: 'Service',
      selector: row => row.name,
      sortable: true,
    },
    {
      name: 'Description',
      selector: row => row.description,
      sortable: true,
    },
  ];

const services = [
  {
    id: 1,
    name: 'Custom Software Development',
    description: 'Tailored software solutions to meet your unique business requirements.',
  },
  {
    id: 2,
    name: 'Web Development',
    description: 'Responsive, engaging, and accessible web applications built with modern technologies.',
  },
  {
    id: 3,
    name: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS, Android, and other platforms.',
  },
  {
    id: 4,
    name: 'Platform Engineering',
    description: 'Design and build toolchains and workflows with Internal Developer Platforms (IDPs) to enable self-service capabilities for software engineering organizations.',
  },
  // Add more services according to your business plan.
];

const ServicesPage = () => {
  return (
    <Container>
      <Row className="my-5">
        <Col>
          <h2>
            <FontAwesomeIcon icon={faCode} className="me-2" />
            Our Services
          </h2>
          <p>
            We offer a wide range of services, including custom software
            development, web development, mobile app development, platform engineering, and more.
          </p>
          <DataTable
            title="Available Services"
            columns={columns}
            data={services}
            pagination
            highlightOnHover
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ServicesPage;
