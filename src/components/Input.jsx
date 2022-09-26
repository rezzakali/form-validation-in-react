import React, { useState } from 'react';
import './styles/input.css';

const Input = (props) => {
  const [focused, setFocused] = useState(false);
  const { id, label, errorMessage, onChange, className, ...inputProps } = props;
  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div className="mb-3">
      <label htmlFor={label}>{label}</label>
      <input
        {...inputProps}
        className={className}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
        onFocus={() =>
          inputProps.name === 'confirmPassword' && setFocused(true)
        }
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default Input;
