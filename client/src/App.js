import {useEffect} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory, Link
} from 'react-router-dom';

import Api from './Api';
import {useAuthContext} from './AuthContext';
import './App.scss';

import {AuthContextProvider} from './AuthContext';
import Header from './Header';
import FooterPage from './FooterPage';
import Home from './Home';
import Login from './Login';
import Settings from './Settings';
import Passwords from './Passwords';
import Register from './Register';



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
            <Route path="/settings">
              <Settings />
            </Route>
          <Route path="/passwords">
            <Passwords />
          </Route>
          {process.env.REACT_APP_FEATURE_REGISTRATION === 'true' && (
            <Route path="/register">
              <Register />
            </Route>
          )}
        </Switch>
        <FooterPage />
      </Router>
    </AuthContextProvider>
  );
}

export default App;
