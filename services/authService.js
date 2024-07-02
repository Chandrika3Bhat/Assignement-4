// src/services/authService.js
import axios from 'axios';

export const login = async (email, password) => {
  const response = await axios.post('/api/auth/login', { email, password });
  return response.data;
};

export const register = async (name, email, password) => {
  const response = await axios.post('/api/auth/register', { name, email, password });
  return response.data;
};
