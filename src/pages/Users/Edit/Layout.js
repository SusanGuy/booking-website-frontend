import React from 'react';

// Styles
import './layout.css';

const Layout = ({ children, title }) => {
  return (
    <div className="EditLayout">
      <div className="EditLayout--header">{title}</div>
      <div className="EditLayout--content">{children}</div>
    </div>
  );
};

export default Layout;
