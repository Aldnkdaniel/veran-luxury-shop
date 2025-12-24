import React from 'react';
import './index.css';

/**
 * 总裁，这是一个高复用的表单原子组件
 * @param {string} label - 输入框标签
 * @param {string} type - input 类型 (text, password, email)
 * @param {string} error - 校验错误信息（没有则为空）
 */
const FormField = ({ label, type, placeholder, value, onChange, error }) => {
  return (
    <div className={`form-field-container ${error ? 'has-error' : ''}`}>
      {label && <label className="field-label">{label}</label>}

      <div className="input-wrapper">
        <input
          type={type}
          className="field-input"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        { }
      </div>

      { }
      <div className="field-error-box">
        {error && <span className="field-error-msg">{error}</span>}
      </div>
    </div>
  );
};

export default FormField;