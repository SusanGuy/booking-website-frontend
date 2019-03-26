import {
  AUTH_SET_LOGIN_MODAL,
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_SUCCESS,
  AUTH_FAILURE,
} from '../actions/auth';

const authInitialState = {
  isMobileWidth: window.innerWidth <= 992,
  isMobileHeight: window.innerHeight <= 750,
  authLoading: false,
  user: null,
  isOpen: false,
};

const reducer = (state = authInitialState, action) => {
  switch (action.type) {
    case AUTH_SET_LOGIN_MODAL:
      return { ...state, isOpen: action.payload };
    case AUTH_LOGIN:
      return { ...state, authLoading: true };
    case AUTH_LOGOUT:
      return { ...state, authLoading: true };
    case AUTH_SUCCESS:
      return { ...state, user: action.payload, authLoading: false };
    case AUTH_FAILURE:
      return { ...state, user: null, authLoading: false };
    default:
      return state;
  }
};

function select(state) {
  return state.auth;
}

export function isMobileWidth(state) {
  return select(state).isMobileWidth;
}

export function isMobileHeight(state) {
  return select(state).isMobileHeight;
}

export function isOpen(state) {
  return select(state).isOpen;
}

export function authLoading(state) {
  return select(state).authLoading;
}

export function getUser(state) {
  return select(state).user;
}

export default reducer;
