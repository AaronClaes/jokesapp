import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Jokes from "./components/Jokes";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={() => <Home />} />
      <Route path="/jokes" exact component={() => <Jokes />} />
    </Switch>
  );
};

export default Routes;
