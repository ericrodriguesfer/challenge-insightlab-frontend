import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import RegisterEvent from "../pages/RegisterEvent/RegisterEvent";
import ShowEvent from "../pages/ShowEvent/ShowEvent";
import HomeUser from "../pages/HomeUser/HomeUser";
import HomeAdmin from "../pages/HomeAdmin/HomeAdmin";
import ShowEventUser from "../pages/ShowEventUser/ShowEventUser";
import ShowEventAdmin from "../pages/ShowEventAdmin/ShowEventAdmin";
import UpdateEvent from "../pages/UpdateEvent/UpdateEvent";
import AddAssigment from "../pages/AddAssigment/AddAssigment";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/register" exact component={Register}></Route>
        <Route path="/register-event" exact component={RegisterEvent}></Route>
        <Route path="/show-event" exact component={ShowEvent}></Route>
        <Route path="/home-user" exact component={HomeUser}></Route>
        <Route path="/home-admin" exact component={HomeAdmin}></Route>
        <Route path="/show-event-user" exact component={ShowEventUser}></Route>
        <Route path="/add-assigment" exact component={AddAssigment}></Route>
        <Route
          path="/show-event-admin"
          exact
          component={ShowEventAdmin}
        ></Route>
        <Route path="/update-event" exact component={UpdateEvent}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
