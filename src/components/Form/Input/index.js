import React from 'react';

import './input.css';

const Input = ({ onChange, label, ...rest }) => {
  return (
    <div className="Input">
      <label>{label}</label>
      <input onChange={e => onChange(e.target.value)} {...rest} />
    </div>
  );
};

export default Input;
