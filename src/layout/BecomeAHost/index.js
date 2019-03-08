import React from 'react';
import { Route } from 'react-router-dom';

// Styles
import './becomeAHost.css';

// Assets
import backgrounds from '../../shared/backgrounds';

// Components
import StepBar from '../../components/StepBar';

const BecomeAHostLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <div className="BecomeAHostLayout">
          <div
            className="BecomeAHostLayout-bg"
            style={{
              backgroundImage: `url(${backgrounds.forestLandscape})`,
            }}
          />
          <div className="BecomeAHostLayout--hover" />
          <StepBar />
          <Component {...matchProps} />
        </div>
      )}
    />
  );
};

BecomeAHostLayout.defaultProps = {
  theme: 'main',
  paddingHorizontal: 80,
  paddingVertical: 10,
};

export default BecomeAHostLayout;
