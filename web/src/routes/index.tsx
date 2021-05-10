import { Route, Switch } from "react-router";
import Dashboard from "../pages/Dashboard";
import Detail from "../pages/Detail";
import Home from "../pages/Home";

export function Routes(): JSX.Element {
  return (
    <Switch>
      <Route path="/dashboard">
        <Dashboard />
      </Route>

      <Route path="/detail:volume">
        <Detail />
      </Route>

      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default Routes;
