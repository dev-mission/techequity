import { useState, useEffect } from "react";
import { useHistory, useParams} from "react-router-dom";
import Api from "../Api";

function EventsForm() {
    const {id} = useParams();
    const history = useHistory();
    const [anEvent, setEvent] = useState({
        eventName: '',
        eventType: '',
    });

    useEffect(function(){
        if(id){
            Api.events.get(id).then((response) => setEvent(response.data));
    } 
}, []);

    function onChange(event) {
        const newEvent= {...anEvent};
        newEvent[event.target.name] = event.target.value;
        setEvent(newEvent);
    }

    async function onSubmit(event) {
        event.preventDefault();
        try {
            if(id){
            await Api.events.update(id, anEvent);
            }else{
            await Api.events.create(anEvent);
        }
            history.push('/events');
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <main className="container">
            <h1>Event Creation Form</h1>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label className="form-label">Event Name</label>
                    <input className="form-control" type="text" name="eventName" value={anEvent.eventName} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Event Type</label>
                    <input className="form-control" type="text" name="eventType" value={anEvent.eventType} onChange={onChange} />
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
            <p>{JSON.stringify(anEvent)}</p>
        </main>
    );
}

export default EventsForm;