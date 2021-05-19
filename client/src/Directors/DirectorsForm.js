import './Directors.scss';
import { useState, useEffect } from "react";
import { useHistory, useParams} from "react-router-dom";
import Api from "../Api";

function ProgramDirectorSignUp( ) { 
    const {id} = useParams();
    const history = useHistory();
    const [director, setDirector] = useState({
        organizationName: '',
        organizationType: '',
        organizationPhoneNumber: 0,
        organizationAddress: '',
        organizationCountry: '',
        organizationState: '',
        organizationCity: '',
        organizationDescription: '',
        partnershipDescription: ''
    });
        useEffect(function(){
            if(id){
                Api.programDirectors.get(id).then((response) => setDirector(response.data));
            } 
        }, []);

        function onChange(event) {
            const newDirector= {...director};
            newDirector[event.target.name] = event.target.value;
            setDirector(newDirector);
        }
        async function onSubmit(event) {
            event.preventDefault();
            try {
                if(id){
                await Api.programDirectors.update(id, director);
                }else{
                await Api.programDirectors.create(director);
            }
                history.push('/directors');
            } catch (error) {
                console.log(error);
            }
        }

return (
    <main className="container">
     <h1> Welcome (get user name), let's finish setting up your Program Director Account</h1>
    <form onSubmit = {onSubmit}>
    <label className="form-label">Organization Name</label>
    <input className="form-control" type="text" name="organizationName" value={director.organizationName} onChange={onChange} />
    <label className="form-label">Organization Type</label>
    <input className="form-control" type="text" name="organizationType" value={director.organizationType} onChange={onChange} />
    <label className="form-label">Organization Phone Number</label>
    <input className="form-control" type="text" name="organizationPhoneNumber" value={director.organizationPhoneNumber} onChange={onChange} />
    <label className="form-label">Organization Address</label>
    <input className="form-control" type="text" name="organizationAddress" value={director.organizationAddress} onChange={onChange} />
    <label className="form-label">Organization Country</label>
    <input className="form-control" type="text" name="organizationCountry" value={director.organizationCountry} onChange={onChange} />
    <label className="form-label">Organization State</label>
    <input className="form-control" type="text" name="organizationState" value={director.organizationState} onChange={onChange} />
    <label className="form-label">Organization City</label>
    <input className="form-control" type="text" name="organizationCity" value={director.organizationCity} onChange={onChange} />
    <label className="form-label">Organization Description</label>
    <input className="form-control" type="text" name="organizationDescription" value={director.organizationDescription} onChange={onChange} />
    <label className="form-label">Partnership Description</label>
    <input className="form-control" type="text" name="partnershipDescription" value={director.partnershipDescription} onChange={onChange} />
    <button className="btn btn-primary" type="submit">Submit</button>
    </form>
    <p>{JSON.stringify(director)}</p>
    </main>
                
    );  
    
}export default ProgramDirectorSignUp;