import { useState, useEffect } from "react";
import { useHistory, useParams} from "react-router-dom";
import Api from "../Api";

function DonorsForm() {
    const {id} = useParams();
    const history = useHistory();
    const [aDonor, setDonor] = useState({
        donorType: '',
        webLink: ''
    });

    useEffect(function(){
        if(id){
            Api.donors.get(id).then((response) => setDonor(response.data));
    } 
}, []);

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
                    <label className="form-label">Web Link</label>
                    <input className="form-control" type="text" name="webLink" value={aDonor.webLink} onChange={onChange} />
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
            <p>{JSON.stringify(aDonor)}</p>
        </main>
    );
}

export default DonorsForm;