export const USER_UPDATE_INIT = 'user/USER_UPDATE_INIT';
export const USER_UPDATE_FAILURE = 'user/USER_UPDATE_FAILURE';

export const USER_FETCH_INIT = 'user/USER_FETCH_INIT';
export const USER_FETCH_SUCCESS = 'user/USER_FETCH_SUCCESS';
export const USER_FETCH_FAILURE = 'user/USER_FETCH_FAILURE';

export function fetchUser(id) {
  return async (dispatch, getState, { api }) => {
    dispatch({ type: USER_FETCH_INIT });

    try {
      let response = await api.user.get(id);
      let { data } = await response.json();

      if (data) {
        dispatch({ type: USER_FETCH_SUCCESS, payload: data[0] });
      } else {
        dispatch({ type: USER_FETCH_FAILURE, payload: 'No entry found' });
      }
    } catch (err) {
      dispatch({ type: USER_FETCH_FAILURE, payload: err.message });
    }
  };
}

export function updateUser(id, props) {
  return (dispatch, getState, { api }) => {
    return new Promise((resolve, reject) => {
      dispatch({ type: USER_UPDATE_INIT });

      try {
        api.user
          .update(id, props)
          .then(res => {
            return resolve(res);
          })
          .catch(err => {
            return reject(err);
          });
      } catch (err) {
        dispatch({ type: USER_UPDATE_FAILURE, payload: err });
        reject(err.message);
      }
    });
  };
}
