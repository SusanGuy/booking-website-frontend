// Services
import { validateToken, authenticateWithGoogle } from '../services/api';
import {
  validateUserAuthenticationToken,
  storeUserCredentials,
} from '../services/localStorage';

export const AUTH_LOGIN = 'auth/AUTH_LOGIN';
export const AUTH_LOGOUT = 'auth/AUTH_LOGOUT';
export const AUTH_SUCCESS = 'auth/AUTH_SUCCESS';
export const AUTH_FAILURE = 'auth/AUTH_FAILURE';

const delay = (time = 1500) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(time);
    }, time);
  });
};

export const login = async dispatch => {
  dispatch({ type: AUTH_LOGIN });

  try {
    const token = await validateUserAuthenticationToken();
    const response = await validateToken(token);
    const { data } = await response.json();

    dispatch({ type: AUTH_SUCCESS, payload: data.length > 0 ? data[0] : null });
  } catch (err) {
    dispatch({
      type: AUTH_FAILURE,
      payload: 'Failed authenticating user. ' + err,
    });
  }
};

export const loginWithGoogleToken = async ({ dispatch, accessToken }) => {
  dispatch({ type: AUTH_LOGIN });

  try {
    const response = await authenticateWithGoogle(accessToken);
    const token = await response.headers.get('x-auth-token');
    const result = await response.json();

    if (!result.err) {
      dispatch({ type: AUTH_SUCCESS, payload: result });
      storeUserCredentials(token);
    } else {
      dispatch({
        type: AUTH_FAILURE,
        payload: 'Failed to authenticate. ' + result.err,
      });
    }
  } catch (err) {
    dispatch({ type: AUTH_FAILURE, payload: 'Failed to authenticate. ' + err });
  }
};

export const logout = async dispatch => {
  dispatch({ type: AUTH_LOGOUT });
  await delay(2000);
  dispatch({ type: AUTH_SUCCESS });
};
