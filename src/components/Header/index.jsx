import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/header-logo.svg'
import MenuIcon from '../../assets/menu-svgrepo-com.svg'
import UserIcon from '../../assets/user-circle.svg'
import CartIcon from '../../assets/shopping-cart-simple.svg'
import HomeBtn from '../../assets/home.svg'
import Menu from '../Menu'
import SearchBar from '../SearchBar'
import './index.css'
import { useHeaderScroll } from '../../hooks/useHeaderScroll'




const Header = ( { cartCount, onOpenCart } ) => {
  const isScrolled = useHeaderScroll(980)
  const [menuOpen, setMenuOpen] = useState(false)
  const isLoggedIn = !!localStorage.getItem('userToken')
  const handleLogout = () => {
    // 增加一个优雅的确认，符合总裁的沉稳气质
    if (window.confirm("确定要退出当前的登录状态吗？")) {
      localStorage.removeItem('userToken');
      // 刷新页面，让 App 重新计算 isLoggedIn 并重置 UI
      window.location.reload();
    }
  }

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <>
      <header className={`home-header ${isScrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-is-open' : ''}`}>
        {/* 左侧：菜单按钮 */}
        <div className="header-left" onClick={() => setMenuOpen(true)}>
          <img src={MenuIcon} alt="menu" className="header-icon" />
          <span className="menu-text2">MENU</span>
        </div>

        {/* 中间：Logo */}
        <div className="header-center" onClick={scrollToTop}>
          <div className="logo-box">
            <img src={Logo} alt="logo" />
          </div>
        </div>

        {/* 右侧：搜索/用户/购物车 */}
        <div className="header-right">
          <SearchBar />

          <Link to="/" className="action-item home-icon-link">
            <img 
              src={HomeBtn} 
              alt="Home" 
              className='header-icon'
            />
          </Link>
          
          <div className="action-item user-wrapper">
            {isLoggedIn ? (
              // 情况 A：已登录，点击头像触发退出
              <div 
                className="user-logged-in-trigger" 
                onClick={handleLogout}
                title="已登录 - 点击退出"
              >
                <img src={UserIcon} alt="user" className="header-icon logged-in" />
                {/* 可选：加一个呼吸灯小点表示在线 */}
                <span className="online-status"></span>
              </div>
            ) : (
              // 情况 B：未登录，点击跳转到 Login 页
              <Link to="/login" title="去登录">
                <img src={UserIcon} alt="user" className="header-icon" />
              </Link>
            )}
          </div>
          
          {/* 购物车区域：点击执行 onOpenCart */}
          <div className="header-cart-wrapper" onClick={onOpenCart}>
            <img src={CartIcon} alt="cart" className="header-icon" />
            
            {/* 小红点：只有数量 > 0 才显示 */}
            {cartCount > 0 && (
              <span className="cart-badge">
                {cartCount}
              </span>
            )}
          </div>

        </div>
      </header>

      {/* 菜单弹窗 */}
      {menuOpen && <Menu onClose={() => setMenuOpen(false)} />}
    </>
  )
}

export default Header