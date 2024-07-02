// src/components/DataManagement.js
import React, { useState, useEffect } from 'react';
import { Table, Button, Form, Modal } from 'react-bootstrap';
import axios from 'axios';

const DataManagement = () => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [newData, setNewData] = useState({ name: '', value: '' });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { data } = await axios.get('/api/data');
      setData(data);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };

  const handleSave = async () => {
    try {
      await axios.post('/api/data', newData);
      fetchData();
      setShow(false);
    } catch (error) {
      console.error('Error saving data', error);
    }
  };

  return (
    <div>
      <Button onClick={() => setShow(true)}>Add Data</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={newData.name}
                onChange={(e) => setNewData({ ...newData, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Value</Form.Label>
              <Form.Control
                type="text"
                value={newData.value}
                onChange={(e) => setNewData({ ...newData, value: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DataManagement;
