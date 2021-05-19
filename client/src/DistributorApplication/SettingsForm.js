import { useState, useEffect } from "react";
import { useHistory, useParams} from "react-router-dom";
import Api from "../Api";

import './Settings.scss'

function SettingsForm() {
    const {id} = useParams();
    const history = useHistory();
    const [programDirector, setProgramDirector] = useState({
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
            history.push('/settings');
        } catch (error) {
            console.log(error);
        }
    }
    return (
      <main className="container">
          <h1>Welcome, Sophie!</h1>
          <p>Let's finish setting up your distributor profile</p>

          <div class="p-3 mb-2 bg-light text-dark rounded" id="roundedBox">
              <br />
              <p class="text-danger">* Indicates a required response.</p>
              <br />



          <form onSubmit={onSubmit}>
              <div className="row">
                  <div className="col-md-2">
                      <br />
                      Admin
                  </div>

                  <div className="col-md-10">
                      <br />
                      <div>
                      <span class="text-danger">* </span> <span> <strong>Organization Name</strong></span> <br />
                      <input className="form-control" type="text" name="orgName" placeholder="Acme" value={director_profile.orgName} onChange={onChange} />
                      </div>
                      <br />
                      <div>
                      <span class="text-danger">* </span> <span> <strong>Organization Type </strong> </span ><br />
                      <input className="form-control" type="text" name="orgType" placeholder="Select organization type" value={director_profile.orgType} onChange={onChange} />
                      </div>
                      <br />
                      <div>
                      <span class="text-danger">* </span><span> <strong> Organization ID Number  </strong> </span><br />
                      <input className="form-control" type="text" name="orgID" placeholder="123-456-789 e.g." value={director_profile.orgID} onChange={onChange}/>
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
                      <span class="text-danger">* </span><span> <strong> Organization Email </strong></span><br />
                      <input className="form-control" type="text" name="orgEmail" placeholder="name@company.com" value={director_profile.orgEmail} onChange={onChange}/>
                      </div>
                      <br />
                      <div>
                      <span class="text-danger">* </span> <span> <strong>Address </strong> </span><br />
                      <input className="form-control" type="text" name="address" placeholder="123 Main St. e.g."  value={director_profile.address} onChange={onChange} />
                      </div>
                      <br />
                      <div>
                      <span class="text-danger">* </span> <span> <strong> Country </strong> </span><br />
                      <input className="form-control" type="text" name="country" placeholder="Select country" value={director_profile.country} onChange={onChange} />
                      </div>
                      <br />
                      <div>
                      <span class="text-danger">* </span> <span> <strong> State </strong> </span><br />
                      <input className="form-control" type="text" name="state" placeholder="Select state" value={director_profile.state} onChange={onChange} />
                      </div>
                      <br />
                      <div>
                      <span class="text-danger">* </span> <span> <strong> City </strong> </span><br />
                      <input className="form-control" type="text" name="city" placeholder="Select city" value={director_profile.city} onChange={onChange} />
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
                    <textarea className="form-control" name="describeOrg" rows="3" placeholder="Brief description." value={director_profile.describeOrg} onChange={onChange}></textarea>
                  </div>
                  <br />
                  <div>
                    <span> <strong> Why do you want to partner with FairPlay? </strong> </span><br />
                    <textarea className="form-control" name="describePartnerRelationship" rows="3" placeholder="Brief description." value={director_profile.describePartnerRelationship} onChange={onChange}></textarea>
                  
                   
                  </div>
                  
                  <br />
                </div>

              </div>

              
              <button className="btn btn-primary" type="submit">Submit</button>
          </form>
          </div>
          
          <p>{JSON.stringify(director_profile)}</p>
      </main>
  );
}
export default SettingsForm;