const url =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5000'
    : 'http://bookingapp-dev.ptewmmpyuh.ca-central-1.elasticbeanstalk.com';

function request(endpoint, options) {
  return fetch(`${url}${endpoint}`, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      ...options.headers,
    },
    mode: 'cors',
    cache: 'default',
    ...options,
  });
}

export function validateToken(token) {
  const options = {
    method: 'POST',
    body: JSON.stringify({ token }),
  };

  return request('/auth/verify', options);
}

export function authenticateWithGoogle(accessToken) {
  const tokenBlob = new Blob(
    [JSON.stringify({ access_token: accessToken }, null, 2)],
    { type: 'application/json' }
  );

  const options = {
    method: 'POST',
    body: tokenBlob,
  };

  return request('/auth/google', options);
}

export function fetchGooglePlaces(endpoint, input) {
  const options = {
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ place: input }),
  };

  return request(`/google/places/${endpoint}`, options);
}
