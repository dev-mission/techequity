import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Api from '../Api';

function SettingsList() {
    const [director_profile, setProgramDirector] = useState([]);

    useEffect(function () {
        Api.programDirectors.index().then(response => setProgramDirector(response.data));
    }, []);

    function onDelete(director_profile){
        if(window.confirm(`Are you sure you wish to delete your current settings?`)){
            //we will execute code to delete the section
            Api.director_profile.delete(director_profile.id).then(function(){
                /*Filtering the sections list, keeping every section
                 that does not match the one we are deleting*/
                const newProgramDirector = director_profile.filter(s => s.id !== director_profile.id);
                setProgramDirector(newProgramDirector);
            });
        }
    }

    return (
        <main className="container">
            <h1>SettingsList</h1>
            <Link className="btn btn-primary" to="/settings/update">New</Link>
            <ul>
                {director_profile.map(s => (
                    <li>
                        <p><Link to={`/settings/${s.id}/edit`}>{s.orgName}, {s.orgType}, {s.orgID}</Link></p>
                        <p><button onClick={() => onDelete(s)} type="button" className="btn btn-sm btn-danger">Delete</button></p>
                    </li>
                ))}
            </ul>
        </main>
    );
}
export default SettingsList;