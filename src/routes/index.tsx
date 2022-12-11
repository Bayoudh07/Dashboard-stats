import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
    component: (
      <DefaultLayout>
        <Dashboard />
      </DefaultLayout>
    ),
  },
];

const RouterComponent = () => {
  return (
    <Router>
      <Routes>
        {routes.map((route: IRoute, index: number) => (
          <Route key={index} path={route.path} element={route.component} />
        ))}
      </Routes>
    </Router>
  );
};

export default RouterComponent;
