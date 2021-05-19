import { Route, Switch, useRouteMatch } from "react-router-dom";

import ProgramDirectorsList from './DirectorsList';
import ProgramDirectorSignUp from './DirectorsForm';

function ProgramDirectors() {
    const { path } = useRouteMatch();
    return (
        <Switch>
            <Route exact path={path}>
                <ProgramDirectorsList />
            </Route>

            <Route path={`${path}/new`}>
                <ProgramDirectorSignUp />
            </Route>
            <Route path={`${path}/:id/edit`}>
                <ProgramDirectorSignUp />
            </Route>
        </Switch>

    );
}

export default ProgramDirectors;