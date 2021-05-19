import { Route, Switch, useRouteMatch } from "react-router-dom";

import DirectorsForm from './DirectorsForm';
import DirectorsList from "./DirectorsList";

function Directors() {
    const { path } = useRouteMatch();
    return (
        <Switch>
            <Route exact path={path}>
                <DirectorsList />
            </Route>

            <Route path={`${path}/new`}>
                <DirectorsForm />
            </Route>
            <Route path={`${path}/:id/edit`}>
                <DirectorsForm />
            </Route>
        </Switch>

    );
}

export default Directors;