import { useState, useEffect } from "react";
import { useHistory, useParams} from "react-router-dom";
import Api from "../Api";

function DonorsForm() {
    const {id} = useParams();
    const history = useHistory();
    const [users, setUsers] = useState([]);
    const [aDonor, setDonor] = useState({
        donorType: '',
        companyName: '',
        webLink: '',
        userRole: '',
        missionVision: '',
        heardAboutUs: ''
    });

    useEffect(function(){
        if(id){
            Api.donors.get(id).then((response) => setDonor(response.data));
    } 
}, []);
    useEffect(function () {
    Promise.all([Api.users.index()]).then((responses) => {
        setUsers(responses[0].data);
        if (id) {
            Api.donors.get(id).then((response) => setDonor(response.data));
        } else {
            const newDonor = {
                UserId: '',
            };
            if (responses[0].data.length > 0) {
                newDonor.UserId = responses[0].data[0].id;
            }
            setDonor(newDonor);
        }
    });
}, [id]);
    function onChange(donor) {
        const newDonor= {...aDonor};
        newDonor[donor.target.name] = donor.target.value;
        setDonor(newDonor);
    }

    async function onSubmit(donor) {
        donor.preventDefault();
        try {
            if(id){
            await Api.donors.update(id, aDonor);
            }else{
            await Api.donors.create(aDonor);
        }
            history.push('/donors');
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <main className="container">
            <h1>Donor Form (Profile Setup)</h1>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label className="form-label">Donor Type</label>
                    <input className="form-control" type="text" name="donorType" value={aDonor.donorType} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Company Name</label>
                    <input className="form-control" type="text" name="companyName" value={aDonor.companyName} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Web Link</label>
                    <input className="form-control" type="text" name="webLink" value={aDonor.webLink} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">User Role</label>
                    <input className="form-control" type="text" name="userRole" value={aDonor.userRole} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Mission Statement</label>
                    <input className="form-control" type="text" name="missionVision" value={aDonor.missionVision} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">How did you hear about us?</label>
                    <input className="form-control" type="text" name="heardAboutUs" value={aDonor.heardAboutUs} onChange={onChange} />
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
            <p>{JSON.stringify(aDonor)}</p>
        </main>
    );
}

export default DonorsForm;