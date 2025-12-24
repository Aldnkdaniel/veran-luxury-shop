/* src/api/product.js */
import request from './request';


export const getProductsApi = () => {
  
  return request({
    url: '/api/products',
    method: 'get'
  });
};


export const loginApi = (data) => {
 
  return new Promise((resolve) => {
    console.log("正在执行 Mock 登录验证，数据：", data);
    
    setTimeout(() => {
      resolve({ 
        token: 'VERAN_ADMIN_TOKEN', 
        user: { name: '总裁', email: data.email } 
      });
    }, 1000); 
  });

  /* 以后后端好了，直接取消下面这段注释，删掉上面的 Promise 即可
  return request({
    url: '/api/auth/login',
    method: 'post',
    data
  });
  */
};