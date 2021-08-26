import React from "react";
import { Route, Switch } from "react-router-dom";

import { Top } from "./pages/Top";
import { Play } from "./pages/Play";
import { User } from "./pages/User";

export const Routes = () => (
  <React.Fragment>
    <Switch>
      <Route exact path="/" exact component={Top} />
      <Route path="/play/:pid" exact component={Play} />
      <Route path="/user" exact component={User} />
    </Switch>
  </React.Fragment>
);
