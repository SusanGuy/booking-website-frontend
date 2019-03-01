import React from 'react';
import { Route, Switch } from 'react-router';

// Component
import Home from './pages/Home';
import Property from './pages/Property';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/properties" component={Property} />
    </Switch>
  );
};

export default Routes;
