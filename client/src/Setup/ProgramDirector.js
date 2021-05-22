import { useAuthContext } from "../AuthContext";
import './ProgramDirector.scss';

import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Api from "../Api";

function ProgramDirector() {
  const { user } = useAuthContext();
  const { id } = useParams();
  const history = useHistory();
  const [organization, setOrganization] = useState({
      name: '',
      type: '',
      phoneNumber: '',
      email: '',
      address: '',
      country: '',
      state: '',
      city: '',
      description: '',
      partnershipDescription: ''
  });
  useEffect(function () {
      if (id) {
          Api.organizations.get(id).then((response) => setOrganization(response.data));
      }
  }, []);
  
  function onChange(event) {
      const newOrganization = { ...organization };
      newOrganization[event.target.name] = event.target.value;
      setOrganization(newOrganization);
  }

  async function onSubmit(event) {
      event.preventDefault();
      try {
          if (id) {
              await Api.organizations.update(id, organization);
          } else {
              await Api.organizations.create(organization);
          }
          history.push('/programdirectors/new');
      } catch (error) {
          console.log(error);
      }
  }


  return (
    <main className="container">
      <h1 className="heading"><strong>Welcome, {user && user.firstName}!</strong></h1>
      <p className="description">Let's finish setting up your Program Director Profile.</p>
      <form className="form" onSubmit = {onSubmit}>
        <div className="row">
          <div className="col-md-3 offset-1">
            <p className="requiredResponse">* Indicates a required response</p>
          Admin</div>
          {/*Admin Questions*/} 
          <div className="col-md-5">
            <div className="form-group">
              <label for="name"> <label className="requiredResponse" >* </label><strong> Organization Name</strong></label>
              <input type="text" placeholder="Acme" className="form-control" name="name" value={organization.name} onChange={onChange}></input>
            </div>
          </div>

          <div className="col-md-5 offset-4">
            <div className="form-group">
              <label for="type"> <label className="requiredResponse" >* </label><strong> Organization Type</strong></label>
              <select className="form-control" name="type" value={organization.type} onChange={onChange}>
                <option value="" disabled selected hidden >Select organization type</option>
                <option value="LLC">LLC</option>
                <option value="non-profit">Non-Profit</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="col-md-5 offset-4">
            <div className="form-group">
              <label for="phoneNumber"> <label className="requiredResponse">* </label><strong> Organization Phone Number</strong></label>
              <input type="text" placeholder="000 000 0000 e.g." className="form-control" name="phoneNumber"value={organization.phoneNumber} onChange={onChange}></input>
            </div>
          </div>
        </div>

        {/*Contact Questions*/}
        <div className="row">

          <div className="col-md-3 offset-1">
            <br />
          Contact
        </div>
          <div className="col-md-5">
            <div className="form-group">
              <label for="email"> <label className="requiredResponse">* </label><strong> Organization Email</strong></label>
              <input type="email" placeholder="name@company.com" className="form-control" name="email"value={organization.email} onChange={onChange}></input>
            </div>
          </div>

          <div className="col-md-5 offset-4">
            <div className="form-group">
              <label for="address"> <label className="requiredResponse">* </label><strong> Address</strong></label>
              <input type="text" placeholder="123 Main St e.g." className="form-control" name="address"value={organization.address} onChange={onChange}></input>
            </div>
          </div>

          <div className="col-md-5 offset-4">
            <div className="form-group">
              <label for="country"> <label className="requiredResponse">* </label><strong> Country</strong></label>
              <select className="form-control" name="country"value={organization.country} onChange={onChange}>
                <option value="" disabled selected hidden>Select Country</option>
                <option value="United States">United States</option>
              </select>
            </div>
          </div>

          <div className="col-md-5 offset-4">
            <div className="form-group">
              <label for="state"> <label className="requiredResponse">* </label><strong> State</strong></label>
              <select className="form-control" name="state"value={organization.state} onChange={onChange}>
                <option value="" disabled selected hidden>Select State</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
            </div>
          </div>

          <div className="col-md-5 offset-4">
            <div className="form-group">
              <label for="city"> <label className="requiredResponse">* </label><strong> City</strong></label>
              <input type="text" placeholder="Enter City" className="form-control"name="city"value={organization.city} onChange={onChange}></input>
            </div>
          </div>

        </div>
        {/*Profile Questions*/}
        <div className="row">

          <div className="col-md-3 offset-1">
            <br />
          Profile
        </div>
          <div className="col-md-5">
            <div className="form-group">
              <label for="description"> <label className="requiredResponse">* </label><strong> Please Briefly Describe Organization</strong></label>
              <textarea class="form-control" placeholder="Brief Description" rows="3"name="description"value={organization.description} onChange={onChange}></textarea>
            </div>
          </div>

          <div className="col-md-5 offset-4">
            <div className="form-group">
              <label for="partnershipDescription"> <label className="requiredResponse">* </label><strong> Why Do You Want To Partner With FairPlay?</strong></label>
              <textarea class="form-control" placeholder="Brief Description" rows="3"name="partnershipDescription"value={organization.partnershipDescription} onChange={onChange}></textarea>
            </div>
          </div>

        </div>
        <hr />
        <div className="row">
          <div className="offset-9">
        <button className="btn btn-primary" type="submit">Submit</button>
        </div>
        </div>
      </form>
    </main>
  );
}
//For Zizo
export default ProgramDirector;
