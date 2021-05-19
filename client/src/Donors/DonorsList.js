import { useAuthContext } from "../AuthContext";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Api from '../Api';

function DonorsList() {
    const { user } = useAuthContext();
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
            <h1>Donor Setup (Setting up your Profile)</h1>
            <p>Hello {user && user.firstName}, thanks for joining FairPlay in our mission to bridge the digital divide. As a Donor, we will need some information from you. Please fill the following form. </p>

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