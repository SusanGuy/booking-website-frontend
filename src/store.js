// Redux
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';

// Services
import * as services from './services';

// Reducers
import reducers from './reducers';

const middleware = [ReduxThunk.withExtraArgument(services)];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(...middleware))
);
