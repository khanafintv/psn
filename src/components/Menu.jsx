import { useSelector } from 'react-redux';
import { FilterColor } from './FilterColor';
import { FilterDark } from './FilterDark';

export const Menu = () => {
  const isActiveMenu = useSelector((state) => state.colorReducer.isActiveMenu);

  return (
    <div className={!isActiveMenu ? 'menu' : 'menu active'}>
      <FilterColor />
      <FilterDark />
    </div>
  );
};
