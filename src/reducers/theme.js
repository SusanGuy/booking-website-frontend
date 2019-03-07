import { THEME_SET } from '../actions/theme';

const themeInitialState = {
  themeLoading: false,
  theme: '',
};

const reducer = (state = themeInitialState, action) => {
  switch (action.type) {
    case THEME_SET:
      return { ...state, themeLoading: true, theme: action.payload };
    default:
      return state;
  }
};

export { themeInitialState };

export default reducer;
