import { useNavigate } from 'react-router-dom';
import { BRANDS } from "../../../../constants/brandConfig.jsx"
import BrandSection from './BrandSection'
import HeroSection from "./HeroSection"
import './index.css'




const Main = () => {
  const navigate = useNavigate()
  const handleBrandNavigate = (brandName) => {
    
    navigate(`/brand/${brandName}`)
  }
  return (
    <main className='home-main'>


      {/* ===== 第一屏：沉浸式全宽 Hero ===== */}
        <HeroSection />
        {/* ===== 版心 ===== */}
          
        {BRANDS.map(brand => (
          <BrandSection
          key={brand.id}
          brand={brand} 
          onBrandClick={() => handleBrandNavigate(brand.name)}
          />
        ))}
        
      
        
      </main>
  )
}


export default Main