import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Api from '../Api';

function OrganizationsList() {
    const [organization, setOrganization] = useState([]);

    useEffect(function () {
        Api.organizations.index().then(response => setOrganization(response.data));
    }, []);

    function onDelete(event){
        if(window.confirm(`Are you sure you wish to delete ${event.organizationName}?`)){
            //we will execute code to delete the section
            Api.organizations.delete(event.id).then(function(){
                /*Filtering the sections list, keeping every section
                 that does not match the one we are deleting*/
                const newOrganization = organization.filter(s => s.id !== event.id);
                setOrganization(newOrganization);
            });
        }
    }

    return (
        <main className="container">
            <h1>Organization List</h1>
            <Link className="btn btn-primary" to="/organizations/new">New</Link>
            <ul>
                {organization.map(s => (
                    <li>
                        <p><Link to={`/organizations/${s.id}/edit`}>{s.name}, {s.type}</Link></p>
                        <p><button onClick={() => onDelete(s)} type="button" className="btn btn-sm btn-danger">Delete</button></p>
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default OrganizationsList;
