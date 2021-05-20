import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Api from "../Api";

function ProgramDirectorForm() {
    const { id } = useParams();
    const history = useHistory();
    const [organizations, setOrganizations] = useState([]);
    const [users, setUsers] = useState([]);
    const [programDirector, setProgramDirector] = useState({
        OrganizationId: '',
        UserId: '',
    });
    useEffect(function () {
        Promise.all([Api.organizations.index(), Api.users.index()]).then((responses) => {
            setOrganizations(responses[0].data);
            setUsers(responses[1].data);
            if (id) {
                Api.programDirectors.get(id).then((response) => setProgramDirector(response.data));
            } else {
                const newProgramDirector = {
                    OrganizationId: '',
                    UserId: '',
                };
                if (responses[0].data.length > 0) {
                    newProgramDirector.OrganizationId = responses[0].data[0].id;
                }
                if (responses[1].data.length > 0) {
                    newProgramDirector.UserId = responses[1].data[0].id;
                }
                setProgramDirector(newProgramDirector);
            }
        });
    }, [id]);

    function onChange(event) {
        const newProgramDirector = { ...programDirector };
        newProgramDirector[event.target.name] = event.target.value;
        setProgramDirector(newProgramDirector);
    }

    async function onSubmit(event) {
        event.preventDefault();
        try {
            if (id) {
                await Api.programDirectors.update(id, programDirector);
            } else {
                await Api.programDirectors.create(programDirector);
            }
            history.push('/programDirectors');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <main className="container">
            <h1>New Program Director</h1>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label className="from-label">OrganizationId</label>
                    <select className="form-control" name="OrganizationId" value={programDirector.OrganizationId} onChange={onChange}>
                        {organizations.map((o) => <option value={o.id}>{o.name}</option>)}
                    </select>
                </div>
                <div className="mb-3">
                    <label className="from-label">UserId</label>
                    <select className="form-control" name="UserId" value={programDirector.UserId} onChange={onChange}>
                        {users.map((u) => <option value={u.id}>{u.firstName} {u.lastName}</option>)}
                    </select>
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
            <p>{JSON.stringify(programDirector)}</p>
        </main>
    );
}
export default ProgramDirectorForm;
