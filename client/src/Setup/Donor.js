import { useAuthContext } from "../AuthContext";

//test imports
import classNames from 'classnames';
import { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { StatusCodes } from 'http-status-codes'
import Api from '../Api';
import UnexpectedError from '../UnexpectedError';
import ValidationError from '../ValidationError';
import '../Register.scss';
//test imports
function Donor() {
  const { donor } = useAuthContext(); // taken out for donor already defined issue
  //test copy
 
  const authContext = useAuthContext();  
  const history = useHistory();
  const [role, setRole] = useState('donor');  // removed for now cause i think its only necessary when registering
   const [donorstate, setDonorstate] = useState({
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
      <h1>Welcome, {donor && donor.firstName}! (Donor)</h1>

      <form onSubmit={onSubmit}>
        {error && error.message && (
          <div className="alert alert-danger">{error.message}</div>
        )}
      </form>
      <div className="col-md-6">
        <label for="donorType"> <strong>donor type</strong></label>
        <input type="text" class={classNames('form-control', { 'is-invalid': error?.errorsFor?.('donortype') })} id="donortype" name="donortype" onChange={onChange} value={donor.donorType} placeholder="donortype"></input>
        {error?.errorMessagesHTMLFor?.('donorType')}
      </div>

    </main>
  );
}
export default Donor;
