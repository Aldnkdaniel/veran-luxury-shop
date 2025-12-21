import { PRODUCTS } from '../../constants/Product'
import { useState } from 'react';
import './index.css'
import ProductHero from '../../assets/xnr-product-hero.webp'
import HeartEmpty from '../../assets/add-cart1.svg'
import HeartFilled from '../../assets/add-cart2.svg'
import BrandLogo from '../../assets/chanel-svg-logo.svg'

const ProductList = () => {
  const [favorites, setFavorites] = useState([]);
  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(favId => favId !== id) // 如果已收藏，则移除
        : [...prev, id] // 如果未收藏，则添加
    );
  };
  return (
    <>
      <div className="product-views">
        <section className='product-hero'>
          <img src={ProductHero} alt="xnr-product-hero" />
        </section>
        <section className='Women-text'>
          <div className='text-women'>
            <h2>女士</h2>
            <h4>Women</h4>
          </div>
        
        </section>
        <section className='brand-logo product-container'>
          <img src={BrandLogo} alt="logo" />
        </section>
        <div className="product-container product-grid">

          {PRODUCTS.map((item) => {
            const isSelected = favorites.includes(item.id);
            return (
              <section className="product-card" key={item.id}>
                <img src={item.image || null} alt={item.name} />
                <div className="info-box">               
                  <h3>{item.name}</h3>
                  <img
                  src={isSelected ? HeartFilled : HeartEmpty} 
                  className={`favorite-icon ${isSelected ? 'active' : ''}`}
                  alt="favorite"
                  onClick={() => toggleFavorite(item.id)}
                  />
                  <p>￥{item.price}</p>
                </div>
              </section>
            )
          })}
      

        </div>
      </div>
    </>
  )
}

export default ProductList