export const THEME_SET = 'theme/THEME_SET';

export const setTheme = theme => {
  return dispatch => {
    dispatch({ type: THEME_SET, payload: theme });
  };
};
