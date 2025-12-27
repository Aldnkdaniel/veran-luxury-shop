import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { CartProvider, useCartContext } from './context/CartContext'
import MainLayout from './layout/MainLayout';

import Home from './views/Home';
import ProductList from './views/ProductList';
import Login from './views/Login';

function AppContent() {
  const location = useLocation();
  const {
    cartItems,
    addToCart,
    removeById,
    removeFromCart,
    isLoggedIn
  } = useCartContext()


  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);


  // 身份拦截 看等没登陆 
  const handleAddToCartAction = (item) => {
    if (!isLoggedIn) {
      setIsLoginModalOpen(true);
      return;
    }
    addToCart(item);
    setIsCartOpen(true);
  };

  return (
    //是不是在登录页是的话 把头尾去掉
    <MainLayout
      layoutProps={{ isLoginPage: location.pathname === '/login' }}
      authProps={{ isLoginModalOpen, setIsLoginModalOpen }}
      cartProps={{
        cartItems,
        isCartOpen,
        setIsCartOpen,
        onRemoveItem: removeFromCart
      }}
    >
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        { }
        <Route path="/category/:type" element={
          <ProductList
            cartItems={cartItems}
            onAddToCart={handleAddToCartAction}
            onRemoveFromCart={removeById}
          />
        } />
        <Route path="/brand/:brandName" element={
          <ProductList
            cartItems={cartItems}
            onAddToCart={handleAddToCartAction}
            onRemoveFromCart={removeById}
          />
        } />
      </Routes>
    </MainLayout>
  );
}

function App() {
  return (
    <Router>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </Router>
  ) 
}

export default App;