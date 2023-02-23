import React from "react";
import { BrowserRouter, Route, IndexRoute, Redirect, Switch } from "react-router-dom";

import Dashboard from "../dashboard/dashboard";
import BillingCycle from "../billingCycle/billingCycle";

const Routes = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Dashboard} />
        <Route path='billingCycles' component={BillingCycle} />
        <Redirect from='*' to='/' />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
