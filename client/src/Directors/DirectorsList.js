import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Api from '../Api';

function DirectorsList() {
    const [director, setDirector] = useState([]);

    useEffect(function () {
        Api.programDirectors.index().then(response => setDirector(response.data));
    }, []);

    function onDelete(event){
        if(window.confirm(`Are you sure you wish to delete ${event.organizationName}?`)){
            //we will execute code to delete the section
            Api.programDirectors.delete(event.id).then(function(){
                /*Filtering the sections list, keeping every section
                 that does not match the one we are deleting*/
                const newDirector = director.filter(s => s.id !== event.id);
                setDirector(newDirector);
            });
        }
    }

    return (
        <main className="container">
            <h1>Directors List</h1>
            <Link className="btn btn-primary" to="/directors/new">New</Link>
            <ul>
                {director.map(s => (
                    <li>
                        <p><Link to={`/directors/${s.id}/edit`}>{s.organizationName}, {s.organizationType}</Link></p>
                        <p><button onClick={() => onDelete(s)} type="button" className="btn btn-sm btn-danger">Delete</button></p>
                    </li>
                ))}
            </ul>
        </main>
    );
}
export default DirectorsList;