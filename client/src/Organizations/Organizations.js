import { Route, Switch, useRouteMatch } from "react-router-dom";

import OrganizationForm from "./OrganizationForm";
import OrganizationsList from "./OrganizationsList";

function Organizations() {
    const { path } = useRouteMatch();
    return (
        <Switch>
            <Route exact path={path}>
                <OrganizationsList />
            </Route>
            <Route path={`${path}/new`}>
                <OrganizationForm />
            </Route>
            <Route path={`${path}/:id/edit`}>
                <OrganizationForm />
            </Route>
        </Switch>
    );
}

export default Organizations;
