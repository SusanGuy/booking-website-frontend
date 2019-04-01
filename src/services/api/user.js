import request from './request';

export function get(id) {
  const options = {
    method: 'GET',
  };

  return request(`/user/${id}`, options);
}

export function update(id, props) {
  const options = {
    body: JSON.stringify(props),
    method: 'PUT',
  };

  return request(`/user/${id}`, options);
}
