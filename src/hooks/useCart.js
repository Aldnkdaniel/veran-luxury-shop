import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useCart = () => {
  const location = useLocation();
  const token = localStorage.getItem('userToken');
  const cartKey = token ? `cartItems_${token}` : 'cartItems_guest';

  // 1. 惰性初始化
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem(cartKey);
    try {
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  // 2. 身份切换监听
  useEffect(() => {
    const freshToken = localStorage.getItem('userToken');
    const freshKey = freshToken ? `cartItems_${freshToken}` : 'cartItems_guest';
    const saved = localStorage.getItem(freshKey);
    setCartItems(saved ? JSON.parse(saved) : []);
  }, [location.pathname]);

  // 3. 持久化同步
  useEffect(() => {
    localStorage.setItem(cartKey, JSON.stringify(cartItems));
  }, [cartItems, cartKey]);

  // 操作方法
  const addToCart = (item) => setCartItems(prev => [...prev, item]);
  const removeFromCart = (index) => setCartItems(prev => prev.filter((_, i) => i !== index));
  const removeById = (id) => setCartItems(prev => prev.filter(item => item.id !== id));

  return { 
    cartItems, 
    addToCart, 
    removeFromCart, 
    removeById, 
    isLoggedIn: !!token 
  };
};