import { useState, useEffect, useMemo } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import ProductCard from '../../components/ProductCard';
import ProductHero from '../../assets/xnr-product-hero.webp';
// 从新创建的 config.js 引入配置
// 修正引用点
import { PRODUCTS, BRAND_LOGOS, SIZE_CONFIG, CATEGORY_TITLES } from '../../constants/Product';
import './index.css';

// ✅ cartItems = [] 是职业级的防御性编程
const ProductList = ({ cartItems = [], onAddToCart, onRemoveFromCart }) => {
  const { type, brandName } = useParams();
  const location = useLocation();
  const [activeProductId, setActiveProductId] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const displayProducts = useMemo(() => {
    const queryParams = new URLSearchParams(location.search);
    const q = queryParams.get('q')?.toLowerCase();
    
    return PRODUCTS.filter(item => {
      if (q) return item.name.toLowerCase().includes(q) || item.brand.toLowerCase().includes(q);
      if (brandName && brandName !== 'search') return item.brand.toLowerCase() === brandName.toLowerCase();
      if (type) return item.category === type;
      return true;
    });
  }, [type, brandName, location.search]);

  const handleHeartClick = (id) => {
    const isAlreadyAdded = cartItems?.some(item => item.id === id);
    if (isAlreadyAdded) {
      onRemoveFromCart(id);
    } else {
      setActiveProductId(id);
      setQuantity(1);
    }
  };

  useEffect(() => { setActiveProductId(null); }, [type, brandName]);

  return (
    <div className="product-views">
      <section className='product-hero'>
        <img src={ProductHero} alt="hero" />
      </section>
      
      <section className='Class-text'>
        <div className='text-class'>
          <h2>{brandName ? brandName.toUpperCase() : (CATEGORY_TITLES[type] || "全系列")}-系列</h2>
          <h4>{(brandName || type || "All")?.toUpperCase()}</h4>
        </div>
      </section>

      <div className="product-container product-grid">
        {displayProducts.map((item) => (
          <ProductCard 
            key={item.id}
            item={item}
            isSizing={activeProductId === item.id}
            isAdded={cartItems?.some(cartItem => cartItem.id === item.id)}
            logoSrc={BRAND_LOGOS[item.brand]}
            currentSizes={SIZE_CONFIG[item.category] || SIZE_CONFIG.life}
            quantity={quantity}
            updateQty={(val) => setQuantity(prev => Math.max(1, prev + val))}
            onHeartClick={handleHeartClick}
            onCloseOverlay={() => setActiveProductId(null)}
            onSizeSelect={(product, size) => {
              onAddToCart({ ...product, size, quantity });
              setActiveProductId(null);
            }}
          />
        ))}
        {displayProducts.length === 0 && <div className="empty-state">此系列正在筹备中...</div>}
      </div>
    </div>
  );
};

export default ProductList;