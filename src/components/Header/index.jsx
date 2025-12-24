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




const Header = ({ cartCount, onOpenCart }) => {
  const isScrolled = useHeaderScroll(980)
  const [menuOpen, setMenuOpen] = useState(false)
  const isLoggedIn = !!localStorage.getItem('userToken')
  const handleLogout = () => {

    if (window.confirm("确定要退出当前的登录状态吗？")) {
      localStorage.removeItem('userToken');

      window.location.reload();
    }
  }

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <>
      <header className={`home-header ${isScrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-is-open' : ''}`}>
        { }
        <div className="header-left" onClick={() => setMenuOpen(true)}>
          <img src={MenuIcon} alt="menu" className="header-icon" />
          <span className="menu-text2">MENU</span>
        </div>

        { }
        <div className="header-center" onClick={scrollToTop}>
          <div className="logo-box">
            <img src={Logo} alt="logo" />
          </div>
        </div>

        { }
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

              <div
                className="user-logged-in-trigger"
                onClick={handleLogout}
                title="已登录 - 点击退出"
              >
                <img src={UserIcon} alt="user" className="header-icon logged-in" />
                { }
                <span className="online-status"></span>
              </div>
            ) : (

              <Link to="/login" title="去登录">
                <img src={UserIcon} alt="user" className="header-icon" />
              </Link>
            )}
          </div>

          { }
          <div className="header-cart-wrapper" onClick={onOpenCart}>
            <img src={CartIcon} alt="cart" className="header-icon" />

            { }
            {cartCount > 0 && (
              <span className="cart-badge">
                {cartCount}
              </span>
            )}
          </div>

        </div>
      </header>

      { }
      {menuOpen && <Menu onClose={() => setMenuOpen(false)} />}
    </>
  )
}

export default Header