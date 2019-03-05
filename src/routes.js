import React from 'react';
import { Route, Switch } from 'react-router';

// Component
import Home from './pages/Home/HomeContainer';
import Property from './pages/Property';
import Login from './pages/Login';
import About from './pages/About';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/property" component={Property} />
      <Route path="/login" component={Login} />
      <Route path="/about" component={About} />
    </Switch>
  );
};

export default Routes;
