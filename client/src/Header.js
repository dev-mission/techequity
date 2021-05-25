import {useEffect} from 'react';
import {useHistory, Link} from 'react-router-dom';

import Api from './Api';
import {useAuthContext} from './AuthContext';

function Header() {
  const history = useHistory();
  const {user, setUser} = useAuthContext();

  useEffect(function() {
    Api.users.me()
      .then(response => {
        if (response.status === 204) {
          setUser(null);
        } else {
          setUser(response.data);
        }
      });
  }, [setUser]);

  const onLogout = async function(event) {
    event.preventDefault();
    await Api.auth.logout();
    setUser(null);
    history.push('/');
  };

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top shadow p-3 mb-5 bg-body">
      <div className="container">
        <Link className="navbar-brand" to="/">FairPlay</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>    
        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav flex-grow-1 mb-2 mb-md-0">
            <li className="nav-item active">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" aria-current="page" to="/">Impact</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" aria-current="page" to="/">About</Link>
            </li>
            {user && (<li className="nav-item active"><Link className="nav-link" aria-current="page" to="/events">Events</Link></li>)}
            {user && (<li className="nav-item active"><Link className="nav-link" aria-current="page" to="/donors">Donors</Link></li>)}
            {user && (<li className="nav-item active"><Link className="nav-link" aria-current="page" to="/organizations">Organizations List</Link></li>)}
            {user && (<li className="nav-item active"><Link className="nav-link" aria-current="page" to="/programDirectors">Program Directors List</Link></li>)}
            <div className="flex-grow-1 d-flex justify-content-end">
              {user && (<li className="nav-item"><a class="btn btn-primary" role="button" href="/logout" onClick={onLogout}>Log out</a></li>)}
              {!user && (<li className="nav-item"><Link className="nav-link" to="/login">Log in</Link></li>)}
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
