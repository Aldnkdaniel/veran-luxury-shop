const BrandSection = ({ brand, onBrandClick }) => (
  <section className="brand-full-wrapper">
    {/* 文字区：占据独立的一行，但是全宽背景 */}
    <div className="brand-text-block">
      <h1 className="brand-name">{brand.name}</h1>
      <p className="brand-description">{brand.description}</p>
    </div>

    {/* 图片区：紧贴文字下方，全宽显示 */}
    <div className="brand-hero-content">
      <img
        src={brand.image}
        className="brand-main-image"
        alt={brand.name}
        loading="lazy"
      />
      <button
        className="brand-action-btn"
        onClick={onBrandClick}
      >
        {brand.btnText}
      </button>
    </div>
  </section>
)

export default BrandSection