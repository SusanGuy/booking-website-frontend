const url =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5000'
    : 'http://bookingapp-dev.ptewmmpyuh.ca-central-1.elasticbeanstalk.com';

function request(endpoint, options) {
  return fetch(`${url}${endpoint}`, {
    headers: {
      ...options.headers,
    },
    ...options,
  });
}

export function authenticateWithGoogle(accessToken) {
  const tokenBlob = new Blob(
    [JSON.stringify({ access_token: accessToken }, null, 2)],
    { type: 'application/json' }
  );

  const options = {
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: tokenBlob,
    mode: 'cors',
    cache: 'default',
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
