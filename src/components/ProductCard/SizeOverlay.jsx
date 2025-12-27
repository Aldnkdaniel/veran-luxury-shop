const SizeOverlay = ({ sizes, quantity, onUpdateQty, onSelect, onClose }) => (
  <div className="size-overlay">
   
    <div className="close-overlay-btn" onClick={onClose}>×</div>

   
    <div className="quantity-section">
      <p className="qty-label">QUANTITY</p>
      <div className="stepper-box">
        <button className="step-btn" onClick={() => onUpdateQty(-1)}>-</button>
        <span className="qty-value">{quantity}</span>
        <button className="step-btn" onClick={() => onUpdateQty(1)}>+</button>
      </div>
    </div>

    <p className="select-label">SELECT SIZE</p>

    
    <div className="size-options">
      {sizes.map(size => (
        <button key={size} className="size-btn" onClick={() => onSelect(size)}>
          {size}
        </button>
      ))}
    </div>

    
    <div className="close-mask" onClick={onClose}></div>
  </div>
);

export default SizeOverlay;