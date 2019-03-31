import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// Styles
import './content.css';

// Actions
import * as themeActions from '../../actions/theme';

const Content = ({ children, theme, setTheme }) => {
  useEffect(() => {
    setTimeout(() => {
      setTheme(theme);
    }, 100);
  });

  return (
    <div className={['Content', theme === 'white' ? '' : 'inverted'].join(' ')}>
      {children}
    </div>
  );
};

Content.defaultProps = {
  theme: 'main',
};

const actionCreators = {
  setTheme: themeActions.setTheme,
};

export default connect(
  null,
  actionCreators
)(Content);
