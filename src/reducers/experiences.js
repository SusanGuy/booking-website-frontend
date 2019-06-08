import {
  BOOKINGDATES_SET_MODAL,
  EXPERIENCE_SET,
  EXPERIENCE_FETCH_INIT,
  EXPERIENCE_FETCH_SUCCESS,
  EXPERIENCE_FETCH_FAILURE,
} from '../actions/experiences';

const initialState = {
  isOpen: false,
  isLoading: true,
  error: '',
  experience: {},
};

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
    case EXPERIENCE_FETCH_INIT:
      return {
        ...state,
        isLoading: true,
      };
    case EXPERIENCE_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        experience: action.payload,
      };
    case EXPERIENCE_FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
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
