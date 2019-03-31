import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

// Actions
import * as authActions from './actions/auth';

// Components
import Routes from './routes';

const App = ({ loginOnLoad }) => {
  useEffect(() => {
    setTimeout(() => loginOnLoad().catch(err => console.log('err', err), 100));
  });

  return (
    <Router>
      <Routes />
    </Router>
  );
};

const actionCreators = {
  loginOnLoad: authActions.loginOnLoad,
};

export default connect(
  null,
  actionCreators
)(App);
