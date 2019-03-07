import React from 'react';
import { connect } from 'react-redux';

// Selectors
import * as authSelectors from '../../reducers/auth';

// Styles
import './menuContent.css';

// Assets
import backgrounds from '../../shared/backgrounds';

// Components
import NavBar from '../../components/NavBar';
import TopFixedBar from '../../components/TopFixedBar';

const MenuContent = ({ children, user }) => {
  return (
    <div className="MenuContent">
      <div
        className="MenuContent-bg"
        style={{
          backgroundImage: `url(${backgrounds.landscape})`,
        }}
      />
      <div className="MenuContent--hover" />

      <NavBar />
      <TopFixedBar />
      {children}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    user: authSelectors.getUser(state),
  };
}

export default connect(mapStateToProps)(MenuContent);
