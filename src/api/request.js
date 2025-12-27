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

//响应拦截器
request.interceptors.response.use(
  //过滤掉无关竟要的数据 给我重要的数据
  (response) => {
    
    return response.data;
  },
  (error) => {
    
    if (error.response && error.response.status === 401) {
      //身份是否失效，过期
      localStorage.removeItem('userToken');
      //移除当前本地存储里的token
      window.location.href = '/login';
      //回到登录页
    }
    return Promise.reject(error);
  }
);

export default request;


//实例化-请求拦截器-等待传输（超时就报错）-响应拦截器 -1.成功走response回调函数2.失败走err
//Axios 二次封装 把全项目所有的网络请求全部收编
//请求拦截的作用是无感鉴权
//响应拦截器是把多余的包装拆了
//异常响应 清除无效token