export const GOOGLE_FETCH_PLACES_INIT = 'google/GOOGLE_FETCH_PLACES_INIT';
export const GOOGLE_FETCH_PLACES_SUCCESS = 'google/GOOGLE_FETCH_PLACES_SUCCESS';
export const GOOGLE_FETCH_PLACES_FAILURE = 'google/GOOGLE_FETCH_PLACES_FAILURE';

export const fetchGooglePlaces = (endpoint, input) => {
  return (dispatch, getState, { api }) => {
    dispatch({ type: GOOGLE_FETCH_PLACES_INIT });

    return api.google.fetchGooglePlaces(endpoint, input);
  };
};
