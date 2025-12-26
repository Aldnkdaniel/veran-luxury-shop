import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';



export const useCart = () => {
  // 函数 每次组件渲染都会跑一次
  const location = useLocation();
  // 拿到当前路由位置
  const token = localStorage.getItem('userToken');
  // 判断是游客还是登录用户 没登的null 登录有token
  const cartKey = token ? `cartItems_${token}` : 'cartItems_guest';
  // 不同身份不同购物车


  // 去localStorage 找购物车的数据，有的话解析 没有的话就用空的字符串
  const [cartItems, setCartItems] = useState(() => {
    // 初始值是下面的的函数来算
    const saved = localStorage.getItem(cartKey);
    // 用之前的cartkey 得到本地存储的数据的saved，读的字符串不是数组
    try {
      // 如果本地有数据的话 转成数组
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      // 如果没有的话给空的数组
      return [];
    }
    // 这里不能用 if 判断 JSON 是否合法，因为 if 只能判断值是否存在，
    // try 是用来包裹可能会抛出异常的代码，catch是之前老师讲的捕获try中抛出的异常兜底处理。
    // 如果try正常运行不会运行catch 如果第一个异常了 catch会捕获
  });

  // 首次执行一次
  // 页面路径字符串发生变化是再执行一次
  useEffect(() => {
    // 得到最新的token 去本地重新读一遍
    const freshToken = localStorage.getItem('userToken');
    // 分开购物车内容 防止互相污染 游客是游客 的购物车 用户是用户
    const freshKey = freshToken ? `cartItems_${freshToken}` : 'cartItems_guest';
    // 拿数据 但是还不是数组
    const saved = localStorage.getItem(freshKey);
    // 把上面的数据转成数组
    setCartItems(saved ? JSON.parse(saved) : []);
  }, [location.pathname]);
  // 当前路径改变时 再跑一遍这个函数


  useEffect(() => {
    // 当购物车内的东西变了 就用现在的值替代之前的本地存储的数据 ，cartItems是购物车的内容，然后那个cartkey是根据token生成的本地存储的key
    localStorage.setItem(cartKey, JSON.stringify(cartItems));
    // key是字符串
  }, [cartItems, cartKey]);
  // cartItems 是购物车的 react state


  // 当调用并传入一个商品时，react 会拿到更新前的数组 ，在不改变原数组的情况下生成一个新数组，把商品追加进去并更新购物车的state
  const addToCart = (item) => setCartItems(prev => [...prev, item]);
  // item 是加入的商品对象 setCartItems是react更新购物车的state
  const removeFromCart = (index) => setCartItems(prev => prev.filter((_, i) => i !== index));
  // 拿到最新的数组然后在数组找索引号 第一个参数先占位 根据索引号来过滤，索引号是false就过滤掉剩下的进入数组 
  

  return {
    cartItems,
    addToCart,
    removeFromCart,
    isLoggedIn: !!token
    // null是假，token是真 ！！ 是取反，返回纯净的布尔值
  };
};