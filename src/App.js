import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Components
import Routes from './routes';

// Context
import { ConfigProvider } from './context/ConfigProvider';

const App = () => {
  return (
    <Router>
      <ConfigProvider>
        <Routes />
      </ConfigProvider>
    </Router>
  );
};

export default App;
