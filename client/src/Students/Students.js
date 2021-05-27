import { Route, Switch, useRouteMatch } from "react-router-dom";

import StudentsList from './StudentsList';
import StudentForm from './StudentForm';
function Students() {
    const { path } = useRouteMatch();
    return (
        <Switch>
            <Route exact path={path}>
                <StudentsList />
            </Route>

            <Route path={`${path}/new`}>
                <StudentForm />
            </Route>
            <Route path={`${path}/:id/edit`}>
                <StudentsForm />
            </Route>
        </Switch>

    );
}

export default Students;