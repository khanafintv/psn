import {
  CIRCLE_FALSE,
  CIRCLE_TRUE,
  FETCH_FIGURES,
  FETCH_FILTERED,
  SQUARE_FALSE,
  SQUARE_TRUE,
} from '../types';

export const fetchFigures = (payload) => {
  return { type: FETCH_FIGURES, payload };
};
export const fetchFilteredFigures = (payload) => {
  return { type: FETCH_FILTERED, payload };
};
export const setCircleFalse = () => {
  return { type: CIRCLE_FALSE };
};
export const setCircleTrue = () => {
  return { type: CIRCLE_TRUE };
};
export const setSquareTrue = () => {
  return { type: SQUARE_TRUE };
};
export const setSquareFalse = () => {
  return { type: SQUARE_FALSE };
};
