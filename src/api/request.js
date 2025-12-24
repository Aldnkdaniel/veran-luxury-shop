import axios from 'axios';


const request = axios.create({
  baseURL: 'https://api.example.com', 
  timeout: 5000, 
});


request.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('userToken');
    if (token) {
      
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


request.interceptors.response.use(
  (response) => {
    
    return response.data;
  },
  (error) => {
    
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('userToken');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default request;