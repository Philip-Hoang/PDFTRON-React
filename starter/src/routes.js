import { lazy } from "react";
// import LandingPage from "./Components/LandingPage/LandingPage"
const routes = [
  {
    path: "/",
    exact: true,
    roles: true,
    component: lazy(() => import("./Components/LandingPage/LandingPage")),
  },
  {
    path: "/layout",
    exact: true,
    roles: true,
    component: lazy(() => import("./Components/Layout/Layout")),
  },
];
export default routes;
