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
        console.log('result.data[0]', result.data[0]);
        this.setUser(result.data[0]);
      })
      .catch(err => {
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

    console.log('user', user);

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
