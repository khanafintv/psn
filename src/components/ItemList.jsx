import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchFilteredColors,
  fetchFilteredDark,
} from '../store/action-creators/colorActions';
import { fetchFilteredFigures } from '../store/action-creators/figuresActions';

export const ItemList = () => {
  const dispatch = useDispatch();
  const figures = useSelector((state) => state.figuresReducer.figures);
  const filteredColor = useSelector(
    (state) => state.colorReducer.filteredColor
  );
  const filteredDark = useSelector((state) => state.colorReducer.filteredDark);
  const filteredFigures = useSelector(
    (state) => state.figuresReducer.filteredFigures
  );

  const [res, setRes] = useState([]);

  useEffect(() => {
    dispatch(fetchFilteredFigures(figures));
    dispatch(fetchFilteredColors(figures));
    dispatch(fetchFilteredDark(figures));
  }, [figures]);

  useEffect(() => {
    let result = filteredColor.filter((i) =>
      filteredFigures.find((item) => i.form === item.form)
    );

    result = result.filter((i) =>
      filteredDark.find((item) => i.dark === item.dark)
    );

    setRes(result);
  }, [filteredFigures, filteredColor, filteredDark]);

  return (
    <div className="wrapper-figures">
      {res.map((i) => {
        const brightness = i.dark ? `dark-${i.color}` : i.color;
        const classes = `${i.form} ${brightness}`;
        return <div key={i.id} className={classes}></div>;
      })}
    </div>
  );
};
