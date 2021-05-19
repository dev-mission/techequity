import { Route, Switch, useRouteMatch } from "react-router-dom";

import SettingsList from './SettingsList';
import SettingsForm from './SettingsForm';

function Settings() {
    const { path } = useRouteMatch();
    return (
        <Switch>
            <Route exact path={path}>
                <SettingsList />
            </Route>

            <Route path={`${path}/new`}>
                <SettingsForm />
            </Route>

            <Route path={`${path}/:id/edit`}>
                <SettingsForm />
            </Route>
        </Switch>
    );
}

export default Settings