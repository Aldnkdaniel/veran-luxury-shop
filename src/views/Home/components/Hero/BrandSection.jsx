const BrandSection = ({ brand, onBrandClick }) => (
  <section className="brand-full-wrapper">
    { }
    <div className="brand-text-block">
      <h1 className="brand-name">{brand.name}</h1>
      <p className="brand-description">{brand.description}</p>
    </div>

    { }
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