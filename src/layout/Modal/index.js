import React from 'react';

// Styles
import './modal.css';

const Modal = ({ children }) => {
  return (
    <div className="Modal">
      <div className="Modal-content">{children}</div>
    </div>
  );
};

export default Modal;
