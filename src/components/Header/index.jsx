import React, { useState } from 'react'
import Logo from '../../assets/header-logo.svg'
import MenuIcon from '../../assets/menu-svgrepo-com.svg'
import UserIcon from '../../assets/user-circle.svg'
import CartIcon from '../../assets/shopping-cart-simple.svg'
import Menu from './Menu'
import SearchBar from './SearchBar'
import './index.css'
import { useHeaderScroll } from '../../hooks/useHeaderScroll'

const Header = () => {
  const isScrolled = useHeaderScroll(980) // 超过980px变白底
  const [menuOpen, setMenuOpen] = useState(false)

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
          <img src={UserIcon} alt="user" className="header-icon" />
          <img src={CartIcon} alt="cart" className="header-icon" />
        </div>
      </header>

      {/* 菜单弹窗 */}
      {menuOpen && <Menu onClose={() => setMenuOpen(false)} />}
    </>
  )
}

export default Header