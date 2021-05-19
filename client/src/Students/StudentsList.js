import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Api from '../Api';

function StudentsList() {
    const [anStudent, setStudent] = useState([]);

    useEffect(function () {
        Api.students.index().then(response => setStudent(response.data));
    }, []);

    function onDelete(anStudent){
        if(window.confirm(`Are you sure you wish to delete ${anStudent.userRoll}?`)){
            //we will execute code to delete the section
            Api.students.delete(anStudent.id).then(function(){
                /*Filtering the sections list, keeping every section
                 that does not match the one we are deleting*/
                const newStudent = anStudent.filter(s => s.id !== anStudent.id);
                setStudent(newStudent);
            });
        }
    }

    return (
        <main className="container">
            <h1>Students List</h1>
            <Link className="btn btn-primary" to="/students/new">New</Link>
            <ul>
                {anStudent.map(s => (
                    <li>
                        <p><Link to={`/students/${s.id}/edit`}>{s.userRoll}, {s.userEdu},{s.confirm}</Link></p>
                        <p><button onClick={() => onDelete(s)} type="button" className="btn btn-sm btn-danger">Delete</button></p>
                    </li>
                ))}
            </ul>
        </main>
    );
}
export default StudentsList;

