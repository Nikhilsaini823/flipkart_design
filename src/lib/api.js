import axios from "axios";
const API_URL = 'https://fakestoreapi.com/products/';
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-type": "application/json",
  },
});


export default api;
