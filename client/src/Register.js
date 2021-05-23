import { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import classNames from 'classnames';
import { StatusCodes } from 'http-status-codes'

import Api from './Api';
import UnexpectedError from './UnexpectedError';
import ValidationError from './ValidationError';

import './Register.scss';
import { useAuthContext } from './AuthContext';
import logo from './images/Logo-2.png'
function Register() {
  const authContext = useAuthContext();
  const history = useHistory();

  const [role, setRole] = useState('donor')
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: ''
  });
  const [error, setError] = useState(null);

  const onChange = function (event) {
    const newUser = { ...user };
    newUser[event.target.name] = event.target.value;
    setUser(newUser);
  };

  const onSubmit = async function (event) {
    event.preventDefault();
    setError(null);
    try {
      const response = await Api.auth.register(user);
      authContext.setUser(response.data);
      history.push(`/setup/${role}`, { flash: 'Your account has been created!' });
    } catch (error) {
      if (error.response?.status === StatusCodes.UNPROCESSABLE_ENTITY) {
        setError(new ValidationError(error.response.data));
      } else {
        setError(new UnexpectedError());
      }
    };
  }

  return (
    <main className="myContainer">
      <div className="row">
        <div className="col-md-6" id="leftRegister">
          <h1 className="text-center">Welcome to FairPlay!</h1>
          <p className="text-center" >To get started, we are going to need a few details about you.</p>
          <img src={logo} className="logo" alt="FairPlay Logo"></img>
          <p className="text-center">Already have an account? <Link to="/login" className="links"> Sign In Here</Link></p>
        </div>
        <div className="col-md-6" id="rightRegister">
          <div className="container">
            <form onSubmit={onSubmit}>
              {error && error.message && (
                <div className="alert alert-danger">{error.message}</div>
              )}
              <div className="form-group">
                <label for="RoleSelect"><strong>Role</strong></label>
                <select className="form-control" value={role} onChange={(event) => setRole(event.target.value)}>
                  <option value="non-profit">Non-Profit Partner</option>
                  <option value="program-director">Program Director</option>
                  <option value="donor">Donor</option>
                </select>
              </div>
              <div className="form-group">
                <div className="row">
                  <div className="col-md-6">
                    <label for="firstName"> <strong>First Name</strong></label>
                    <input type="text" class={classNames('form-control', { 'is-invalid': error?.errorsFor?.('firstName') })} id="firstName" name="firstName" onChange={onChange} value={user.firstName} placeholder="First"></input>
                    {error?.errorMessagesHTMLFor?.('firstName')}
                  </div>
                  <div className="col-md-6">
                    <label for="lastName"> <strong>Last Name</strong></label>
                    <input type="text" class={classNames('form-control', { 'is-invalid': error?.errorsFor?.('lastName') })} id="lastName" name="lastName" onChange={onChange} value={user.lastName} placeholder="Last"></input>
                    {error?.errorMessagesHTMLFor?.('lastName')}
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label for="exampleFormControlInput1"><strong>Email Address</strong></label>
                <input type="email" class={classNames('form-control', { 'is-invalid': error?.errorsFor?.('email') })} id="email" name="email" onChange={onChange} value={user.email} placeholder="name@example.com"></input>
                {error?.errorMessagesHTMLFor?.('email')}
              </div>
              <div className="form-group">
                <label for="exampleFormControlInput1"><strong>Password</strong></label>
                <input type="password" class={classNames('form-control', { 'is-invalid': error?.errorsFor?.('password') })} id="password" name="password" onChange={onChange} value={user.password} placeholder="password1234"></input>
                {error?.errorMessagesHTMLFor?.('password')}
              </div>
              <div className="form-group">
                <div className="form-check">
                  <input class="form-check-input" type="checkbox" id="gridCheck1"></input>
                  <label class="form-check-label" for="gridCheck1">
                    I agree to the <strong>terms</strong> and <strong>conditions</strong>
                  </label>
                </div>
              </div>
              <div className="row">
                <button className="btn btn-primary" type="submit" id="continue">Continue</button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </main>
  );
}

export default Register;
