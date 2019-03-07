import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import BecomeAHost from '../pages/BecomeAHost';

// Layouts
import CustomBackgroundLayout from '../layout/CustomBackground';

const Routes = () => {
  return (
    <CustomBackgroundLayout>
      <Route path="/become-a-host" component={BecomeAHost} />
    </CustomBackgroundLayout>
  );
};

export default Routes;
