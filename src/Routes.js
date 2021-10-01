import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Jokes from "./components/Jokes";
import Info from "./components/Info";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/jokes" exact component={() => <Jokes />} />
      <Route path="/info" component={() => <Info />} />
      <Route component={() => <Home />} />
    </Switch>
  );
};

export default Routes;
