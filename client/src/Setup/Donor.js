import { useAuthContext } from "../AuthContext";

//test imports
import classNames from 'classnames';
import { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { StatusCodes } from 'http-status-codes'
import Api from '../Api';
import UnexpectedError from '../UnexpectedError';
import ValidationError from '../ValidationError';
import '../Donor.scss';
//test imports
function Donor() {
  const { donor } = useAuthContext(); // taken out for donor already defined issue
  //test copy

  const authContext = useAuthContext();
  const history = useHistory();
  const [user, setUser] = useState('donor')
  const [role, setRole] = useState('donor');  // removed for now cause i think its only necessary when registering
  const [donorState, setDonorstate] = useState({
    firstName: `${user.firstName}`,
    donorType: '',
    userRole: '',
    OrganizationId: '',
    webLink: '',
    heardAboutUs: '',
    missionVision: '',
    UserId: ''
  });
  const [error, setError] = useState(null);

  const onChange = function (event) {
    const newDonor = { ...donor };
    newDonor[event.target.name] = event.target.value;
    setDonorstate(newDonor);
  };

  const onSubmit = async function (event) {
    event.preventDefault();
    setError(null);
    try {
      const response = await Api.auth.donor(donor); //watch out for errors if error set back to user
      authContext.setDonorstate(response.data);
      history.push(`/setup/${role}`, { flash: 'Your account has been created!' });
    } catch (error) {
      if (error.response?.status === StatusCodes.UNPROCESSABLE_ENTITY) {
        setError(new ValidationError(error.response.data));
      } else {
        setError(new UnexpectedError());
      }
    };
  }
  //test copy

  //undo marker 
  return (
    <main className="container">
      <h1 className="heading">Welcome, {donorState.firstName}! (Donor)</h1>
      <p className="description"> Let's finish setting up your donor profile.</p>
      <form className="form" onSubmit={onSubmit}>

        {/*    {error && error.message && (
          <div className="alert alert-danger">{error.message}</div>
        )}    */}

        <div className="row">
          <div className="col-md-3 offset-1">
            <p className="requiredResponse">* Indicates a required response</p>
          </div>
          {/*questions*/}
          <div>
            <div className="col-md-5 offset-4">
              <div className="form-group">
                <label for="donorType"> <label className="requiredResponse" >* </label><strong>donor type</strong></label>
                <input type="text" placeholder=":D" class={classNames('form-control', { 'is-invalid': error?.errorsFor?.('donorType') })} id="donorType" name="donorType" onChange={onChange} value={donorState.donorType} placeholder="Donor"></input>
                {error?.errorMessagesHTMLFor?.('donorType')}
              </div>
            </div>
            <div className="col-md-5 offset-4">
              <div className="form-group">
                <label for="userRole"> <label className="requiredResponse" >* </label><strong>user role</strong></label>
                <input type="text" class={classNames('form-control', { 'is-invalid': error?.errorsFor?.('userRole') })} id="userRole" name="userRole" onChange={onChange} value={donorState.userRole} placeholder="Role"></input>
                {error?.errorMessagesHTMLFor?.('userRole')}
              </div>
            </div>
            <div className="col-md-5 offset-4">
              <div className="form-group">
                <label for="webLink"> <label className="requiredResponse" >* </label><strong>web link</strong></label>
                <input type="text" class={classNames('form-control', { 'is-invalid': error?.errorsFor?.('webLink') })} id="webLink" name="webLink" onChange={onChange} value={donorState.webLink} placeholder="Link"></input>
                {error?.errorMessagesHTMLFor?.('webLink')}
              </div>
            </div>
            <div className="col-md-5 offset-4">
              <div className="form-group">
                <label for="heardAboutUs"> <label className="requiredResponse" >* </label><strong>How have you heard about us</strong></label>
                <input type="text" class={classNames('form-control', { 'is-invalid': error?.errorsFor?.('heardAboutUs') })} id="heardAboutUs" name="heardAboutUs" onChange={onChange} value={donorState.heardAboutUs} placeholder="heard aout us"></input>
                {error?.errorMessagesHTMLFor?.('heardAboutUs')}
              </div>
            </div>
            <div className="col-md-5 offset-4">
              <div className="form-group">
                <label for="MissionVision"> <label className="requiredResponse" >* </label><strong>Mission/Vision statement</strong></label>
                <input type="text" class={classNames('form-control', { 'is-invalid': error?.errorsFor?.('missionVision') })} id="missionVision" name="missionVision" onChange={onChange} value={donorState.missionVision} placeholder="statement"></input>
                {error?.errorMessagesHTMLFor?.('missionVision')}
              </div>
            </div>
          </div>


        </div>
        <div className="row">
          <div className="offset-9">
            <button className="btn btn-primary" type="submit">Submit</button>
          </div>
        </div>
      </form>
      <p>{JSON.stringify(donor)}</p>
    </main>
  );
}


export default Donor;
