import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// Context API
import AuthProvider from '../../context/AuthProvider';

// Page
import HostWildLife from '../Host/Wildlife';

const AuthenticatedPages = () => {
  return (
    <AuthProvider.Consumer>
      {({ user }) => {
        if (!user) {
          return <Redirect to="/login" />;
        }

        return (
          <Switch>
            <Route to="/host/wildlife" component={HostWildLife} />
          </Switch>
        );
      }}
    </AuthProvider.Consumer>
  );
};

export default AuthenticatedPages;
