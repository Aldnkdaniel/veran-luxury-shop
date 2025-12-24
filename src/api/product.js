/* src/api/product.js */
import request from './request';

/**
 * 总裁，为了解决登录超时问题，我们在这里执行 Mock（模拟）
 */

// 1. 获取商品列表
export const getProductsApi = () => {
  // 目前依然保留架构，暂不调用
  return request({
    url: '/api/products',
    method: 'get'
  });
};

// 2. 登录接口 - 物理修复版
export const loginApi = (data) => {
  /* 总裁，这里我们暂时不走 request(data)，
     而是直接返回一个 1 秒后成功的 Promise。
     这样既测试了你的 async/await 逻辑，又不需要真后端。
  */
  return new Promise((resolve) => {
    console.log("正在执行 Mock 登录验证，数据：", data);
    
    setTimeout(() => {
      resolve({ 
        token: 'VERAN_ADMIN_TOKEN', 
        user: { name: '总裁', email: data.email } 
      });
    }, 1000); // 模拟 1 秒的网络延迟，让加载动画跑一会儿
  });

  /* 以后后端好了，直接取消下面这段注释，删掉上面的 Promise 即可
  return request({
    url: '/api/auth/login',
    method: 'post',
    data
  });
  */
};