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
      {isMobileWidth => (
        <div
          className={['MenuContent', isMobileWidth ? 'collapsed' : ''].join(
            ' '
          )}
          style={{ backgroundImage: `url(${backgrounds.landscape})` }}
        >
          <div className="MenuContent--hover-alpha" />
          <NavBar />
          {children}
        </div>
      )}
    </Consumer>
  );
};

export default MenuContent;
