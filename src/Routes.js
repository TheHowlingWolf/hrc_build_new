import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./core/Home";
import Registration from "./user/Registration";
import Member from "./core/Member";
import IndiMembers from "./core/IndiMembers";
import Activity from "./core/Activity";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/members" component={Member} />
        <Route exact path="/members/:memberId" component={IndiMembers} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/activity" component={Activity} />
      </Switch>
    </Router>
  );
};

export default Routes;
