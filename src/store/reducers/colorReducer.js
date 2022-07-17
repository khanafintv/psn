import {
  ACTIVE_MENU_FALSE,
  ACTIVE_MENU_TRUE,
  BLUE_FALSE,
  BLUE_TRUE,
  FETCH_FILTERED_COLOR,
  FETCH_FILTERED_DARK,
  GREEN_FALSE,
  GREEN_TRUE,
  RED_FALSE,
  RED_TRUE,
  YELLOW_FALSE,
  YELLOW_TRUE,
} from '../types';

const initialState = {
  filteredColor: [],
  filteredDark: [],
  isRed: true,
  isGreen: true,
  isBlue: true,
  isYellow: true,
  isActiveMenu: false,
};

export const colorReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FILTERED_COLOR:
      return { ...state, filteredColor: action.payload };

    case FETCH_FILTERED_DARK:
      return { ...state, filteredDark: action.payload };

    case RED_TRUE:
      return { ...state, isRed: true };
    case RED_FALSE:
      return { ...state, isRed: false };

    case GREEN_TRUE:
      return { ...state, isGreen: true };
    case GREEN_FALSE:
      return { ...state, isGreen: false };

    case BLUE_TRUE:
      return { ...state, isBlue: true };
    case BLUE_FALSE:
      return { ...state, isBlue: false };

    case YELLOW_TRUE:
      return { ...state, isYellow: true };
    case YELLOW_FALSE:
      return { ...state, isYellow: false };

    case ACTIVE_MENU_TRUE:
      return { ...state, isActiveMenu: true };
    case ACTIVE_MENU_FALSE:
      return { ...state, isActiveMenu: false };

    default:
      return state;
  }
};
