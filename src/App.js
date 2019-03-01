import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Components
import Routes from './routes';

// Components
import MenuContentLayout from './layout/MenuContent';

// Context
import { ConfigProvider } from './context/ConfigProvider';

const App = () => {
  return (
    <Router>
      <ConfigProvider>
        <MenuContentLayout>
          <Routes />
        </MenuContentLayout>
      </ConfigProvider>
    </Router>
  );
};

export default App;
