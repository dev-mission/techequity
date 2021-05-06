function Settings() {
    return (
      <main className="container">
          <div className="row">
              <div className="col-md-8 offset-md-2">
                  {/* Here, instead of a hard-coded name, it should query the name from the 
                  User database model (I don't know how to do that -- César)*/ }
                  <br></br>
                  <br></br>
                  <h1>Welcome, Sophie!</h1>
                  <p>Let's finish setting up your distributor profile</p>
                  <br></br>
                  <div class="p-3 mb-2 bg-light text-dark rounded">
                      <br>
                      </br>
                      <p class="text-danger">* Indicates a required response.</p>
                      <br></br>
                      <div className="row">
                          <div className="col-md-2">
                              Admin
                          </div>
                          <div className="col-md-10">
                          <p class="text-danger">* Indicates a required response.</p>
                              <p>NO</p>No
                              <h1>hello</h1>
                              <h3>gello</h3>
                              <h4>gege</h4>
                              <br></br>
                          </div>
                          <br></br>
                          <br></br>
                          <div className="col-md-2">
                              <br>
                              </br>
                              Contact
                          </div>
                          <div className="col-md-10">
                              <br></br>
                              <p>NO</p>No
                              <h1>hello</h1>
                              <h3>gello</h3>
                              <h4>gege</h4>
                          </div>
                          <div className="col-md-2">
                              <br>
                              </br>
                              Profile
                          </div>
                          <div className="col-md-10">
                              <br></br>
                              <p>NO</p>No
                              <h1>hello</h1>
                              <h3>gello</h3>
                              <h4>gege</h4>
                          </div>
                          <br></br>
                      </div>
                      <br></br>
                  </div>
                  <br></br>
                  <br></br>
                  <br></br>
              </div>
          </div>
 
      </main>    
    );
  }
  
  export default Settings;
  