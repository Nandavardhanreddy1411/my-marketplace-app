import axios from 'axios';

// Base API configuration
const API = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});

// Request Interceptor — adds token to every request
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor — handles errors globally
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.log('Unauthorized — redirect to login');
    }
    if (error.response?.status === 404) {
      console.log('Resource not found');
    }
    if (error.response?.status === 500) {
      console.log('Server error');
    }
    return Promise.reject(error);
  }
);

export default API;