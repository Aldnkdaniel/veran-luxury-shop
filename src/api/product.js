
import { data } from 'react-router-dom';
import request from './request';


export const getProductsApi = () => {

  return request({
    url: '/api/products',
    //具体的后端地址 先占位
    method: 'get'
    //请求方式，get是查，post是增，put/delete 改/删
  });
};

//这里是模拟登录 
export const loginApi = (data) => {

  return new Promise((resolve) => {
  
    setTimeout(() => {
      resolve({
        token: 'VERAN_ADMIN_TOKEN',
        user: { name: 'Daniel', email: data.email }
      });
    }, 1000);
  });

};
// 有后端接口的话
// export const loginApi = (data) => {
//   return request ({
//     url: '/api/login',
//     method: 'post',
//     data
//   })
// }
// 这里的请求模式从get变post了 防止用户的数据在网址路径里裸奔