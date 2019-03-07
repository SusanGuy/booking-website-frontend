import React from 'react';

// Styles
import './dropdownMenuItem.css';

const DropdownMenuItem = ({ title, iconUrl, children }) => {
  return (
    <div className="DropdownMenuItem">
      <div className="DropdownMenuItem--title">{title}</div>
      <div className="DropdownMenuItem--content">
        <div className="DropdownMenuItem--item">{children}</div>
        <div className="DropdownMenuItem--item">
          <img src={iconUrl} alt={title} />
        </div>
      </div>
    </div>
  );
};

export default DropdownMenuItem;
