import axios from 'axios';

 const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000',
  withCredentials: true,    //yha change nhi kna hai na hi variable name 
});

export default axiosInstance;
