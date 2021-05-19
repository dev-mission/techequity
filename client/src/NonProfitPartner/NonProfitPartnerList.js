import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Api from '../Api';

function NonProfitPartnersList() {
    const [anNonProfitPartner, setNonProfitPartner] = useState([]);

    useEffect(function () {
        Api.nonprofitpartners.index().then(response => setNonProfitPartner(response.data));
    }, []);

    function onDelete(anNonProfitPartner){
        if(window.confirm(`Are you sure you wish to delete ${anNonProfitPartner.directorType}?`)){
            //we will execute code to delete the section
            Api.nonprofitpartners.delete(anNonProfitPartner.id).then(function(){
                /*Filtering the sections list, keeping every section
                 that does not match the one we are deleting*/
                const newNonProfitPartner = anNonProfitPartner.filter(s => s.id !== anNonProfitPartner.id);
                setNonProfitPartner(newNonProfitPartner);
            });
        }
    }

    return (
        <main className="container">
            <h1>NonProfitPartner List</h1>
            <Link className="btn btn-primary" to="/nonprofitpartners/new">New</Link>
            <ul>
                {anNonProfitPartner.map(s => (
                    <li>
                        <p><Link to={`/nonprofitpartners/${s.id}/edit`}>{s.directorType}, {s.userOrgRole}</Link></p>
                        <p><button onClick={() => onDelete(s)} type="button" className="btn btn-sm btn-danger">Delete</button></p>
                    </li>
                ))}
            </ul>
        </main>
    );
}
export default NonProfitPartnersList;