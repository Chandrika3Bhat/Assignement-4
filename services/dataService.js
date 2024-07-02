// src/services/dataService.js
import axios from 'axios';

export const fetchData = async () => {
  const response = await axios.get('/api/data');
  return response.data;
};

export const addData = async (data) => {
  const response = await axios.post('/api/data', data);
  return response.data;
};
