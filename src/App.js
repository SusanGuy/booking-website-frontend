import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

// Actions
import * as authActions from './actions/auth';
import * as menuActions from './actions/menu';

// Components
import Routes from './routes';

const App = ({ loginOnLoad, setFixedBarOpened }) => {
  useEffect(() => {
    setTimeout(
      () =>
        loginOnLoad().catch(err =>
          setFixedBarOpened({ opened: true, message: err })
        ),
      1000
    );
  });

  return (
    <Router>
      <Routes />
    </Router>
  );
};

const actionCreators = {
  loginOnLoad: authActions.loginOnLoad,
  setFixedBarOpened: menuActions.setFixedBarOpened,
};

export default connect(
  null,
  actionCreators
)(App);
