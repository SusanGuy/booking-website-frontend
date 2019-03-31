const url =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5000'
    : 'http://bookingapp-dev.ptewmmpyuh.ca-central-1.elasticbeanstalk.com';

export const request = (endpoint, options) => {
  return fetch(`${url}${endpoint}`, {
    method: options.method ? options.method : 'POST',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      ...options.headers,
    },
    mode: 'cors',
    cache: 'default',
    ...options,
  });
};

export default request;
