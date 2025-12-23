import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react'; 
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home';
import ProductList from './views/ProductList';
import CartDrawer from './components/CartDrawer';



function App() {

 
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    console.log("当前购物车数据:", cartItems); // 你的调试代码保留
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = (item) => {
    console.log("收到加购请求:", item); 
    setCartItems(prev => [...prev, item]);
    setIsCartOpen(true);
  };

  const handleRemoveItem = (indexToRemove) => {
    setCartItems(prev => prev.filter((_, index) => index !== indexToRemove));
  };
  const handleRemoveById = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  }
  return (
    <Router>
      <Header
        cartCount={cartItems.length} 
        onOpenCart={() => setIsCartOpen(true)}
      />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category/:type' element={
          <ProductList
            cartItems={cartItems} 
            onAddToCart={handleAddToCart}
            onRemoveFromCart={handleRemoveById}
           />
          }
        />
        <Route path='/brand/:brandName' element={
          <ProductList
            cartItems={cartItems}
            onAddToCart={handleAddToCart}
            onRemoveFromCart={handleRemoveById}
          />
        } />

      </Routes>

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onRemoveItem={handleRemoveItem}
      />

      <Footer />
    </Router>
  )
}

export default App
