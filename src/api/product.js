
import request from './request';


export const getProductsApi = () => {

  return request({
    url: '/api/products',
    method: 'get'
  });
};


export const loginApi = (data) => {

  return new Promise((resolve) => {
  
    setTimeout(() => {
      resolve({
        token: 'VERAN_ADMIN_TOKEN',
        user: { name: '总裁', email: data.email }
      });
    }, 1000);
  });

};