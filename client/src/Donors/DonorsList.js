import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Api from '../Api';

function DonorsList() {
    const [aDonor, setDonor] = useState([]);

    useEffect(function () {
        Api.donors.index().then(response => setDonor(response.data));
    }, []);

    function onDelete(donor){
        if(window.confirm(`Are you sure you wish to delete ${donor.donorType}?`)){
            //we will execute code to delete the section
            Api.donors.delete(donor.id).then(function(){
                /*Filtering the sections list, keeping every section
                 that does not match the one we are deleting*/
                const newDonor = aDonor.filter(s => s.id !== donor.id);
                setDonor(newDonor);
            });
        }
    }

    return (
        <main className="container">
            <h1>Donors List (Profiles List)</h1>
            {/*
            Not needed 
            <Link className="btn btn-primary" to="/donors/new">New</Link>
            */}
            <ul>
                {aDonor.map(s => (
                    <li>
                        <p><Link to={`/donors/${s.id}/edit`}>{s.donorType}, {s.webLink}, {s.createdAt}</Link></p>
                        <p><button onClick={() => onDelete(s)} type="button" className="btn btn-sm btn-danger">Delete</button></p>
                    </li>
                ))}
            </ul>
        </main>
    );
}
export default DonorsList;