import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './App.scss';

import {AuthContextProvider} from './AuthContext';
import Events from './Events/Events';
import Students from './Students/Students';
import NonProfitPartners from './NonProfitPartner/NonProfitPartners';
import Header from './Header';
import FooterPage from './FooterPage';
import Home from './Home';
import Login from './Login';
import Settings from './DistributorApplication/Settings';
import Passwords from './Passwords';
import Register from './Register';
import Donors from './Donors/Donors';

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
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/students">
            <Students />
          </Route>
          <Route path="/donors">
            <Donors />
          </Route>
          <Route path="/nonprofitpartners">
            <NonProfitPartners />
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
