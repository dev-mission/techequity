import { useState, useEffect } from "react";
import { useHistory, useParams} from "react-router-dom";
import Api from "../Api";

function StudentsForm() {
    const {id} = useParams();
    const history = useHistory();
    const [anStudent, setStudent] = useState({
        userRoll: '',
        userEdu: '',
        confirm: '',
    });

    useEffect(function(){
        if(id){
            Api.students.get(id).then((response) => setStudent(response.data));
    } 
}, []);

    function onChange(student) {
        const newStudent= {...anStudent};
        newStudent[student.target.name] = student.target.value;
        setStudent(newStudent);
    }

    async function onSubmit(student) {
        student.preventDefault();
        try {
            if(id){
            await Api.students.update(id, anStudent);
            }else{
            await Api.students.create(anStudent);
        }
            history.push('/students');
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <main className="container">
            <h1>Student Creation Form</h1>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label className="form-label">Student Roll</label>
                    <input className="form-control" type="text" name="studentRoll" value={anStudent.userRoll} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Student Education</label>
                    <input className="form-control" type="text" name="eventEducation" value={anStudent.userEdu} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Student Comfirmed?</label>
                    <input className="form-control" type="text" name="studentConfirm" value={anStudent.confirm} onChange={onChange} />
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
            <p>{JSON.stringify(anStudent)}</p>
        </main>
    );
}

export default StudentsForm;