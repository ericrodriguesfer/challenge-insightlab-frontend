import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/register" exact component={Register}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
