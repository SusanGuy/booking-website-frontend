import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Components
import Routes from './routes';

// Components
import MenuContentLayout from './layout/MenuContent';

const App = () => {
  return (
    <Router>
      <MenuContentLayout>
        <Routes />
      </MenuContentLayout>
    </Router>
  );
};

export default App;
