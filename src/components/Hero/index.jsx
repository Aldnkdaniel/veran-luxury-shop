
import { BRANDS } from "../../constants/brandConfig.jsx"
import BrandSection from './BrandSection'
import HeroSection from '../../components/Hero/HeroSection'
import './index.css'




const Main = () => {
  return (
    <main className='home-main'>


      {/* ===== 第一屏：沉浸式全宽 Hero ===== */}
        <HeroSection />
        {/* ===== 版心 ===== */}
          
        {BRANDS.map(brand => (
          <BrandSection key={brand.id} brand={brand} />
        ))}
        
      
        
      </main>
  )
}


export default Main