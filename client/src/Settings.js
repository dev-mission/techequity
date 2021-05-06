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
                              <br></br>
                              Admin
                          </div>
                          <div className="col-md-10">
                              <br></br>
                              <div><span class="text-danger">* </span>
                          <span> Organization Name</span><br></br>
                          <input type="text" class="form-control" id="orgname" name="orgname" placeholder="Acme"></input></div>
                          
                          <br>
                          </br>

                          <div><span class="text-danger">* </span>
                          <span> Organization Type</span><br></br>
                          <input type="text" class="form-control"  id="orgtype" name="orgtype" placeholder="Select organization type"></input></div>
                          
                          <br>
                          </br>

                          <div><span class="text-danger">* </span>
                          <span> Organization ID Number</span><br></br>
                          <input type="text" class="form-control"  id="orgid" name="orgid" placeholder="123-456-789 e.g."></input></div>
                          
                          <br>
                          </br>
                          </div>
                          <br></br>
                          <br></br>
                          <div className="col-md-2">
                              <br>
                              </br>
                              <br></br>
                              Contact
                          </div>
                          <div className="col-md-10">
                              <br></br>
                              <br></br>

                              <div><span class="text-danger">* </span>
                          <span> Organization Email</span><br></br>
                          <input type="text" class="form-control"  id="orgemail" name="orgemail" placeholder="name@company.com"></input></div>
                          
                          <br>
                          </br>

                          <div><span class="text-danger">* </span>
                          <span> Address</span><br></br>
                          <input type="text" class="form-control"  id="orgaddress" name="orgaddress" placeholder="123 Main St. e.g."></input></div>
                          
                          <br>
                          </br>

                          <div><span class="text-danger">* </span>
                          <span> Country</span><br></br>
                          <input type="text" class="form-control"  id="country" name="country" placeholder="Select country"></input></div>
                          
                          <br>
                          </br>

                          <div><span class="text-danger">* </span>
                          <span> State</span><br></br>
                          <input type="text" class="form-control"  id="fname" name="fname" placeholder="Select state"></input></div>
                          
                          <br>
                          </br>

                          <div><span class="text-danger">* </span>
                          <span> City</span><br></br>
                          <input type="text" class="form-control" id="fname" name="fname" placeholder="Select city"></input></div>
                          
                          <br>
                          </br>
                          </div>
                          <div className="col-md-2">
                              <br>
                              </br>
                              <br></br>
                              Profile
                          </div>
                          <div className="col-md-10">
                              <br></br>
                              <br></br>

                              <div><span> Please briefly describe your organization</span><br></br>
                              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Brief description."></textarea></div>
                          
                          <br>
                          </br>

                          <div><span> Why do you want to partner with FairPlay?</span><br></br>
                          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Brief description."></textarea></div>
                          
                          <br>
                          </br>
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
  