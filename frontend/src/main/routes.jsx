import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import Dashboard from "../dashboard/dashboard";
import BillingCycle from "../billingCycle/billingCycle";

const Routes = props => {
  return (
    <div className='content-wrapper'>
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/billingCycles' component={BillingCycle} />
        <Redirect from='*' to='/' />
      </Switch>
    </div>
  );
}

export default Routes;
