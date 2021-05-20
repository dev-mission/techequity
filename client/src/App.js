import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './App.scss';

import {AuthContextProvider, AuthProtectedRoute} from './AuthContext';
import Events from './Events/Events';
import Header from './Header';
import FooterPage from './FooterPage';
import Home from './Home';
import Login from './Login';
import Passwords from './Passwords';
import Register from './Register';
import Organizations from './Organizations/Organizations';
import ProgramDirectors from './ProgramDirectors/ProgramDirectors';
import Setup from './Setup/Setup';

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/passwords">
            <Passwords />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/organizations">
            <Organizations />
          </Route>
          <Route path="/programDirectors">
            <ProgramDirectors />
          </Route>
          {process.env.REACT_APP_FEATURE_REGISTRATION === 'true' && (
            <>
              <Route path="/register">
                <Register />
              </Route>
              <AuthProtectedRoute path="/setup">
                <Setup />
              </AuthProtectedRoute>
            </>
          )}
        </Switch>
        <FooterPage />
      </Router>
    </AuthContextProvider>
  );
}

export default App;
