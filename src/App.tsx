import './css/App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Box from './components/Box';
import SavedPasswords from './components/SavedPasswords';
import CheckPassword from './components/CheckPassword';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Header />
          <Box />
        </Route>
        <Route path='/savedPasswords' exact>
          <SavedPasswords />
        </Route>
        <Route path='/checkPassword' exact>
          <CheckPassword />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;