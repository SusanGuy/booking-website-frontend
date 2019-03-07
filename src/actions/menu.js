export const MENU_SET_MOBILE_EXPAND = 'menu/MENU_SET_MOBILE_EXPAND';
export const MENU_SET_PROFILE_EXPAND = 'menu/MENU_SET_PROFILE_EXPAND';
export const MENU_SET_FIXED_BAR = 'menu/MENU_SET_FIXED_BAR';

/**
 * Set the state of the Mobile Expandable/Collapsible menu
 * @param {Boolean} isExpanded
 * @param {Function} dispatch
 */
export const setMobileMenuExpanded = isExpanded => {
  return async dispatch => {
    dispatch({ type: MENU_SET_MOBILE_EXPAND, payload: isExpanded });
  };
};

/**
 * Set the state of the Dropdown menu for the profile menu
 * @param {Boolean} isExpanded
 * @param {Function} dispatch
 */
export const setProfileMenuExpanded = isExpanded => {
  return dispatch => {
    dispatch({ type: MENU_SET_PROFILE_EXPAND, payload: isExpanded });
  };
};

/**
 * Set the state of the fixed top bar
 * @param {Boolean} fixedBarOpened
 */
export const setFixedBarOpened = ({ opened, message }) => {
  return dispatch => {
    dispatch({ type: MENU_SET_FIXED_BAR, payload: { opened, message } });
  };
};
