export const USER_FETCH_INIT = 'user/USER_FETCH_INIT';
export const USER_FETCH_SUCCESS = 'user/USER_FETCH_SUCCESS';
export const USER_FETCH_FAILURE = 'user/USER_FETCH_FAILURE';

export const fetchUser = id => {
  return (dispatch, getState, { api }) => {
    dispatch({ type: USER_FETCH_INIT });
    const state = getState();

    console.log('getState', state);
  };
};
