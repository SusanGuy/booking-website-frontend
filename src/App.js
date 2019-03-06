import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Components
import Routes from './routes';

// Context
import { ConfigProvider } from './context/ConfigProvider';
import { AuthProvider } from './context/AuthProvider';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <ConfigProvider>
          <Routes />
        </ConfigProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
