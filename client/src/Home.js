import './Home.scss';
import { Link } from 'react-router-dom';
import uberLogo from './images/Uber-Open-Source Logo.png';
import DMLogo from './images/DevMission Logo.jpg';
import C4SFLogo from './images/Code4SF Logo.png';

function Home() {
  return (
    <main>
      {/* Heading */}
      <div className="row">
        <div className="top col-md-12">
          <div className="offset-1">
            <h1 className="h1"> <strong>Here's a catchy <br /> tidbit about <br /> how it works.</strong></h1>
            {/*Figuring out how to make it scroll down automatically using the link tag*/}
            <Link to="#roleSection" className="SecondaryColor btn btn-primary mt-5"> How you can help ↓</Link>
          </div>
        </div>
      </div>
      {/* Impact */}
      <div className="row">
        <div className="impact col-md-8 offset-2">
          <div className="row">
            <div className="col-md-5 offset-1">
              <h3 className="mt-4">Our impact.</h3>
              <p className="mb-4"> 2021 Non-profit of the year</p>
              <Link to="" className="SecondaryColor btn btn-primary mt-5"> More info</Link>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6">
                  <h3 className="stats ml-1 "> <strong>7,000</strong></h3>
                  <p>Students Served</p>
                </div>
                <div className="col-md-6">
                  <h3 className="stats ml-1 "> <strong>5,000</strong></h3>
                  <p>Laptops Awarded</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Roles */}
      <div className="row" id="roleSection">
        <div className="roles col-md-8 offset-2">
          <h3><strong>Where do you fit in?</strong></h3>
          <p>Everyone has a role to play.</p>
          <div className="row">
            <div className="col-md-6">

              <div className="card mb-3" >
                <div className="row g-0">
                  <div class="col-md-4">
                    <br />
                    <img src="" alt="donor image"></img>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title"><strong>Donors</strong></h5>
                      <br />
                      <p className="card-text">Donate Refurbishable hardware to help students. </p>
                      <Link to="/register" className="card-text btn btn-primary"> Get Started</Link>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-md-6">

              <div className="card mb-3" >
                <div className="row g-0">
                  <div class="col-md-4">
                    <br />
                    <img src="" alt="non-profit partner image"></img>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title"><strong>Non-Profit Partners</strong></h5>
                      <br />
                      <p className="card-text">Track donated inventory as it’s refurbished by 3rd parties. </p>
                      <Link to="/register" className="card-text btn btn-primary"> Get Started</Link>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="row">
            <div className="col-md-6">

              <div className="card mb-3" >
                <div className="row g-0">
                  <div class="col-md-4">
                    <br />
                    <img src="" alt="program director image"></img>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title"><strong>Program Directors</strong></h5>
                      <br />
                      <p className="card-text">Put refurbished hardware in students’ hands.</p>
                      <Link to="/register" className="card-text btn btn-primary"> Get Started</Link>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-md-6">

              <div className="card mb-3" >
                <div className="row g-0">
                  <div class="col-md-4">
                    <br />
                    <img src="" alt="student image"></img>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title"><strong>Students</strong></h5>
                      <br />
                      <p className="card-text">Get the equipment you need to excel in school.</p>
                      <Link to="/register" className="card-text btn btn-primary"> Get Started</Link>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
      {/*Our Partners*/}
      <div className="row">
        <div className="partners col-md-12">

          <div className="row">
            <div className="col-md-4">
              <h2> <strong>Our partners.</strong></h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-4 offset-1">
                  <img src={DMLogo} alt="Dev/Mission Logo" className="partnerLogos"></img>
                </div>
                <div className="col-md-4 offset-1">
                  <img src={C4SFLogo} alt="Code For San Francisco Logo" className="partnerLogos"></img>
                </div>
              </div>
              <div className="row">
                <div className="offset-3">
                  <img src={uberLogo} alt="Uber Inc Logo" className="partnerLogos"></img>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
