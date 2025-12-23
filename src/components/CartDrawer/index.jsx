import React, { useMemo } from 'react';
import { PRODUCTS } from '../../constants/Product'; 
import './index.css';

const CartDrawer = ({ isOpen, onClose, cartItems, onRemoveItem }) => {
  
  // ⭐⭐⭐ 关键点：这就是报错缺失的 cartDetails 定义 ⭐⭐⭐
  // 它的作用是：拿着购物车里的 ID，去商品仓库(PRODUCTS)里找对应的图片和价格
  const cartDetails = useMemo(() => {
    // 1. 安全检查：如果购物车是空的，就返回空数组
    if (!cartItems) return []; 

    // 2. 遍历购物车，查找商品详情
    return cartItems.map((cartItem, index) => {
      // 在 PRODUCTS 数组里查找 ID 匹配的商品
      const product = PRODUCTS.find(p => p.id === cartItem.id);
      
      // 如果找不到（比如id不对），就返回 null
      if (!product) return null;

      // 找到了，把尺码拼进去
      return {
        ...product,
        size: cartItem.size,
        // 生成唯一身份ID，防止 React 报 key 错误
        quantity: cartItem.quantity || 1,
        uniqueKey: `${cartItem.id}-${cartItem.size}-${index}` 
      };
    }).filter(item => item !== null); // 过滤掉无效的商品
  }, [cartItems]); // 只要 cartItems 变了，这里就重新算

  // --- 定义完 cartDetails 之后，下面才能用它 ---

  // 计算总价
  const totalPrice = cartDetails.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalQty = cartDetails.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <>
      {/* 遮罩层 */}
      <div 
        className={`drawer-backdrop ${isOpen ? 'open' : ''}`} 
        onClick={onClose}
      />

      {/* 侧边栏主体 */}
      <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <h2>YOUR BAG ({cartItems ? cartItems.length : 0})</h2>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>

        <div className="drawer-items">
          {/* 这里使用了 cartDetails，如果上面没定义，这里就会报错 */}
          {cartDetails.length === 0 ? (
            <p className="empty-msg">Your bag is empty.</p>
          ) : (
            cartDetails.map((item, index) => (
              <div key={item.uniqueKey} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="item-info">
                  <h4>{item.name}</h4>
                  <p className="item-meta">{item.brand} | Size: {item.size}</p>
                  {item.quantity > 1 && (
                      <span className="item-meta">Quantity : {item.quantity}</span>
                    )}
                  <p className="item-price">￥{item.price.toLocaleString()}</p>
                  <button className="remove-btn" onClick={() => onRemoveItem(index)}>REMOVE</button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="drawer-footer">
          <div className="total-row">
            <span>TOTAL</span>
            <span>￥{totalPrice.toLocaleString()}</span>
          </div>
          <button className="checkout-btn">CHECKOUT</button>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;