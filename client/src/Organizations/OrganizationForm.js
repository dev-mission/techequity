import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Api from "../Api";

function OrganizationForm() {
    const { id } = useParams();
    const history = useHistory();
    const [organization, setDirector] = useState({
        name: '',
        type: '',
        phoneNumber: '',
        address: '',
        country: '',
        state: '',
        city: '',
        description: '',
        partnershipDescription: ''
    });
    useEffect(function () {
        if (id) {
            Api.organizations.get(id).then((response) => setDirector(response.data));
        }
    }, []);

    function onChange(event) {
        const newOrganization = { ...organization };
        newOrganization[event.target.name] = event.target.value;
        setDirector(newOrganization);
    }
    async function onSubmit(event) {
        event.preventDefault();
        try {
            if (id) {
                await Api.organizations.update(id, organization);
            } else {
                await Api.organizations.create(organization);
            }
            history.push('/organizations');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <main className="container">
            <h1> Welcome (get user name), let's finish setting up your Program Director Account</h1>
            <form onSubmit={onSubmit}>
                <label className="form-label">Organization Name</label>
                <input className="form-control" type="text" name="name" value={organization.name} onChange={onChange} />
                <label className="form-label">Organization Type</label>
                <input className="form-control" type="text" name="type" value={organization.type} onChange={onChange} />
                <label className="form-label">Organization Phone Number</label>
                <input className="form-control" type="text" name="phoneNumber" value={organization.phoneNumber} onChange={onChange} />
                <label className="form-label">Organization Address</label>
                <input className="form-control" type="text" name="address" value={organization.address} onChange={onChange} />
                <label className="form-label">Organization Country</label>
                <input className="form-control" type="text" name="country" value={organization.country} onChange={onChange} />
                <label className="form-label">Organization State</label>
                <input className="form-control" type="text" name="state" value={organization.state} onChange={onChange} />
                <label className="form-label">Organization City</label>
                <input className="form-control" type="text" name="city" value={organization.city} onChange={onChange} />
                <label className="form-label">Organization Description</label>
                <input className="form-control" type="text" name="description" value={organization.description} onChange={onChange} />
                <label className="form-label">Partnership Description</label>
                <input className="form-control" type="text" name="partnershipDescription" value={organization.partnershipDescription} onChange={onChange} />
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
            <p>{JSON.stringify(organization)}</p>
        </main>
    );
}
export default OrganizationForm;
