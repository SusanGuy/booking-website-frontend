import React from 'react';

import './CustomBackgroundLayout.css';

const CustomBackgroundLayout = ({
  children,
  theme,
  paddingHorizontal,
  paddingVertical,
}) => {
  return (
    <div
      className="CustomBackgroundLayout"
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

CustomBackgroundLayout.defaultProps = {
  theme: 'main',
  paddingHorizontal: 80,
  paddingVertical: 10,
};

export default CustomBackgroundLayout;
