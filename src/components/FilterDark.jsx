import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilteredDark } from '../store/action-creators/colorActions';

export const FilterDark = () => {
  const dispatch = useDispatch();
  const figures = useSelector((state) => state.figuresReducer.figures);

  const [val, setVal] = useState('all');

  const changeDark = (e) => {
    let res = [];
    if (e.target.value === 'all') {
      res = [...figures];
    } else {
      res = figures.filter((i) => String(i.dark) === e.target.value);
    }
    setVal(e.target.value);
    dispatch(fetchFilteredDark(res));
    //console.log(filteredDark);
  };

  return (
    <div className="filter-dark">
      <div className="filter-dark__item">
        <input
          type="radio"
          value="all"
          id="all"
          name="dark-filter"
          onChange={changeDark}
          checked={val === 'all'}
        />
        <label htmlFor="all">Все</label>
      </div>

      <div className="filter-dark__item">
        <input
          type="radio"
          value="true"
          id="dark"
          name="dark-filter"
          onChange={changeDark}
        />
        <label htmlFor="dark">Тёмные</label>
      </div>

      <div className="filter-dark__item">
        <input
          type="radio"
          value="false"
          id="light"
          name="dark-filter"
          onChange={changeDark}
        />
        <label htmlFor="light">Светлые</label>
      </div>
    </div>
  );
};
