import axios from 'axios';

axios.interceptors.response.use(response => response.data);

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export default api;
