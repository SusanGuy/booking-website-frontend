import React from 'react';
import { Switch } from 'react-router';

// Component
import Home from './pages/Home/HomeContainer';
import About from './pages/About';
import Query from './pages/Query';
import Experiences from './pages/Experiences/ExperiencesContainer';
import BecomeAHost from './pages/BecomeAHost';
import Login from './components/Login';

// Layout
import MenuContentLayout from './layout/MenuContent';
import BecomeAHostLayout from './layout/BecomeAHost';

const Routes = () => {
  return (
    <React.Fragment>
      <Switch>
        <MenuContentLayout exact path="/" component={Home} />
        <MenuContentLayout path="/about" component={About} />
        <MenuContentLayout path="/s/:region" component={Query} />
        <MenuContentLayout path="/experiences/:id" component={Experiences} />
        <BecomeAHostLayout path="/become-a-host" component={BecomeAHost} />
      </Switch>
      <Login />
    </React.Fragment>
  );
};

export default Routes;
