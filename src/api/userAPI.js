import API from './apiConfig';

// GET all users
export const getUsers = async () => {
  const response = await API.get('/users');
  return response.data;
};

// GET user by ID
export const getUserById = async (id) => {
  const response = await API.get(`/users/${id}`);
  return response.data;
};

// POST — login user (dummy)
export const loginUser = async (credentials) => {
  const response = await API.post('/posts', credentials);
  return response.data;
};

// POST — register user (dummy)
export const registerUser = async (userData) => {
  const response = await API.post('/posts', userData);
  return response.data;
};