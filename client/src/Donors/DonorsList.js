import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Api from '../Api';

function DonorsList() {
    const [anDonor, setDonor] = useState([]);

    useEffect(function () {
        Api.donors.index().then(response => setDonor(response.data));
    }, []);

    function onDelete(anDonor){
        if(window.confirm(`Are you sure you wish to delete ${anDonor.donorName}?`)){
            //we will execute code to delete the section
            Api.donors.delete(anDonor.id).then(function(){
                /*Filtering the sections list, keeping every section
                 that does not match the one we are deleting*/
                const newDonor = anDonor.filter(s => s.id !== anDonor.id);
                setDonor(newDonor);
            });
        }
    }

    return (
        <main className="container">
            <h1>Donors List</h1>
            <Link className="btn btn-primary" to="/donors/new">New</Link>
            <ul>
                {anDonor.map(s => (
                    <li>
                        <p><Link to={`/donors/${s.id}/edit`}>{s.donorName}, {s.donorType}, {s.webLink}, {s.heardAboutUs}, {s.missionVision}, {s.userRole}</Link></p>
                        <p><button onClick={() => onDelete(s)} type="button" className="btn btn-sm btn-danger">Delete</button></p>
                    </li>
                ))}
            </ul>
        </main>
    );
}
export default DonorsList;

