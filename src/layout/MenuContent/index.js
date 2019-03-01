import React from 'react';

// Styles
import './menuContent.css';

// Assets
import backgrounds from '../../shared/backgrounds';

// Components
import NavBar from '../../components/NavBar';

const MenuContent = ({ children }) => {
  return (
    <div
      className="MenuContent"
      style={{ backgroundImage: `url(${backgrounds.bg0})` }}
    >
      <NavBar />
      {children}
    </div>
  );
};

export default MenuContent;
