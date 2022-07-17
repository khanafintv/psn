import { useDispatch, useSelector } from 'react-redux';
import {
  fetchFilteredFigures,
  setCircleFalse,
  setCircleTrue,
  setSquareFalse,
  setSquareTrue,
} from '../store/action-creators/figuresActions';

export const FilterForm = () => {
  const dispatch = useDispatch();
  const figures = useSelector((state) => state.figuresReducer.figures);
  const filteredFigures = useSelector(
    (state) => state.figuresReducer.filteredFigures
  );
  const isCircle = useSelector((state) => state.figuresReducer.isCircle);
  const isSquare = useSelector((state) => state.figuresReducer.isSquare);

  const changeCircles = () => {
    if (isCircle) {
      dispatch(setCircleFalse());
      dispatch(
        fetchFilteredFigures(filteredFigures.filter((i) => i.form !== 'circle'))
      );
    } else {
      dispatch(setCircleTrue());
      const res = figures.filter((i) => i.form === 'circle');
      dispatch(fetchFilteredFigures([...filteredFigures, ...res]));
    }
  };

  const changeSquares = () => {
    if (isSquare) {
      dispatch(setSquareFalse());
      dispatch(
        fetchFilteredFigures(filteredFigures.filter((i) => i.form !== 'square'))
      );
    } else {
      dispatch(setSquareTrue());
      const res = figures.filter((i) => i.form === 'square');
      dispatch(fetchFilteredFigures([...filteredFigures, ...res]));
    }
  };

  return (
    <div className="filter-form">
      <div className="filter-form__circles">
        <input
          type="checkbox"
          checked={isCircle}
          id="circles"
          onChange={changeCircles}
        />
        <label htmlFor="circles">Круги</label>
      </div>
      <div className="filter-form__squares">
        <input
          type="checkbox"
          id="squares"
          checked={isSquare}
          onChange={changeSquares}
        />
        <label htmlFor="squares">Квадраты</label>
      </div>
    </div>
  );
};
