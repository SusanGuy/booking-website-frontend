import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

// Actions
import * as authActions from './actions/auth';
import * as menuActions from './actions/menu';

// Components
import Routes from './routes';

const App = ({ login, setFixedBarOpened }) => {
  useEffect(() => {
    setTimeout(
      () =>
        login().catch(err => setFixedBarOpened({ opened: true, message: err })),
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
  login: authActions.login,
  setFixedBarOpened: menuActions.setFixedBarOpened,
};

export default connect(
  null,
  actionCreators
)(App);
