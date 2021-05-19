import { useState, useEffect } from "react";
import { useHistory, useParams} from "react-router-dom";
import Api from "../Api";

function DonorsForm() {
    const {id} = useParams();
    const history = useHistory();
    const [anDonor, setDonor] = useState({
        donorName: '',
        webLink: '',
        heardAboutUs: '',
        missionVision: '',
        donorType: '',
        userRole: ''
    });

    useEffect(function(){
        if(id){
            Api.donors.get(id).then((response) => setDonor(response.data));
    } 
}, []);

    function onChange(donor) {
        const newDonor= {...anDonor};
        newDonor[event.target.name] = event.target.value;
        setDonor(newDonor);
    }

    async function onSubmit(donor) {
        event.preventDefault();
        try {
            if(id){
            await Api.donors.update(id, anDonor);
            }else{
            await Api.donors.create(anDonor);
        }
            history.push('/donors');
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <main className="container">
            <h1>Donor Creation Form</h1>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label className="form-label">Donor Name</label>
                    <input className="form-control" type="text" name="donorName" value={anDonor.donorName} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Donor webLink</label>
                    <input className="form-control" type="text" name="webLink" value={anDonor.webLink} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">How you've heard about us</label>
                    <input className="form-control" type="text" name="heardAboutUs" value={anDonor.heardAboutUs} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Mission/Vision statement</label>
                    <input className="form-control" type="text" name="missionVision" value={anDonor.missionVision} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Donor type</label>
                    <input className="form-control" type="text" name="donorType" value={anDonor.donorType} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">user role</label>
                    <input className="form-control" type="text" name="userRole" value={anDonor.userRole} onChange={onChange} />
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
            <p>{JSON.stringify(anDonor)}</p>
        </main>
    );
}

export default DonorsForm;