import './index.css'
import Logo from '../../assets/header-logo.svg'
import MenuIcon from '../../assets/menu-svgrepo-com.svg'
import SearchIcon from '../../assets/magnifying-glass.svg'
import UserIcon from '../../assets/user-circle.svg'
import CartIcon from '../../assets/shopping-cart-simple.svg'
import HeroBg from '../../assets/hero-home.webp'
import Chanel from '../../assets/xnr-hero.webp'
import Lv from '../../assets/lv-hero.webp'
import FooterLogo from '../../assets/Logo-footer.svg'
import Ysl from '../../assets/ysl-hero.png'
import Gucci from '../../assets/gucci-hero.webp'
import Dior from '../../assets/dior-hero.webp'
import Prada from '../../assets/parda-hero.jpg'
import { useState, useEffect} from 'react'


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
      
      {/* 下面是主要内容区 */}
      <main className='home-main'>
        <div className="hero-section">
          <img
            src={HeroBg}
            className='hero-image'
            alt='Collection Hero'
          />
        </div>


        <div className="container">
            <div className="chanel-part">
              <h1 className='chanel-part-text'>CHANEL</h1>
        
              <h4 class="chanel-part-text">
                MÉTIERS D’ART 2026<br />
                NEW YORK
              </h4>
              <div className="chanel-part-hero-box heroAll">
                  <img
                    src={Chanel}
                    alt='Xnr-hero'
                    className='chanel-part-hero '
                  />
                  <button className='chanel-part-hero-btn'>→To Chanel </button>
              </div>
            </div>
            <div className="lv-part">
              <h1 className='lv-part-text'>Louis Vuitton</h1>
        
              <h4 class="lv-part-text">
                2026 Early Spring/Summer Collection<br />
                Pharrell Williams
              </h4>
              <div className="lv-part-hero-box heroAll">
                  <img
                    src={Lv}
                    alt='lv-hero'
                    className='lv-part-hero '
                  />
                  <button className='lv-part-hero-btn'>→To Louis Vuitton </button>
              </div>
            </div>
            <div className="dior-part">
              <h1 className='dior-part-text'>Dior</h1>
        
              <h4 class="dior-part-text">
                2026 Vacation Series<br />
                Baroque nostalgic elements and modern elegant elements
              </h4>
              <div className="dior-part-hero-box heroAll">
                  <img
                    src={Dior}
                    alt='dior-hero'
                    className='dior-part-hero '
                  />
                  <button className='dior-part-hero-btn'>→To Dior </button>
              </div>
            </div>
            <div className="gucci-part">
              <h1 className='gucci-part-text'>Gucci</h1>
        
              <h4 class="gucci-part-text">
                2026 Vacation Series<br />
                Baroque nostalgic elements and modern elegant elements
              </h4>
              <div className="gucci-part-hero-box heroAll">
                  <img
                    src={Gucci}
                    alt='gucci-hero'
                    className='gucci-part-hero '
                  />
                  <button className='gucci-part-hero-btn'>→To Gucci </button>
              </div>
            </div>
            <div className="prada-part">
              <h1 className='prada-part-text'>Prada</h1>
        
              <h4 class="prada-part-text">
                2026 Vacation Series<br />
                Baroque nostalgic elements and modern elegant elements
              </h4>
              <div className="prada-part-hero-box heroAll">
                  <img
                    src={Prada}
                    alt='prada-hero'
                    className='prada-part-hero '
                  />
                  <button className='prada-part-hero-btn'>→To Prada </button>
              </div>
            </div>
            <div className="ysl-part">
              <h1 className='ysl-part-text'>Ysl</h1>
        
              <h4 class="ysl-part-text">
                2026 Vacation Series<br />
                Baroque nostalgic elements and modern elegant elements
              </h4>
              <div className="ysl-part-hero-box heroAll">
                  <img
                    src={Ysl}
                    alt='ysl-hero'
                    className='ysl-part-hero '
                  />
                  <button className='ysl-part-hero-btn'>→To Ysl </button>
              </div>
            </div>
        </div>
      </main>


      <footer className='home-footer'>
        <div className="footer-notices-full">
          <div className="footer-notices">
            <h2>© 2025 VÉRAN</h2>
            <span>本网站为个人前端开发学习与作品展示用途所制作的非商业项目。</span>
            <span>页面设计仅用于技术练习与研究，不用于任何商业行为或盈利目的。</span>
            <span>网站中出现的品牌名称、商标及相关视觉素材，其版权均归各自品牌所有，仅用于学习与展示参考。</span>
            <p>This website is a non-commercial personal project created for learning and
              demonstrating front-end development skills.</p>
            <p>All brand names, trademarks, and related visual materials referenced on this site
              are the property of their respective owners and are used for educational purposes only.</p>
          </div>
        </div>
        <hr />
        <div className="footer-inner">
          <div className="footer-links">
            <ul className='footer-company'>
              <h3 className='footer-item'>公司</h3>
              <li className='footer-item'>关于我们</li>
              <li className='footer-item'>平衡</li>
              <li className='footer-item'>道德准则</li>
              <li className='footer-item'>我们的故事</li>
              <li className='footer-item'>合法性</li>
              <li className='footer-item'>隐私政策</li>
              <li className='footer-item'>公司信息</li>
            </ul>
            <ul className='footer-help'>
              <h3 className='footer-item'>有什么可以帮到您？</h3>
              <li className='footer-item'>联系我们</li>
              <li className='footer-item'>我的订单</li>
              <li className='footer-item'>常见问题解答</li>
              <li className='footer-item'>订阅电子邮件</li>
              <li className='footer-item'>客服</li>
            </ul>
            <div className="footer-links2">
            <input type="text" className='footer-email-input'/>
            <button className='footer-btn'>OK</button>
            </div>
          </div>
          <div className="footer-logo">
            <img src={FooterLogo} alt="Logo" className='footerlogo' />
          </div>
        </div>
      </footer>














    </div>
  )
}

export default Home