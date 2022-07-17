import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/home';

import './styles/style.css';

export const App = () => {
  return (
    <MainLayout>
      <Home />
    </MainLayout>
  );
};
