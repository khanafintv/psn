import { useDispatch, useSelector } from 'react-redux';
import {
  setActiveMenuFalse,
  setActiveMenuTrue,
} from '../../store/action-creators/colorActions';

export const Burger = () => {
  const dispatch = useDispatch();
  const isActiveMenu = useSelector((state) => state.colorReducer.isActiveMenu);

  const clickHandler = () => {
    if (isActiveMenu) {
      dispatch(setActiveMenuFalse());
    } else {
      dispatch(setActiveMenuTrue());
    }
  };

  return (
    <div onClick={clickHandler} className="burger">
      <div className="burger__line"></div>
      <div className="burger__line"></div>
      <div className="burger__line"></div>
    </div>
  );
};
