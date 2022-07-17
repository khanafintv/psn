import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { ItemList } from '../components/ItemList';
import { fetchFigures } from '../store/action-creators/figuresActions';

export const Home = () => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    const response = await axios.get('http://localhost:3001/figures');
    const data = await response.data;
    dispatch(fetchFigures(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <ItemList />
    </>
  );
};
