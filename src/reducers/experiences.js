import { BOOKINGDATES_SET_MODAL, EXPERIENCE_SET } from '../actions/experiences';

const initialState = { isOpen: false, experience: {} };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOKINGDATES_SET_MODAL:
      return {
        ...state,
        isOpen: action.payload,
      };
    case EXPERIENCE_SET:
      return {
        ...state,
        experience: action.payload,
      };
    default:
      return state;
  }
};

function select(state) {
  return state.experiences;
}

export function isOpen(state) {
  return select(state).isOpen;
}

export function getExperience(state) {
  return select(state).experience;
}

export default reducer;
