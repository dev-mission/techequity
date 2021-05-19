import {useAuthContext} from './AuthContext';
import {useEffect, useState} from 'react';
import Api from './Api';

function Home() {
  const { user } = useAuthContext();
  const [donors, setDonors] = useState([]);

  useEffect(function() {
    Api.donors.index().then(response => setDonors(response.data));
  }, []);

  return (
    <main className="container">
      <div className="row">
        <div className="col-md-8">
          <div><h1>Welcome to your Dashboard</h1>
          <h3>The following is the information we have about you thus far.</h3></div>
          <div>
            <h4>Basic Info</h4>
          </div>
          <p>Your full name is: {user && user.firstName}</p> 
          </div>
          <div><p>Your donor type is:</p>
          {donors.map(s =>
          <span> {s.donorType}</span>)} </div>
          
          <div><p>Your company name is:</p>
          {donors.map(s =>
          <span> {s.userRole}</span>)} </div>
          
          <div><p>Your website link is:</span>
          {donors.map(s =>
          <span> {s.webLink}</span>)}</div>

          <div><p>Your role in your organization is:</span>
          {donors.map(s =>
          <span> {s.userRole}</span>)}</div>


          <div><p>Your mission statement is:</span>
          {donors.map(s =>
          <span> {s.missionVision}</span>)}</div>

          
          <div><p>You heard about us through:</span>
          {donors.map(s =>
          <span> {s.heardAboutUs}</span>)}</div>
        
      </div>

      <div className="col-md-8">
        <h2>If you wish to customize your profile visit:</h2>
      </div>

    </main>
  );
};
export default Home;
