const SizeOverlay = ({ sizes, quantity, onUpdateQty, onSelect, onClose }) => (
  <div className="size-overlay">
    {/* 右上角关闭按钮 */}
    <div className="close-overlay-btn" onClick={onClose}>×</div>

    {/* 数量控制区：加减号方框化 */}
    <div className="quantity-section">
      <p className="qty-label">QUANTITY</p>
      <div className="stepper-box">
        <button className="step-btn" onClick={() => onUpdateQty(-1)}>-</button>
        <span className="qty-value">{quantity}</span>
        <button className="step-btn" onClick={() => onUpdateQty(1)}>+</button>
      </div>
    </div>

    <p className="select-label">SELECT SIZE</p>

    {/* 尺码选择区：强制单行 */}
    <div className="size-options">
      {sizes.map(size => (
        <button key={size} className="size-btn" onClick={() => onSelect(size)}>
          {size}
        </button>
      ))}
    </div>

    {/* 背景遮罩点击关闭 */}
    <div className="close-mask" onClick={onClose}></div>
  </div>
);

export default SizeOverlay;