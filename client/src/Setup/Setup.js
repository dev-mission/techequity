import {useRouteMatch, Route, Switch} from 'react-router-dom';

import Donor from './Donor';
import NonProfit from './NonProfit';
import ProgramDirector from './ProgramDirector';
import Submitted from './Submitted';

function Setup() {
  const {path, url} = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/donor`}>
        <Donor />
      </Route>
      <Route path={`${path}/non-profit`}>
        <NonProfit />
      </Route>
      <Route path={`${path}/program-director`}>
        <ProgramDirector />
      </Route>
      <Route path={`${path}/submitted`}>
        <Submitted />
      </Route>

    </Switch>
  );
}

export default Setup;
