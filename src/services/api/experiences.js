import request from './request';

// Mockdata
import mockExperiences from '../../data/experiences';

export function fetchExperience(experienceId) {
  /* const options = {
    method: 'GET',
    body: JSON.stringify({ id: experienceId }),
  };

  return request(`/area/${experienceId}`, options); */

  let result = mockExperiences.filter(experience => {
    return experience.id === parseInt(experienceId);
  });

  return result[0];
}
