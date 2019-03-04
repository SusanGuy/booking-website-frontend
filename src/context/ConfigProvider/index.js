import React, { useState, createContext } from 'react';
import windowSize from 'react-window-size';

// ContextAPI
const { Provider, Consumer } = createContext();

const ConfigProvider = windowSize(({ children, windowWidth }) => {
  // State resposible to toggle the mobile version of the Menu
  const [mobileMenuExpanded, setMobileMenuExpanded] = useState(false);

  // Validate is screen width is less than 992px
  const isMobileWidth = windowWidth <= 992;

  return (
    <Provider
      value={{
        mobileMenuExpanded,
        setMobileMenuExpanded,
        isMobileWidth,
      }}
    >
      {children}
    </Provider>
  );
});

export { ConfigProvider };

export default Consumer;
