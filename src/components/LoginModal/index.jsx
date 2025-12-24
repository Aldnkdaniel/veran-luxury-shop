// src/components/LoginModal/index.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css'; // 引入你刚才拆出去的样式
import Logo from '../../../public/web-logo.webp'

const LoginModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  
  // 如果不开启，直接不渲染（性能优化）
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="login-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>✕</button>
        
        <div className="modal-body">
          <div className="modal-icon">
            <img src={Logo} alt="logo" className='logo-login' />
          </div>
          <h3>欢迎来到 VERAN</h3>
          <p>登录后即可将心仪商品加入购物车，开启您的定制之旅。</p>
          
          <div className="modal-actions">
            <button className="secondary-action" onClick={onClose}>
              再看看
            </button>
            <button className="primary-action" onClick={() => {
              onClose();
              navigate('/login');
            }}>
              立即登录
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;