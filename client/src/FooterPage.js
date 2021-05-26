import React from "react";
import './FooterPage.scss';

const FooterPage = () => {
  return (
    <footer class="footerColor text-center text-lg-start">
      <div class="container p-4">
        <div class="row">
          <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="textColor"><strong>FairPlay</strong></h5>
            <p className="textColor">©2021, FairPlay</p>
          </div>

          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <div className="row">
              <div className="col-md-6">
                <a href="#" className="textColor">About</a>
              </div>
              <div className="col-md-6">
                <a href="#" className="textColor">Privacy Policy</a>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <a href="#" className="textColor"> Contact </a>
              </div>
              <div className="col-md-6">
                <a href="#" className="textColor"> Terms and Conditions </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

  );
}


export default FooterPage;