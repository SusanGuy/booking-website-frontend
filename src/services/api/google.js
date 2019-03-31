import request from './request';

export function fetchGooglePlaces(endpoint, input) {
  const options = {
    body: JSON.stringify({ place: input }),
  };

  return request(`/google/places/${endpoint}`, options);
}
