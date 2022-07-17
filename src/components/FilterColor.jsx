import { useDispatch, useSelector } from 'react-redux';
import {
  fetchFilteredColors,
  setBlueFalse,
  setBlueTrue,
  setGreenFalse,
  setGreenTrue,
  setRedFalse,
  setRedTrue,
  setYellowFalse,
  setYellowTrue,
} from '../store/action-creators/colorActions';

export const FilterColor = () => {
  const dispatch = useDispatch();
  const figures = useSelector((state) => state.figuresReducer.figures);

  const filteredColor = useSelector(
    (state) => state.colorReducer.filteredColor
  );

  const isRed = useSelector((state) => state.colorReducer.isRed);
  const isGreen = useSelector((state) => state.colorReducer.isGreen);
  const isBlue = useSelector((state) => state.colorReducer.isBlue);
  const isYellow = useSelector((state) => state.colorReducer.isYellow);

  const changeRed = () => {
    if (isRed) {
      dispatch(setRedFalse());
      dispatch(
        fetchFilteredColors(filteredColor.filter((i) => i.color !== 'red'))
      );
    } else {
      dispatch(setRedTrue());
      const res = figures.filter((i) => i.color === 'red');
      dispatch(fetchFilteredColors([...filteredColor, ...res]));
    }
  };

  const changeGreen = () => {
    if (isGreen) {
      dispatch(setGreenFalse());
      dispatch(
        fetchFilteredColors(filteredColor.filter((i) => i.color !== 'green'))
      );
    } else {
      dispatch(setGreenTrue());
      const res = figures.filter((i) => i.color === 'green');
      dispatch(fetchFilteredColors([...filteredColor, ...res]));
    }
  };

  const changeBlue = () => {
    if (isBlue) {
      dispatch(setBlueFalse());
      dispatch(
        fetchFilteredColors(filteredColor.filter((i) => i.color !== 'blue'))
      );
    } else {
      dispatch(setBlueTrue());
      const res = figures.filter((i) => i.color === 'blue');
      dispatch(fetchFilteredColors([...filteredColor, ...res]));
    }
  };

  const changeYellow = () => {
    if (isYellow) {
      dispatch(setYellowFalse());
      dispatch(
        fetchFilteredColors(filteredColor.filter((i) => i.color !== 'yellow'))
      );
    } else {
      dispatch(setYellowTrue());
      const res = figures.filter((i) => i.color === 'yellow');
      dispatch(fetchFilteredColors([...filteredColor, ...res]));
    }
  };

  return (
    <>
      <div>
        <input type="checkbox" checked={isRed} id="red" onChange={changeRed} />
        <label htmlFor="red">Красные</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="green"
          checked={isGreen}
          onChange={changeGreen}
        />
        <label htmlFor="green">Зеленые</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="blue"
          checked={isBlue}
          onChange={changeBlue}
        />
        <label htmlFor="blue">Синие</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="yellow"
          checked={isYellow}
          onChange={changeYellow}
        />
        <label htmlFor="yellow">Желтые</label>
      </div>
    </>
  );
};
