import {useAuthContext} from './AuthContext';
import {useEffect, useState} from 'react';
import Api from './Api';
import Donors from './Donors/Donors';

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
          <p style={{color: "blue"}}> {s.donorType}</p>)} </div>
          
          <div><p>Your company name is:</p>
          {donors.map(s =>
          <p style={{color: "blue"}}> {s.userRole}</p>)} </div>
          
          <div><p>Your website link is:</p>
          {donors.map(s =>
          <p style={{color: "blue"}}> {s.webLink}</p>)}</div>

          <div><p>Your role in your organization is:</p>
          {donors.map(s =>
          <p style={{color: "blue"}}> {s.userRole}</p>)}</div>


          <div><p>Your mission statement is:</p>
          {donors.map(s =>
          <p style={{color: "blue"}}> {s.missionVision}</p>)}</div>

          
          <div><p>You heard about us through:</p>
          {donors.map(s =>
          <p style={{color: "blue"}}> {s.heardAboutUs}</p>)}</div>
        
      </div>

      <div className="col-md-8">
        <h2>If you wish to customize your profile, you can do so here:</h2>
        <p> The same form you used when you register, you will use to update</p>
        <Donors />
      </div>

    </main>
  );
};
export default Home;
