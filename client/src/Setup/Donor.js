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


  return (
    <main>
      
      <div>
        <div id="innerbox">

          
        <h1>Welcome, {donorState.firstName}! (Donor) <br></br> Let's finish setting up your donor profile.</h1>

          <form onSubmit={onSubmit}>
            {error && error.message && (
              <div className="alert alert-danger">{error.message}</div>
            )}
          </form>

          
            <div>
              <div>
                <label for="donorType"> <strong>donor type</strong></label>
                <input type="text" class={classNames('form-control', { 'is-invalid': error?.errorsFor?.('donorType') })} id="donorType" name="donorType" onChange={onChange} value={donorState.donorType} placeholder="Donor"></input>
                {error?.errorMessagesHTMLFor?.('donorType')}
              </div>
              <div>
                <label for="userRole"> <strong>user role</strong></label>
                <input type="text" class={classNames('form-control', { 'is-invalid': error?.errorsFor?.('userRole') })} id="userRole" name="userRole" onChange={onChange} value={donorState.userRole} placeholder="Role"></input>
                {error?.errorMessagesHTMLFor?.('userRole')}
              </div>
              <div>
                <label for="webLink"> <strong>web link</strong></label>
                <input type="text" class={classNames('form-control', { 'is-invalid': error?.errorsFor?.('webLink') })} id="webLink" name="webLink" onChange={onChange} value={donorState.webLink} placeholder="Link"></input>
                {error?.errorMessagesHTMLFor?.('webLink')}
              </div>
              <div>
                <label for="heardAboutUs"> <strong>How have you heard about us</strong></label>
                <input type="text" class={classNames('form-control', { 'is-invalid': error?.errorsFor?.('heardAboutUs') })} id="heardAboutUs" name="heardAboutUs" onChange={onChange} value={donorState.heardAboutUs} placeholder="heard aout us"></input>
                {error?.errorMessagesHTMLFor?.('heardAboutUs')}
              </div>
              <div>
                <label for="MissionVision"> <strong>Mission/Vision statement</strong></label>
                <input type="text" class={classNames('form-control', { 'is-invalid': error?.errorsFor?.('missionVision') })} id="missionVision" name="missionVision" onChange={onChange} value={donorState.missionVision} placeholder="statement"></input>
                {error?.errorMessagesHTMLFor?.('missionVision')}
              </div>
            </div>
          
        </div>
      </div>
    </main>
  );
}


export default Donor;