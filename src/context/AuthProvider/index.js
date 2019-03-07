import React, { createContext, useEffect, setGlobal, useGlobal } from 'reactn';

// Reducer
import { authInitialState } from '../../reducers/auth';
import authReducer from '../../reducers/auth';

// Actions
import * as authActions from '../../actions/auth';

// ContextAPI
const AuthContext = createContext();

// Global state
setGlobal({
  ...authInitialState,
  mobileMenuExpanded: false,
  theme: 'main',
  profileMenu: false,
  isMobileWidth: window.innerWidth <= 992,
});

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useGlobal(authReducer);

  // Analogous to ComponentDidMount
  useEffect(() => {
    setTimeout(() => {
      authActions.login(dispatch);
    }, 1000);
  });

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};

export { AuthProvider };

export default AuthContext;
