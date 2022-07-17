import {
  CIRCLE_FALSE,
  CIRCLE_TRUE,
  FETCH_FIGURES,
  FETCH_FILTERED,
  SQUARE_FALSE,
  SQUARE_TRUE,
} from '../types';

const initialState = {
  figures: [],
  filteredFigures: [],
  isCircle: true,
  isSquare: true,
};

export const figuresReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FIGURES:
      return { ...state, figures: action.payload };

    case FETCH_FILTERED:
      return { ...state, filteredFigures: action.payload };

    case CIRCLE_TRUE:
      return { ...state, isCircle: true };

    case CIRCLE_FALSE:
      return { ...state, isCircle: false };

    case SQUARE_TRUE:
      return { ...state, isSquare: true };

    case SQUARE_FALSE:
      return { ...state, isSquare: false };

    default:
      return state;
  }
};
