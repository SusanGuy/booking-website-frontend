import React from 'react';

const Layout = ({ children, title }) => {
  return (
    <div className="EditContent">
      <div className="EditContent--header">{title}</div>
      <div className="EditContent--content">{children}</div>
    </div>
  );
};

export default Layout;
