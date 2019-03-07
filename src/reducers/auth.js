import {
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_SUCCESS,
  AUTH_FAILURE,
} from '../actions/auth';

const authInitialState = {
  authLoading: false,
  error: '',
  user: null,
};

const reducer = (state = authInitialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return { ...state, authLoading: true };
    case AUTH_LOGOUT:
      return { ...state, authLoading: true };
    case AUTH_SUCCESS:
      return { ...state, user: action.payload, authLoading: false };
    case AUTH_FAILURE:
      return { ...state, error: action.payload, authLoading: false };
    default:
      return state;
  }
};

export { authInitialState };

export default reducer;
