export const MENU_SET_MOBILE_EXPAND = 'menu/MENU_SET_MOBILE_EXPAND';

export const setMobileMenuExpanded = async (isExpanded, dispatch) => {
  dispatch({ type: MENU_SET_MOBILE_EXPAND, payload: isExpanded });
};
