import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomeUser from "../pages/HomeUser/HomeUser";
import Login from "../pages/Login/Login";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomeUser}></Route>
        <Route path="/login" exact component={Login}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
