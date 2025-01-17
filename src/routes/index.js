import React from "react";
import { Switch } from "react-router-dom";

import MyRoute from "./MyRoute";
import Login from "../pages/Login/index"
import Page404 from "../pages/Page404";

export default function AppRoutes() {

  return (
       <Switch>
            <MyRoute exact path="/" component={Login}  isClosed/>
            <MyRoute path="*" component={Page404} />
        </Switch>
  );
}
