import React from 'react';
import ReactDOM from 'react-dom';

// Assets
import './theme.css';
import './index.css';
import './assets/css/materialize.css';

// Store Setup
import { Provider } from 'react-redux';
import store from './store';

import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
