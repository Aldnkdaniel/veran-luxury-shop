import React, { useMemo } from 'react';
import { PRODUCTS } from '../../constants/Product';
import './index.css';

const CartDrawer = ({ isOpen, onClose, cartItems, onRemoveItem }) => {



  const cartDetails = useMemo(() => {

    if (!cartItems) return [];
    //没有购物车数据 就别往下跑了 给我一个空的数组


    return cartItems.map((cartItem, index) => {

      const product = PRODUCTS.find(p => p.id === cartItem.id);


      if (!product) return null;


      return {
        ...product,
        size: cartItem.size,
        quantity: cartItem.quantity || 1,
        uniqueKey: `${cartItem.id}-${cartItem.size}-${index}`
      };
    }).filter(item => item !== null);
  }, [cartItems]);




  const totalPrice = cartDetails.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalQty = cartDetails.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <>
      { }
      <div
        className={`drawer-backdrop ${isOpen ? 'open' : ''}`}
        onClick={onClose}
      />

      { }
      <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        {/* 不同的css */}
        <div className="drawer-header">
          <h2>YOUR BAG ({cartItems ? cartItems.length : 0})</h2>
          <button className="close-btn" onClick={onClose}>&times;</button>
                                                       {/* 字符实体 */}
        </div>

        <div className="drawer-items">
          { }
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
                  {/* 在map的时候给每个按钮都绑定了自己的索引号 */}
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