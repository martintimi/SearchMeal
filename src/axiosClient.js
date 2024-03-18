import axios from 'axios';

// Create a new Axios instance
const axiosClient = axios.create({
  baseURL: 'https://www.themealdb.com/api/json/v1/1', // Base URL for API requests
});

export default axiosClient;
