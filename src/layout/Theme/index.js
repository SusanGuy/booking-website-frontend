import React from 'react';

import './theme.css';

const ThemeLayout = ({
  children,
  theme,
  paddingHorizontal,
  paddingVertical,
}) => {
  return (
    <div
      className="ThemeLayout"
      style={{
        backgroundColor: theme,
        paddingLeft: paddingHorizontal,
        paddingRight: paddingHorizontal,
        paddingTop: paddingVertical,
        paddingBottom: paddingVertical,
      }}
    >
      {children}
    </div>
  );
};

ThemeLayout.defaultProps = {
  theme: 'main',
  paddingHorizontal: 80,
  paddingVertical: 10,
};

export default ThemeLayout;
