export const BOOKINGDATES_SET_MODAL = 'experiences/BOOKINGDATES_SET_MODAL';
export const EXPERIENCE_SET = 'experiences/EXPERIENCE_SET';

export const EXPERIENCE_FETCH_INIT = 'experiences/EXPERIENCE_FETCH_INIT';
export const EXPERIENCE_FETCH_SUCCESS = 'experiences/EXPERIENCE_FETCH_SUCCESS';
export const EXPERIENCE_FETCH_FAILURE = 'experiences/EXPERIENCE_FETCH_FAILURE';

export const setBookingDatesModal = isBookingDatesOpen => {
  return dispatch => {
    dispatch({ type: BOOKINGDATES_SET_MODAL, payload: isBookingDatesOpen });
  };
};

export const setExperience = experience => {
  return dispatch => {
    dispatch({ type: EXPERIENCE_SET, payload: experience });
  };
};

export const fetchExperience = experienceId => {
  return async (dispatch, getState, { api }) => {
    dispatch({ type: EXPERIENCE_FETCH_INIT });

    try {
      let experience = api.experiences.fetchExperience(experienceId);

      dispatch({ type: EXPERIENCE_FETCH_SUCCESS, payload: experience });
    } catch (err) {
      dispatch({ type: EXPERIENCE_FETCH_FAILURE, payload: err.message });
    }
  };
};
