import React, { useGlobal } from 'reactn';

// Styles
import './content.css';

// Actions
import * as themeActions from '../../actions/theme';

// Reducer
import reducers from '../../reducers';
import { useEffect } from 'react';

const Content = ({ children, theme }) => {
  const [, dispatch] = useGlobal(reducers);

  useEffect(() => {
    setTimeout(() => {
      themeActions.setTheme(theme, dispatch);
    }, 500);
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

export default Content;
