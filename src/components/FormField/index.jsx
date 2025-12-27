import React from 'react';
import './index.css';

const FormField = ({ label, type, placeholder, value, onChange, error, name, id, autoComplete }) => {
  return (
    <div className={`form-field-container ${error ? 'has-error' : ''}`}>
      {label && <label className="field-label" htmlFor={id}>{label}</label>}

      <div className="input-wrapper">
        <input
          id={id} 
          name={name}
          type={type}
          autoComplete={autoComplete}
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