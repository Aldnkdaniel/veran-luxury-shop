import './index.css'
import Logo from '../../assets/header-logo.svg'
import MenuIcon from '../../assets/menu-svgrepo-com.svg'
import SearchIcon from '../../assets/magnifying-glass.svg'
import UserIcon from '../../assets/user-circle.svg'
import CartIcon from '../../assets/shopping-cart-simple.svg'
import HeroBg from '../../assets/hero-home.webp'
import { useState, useEffect, use } from 'react'


const Home = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top:0,
      behavior: 'smooth'
    })
  }
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true)
      }else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  },[])



  return (
    <div className="home-container">
      {/* 下面是头部区 */}
      <header className={`home-header ${isScrolled ? 'scrolled' : ''}`}>
        <header className="home-header">
        {/* 左侧 */}
        <div className="header-left">
          <img src={MenuIcon} alt='menu' className='header-icon' />
          <span className='menu-text'>MENU</span>
        </div>
        {/* 中间 */}
        <div className="header-center" onClick={scrollToTop} style={{cursor: 'pointer'}}>
          <div className="logo-box">
            <img src={Logo} alt="logo" />
          </div>
        </div>
        {/* 右边 */}
        <div className="header-right">
          <img src={SearchIcon} className="header-icon" alt="search" />
          <img src={UserIcon} className="header-icon" alt="user" />
          <img src={CartIcon} className="header-icon" alt="cart" />
        </div>
      </header>
      </header>
      
      {/* 下面是主要内容区 */}
      <main className='home-main'>
        <div className="hero-section">
          <img
            src={HeroBg}
            className='hero-image'
            alt='Collection Hero'
          />

        </div>


        <div style={{ height: '2000px', background: '#f6f6f6' }}>
        <h1 style={{ padding: '100px' }}>这里是测试内容，滚轮应该回来了！</h1>
        </div>
      </main>















    </div>
  )
}

export default Home