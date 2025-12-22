import { PRODUCTS } from '../../constants/Product'
import { useState } from 'react';
import './index.css'
import { useParams } from 'react-router-dom'
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







const ProductList = ({ cartItems, onAddToCart, onRemoveFromCart }) => {
  const { type } = useParams();
  const displayProducts = PRODUCTS.filter(item => item.category === type);
  const [activeProductId, setActiveProductId] = useState(null);
  
  
  const SIZES = ['XS', 'S', 'M', 'L', 'XL'];
  const categoryTitles = {
    women: "女士",
    men: "男士",
    kids: "童装",
    accessories: "配饰"
  };
  const handleHeartClick = (id) => {
    const isAlreadyAdded = cartItems.some(item => item.id === id);
    if (isAlreadyAdded) {
      console.log("Already added");
      onRemoveFromCart(id)
    } else {
      setActiveProductId(id);
    }
  }
  const handleSizeSelect = (product, size) => {
    onAddToCart({ ...product, size: size });
    setActiveProductId(null);
    
  }

  return (
    <>
      <div className="product-views">
        <section className='product-hero'>
          <img src={ProductHero} alt="xnr-product-hero" />
        </section>
        <section className='Women-text'>
          <div className='text-women'>
            <h2>{categoryTitles[type] || "系列"}</h2>
            <h4>{type?.toUpperCase()}</h4>
          </div>
        
        </section>
      
        <div className="product-container product-grid">

          {displayProducts.map((item) => {
            const isSizing = activeProductId === item.id
            const isAdded = cartItems.some(cartItem => cartItem.id === item.id)
            const logoSrc = BRAND_LOGOS[item.brand];
            
            return (

              <section className="product-card" key={item.id}>
                <img src={item.image || null} alt={item.name} className='main-img' />
                {isSizing && (
                  <div className="size-overlay">
                    <p>SELECT SIZE</p>
                    <div className="size-options">
                      {SIZES.map(size => (
                        <button 
                          key={size} 
                          className="size-btn"
                          onClick={() => handleSizeSelect(item, size)} // 点击选尺码
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                    {/* 点击空白处关闭 */}
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
            <div className="empty-state">此系列即将上线，敬请期待。</div>
          )}

        </div>
      </div>
    </>
  )
}

export default ProductList