function getLocalStorageItem(key) {
  return localStorage.getItem(key);
}

function setItem(key, value) {
  localStorage.setItem(key, value);
}

export function validateUserAuthenticationToken() {
  return new Promise((resolve, reject) => {
    let userToken = getLocalStorageItem('user-token');

    if (userToken) {
      return resolve(userToken);
    } else {
      return reject();
    }
  });
}

export function storeUserCredentials(token) {
  return setItem('user-token', token);
}
