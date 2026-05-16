import API from './apiConfig';

// GET all products
export const getProducts = async () => {
  const response = await API.get('/posts?_limit=9');
  return response.data;
};

// GET single product by ID
export const getProductById = async (id) => {
  const response = await API.get(`/posts/${id}`);
  return response.data;
};

// POST — create new product
export const createProduct = async (productData) => {
  const response = await API.post('/posts', productData);
  return response.data;
};

// PUT — update product
export const updateProduct = async (id, productData) => {
  const response = await API.put(`/posts/${id}`, productData);
  return response.data;
};

// DELETE — delete product
export const deleteProduct = async (id) => {
  const response = await API.delete(`/posts/${id}`);
  return response.data;
};