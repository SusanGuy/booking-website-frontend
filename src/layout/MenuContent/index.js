import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

// Selectors
import * as authSelectors from '../../reducers/auth';

// Styles
import './menuContent.css';

// Assets
import backgrounds from '../../shared/backgrounds';

// Components
import NavBar from '../../components/NavBar';

const MenuContent = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <div className="MenuContent">
          <div
            className="MenuContent-bg"
            style={{
              backgroundImage: `url(${backgrounds.landscape})`,
            }}
          />
          <div className="MenuContent--hover" />

          <NavBar />
          <Component {...matchProps} />
        </div>
      )}
    />
  );
};

function mapStateToProps(state) {
  return {
    user: authSelectors.getUser(state),
  };
}

export default connect(mapStateToProps)(MenuContent);
