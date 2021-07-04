import { Route, Switch, useRouteMatch } from "react-router-dom";

//import NonProfitPartnerList from './NonProfitPartnerList';
import NonProfitPartnerForm from './NonProfitPartnerForm';

function NonProfitPartners() {
    const { path } = useRouteMatch();
    return (
        <Switch>
            <Route exact path={path}>
                <NonProfitPartnerList />
            </Route>
            <Route path={`${path}/new`}>
                <NonProfitPartnerForm />
            </Route>
            <Route path={`${path}/:id/edit`}>
                <NonProfitPartnerForm />
            </Route>
        </Switch>

    );
}

export default NonProfitPartners;