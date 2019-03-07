import React from 'react';
import { Route, Switch } from 'react-router';

// Component
import Home from './pages/Home/HomeContainer';
import Login from './pages/Login';
import About from './pages/About';
import Query from './pages/Query';
import Experiences from './pages/Experiences/ExperiencesContainer';
import AuthenticatedPages from './pages/AuthenticatedPages';

// Layout
import MenuContentLayout from './layout/MenuContent';

const Routes = () => {
  console.log('rerouting');

  return (
    <MenuContentLayout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/about" component={About} />
        <Route path="/s/:region" component={Query} />
        <Route path="/experiences/:id" component={Experiences} />
        <Route component={AuthenticatedPages} />
      </Switch>
    </MenuContentLayout>
  );
};

export default Routes;
