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

export const fetchFilteredColors = (payload) => {
  return { type: FETCH_FILTERED_COLOR, payload };
};

export const fetchFilteredDark = (payload) => {
  return { type: FETCH_FILTERED_DARK, payload };
};

export const setRedFalse = () => {
  return { type: RED_FALSE };
};

export const setRedTrue = () => {
  return { type: RED_TRUE };
};

export const setGreenFalse = () => {
  return { type: GREEN_FALSE };
};

export const setGreenTrue = () => {
  return { type: GREEN_TRUE };
};

export const setBlueFalse = () => {
  return { type: BLUE_FALSE };
};

export const setBlueTrue = () => {
  return { type: BLUE_TRUE };
};

export const setYellowFalse = () => {
  return { type: YELLOW_FALSE };
};

export const setYellowTrue = () => {
  return { type: YELLOW_TRUE };
};

export const setActiveMenuTrue = () => {
  return { type: ACTIVE_MENU_TRUE };
};

export const setActiveMenuFalse = () => {
  return { type: ACTIVE_MENU_FALSE };
};
