import React, { useState, createContext } from 'react';

// ContextAPI
const { Provider, Consumer } = createContext();

const ConfigProvider = ({ children }) => {
  // State resposible to toggle the mobile version of the Menu
  const [mobileMenuExpanded, setMobileMenuExpanded] = useState(false);

  return (
    <Provider
      value={{
        mobileMenuExpanded,
        setMobileMenuExpanded,
      }}
    >
      {children}
    </Provider>
  );
};

export { ConfigProvider };

export default Consumer;
