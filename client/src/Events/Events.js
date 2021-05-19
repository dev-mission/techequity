import { Route, Switch, useRouteMatch } from "react-router-dom";

import EventsList from './EventsList';
import EventsForm from './EventsForm';

function Events() {
    const { path } = useRouteMatch();
    return (
        <Switch>
            <Route exact path={path}>
                <EventsList />
            </Route>

            <Route path={`${path}/new`}>
                <EventsForm />
            </Route>
            <Route path={`${path}/:id/edit`}>
                <EventsForm />
            </Route>
        </Switch>

    );
}

export default Events;