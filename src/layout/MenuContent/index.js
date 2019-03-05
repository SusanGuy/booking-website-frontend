import React from 'react';

// Styles
import './menuContent.css';

// Assets
import backgrounds from '../../shared/backgrounds';

// Components
import NavBar from '../../components/NavBar';

// ContextAPI
import Consumer from '../../context/ConfigProvider';

const MenuContent = ({ children }) => {
  return (
    <Consumer>
      {({ authenticated }) => (
        <div className="MenuContent">
          <div
            className="MenuContent-bg"
            style={{
              backgroundImage: authenticated
                ? 'var(--theme-white)'
                : `url(${backgrounds.landscape})`,
            }}
          />
          <div className="MenuContent--hover" />

          <NavBar />
          {children}
        </div>
      )}
    </Consumer>
  );
};

export default MenuContent;
