import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Api from '../Api';

function EventsList() {
    const [anEvent, setEvent] = useState([]);

    useEffect(function () {
        Api.events.index().then(response => setEvent(response.data));
    }, []);

    function onDelete(eventt){
        if(window.confirm(`Are you sure you wish to delete ${anEvent.name}?`)){
            //we will execute code to delete the section
            Api.events.delete(anEvent.id).then(function(){
                /*Filtering the sections list, keeping every section
                 that does not match the one we are deleting*/
                const newEvent = anEvent.filter(s => s.id !== anEvent.id);
                setEvent(newEvent);
            });
        }
    }

    return (
        <main className="container">
            <h1>Events List</h1>
            <Link className="btn btn-primary" to="/events/new">New</Link>
            <ul>
                {anEvent.map(s => (
                    <li>
                        <p><Link to={`/events/${s.id}/edit`}>{s.eventName}, {s.eventType}, {s.eventDate}</Link></p>
                        <p><button onClick={() => onDelete(s)} type="button" className="btn btn-sm btn-danger">Delete</button></p>
                    </li>
                ))}
            </ul>
        </main>
    );
}
export default EventsList;