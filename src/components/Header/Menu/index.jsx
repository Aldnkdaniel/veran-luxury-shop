import React, { useState } from 'react'
import CloseBtn from '../../../assets/header-close-btn.svg'
import './index.css'
import { MENU_DATA } from '../../../constants/menuConfig';
import { Link } from 'react-router-dom';





const Menu = ({ onClose }) => {
  const [activeBrand, setActiveBrand] = useState(Object.keys(MENU_DATA)[0]);


  return (
    <div className="menu-root">
      <div className="menu-drawer">
        {/* Header 部分 */}
        <div className="menu-header">
          <div className="menu-close" onClick={onClose}><img src={CloseBtn} alt="close" /></div>
          <span className="menu-close-text">Close</span>
        </div>

        <div className="menu-content">
          {/* 左侧：品牌列表 */}
          <div className="menu-brands">
            <ul className="menu-list">
              {Object.keys(MENU_DATA).map((brand) => (
                <li
                  key={brand}
                  className={activeBrand === brand ? 'active' : ''}
                  onMouseEnter={() => setActiveBrand(brand)}
                >
                  <span className="menu-text">{brand}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 右侧：二级菜单（动态渲染） */}
          <div className="menu-sub-container">
            <SubMenuList activeBrand={activeBrand} onClose={onClose} />
          </div>
        </div>
      </div>
      <div className='menu-overlay' onClick={onClose} />
    </div>
  )
}

const SubMenuList = ({ activeBrand, onClose }) => (
  <ul className='menu-sub-list' key={activeBrand}>
    {MENU_DATA[activeBrand].map((item, index) => (
      <li key={item} style={{ '--delay':index }}>
        <Link
          to='/products'
          onClick={onClose}
          className='menu-sub-link'
        >
        {item}
        </Link>
        
      </li>
    ))}
  </ul>
)

export default Menu