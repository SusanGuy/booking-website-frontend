import {
  USER_FETCH_INIT,
  USER_FETCH_SUCCESS,
  USER_FETCH_FAILURE,
} from '../actions/user';

const initialState = {
  error: '',
  isLoading: false,
  user: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_FETCH_INIT:
      return {
        ...state,
        isLoading: true,
      };
    case USER_FETCH_SUCCESS:
      return {
        ...state,
        isloading: false,
        user: action.payload,
      };
    case USER_FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

// Selectors
function select(state) {
  return state.user;
}

export function isLoading(state) {
  return select(state).isLoading;
}

export function getUser(state) {
  return select(state).user;
}

export function getErrorMessage(state) {
  return select(state).error;
}

export default reducer;
