import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router';

// Component
import Home from './pages/Home';
import Property from './pages/Property';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/properties" component={Property} />
      </Switch>
    </Router>
  );
};

export default Routes;
