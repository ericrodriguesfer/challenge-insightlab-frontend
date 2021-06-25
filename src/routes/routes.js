import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomeUser from "../pages/homeUser";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomeUser}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
