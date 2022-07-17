import { combineReducers } from 'redux';
import { colorReducer } from './colorReducer';
import { figuresReducer } from './figuresReducer';

export const rootReducer = combineReducers({
  figuresReducer,
  colorReducer,
});
