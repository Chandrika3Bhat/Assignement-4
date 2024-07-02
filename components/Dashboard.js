// src/components/Dashboard.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Chart from 'react-apexcharts';
import DataManagement from './DataManagement';
import Reporting from './Reporting';

const Dashboard = () => {
  const chartOptions = {
    series: [
      {
        name: 'Registrations',
        data: [10, 20, 30, 40, 50]
      }
    ],
    options: {
      chart: {
        type: 'bar'
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May']
      }
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Total Registrations</Card.Title>
              <Chart
                options={chartOptions.options}
                series={chartOptions.series}
                type="bar"
                height={350}
              />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <DataManagement />
        </Col>
        <Col md={4}>
          <Reporting />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
