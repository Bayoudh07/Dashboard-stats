import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DefaultLayout from "../Layout";
import Dashboard from "../Pages/Dashbaord";

export interface IRoute {
  path: string;
  component: any;
  exact?: boolean;
}

import { EPath } from "./ePaths.enum";

const routes: IRoute[] = [
  {
    path: EPath.DASHBOARD,
    component: () => (
      <DefaultLayout>
        <Dashboard />
      </DefaultLayout>
    ),
    exact: true,
  },
];

const RouterComponent = () => {
  return (
    <Router>
      <div>
        <Switch>
          {routes.map((route: IRoute, index: number) => (
            <Route
              key={index}
              path={route.path}
              component={route.component}
              exact={route.exact}
            />
          ))}
        </Switch>
      </div>
    </Router>
  );
};

export default RouterComponent;
