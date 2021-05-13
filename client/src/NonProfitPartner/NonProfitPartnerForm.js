import { useState, useEffect } from "react";
import { useHistory, useParams} from "react-router-dom";
import Api from "../Api";

function NonProfitPartnersForm() {
    const {id} = useParams();
    const history = useHistory();
    const [anNonProfitPartner, setNonProfitPartner] = useState({
        directorType: '',
        userOrgRole: '',
    });

    useEffect(function(){
        if(id){
            Api.nonprofitpartner.get(id).then((response) => setNonProfitPartner(response.data));
    } 
}, []);

    function onChange(nonprofitpartner) {
        const newNonProfitPartner= {...anNonProfitPartner};
        newNonProfitPartner[nonprofitpartner.target.name] = nonprofitpartner.target.value;
        setNonProfitPartner(newNonProfitPartner);
    }

    async function onSubmit(nonprofitpartner) {
        nonprofitpartner.preventDefault();
        try {
            if(id){
            await Api.nonprofitpartners.update(id, anNonProfitPartner);
            }else{
            await Api.nonprofitpartners.create(anNonProfitPartner);
        }
            history.push('/nonprofitpartners');
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <main className="container">
            <h1>Non-profit-partner Creation Form</h1>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label className="form-label">Non-profit-partner Name</label>
                    <input className="form-control" type="text" name="directorType" value={anNonProfitPartner.directorType} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Event Type</label>
                    <input className="form-control" type="text" name="userOrgRole" value={anNonProfitPartner.userOrgRole} onChange={onChange} />
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
            <p>{JSON.stringify(anNonProfitPartner)}</p>
        </main>
    );
}

export default NonProfitPartnersForm;