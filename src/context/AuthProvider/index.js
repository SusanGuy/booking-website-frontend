import React, { createContext } from 'react';

// Services
import { validateToken } from '../../services/api';
import { validateUserAuthenticationToken } from '../../services/localStorage';

// ContextAPI
const AuthContext = createContext();

class AuthProvider extends React.Component {
  state = {
    user: {},
  };

  componentDidMount() {
    validateUserAuthenticationToken()
      .then(token => {
        return validateToken(token);
      })
      .then(res => res.json())
      .then(result => {
        this.setUser(result.data[0]);
      })
      .catch(err => {
        // TOODO: Gracefully handle authenticated user
        console.log('User not authenticated. ', err);
      });
  }

  setUser = user => [
    this.setState({
      user,
    }),
  ];

  render() {
    const {
      setUser,
      state: { user },
      props: { children },
    } = this;

    return (
      <AuthContext.Provider
        value={{
          user,
          setUser,
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  }
}

export { AuthProvider };

export default AuthContext;
