import React from 'react';
import './index.css';

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
      
      </div>

   
      <div className="field-error-box">
        {error && <span className="field-error-msg">{error}</span>}
      </div>
    </div>
  );
};

export default FormField;