import request from './request';

export function fetchUser(id) {
  const options = {
    method: 'GET',
  };

  return request(`/user/${id}`, options);
}
