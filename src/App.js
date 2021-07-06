import './css/App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './component/Header';
import Box from './component/Box';
import SavedPasswords from './component/SavedPasswords';
import CheckPassword from './component/CheckPassword';

function App() {
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
