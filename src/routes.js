import React from 'react';
import { Route, Switch } from 'react-router';

// Component
import Home from './pages/Home/HomeContainer';
import Login from './pages/Login';
import About from './pages/About';
import AuthenticatedPages from './pages/AuthenticatedPages';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/about" component={About} />
      <Route component={AuthenticatedPages} />
    </Switch>
  );
};

export default Routes;
