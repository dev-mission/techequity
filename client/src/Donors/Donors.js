import { Route, Switch, useRouteMatch } from "react-router-dom";

import DonorsList from './DonorsList';
import DonorsForm from './DonorsForm';

function Donors() {
    const { path } = useRouteMatch();
    return (
        <Switch>
            <Route exact path={path}>
                <DonorsList />
            </Route>

            <Route path={`${path}/new`}>
                <DonorsForm />
            </Route>
            <Route path={`${path}/:id/edit`}>
                <DonorsForm />
            </Route>
        </Switch>

    );
}

export default Donors;