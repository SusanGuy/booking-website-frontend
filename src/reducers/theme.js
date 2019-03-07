import { THEME_SET } from '../actions/theme';

const themeInitialState = {
  theme: '',
};

const reducer = (state = themeInitialState, action) => {
  switch (action.type) {
    case THEME_SET:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};

function select(state) {
  return state.theme;
}

export function getTheme(state) {
  return select(state).theme;
}

export default reducer;
