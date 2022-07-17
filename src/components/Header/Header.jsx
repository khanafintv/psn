import { FilterColor } from '../FilterColor';
import { FilterDark } from '../FilterDark';
import { FilterForm } from '../FilterForm';
import { Burger } from '../UI/Burger';
import classes from './Header.module.css';

export const Header = () => {
  return (
    <div className={classes.header}>
      <h1 className="header-title">Круги и квадраты, v.1.0</h1>
      <div className="wrapper-filter-form">
        <Burger />
        <FilterForm />
      </div>
    </div>
  );
};
