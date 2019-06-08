export const SCHEDULE_FETCH_INIT = 'schedule/SCHEDULE_FETCH_INIT';
export const SCHEDULE_FETCH_SUCCESS = 'schedule/SCHEDULE_FETCH_SUCCESS';
export const SCHEDULE_FETCH_FAILURE = 'schedule/SCHEDULE_FETCH_FAILURE';

export function fetchSchedules(experienceId) {
  return async (dispatch, getState, { api }) => {
    dispatch({ type: SCHEDULE_FETCH_INIT });

    try {
      let schedule = await api.schedule.fetchSchedules(experienceId);

      dispatch({ type: SCHEDULE_FETCH_SUCCESS, payload: schedule });
    } catch (err) {
      dispatch({ type: SCHEDULE_FETCH_FAILURE, payload: err.message });
    }
  };
}
