import { createContext, useContext } from "react";
// createContext 就是创建一个公共通道，那个useContext就是通过这个来拿数据
import { useCart } from "../hooks/useCart";
// 购物车的大脑

const CartContext = createContext(null)
// cartContext是插座 但是还没通电 给个null 以后会根据provider来提供

export const CartProvider = ({ children }) => {
  // children是CartProvider 里的东西 这里是那个AppContent
  const cart = useCart() 
  // 这里调用了一次useCart 然后给了cart 作为整个App的唯一购物车状态
  return (
    // 把刚刚的cart 塞进了那个cartProvider 这样就可以拿到数据
    <CartContext.Provider value={cart}> 
      {/* 不干扰UI */}
      {children}
    </CartContext.Provider>
  )
}
// 快捷入口   /   useCartContext 只是拿购物车  提供值的是provider里的cart  所以
export const useCartContext = () => {
  // 给个context 让他去插座里取值
  const context = useContext(CartContext)
  // 防呆设计 如果你没被 Provider 包住就来拿 就报错
  if (!context) {
    throw new Error('useCartContext must be used within CartProvider')  

  }
  return context

}



// useCart() 创建购物车
// Provider 是保存这份购物车
// Context 是全局共享
// useContext 是任何地方取