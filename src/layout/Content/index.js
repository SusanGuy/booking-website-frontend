import React from 'react';

// Styles
import './content.css';

// ContextAPI
import ConfigProvider from '../../context/ConfigProvider';

const Content = ({ children, theme }) => {
  return (
    <ConfigProvider>
      {({ setTheme }) => {
        setTheme(theme);

        return <div className="Content">{children}</div>;
      }}
    </ConfigProvider>
  );
};

Content.defaultProps = {
  theme: 'main',
};

export default Content;
