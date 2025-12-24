import axios from 'axios';

// 1. 创建实例：配置基础路径和超时时间
const request = axios.create({
  baseURL: 'https://api.example.com', // 总裁，以后这里换成真实的后端地址
  timeout: 5000, // 5秒还没回来就断开，不让用户傻等
});

// 2. 请求拦截器：在发车前，检查是否有通行证（Token）
request.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('userToken');
    if (token) {
      // 如果有 Token，自动塞进请求头，不需要在每个组件里手动写
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 3. 响应拦截器：货到站了，先过一遍安检
request.interceptors.response.use(
  (response) => {
    // 只要业务数据，把 axios 包装的那层壳剥掉
    return response.data;
  },
  (error) => {
    // 统一处理错误：比如 401 没登录，直接踢回登录页
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('userToken');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default request;