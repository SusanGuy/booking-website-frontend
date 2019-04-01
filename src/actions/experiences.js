export const BOOKINGDATES_SET_MODAL = 'experiences/BOOKINGDATES_SET_MODAL';
export const EXPERIENCE_SET = 'experiences/EXPERIENCE_SET';

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
