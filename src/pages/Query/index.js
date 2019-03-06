import React from 'react';

// Layout
import ContentLayout from '../../layout/Content';

// Styles
import './query.css';

// Context API
import ConfigContext from '../../context/ConfigProvider';

const Query = ({ match }) => {
  return (
    <ContentLayout>
      <ConfigContext.Consumer>
        {({ setTheme }) => {
          setTheme('white');
          return <div className="Query" />;
        }}
      </ConfigContext.Consumer>
    </ContentLayout>
  );
};

export default Query;
