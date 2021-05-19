import { useState, useEffect } from "react";
import { useHistory, useParams} from "react-router-dom";
import Api from "../Api";

import './Settings.scss'

function Settings() {
    const {id} = useParams();
    const history = useHistory();
    const [director_profile, setProgramDirector] = useState({
        orgName: '',
        orgType: '',
        orgID: '',
        orgEmail: '',
        address: '',
        country: '',
        state: '',
        city: '',
        describeOrg: '',
        describePartnerRelationship: ''
    });

    useEffect(function(){
        if(id){
            Api.programDirectors.get(id).then((response) => setProgramDirector(response.data));
    } 
}, []);

    function onChange(event) {
        const newProgramDirector = {...director_profile};
        newProgramDirector[event.target.name] = event.target.value;
        setProgramDirector(newProgramDirector);
    }

    async function onSubmit(event) {
        event.preventDefault();
        try {
            if(id){
            await Api.programDirectors.update(id, director_profile);
            }else{
            await Api.programDirectors.create(director_profile);
        }
            history.push('/dashboard');
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <main className="container">
          <div className="row">
            <div className="col-md-9 offset-md-2">
              <br />
              <br />
              <h1>Welcome, Sophie!</h1>
              <p>Let's finish setting up your distributor profile</p>
              <br />
              <div class="p-3 mb-2 bg-light text-dark rounded" id="roundedBox">
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
                      <span class="text-danger">* </span> <span> <strong>Organization Name</strong></span> <br />
                      <input className="form-control" type="text" name="orgname" placeholder="Acme" value={director_profile.orgName} onChange={onChange} />
                    </div>
                    <br />
                    <div>
                      <span class="text-danger">* </span> <span> <strong>Organization Type </strong> </span ><br />
                      <input className="form-control" type="text" name="orgtype" placeholder="Select organization type" value={director_profile.orgType} onChange={onChange} />
                    </div>
                    <br />
                    <div>
                      <span class="text-danger">* </span>
                      <span> <strong> Organization ID Number  </strong> </span><br />
                      <input className="form-control" type="text" name="orgid" placeholder="123-456-789 e.g." value={director_profile.orgID} onChange={onChange}/>
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
                      <span> <strong> Organization Email </strong></span><br />
                      <input type="text" class="form-control" id="orgemail" name="orgemail" placeholder="name@company.com" />
                    </div>
        
                    <br />
        
                    <div>
                      <span class="text-danger">* </span> <span> <strong>Address </strong> </span><br />
                      <input type="text" class="form-control" id="orgaddress" name="orgaddress" placeholder="123 Main St. e.g."
                      />
                    </div>
        
                    <br />
        
                    <div>
                      <span class="text-danger">* </span> <span> <strong> Country </strong> </span><br />
                      <input type="text" class="form-control" id="country" name="country" placeholder="Select country" />
                    </div>
        
                    <br />
        
                    <div>
                      <span class="text-danger">* </span> <span> <strong> State </strong> </span><br />
                      <input type="text" class="form-control" id="state" name="state" placeholder="Select state" />
                    </div>
        
                    <br />
        
                    <div>
                      <span class="text-danger">* </span> <span> <strong> City </strong> </span><br />
                      <input type="text" class="form-control" id="city" name="city" placeholder="Select city" />
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
                      <span> <strong> Please briefly describe your organization </strong> </span><br />
                      <textarea
                        class="form-control"
                        id="describeOrg"
                        rows="3"
                        placeholder="Brief description."
                      ></textarea>
                    </div>
        
                    <br />
        
                    <div>
                      <span> <strong> Why do you want to partner with FairPlay? </strong> </span><br />
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
                  <hr></hr>
                  <div class="row">
                  <div className="col-md-3 mb-2">
                    <a href="#"style={{color:"#1154FF", textDecoration:"none"}}>Return To Sign-Up</a>
                  </div>
                  <div className="col-md-3 mb-2">
                    <button type="button" class="btn btn-outline-secondary"> Clear Form</button>
                    </div>
                    <div className="col-md-3  offset-md-2">
                  <button type="button" class= "btn btn-primary" id="submitButton"> Submit For Review</button>
                </div>
                </div>
                
                </div>
                <br />
              </div>
              <br />
              <br />
              <br />
            </div>
          </div>
        </main>
        ); 
      } 
export default Settings;