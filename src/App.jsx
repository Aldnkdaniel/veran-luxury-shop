import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from './hooks/useCart';
import MainLayout from './layout/MainLayout';

import Home from './views/Home';
import ProductList from './views/ProductList';
import Login from './views/Login';

function AppContent() {
  const location = useLocation();
  const { cartItems, addToCart, removeById, removeFromCart, isLoggedIn } = useCart();
  
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleAddToCartAction = (item) => {
    if (!isLoggedIn) {
      setIsLoginModalOpen(true);
      return;
    }
    addToCart(item);
    setIsCartOpen(true);
  };

  return (
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
        {/* ✅ 这里的 cartItems={cartItems} 是修复白屏报错的核心 */}
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
  return <Router><AppContent /></Router>;
}

export default App;