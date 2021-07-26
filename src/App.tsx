import {
  Switch,
  Route
} from 'react-router-dom';
import routes from './routes';

const App = () => {
  return <Switch>
    {routes.map(({path, Component}, i) => (
      <Route
        key={i}
        exact
        path={path}
        component={() => <Component /> }
      />
    ))}
  </Switch>
};

export default App;