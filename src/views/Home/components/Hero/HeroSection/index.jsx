import './index.css' 
import HeroBg from '../../../../../assets/hero-home.webp'

const HeroSection = () => {
  return (
    <section className="hero-section">
      <img
        src={HeroBg}
        className='hero-image'
        alt='Collection Hero'
        fetchpriority="high"
      />
    </section>
  )
}

export default HeroSection