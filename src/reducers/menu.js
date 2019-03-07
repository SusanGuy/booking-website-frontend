import {
  MENU_SET_MOBILE_EXPAND,
  MENU_SET_PROFILE_EXPAND,
  MENU_SET_FIXED_BAR,
} from '../actions/menu';

const menuInitialState = {
  mobileMenuExpanded: false,
  profileMenuExpanded: false,
  fixedBar: {
    opened: false,
    message: '',
  },
};

const reducer = (state = menuInitialState, action) => {
  switch (action.type) {
    case MENU_SET_MOBILE_EXPAND:
      return {
        ...state,
        mobileMenuExpanded: action.payload,
      };
    case MENU_SET_PROFILE_EXPAND:
      return {
        ...state,
        profileMenuExpanded: action.payload,
      };
    case MENU_SET_FIXED_BAR:
      const { opened, message } = action.payload;

      return {
        ...state,
        fixedBar: {
          ...state.fixedBar,
          opened,
          message,
        },
      };
    default:
      return state;
  }
};

function select(state) {
  return state.menu;
}

export function mobileMenuExpanded(state) {
  return select(state).mobileMenuExpanded;
}

export function profileMenuExpanded(state) {
  return select(state).profileMenuExpanded;
}

export function getFixedBar(state) {
  return select(state).fixedBar;
}

export default reducer;
