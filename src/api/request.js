import axios from 'axios';

// create 隔离性 为了装拦截器，从而没用全局
const request = axios.create({
  baseURL: 'https://api.example.com', 
  // 占位地址后期根据后端提供的接口文档
  timeout: 5000, 

});

//请求拦截器
request.interceptors.request.use(
  (config) => {
    //读取本地存储中key为字符串usertoken的值
    const token = localStorage.getItem('userToken');
    if (token) {
      
      config.headers['Authorization'] = `Bearer ${token}`;
      // 按照RFC规范拼接字符串
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