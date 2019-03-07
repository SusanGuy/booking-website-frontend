import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';

// Selectors
import * as authSelectors from '../../reducers/auth';

// Page
import HostWildLife from '../Host/Wildlife';

const AuthenticatedPages = ({ user }) => {
  if (!user) {
    return <Redirect to="/login" />;
  }

  return (
    <Switch>
      <Route to="/host/wildlife" component={HostWildLife} />
    </Switch>
  );
};

function mapStateToProps(state) {
  return {
    user: authSelectors.getUser(state),
  };
}

export default connect(mapStateToProps)(AuthenticatedPages);
