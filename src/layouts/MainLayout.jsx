import { Header } from '../components/Header/Header';
import { Menu } from '../components/Menu';

export const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="main-content">
        <Menu />
        {children}
      </div>
    </>
  );
};
