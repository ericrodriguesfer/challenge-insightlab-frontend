import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ShowEvent from "../pages/ShowEvent/ShowEvent";
import HomeUser from "../pages/HomeUser/HomeUser";
import ShowEventUser from "../pages/ShowEventUser/ShowEventUser";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/register" exact component={Register}></Route>
        <Route path="/show-event" exact component={ShowEvent}></Route>
        <Route path="/home-user" exact component={HomeUser}></Route>
        <Route path="/show-event-user" exact component={ShowEventUser}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
