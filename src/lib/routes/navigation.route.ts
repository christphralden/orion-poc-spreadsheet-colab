import React from "react";

const Login = React.lazy(() => import("@pages/login"));
const Work = React.lazy(() => import("@pages/work"));

const NavigationRoutes = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/work",
    component: Work,
  },
];

export { NavigationRoutes };
