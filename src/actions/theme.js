export const THEME_SET = 'theme/THEME_SET';

export const setTheme = async (theme, dispatch) => {
  dispatch({ type: THEME_SET, payload: theme });
};
