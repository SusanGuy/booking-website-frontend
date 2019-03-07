import React from 'react';

// Styles
import './content.css';

// ContextAPI
import ConfigProvider from '../../context/ConfigProvider';

const Content = ({ children, theme }) => {
  return (
    <ConfigProvider>
      {({ setTheme }) => {
        setTimeout(() => {
          setTheme(theme);
        }, 1000);

        return (
          <div
            className={['Content', theme === 'white' ? '' : 'inverted'].join(
              ' '
            )}
          >
            {children}
          </div>
        );
      }}
    </ConfigProvider>
  );
};

Content.defaultProps = {
  theme: 'main',
};

export default Content;
