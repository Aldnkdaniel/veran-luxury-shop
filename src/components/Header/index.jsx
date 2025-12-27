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
// 之前定义的hook




const Header = ({ cartCount, onOpenCart }) => {
  const isScrolled = useHeaderScroll(980)
  const [menuOpen, setMenuOpen] = useState(false)
  const isLoggedIn = !!localStorage.getItem('userToken')
  //避免在 Props 传递或复杂的逻辑运算中产生隐式转换的 Bug 得到纯净的布尔值
  const handleLogout = () => {

    if (window.confirm("确定要退出当前的登录状态吗？")) {
      // 清除token
      localStorage.removeItem('userToken');
      //清除你的本地存储的数据
      window.location.reload();
    }
  }

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  //点击我的header上面的logo就会回到顶部 smooth平滑的回去 默认aoto是瞬移影响视觉

  return (
    <>
      <header className={`home-header ${isScrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-is-open' : ''}`}>
        {/* 左侧菜单 */}
        <div className="header-left" onClick={() => setMenuOpen(true)}>
          <img src={MenuIcon} alt="menu" className="header-icon" />
          <span className="menu-text2">MENU</span>
        </div>

        {/* 中间logo */}
        <div className="header-center" onClick={scrollToTop}>
          <div className="logo-box">
            <img src={Logo} alt="logo" />
          </div>
        </div>

        {/* 右侧功能 */}
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
              // 看你的token 等没登陆
              <div
                className="user-logged-in-trigger"
                onClick={handleLogout}
                title="已登录 - 点击退出"
              >
                <img src={UserIcon} alt="user" className="header-icon logged-in" />
                
                <span className="online-status"></span>
              </div>
            ) : (
                //没登录就去登录
              <Link to="/login" title="去登录">
                <img src={UserIcon} alt="user" className="header-icon" />
              </Link>
            )}
          </div>

          
          <div className="header-cart-wrapper" onClick={onOpenCart}>
            <img src={CartIcon} alt="cart" className="header-icon" />

            {/* 0的话不显示 */}
            {cartCount > 0 && (
              <span className="cart-badge">
                {cartCount}
              </span>
            )}
          </div>

        </div>
      </header>

      {/* 打开菜单和关闭菜单 */}
      {menuOpen && <Menu onClose={() => setMenuOpen(false)} />}
    </>
  )
}

export default Header