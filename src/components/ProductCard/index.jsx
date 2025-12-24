import React from 'react';
import HeartEmpty from '../../assets/add-cart1.svg';
import HeartFilled from '../../assets/add-cart2.svg';
import SizeOverlay from './SizeOverlay';
import './index.css'; // ✅ 确保这一行存在，样式才不会丢失

const ProductCard = ({ 
  item, isAdded, isSizing, logoSrc, currentSizes, 
  onHeartClick, onSizeSelect, onCloseOverlay, quantity, updateQty 
}) => {
  return (
    <section className="product-card">
      <img src={item.image} alt={item.name} className='main-img' loading="lazy" />
      
      {isSizing && (
        <SizeOverlay 
          sizes={currentSizes}
          quantity={quantity}
          onUpdateQty={updateQty}
          onSelect={(size) => onSizeSelect(item, size)}
          onClose={onCloseOverlay}
        />
      )}

      <div className="card-bottom">
        <div className="brand-icon-wrapper">
          {logoSrc && <img src={logoSrc} alt="brand" className="small-brand-logo" loading="lazy" />}
        </div>
        <div className="info-box">               
          <h3>{item.name}</h3>
          <img
            src={(isAdded || isSizing) ? HeartFilled : HeartEmpty} 
            className={`favorite-icon ${(isAdded || isSizing) ? 'active' : ''}`}
            onClick={() => onHeartClick(item.id)}
            alt="favorite"
          />
          <p>￥{item.price.toLocaleString()}</p>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;