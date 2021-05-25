import { Route, Switch, useRouteMatch } from "react-router-dom";

import ProgramDirectorForm from "./ProgramDirectorForm";
import ProgramDirectorsList from "./ProgramDirectorsList";

function ProgramDirectors() {
    const { path } = useRouteMatch();
    return (
        <Switch>
            <Route exact path={path}>
                <ProgramDirectorsList />
            </Route>
            <Route path={`${path}/new`}>
                <ProgramDirectorForm />
            </Route>
            <Route path={`${path}/:id/edit`}>
                <ProgramDirectorForm />
            </Route>
        </Switch>
    );
}

export default ProgramDirectors;
