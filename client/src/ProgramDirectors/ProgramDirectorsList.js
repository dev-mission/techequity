import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Api from '../Api';

function ProgramDirectorsList() {
    const [programDirector, setProgramDirector] = useState([]);
    
    useEffect(function () {
        Api.programDirectors.index().then(response => setProgramDirector(response.data));
    }, []);

    function onDelete(event){
        if(window.confirm(`Are you sure you wish to delete ${event.programDirector}?`)){
            //we will execute code to delete the section
            Api.programDirectors.delete(event.id).then(function(){
                /*Filtering the sections list, keeping every section
                 that does not match the one we are deleting*/
                const newProgramDirector = programDirector.filter(s => s.id !== event.id);
                setProgramDirector(newProgramDirector);
            });
        }
    }

    return (
        <main className="container">
            <h1>ProgramDirector List</h1>
            <Link className="btn btn-primary" to="/programDirectors/new">New</Link>
            <ul>
                {programDirector.map(pd => (
                    <li>
                        <p><Link to={`/programDirectors/${pd.id}/edit`}>{pd.User.firstName} {pd.User.lastName} is a director for {pd.Organization.name}</Link></p>
                        <p><button onClick={() => onDelete(pd)} type="button" className="btn btn-sm btn-danger">Delete</button></p>
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default ProgramDirectorsList;
