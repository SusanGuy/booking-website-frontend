import request from './request';

/**
 * @param {*} email
 * @param {*} password
 */
export function signup(params) {
  const options = {
    body: JSON.stringify(params),
  };

  return request(`/api/signup`, options);
}

/**
 * @param {String} email
 * @param {String} password
 */
export function login(email, password) {
  const options = {
    body: JSON.stringify({ email, password }),
  };

  return request(`/api/login`, options);
}

export function validateToken(token) {
  const options = {
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
    body: tokenBlob,
  };

  return request('/auth/google', options);
}
