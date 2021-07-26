import Header from '../containers/Header/Header';
import Search from '../containers/Search/Search';

const AppLayout = ({ children }) => {
  return (
    <div className="app__layout--area">
      <div className="layout-wrapper">
        <Header title="Lunchplace" />
        <Search />
        {children}
      </div>
    </div>
  );
};
export default AppLayout;