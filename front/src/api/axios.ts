import axios from 'axios';
import {Platform} from 'react-native';

const axiosInstance = axios.create({
  baseURL: 'http://13.209.4.135:3000',  
  withCredentials: true,
});

export default axiosInstance;