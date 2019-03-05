import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// Context API
import Consumer from '../../context/ConfigProvider';

// Page
import HostWildLife from '../Host/Wildlife';

const AuthenticatedPages = () => {
  return (
    <Consumer>
      {({ isAuthenticated }) => {
        if (!isAuthenticated) {
          return <Redirect to="/login" />;
        }

        return (
          <Switch>
            <Route to="/host/wildlife" component={HostWildLife} />
          </Switch>
        );
      }}
    </Consumer>
  );
};

export default AuthenticatedPages;
