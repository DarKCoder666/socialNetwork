import { API_BASE } from '../../config'
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: API_BASE
})

// Add a request interceptor
axiosInstance.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token')
  if(token) {
    config.headers.Authorization = `Barrier ${token}`
  }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axiosInstance.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

export default axiosInstance
