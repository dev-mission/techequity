import { useAuthContext } from "../AuthContext";
import './ProgramDirector.scss';

import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Api from "../Api";
import OrganizationForm from "../Organizations/OrganizationForm";
import onChange from "../Organizations/OrganizationForm";

function ProgramDirector() {
  const { user } = useAuthContext();
  const { organization } = OrganizationForm();

  return (
    <main className="container">
      <h1 className="heading"><strong>Welcome, {user && user.firstName}!</strong></h1>
      <p className="description">Let's finish setting up your Program Director Profile.</p>
      <form className="form">
        
        <div className="row">
        <div className="col-md-3 offset-1">
        <p className="requiredResponse">* Indicates a required response</p>
          Admin</div>
        <div className="col-md-5">
        <div className="form-group">
          <label for="name"> <label className="requiredResponse">*</label><strong>Organization Name</strong></label>
          <input type="text" placeholder="Acme" className="form-control"></input>
        </div>
        </div>
        </div>

        <div> </div>
        <div> </div>
      </form>
    </main>
  );
}
//For Zizo
export default ProgramDirector;
