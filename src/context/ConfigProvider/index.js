import React, { useState, createContext } from 'react';
import windowSize from 'react-window-size';

// ContextAPI
const ConfigContext = createContext();

const ConfigProvider = windowSize(({ children, windowWidth }) => {
  // State resposible to toggle the mobile version of the Menu
  const [mobileMenuExpanded, setMobileMenuExpanded] = useState(false);
  const [user, setUser] = useState(false);
  const [theme, setTheme] = useState('main');

  // Validate is screen width is less than 992px
  const isMobileWidth = windowWidth <= 992;

  return (
    <ConfigContext.Provider
      value={{
        theme,
        setTheme,
        mobileMenuExpanded,
        setMobileMenuExpanded,
        user,
        setUser,
        isMobileWidth,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
});

export { ConfigProvider };

export default ConfigContext;
