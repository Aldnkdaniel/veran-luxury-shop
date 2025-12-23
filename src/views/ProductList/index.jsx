import { PRODUCTS } from '../../constants/Product'
import { useState, useEffect } from 'react';
import './index.css'
import { useParams, useLocation } from 'react-router-dom'
import ProductHero from '../../assets/xnr-product-hero.webp'
import HeartEmpty from '../../assets/add-cart1.svg'
import HeartFilled from '../../assets/add-cart2.svg'
import BrandChanelLogo from '../../assets/chanel-svg-logo.svg'
import BrandLouisvuittonLogo from '../../assets/louisvuitton-svg-logo.svg'
import BrandDiorLogo from '../../assets/dior-svg-logo.svg'
import BrandGucciLogo from '../../assets/gucci-svg-logo.svg'
import BrandPradaLogo from '../../assets/prada-svg-logo.svg'
import BrandYslLogo from '../../assets/ysl-svg-logo.svg'
import BrandMonclerLogo from '../../assets/moncler-svg-logo.svg'


const BRAND_LOGOS = {
  'CHANEL': BrandChanelLogo,
  'LOUIS VUITTON': BrandLouisvuittonLogo,
  'DIOR': BrandDiorLogo,
  'GUCCI':BrandGucciLogo,
  'PRADA':BrandPradaLogo,
  'YVES SAINT LAURENT':BrandYslLogo,
  'MONCLER':BrandMonclerLogo
};




const SIZE_CONFIG = {
  women: ['XS', 'S', 'M', 'L'],
  men: ['M', 'L', 'XL', 'XXL'],
  bags: ['O/S'], 
  life: ['均码']
};


const ProductList = ({ cartItems, onAddToCart, onRemoveFromCart }) => {
  const { type, brandName } = useParams();

  const location = useLocation()

  const queryParams = new URLSearchParams(location.search);
  const q = queryParams.get('q');
  
  const [activeProductId, setActiveProductId] = useState(null);
  
  const [quantity, setQuantity] = useState(1) 

  const displayProducts = PRODUCTS.filter(item => {
    if (q) {
      const target = q.toLowerCase()
      return (
        item.name.toLowerCase().includes(target) ||
        item.brand.toLowerCase().includes(target)
      )
    }
    if (brandName && brandName !== 'search') {
      return item.brand.toLowerCase() === brandName.toLowerCase();
    }
    if (type) {
      return item.category === type;
    }
    return true;
  })

  const categoryTitles = {
    women: "女士",
    men: "男士",
    bags: "手袋",
    life: "生活艺术"
  };
  const handleHeartClick = (id) => {
    const isAlreadyAdded = cartItems.some(item => item.id === id);
    if (isAlreadyAdded) {
      onRemoveFromCart(id)
    } else {
      setActiveProductId(id);
      setQuantity(1);
    }
  }
  const handleSizeSelect = (product, size) => {
    onAddToCart({ ...product, size: size, quantity: quantity });
    setActiveProductId(null);
  }
  const updateQty = (val) => {
    setQuantity(prev => Math.max(1, prev + val))
  }
  useEffect(() => {
    setActiveProductId(null);
  }, [type, brandName])

  return (
    <>
      <div className="product-views">
        <section className='product-hero'>
          <img src={ProductHero} alt="xnr-product-hero" />
        </section>
        <section className='Class-text'>
          <div className='text-class'>
            <h2>{brandName ? brandName.toUpperCase() : (categoryTitles[type] || "全系列")}-系列</h2>
            <h4>{(brandName || type || "All")?.toUpperCase()}</h4>
          </div>
        
        </section>
      
        <div className="product-container product-grid">

          {displayProducts.map((item) => {
            const isSizing = activeProductId === item.id
            const isAdded = cartItems.some(cartItem => cartItem.id === item.id)
            const logoSrc = BRAND_LOGOS[item.brand];
            const currentSizes = SIZE_CONFIG[item.category] || SIZE_CONFIG.others;
            
            return (

              <section className="product-card" key={item.id}>
                <img src={item.image || null} alt={item.name} className='main-img' />
                {isSizing && (
                  <div className="size-overlay">
                    
                    <div className="quantity-section">
                      <p className="qty-label">QUANTITY</p>
                      <div className="stepper-box">
                        <button className="step-btn" onClick={() => updateQty(-1)}>-</button>
                        <span className="qty-value">{quantity}</span>
                        <button className="step-btn" onClick={() => updateQty(+1)}>+</button>
                      </div>
                    </div>
                    <p>SELECT</p>
                    <div className="size-options">
                      {currentSizes.map(size => (
                        <button 
                          key={size} 
                          className="size-btn"
                          onClick={() => handleSizeSelect(item, size)} // 点击选尺码
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                    <div className="close-mask" onClick={() => setActiveProductId(null)}></div>
                  </div>
                )}

                <div className="card-bottom">
                  <div className="brand-icon-wrapper">
                    {logoSrc && (
                      <img src={logoSrc} alt="brand" className="small-brand-logo" />
                    )}
                  </div>

                  <div className="info-box">               
                    <h3>{item.name}</h3>
                    <img
                    src={(isAdded || isSizing) ? HeartFilled : HeartEmpty} 
                    className={`favorite-icon ${(isAdded || isSizing) ? 'active' : ''}`}
                    alt="action"
                    onClick={() => handleHeartClick(item.id)}
                    />
                    <p>￥{item.price.toLocaleString()}</p>
                  </div>
                </div>
              </section>
            )
          })}
          
          {displayProducts.length === 0 && (
            <div className="empty-state">此系列正在筹备中，敬请期待。</div>
          )}

        </div>
      </div>
    </>
  )
}

export default ProductList