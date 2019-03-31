export const AUTH_SET_LOGIN_MODAL = 'auth/AUTH_SET_LOGIN_MODAL';
export const AUTH_LOGIN = 'auth/AUTH_LOGIN';
export const AUTH_LOGOUT = 'auth/AUTH_LOGOUT';
export const AUTH_SUCCESS = 'auth/AUTH_SUCCESS';
export const AUTH_FAILURE = 'auth/AUTH_FAILURE';

export const AUTH_SIGNUP = 'auth/AUTH_SIGNUP';
export const AUTH_SIGNUP_SUCCESS = 'auth/AUTH_SIGNUP_SUCCESS';
export const AUTH_SIGNUP_FAILURE = 'auth/AUTH_SIGNUP_FAILURE';

const delay = (time = 1500) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(time);
    }, time);
  });
};

const errorMessage = message => {
  return `Failed to authenticate. ${JSON.stringify(message)}`;
};

/**
 * Signup
 */
export const signup = params => {
  return async (dispatch, getState, { api }) => {
    return new Promise(async (resolve, reject) => {
      dispatch({ type: AUTH_SIGNUP });

      try {
        const response = await api.auth.signup(params);
        const { data } = await response.json();

        resolve(data);
      } catch (err) {
        reject(errorMessage(err));
      }
    });
  };
};

/**
 * Login
 */
export const login = e => {
  return async (dispatch, getState, { api }) => {
    return new Promise(async (resolve, reject) => {
      e.preventDefault();

      dispatch({ type: AUTH_LOGIN });

      const email = e.target.email.value;
      const password = e.target.password.value;

      try {
        const response = await api.auth.login(email, password);
        const { data } = await response.json();

        dispatch({
          type: AUTH_SUCCESS,
          payload: data,
        });
        resolve();
      } catch (err) {
        dispatch({
          type: AUTH_FAILURE,
          payload: errorMessage(err),
        });
        reject(errorMessage(err));
      }
    });
  };
};

/**
 * Login attempt on page load
 */
export const loginOnLoad = () => {
  return async (dispatch, getState, { api, localStorage }) => {
    return new Promise(async (resolve, reject) => {
      dispatch({ type: AUTH_LOGIN });

      try {
        const token = await localStorage.validateUserAuthenticationToken();
        const response = await api.auth.validateToken(token);
        const { data } = await response.json();

        dispatch({
          type: AUTH_SUCCESS,
          payload: data.length > 0 ? data[0] : null,
        });
        resolve(data);
      } catch (err) {
        dispatch({
          type: AUTH_FAILURE,
          payload: errorMessage(err),
        });
        reject(errorMessage(err));
      }
    });
  };
};

export const setLoginModal = isloginModalOpen => {
  return dispatch => {
    dispatch({ type: AUTH_SET_LOGIN_MODAL, payload: isloginModalOpen });
  };
};

export const loginWithGoogleToken = accessToken => {
  return async (dispatch, getState, { api, localStorage }) => {
    return new Promise(async (resolve, reject) => {
      dispatch({ type: AUTH_LOGIN });

      try {
        const response = await api.auth.authenticateWithGoogle(accessToken);
        const token = await response.headers.get('x-auth-token');
        const result = await response.json();

        if (!result.err) {
          dispatch({ type: AUTH_SUCCESS, payload: result });
          localStorage.storeUserCredentials(token);
          resolve(result);
        } else {
          dispatch({
            type: AUTH_FAILURE,
            payload: errorMessage(result.err),
          });
          reject(errorMessage(result.err));
        }
      } catch (err) {
        dispatch({
          type: AUTH_FAILURE,
          payload: errorMessage(err.message),
        });
        reject(errorMessage(err.message));
      }
    });
  };
};

export const logout = () => {
  return async (dispatch, getState, { localStorage }) => {
    dispatch({ type: AUTH_LOGOUT });
    await localStorage.storeUserCredentials(null);
    dispatch({ type: AUTH_SUCCESS, payload: null });
  };
};
