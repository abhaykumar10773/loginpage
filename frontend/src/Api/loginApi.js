import axiosInstance  from './axiosConfig.js';

export const loginUserApi = async (credentials) => {
    return await axiosInstance.post('/login', credentials);
  };