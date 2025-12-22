import React from 'react'
import { Link } from 'react-router-dom'
import CloseBtn from '../../../assets/header-close-btn.svg'
import './index.css'
import { MENU_DATA } from '../../../constants/menuConfig';

const Menu = ({ onClose }) => {
  return (
    <div className="menu-root">
      <div className="menu-drawer">
        
        {/* Header: 关闭按钮 */}
        <div className="menu-header">
          <div className="menu-close" onClick={onClose}>
            <img src={CloseBtn} alt="close" />
          </div>
          <span className="menu-close-text">Close</span>
        </div>

        {/* Content: 单列垂直菜单 */}
        <div className="menu-content-single">
          <ul className="menu-list-single">
            {MENU_DATA.map((item, index) => (
              // style={{ '--delay': index }} 是为了让菜单一项一项弹出来
              <li key={item.category || index} style={{ '--delay': index }}>
                <Link 
                  to={item.path}
                  className="menu-link-large"
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>
      
      {/* 遮罩层 */}
      <div className='menu-overlay' onClick={onClose} />
    </div>
  )
}

export default Menu