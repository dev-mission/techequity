function Settings() { return (
    <main className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <br />
          <br />
          <h1>Welcome, Sophie!</h1>
          <p>Let's finish setting up your distributor profile</p>
          <br />
          <div class="p-3 mb-2 bg-light text-dark rounded">
            <br />
    
            <p class="text-danger">* Indicates a required response.</p>
            <br />
            <div className="row">
              <div className="col-md-2">
                <br />
                Admin
              </div>
              <div className="col-md-10">
                <br />
                <div>
                  <span class="text-danger">* </span> <span> Organization Name</span
                  ><br />
                  <input
                    type="text"
                    class="form-control"
                    id="orgname"
                    name="orgname"
                    placeholder="Acme"
                  />
                </div>
    
                <br />
    
                <div>
                  <span class="text-danger">* </span> <span> Organization Type</span
                  ><br />
                  <input
                    type="text"
                    class="form-control"
                    id="orgtype"
                    name="orgtype"
                    placeholder="Select organization type"
                  />
                </div>
    
                <br />
    
                <div>
                  <span class="text-danger">* </span>
                  <span> Organization ID Number</span><br />
                  <input
                    type="text"
                    class="form-control"
                    id="orgid"
                    name="orgid"
                    placeholder="123-456-789 e.g."
                  />
                </div>
    
                <br />
              </div>
              <br />
              <br />
              <div className="col-md-2">
                <br />
    
                <br />
                Contact
              </div>
              <div className="col-md-10">
                <br />
                <br />
    
                <div>
                  <span class="text-danger">* </span>
                  <span> Organization Email</span><br />
                  <input
                    type="text"
                    class="form-control"
                    id="orgemail"
                    name="orgemail"
                    placeholder="name@company.com"
                  />
                </div>
    
                <br />
    
                <div>
                  <span class="text-danger">* </span> <span> Address</span><br />
                  <input
                    type="text"
                    class="form-control"
                    id="orgaddress"
                    name="orgaddress"
                    placeholder="123 Main St. e.g."
                  />
                </div>
    
                <br />
    
                <div>
                  <span class="text-danger">* </span> <span> Country</span><br />
                  <input
                    type="text"
                    class="form-control"
                    id="country"
                    name="country"
                    placeholder="Select country"
                  />
                </div>
    
                <br />
    
                <div>
                  <span class="text-danger">* </span> <span> State</span><br />
                  <input
                    type="text"
                    class="form-control"
                    id="state"
                    name="state"
                    placeholder="Select state"
                  />
                </div>
    
                <br />
    
                <div>
                  <span class="text-danger">* </span> <span> City</span><br />
                  <input
                    type="text"
                    class="form-control"
                    id="city"
                    name="city"
                    placeholder="Select city"
                  />
                </div>
    
                <br />
              </div>
              <div className="col-md-2">
                <br />
    
                <br />
                Profile
              </div>
              <div className="col-md-10">
                <br />
                <br />
    
                <div>
                  <span> Please briefly describe your organization</span><br />
                  <textarea
                    class="form-control"
                    id="describeOrg"
                    rows="3"
                    placeholder="Brief description."
                  ></textarea>
                </div>
    
                <br />
    
                <div>
                  <span> Why do you want to partner with FairPlay?</span><br />
                  <textarea
                    class="form-control"
                    id="describePartner"
                    rows="3"
                    placeholder="Brief description."
                  ></textarea>
                </div>
    
                <br />
              </div>
              <br />
            </div>
            <br />
          </div>
          <br />
          <br />
          <br />
        </div>
      </div>
    </main>
    ); } export default Settings;