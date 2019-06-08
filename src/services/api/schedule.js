import request from './request';

// Mockdata
import mockSchedules from '../../data/schedule';

export function fetchSchedule(experienceId) {
  /* const options = {
    method: 'GET',
    body: JSON.stringify({ id: experienceId }),
  };

  return request(`/area/${experienceId}`, options); */

  let result = mockSchedules.filter(schedule => {
    return schedule.experience_id === parseInt(experienceId);
  });

  return result[0];
}
