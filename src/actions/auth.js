import { USER_FETCH_FAILURE, USER_FETCH_SUCCESS } from './user';

export const AUTH_SET_LOGIN_MODAL = 'auth/AUTH_SET_LOGIN_MODAL';
export const AUTH_LOGIN = 'auth/AUTH_LOGIN';
export const AUTH_LOGOUT = 'auth/AUTH_LOGOUT';

export const AUTH_SIGNUP = 'auth/AUTH_SIGNUP';
export const AUTH_SIGNUP_SUCCESS = 'auth/AUTH_SIGNUP_SUCCESS';
export const AUTH_SIGNUP_FAILURE = 'auth/AUTH_SIGNUP_FAILURE';

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
          type: USER_FETCH_SUCCESS,
          payload: data,
        });
        resolve();
      } catch (err) {
        dispatch({
          type: USER_FETCH_FAILURE,
          payload: errorMessage(err.message),
        });
        reject(errorMessage(err.message));
      }
    });
  };
};

/**
 * Login attempt on page load
 */
export const loginOnLoad = () => {
  return async (dispatch, getState, { api, localStorage }) => {
    dispatch({ type: AUTH_LOGIN });

    try {
      const token = await localStorage.validateUserAuthenticationToken();
      const response = await api.auth.validateToken(token);
      const { data } = await response.json();

      return dispatch({
        type: USER_FETCH_SUCCESS,
        payload: data.length > 0 ? data[0] : null,
      });
    } catch (err) {
      return dispatch({
        type: USER_FETCH_FAILURE,
        payload: errorMessage(err.message),
      });
    }
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
          dispatch({ type: USER_FETCH_SUCCESS, payload: result });
          localStorage.storeUserCredentials(token);
          resolve(result);
        } else {
          dispatch({
            type: USER_FETCH_FAILURE,
            payload: errorMessage(result.err),
          });
          reject(errorMessage(result.err));
        }
      } catch (err) {
        dispatch({
          type: USER_FETCH_FAILURE,
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
    dispatch({ type: USER_FETCH_SUCCESS, payload: null });
  };
};
